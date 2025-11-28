import { FastifyReply, FastifyRequest } from 'fastify';
import { saveFile } from '../services/fileService';
import { bufferToTempFile, convertMxfToWav, splitWav, concatWavs, clearTmp } from '../services/audioService';
import { identifyAudioByFile, AUDD_CONFIG } from '../services/auddService';
import { enqueue } from '../services/queueService';
import { updateArquivoStatus, insertMultiplasMusicasIdentificadas, MusicaIdentificadaData } from '../services/databaseService';

export async function buscaAudDHandler(request: FastifyRequest, reply: FastifyReply) {
  console.log('📥 Requisição recebida em /buscaAudD');

  let inputPath: string = '';
  let idArquivoBanco: number | undefined = undefined;

  const contentType = (request.headers['content-type'] || '').toString();
  
  if (contentType.includes('multipart/form-data')) {
    const file = await (request as any).file();
    if (!file) return reply.status(400).send({ error: 'Nenhum arquivo multipart recebido' });
    
    console.log('📤 Fazendo upload para Supabase Storage...');
    const fileInfo = await saveFile(file);
    
    // Salvar buffer em arquivo temporário para processamento
    inputPath = await bufferToTempFile(fileInfo.fileBuffer, fileInfo.fileName);
    idArquivoBanco = fileInfo.idArquivoBanco;
    
    console.log('✅ Arquivo preparado para processamento');
    if (idArquivoBanco) {
      console.log(`📋 ID do banco: ${idArquivoBanco}`);
    }
    
  } else {
    return reply.status(400).send({ error: 'Content-Type não suportado. Use multipart/form-data' });
  }

  try {
    // Atualizar status para "Em Processamento" se houver registro no banco
    if (idArquivoBanco) {
      try {
        await updateArquivoStatus(idArquivoBanco, 'Em Processamento');
        console.log('✅ Status atualizado para "Em Processamento" no banco');
      } catch (err) {
        console.log('⚠️ Erro ao atualizar status no banco: ' + (err instanceof Error ? err.message : String(err)));
      }
    }

    console.log('Starting convertMxfToWav for ' + inputPath);
    const wavPath = await convertMxfToWav(inputPath, 'converted.wav');
    console.log('Converted to wav: ' + wavPath);

    const SEG_SECONDS = 20;
    console.log(`Starting splitWav for ${wavPath} with segmentSeconds=${SEG_SECONDS}`);
    const segments = await splitWav(wavPath, SEG_SECONDS);
    console.log('Split into ' + segments.length + ' segments');

    const results: Array<{ segment: string; index: number; auddResponse: any }> = [];
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      console.log('Enqueuing audd identify for segment ' + seg);
      const promise = enqueue(async () => {
        try {
          console.log('Calling audd for ' + seg);
          const res = await identifyAudioByFile(seg);
          console.log('Audd returned for ' + seg);
          return res;
        } catch (err: any) {
          console.log('Audd error for ' + seg + ': ' + (err && err.message ? err.message : String(err)));
          return { status: 'error', error: { message: err && err.message ? err.message : String(err) } };
        }
      });
      const auddRes = await promise;
      results.push({ segment: seg, index: i, auddResponse: auddRes });
    }

    console.log('Starting concatWavs');
    const combined = await concatWavs(segments, 'combined.wav');
    console.log('Concat finished: ' + combined);

    // construir cronograma
    const found: Array<any> = [];
    function timecodeToSeconds(tc: string) {
      const parts = tc.split(':').map(Number).reverse();
      let s = 0;
      if (parts[0]) s += parts[0];
      if (parts[1]) s += parts[1] * 60;
      if (parts[2]) s += parts[2] * 3600;
      return s;
    }

    for (const r of results) {
      const idx = r.index;
      const segStartSec = idx * SEG_SECONDS;
      const audd = r.auddResponse;
      if (audd && audd.result) {
        const res = audd.result;
        const entries: Array<{ start: number; end: number; meta: any }> = [];
        if (typeof res.timecode === 'string' && res.timecode.includes('-')) {
          const [a, b] = res.timecode.split('-').map((s: string) => s.trim());
          const start = timecodeToSeconds(a) + segStartSec;
          const end = timecodeToSeconds(b) + segStartSec;
          entries.push({ start, end, meta: res });
        }
        if (Array.isArray(res.timecodes)) {
          for (const tc of res.timecodes) {
            if (tc.start != null && tc.end != null) {
              const start = Number(tc.start) + segStartSec;
              const end = Number(tc.end) + segStartSec;
              entries.push({ start, end, meta: tc });
            } else if (typeof tc === 'string' && tc.includes('-')) {
              const [a, b] = tc.split('-').map((s: string) => s.trim());
              const start = timecodeToSeconds(a) + segStartSec;
              const end = timecodeToSeconds(b) + segStartSec;
              entries.push({ start, end, meta: tc });
            }
          }
        }
        if (entries.length === 0 && (res.title || res.artist || res.album)) {
          entries.push({ start: segStartSec, end: segStartSec + (parseInt(process.env.AUDD_SEGMENT_SECONDS || '10', 10)), meta: res });
        }
        for (const e of entries) {
          found.push({ index: idx, segment: r.segment, startSec: e.start, endSec: e.end, metadata: e.meta });
        }
      }
      if (audd && audd.status === 'success' && !audd.result) {
        found.push({ index: idx, segment: r.segment, found: false });
      }
    }

    const segmentosTrad = results.map((r) => ({
      segmento: r.segment,
      indice: r.index,
      respostaAudd: { status: r.auddResponse?.status ?? 'error', resultado: r.auddResponse?.result ?? null },
    }));

    const cronograma: Array<any> = [];
    for (let i = 0; i < segments.length; i++) {
      const segPath = segments[i];
      const segStart = i * SEG_SECONDS;
      const segEnd = segStart + SEG_SECONDS;
      const entries = found.filter((f) => f && f.index === i && f.metadata).map((f) => f.metadata);
      if (entries.length > 0) {
        cronograma.push({ indice: i, segmento: segPath, encontrado: true, inicioSegundos: Math.max(0, segStart), fimSegundos: segEnd, metadados: entries });
      } else {
        cronograma.push({ indice: i, segmento: segPath, encontrado: false, inicioSegundos: segStart, fimSegundos: segEnd });
      }
    }

    // Consolidar músicas encontradas
    const musicasEncontradas: Array<{ inicioSegundos: number; fimSegundos: number; titulo?: string; artista?: string; isrc?: string; dataLancamento?: string; fonte?: any }> = [];

    function extractIsrc(meta: any): string | undefined {
      if (!meta) return undefined;
      
      // Tentar múltiplas fontes de ISRC
      const possibleIsrc = 
        meta.isrc || meta.ISRC || meta.external_ids?.isrc ||
        (meta.spotify && (meta.spotify.isrc || meta.spotify.external_ids?.isrc)) ||
        (meta.deezer && meta.deezer.isrc) ||
        (meta.deezer && meta.deezer.data && meta.deezer.data[0] && meta.deezer.data[0].isrc) ||
        (meta.apple_music && meta.apple_music.isrc) ||
        (meta.result && meta.result.isrc) ||
        undefined;
      
      // Validar formato ISRC (exemplo: USUM71703861)
      if (possibleIsrc && typeof possibleIsrc === 'string' && possibleIsrc.length >= 12) {
        console.log(`✅ ISRC encontrado: ${possibleIsrc}`);
        return possibleIsrc;
      }
      
      return undefined;
    }

    function extractMusicLink(meta: any): string | undefined {
      if (!meta) return undefined;
      return (
        meta.song_link ||
        (meta.deezer && meta.deezer.link) ||
        (meta.result && meta.result.song_link) ||
        meta.url || meta.link ||
        undefined
      );
    }

    function extractReleaseDate(meta: any): string | undefined {
      if (!meta) return undefined;
      return (
        meta.release_date || meta.releaseDate || meta.year ||
        (meta.deezer && meta.deezer.release_date) ||
        (meta.result && meta.result.release_date) ||
        undefined
      );
    }

    for (const f of found) {
      if (!f || !f.metadata) continue;
      const meta = f.metadata;
      const titulo = meta.title || meta.name || meta.song || (meta.result && meta.result.title) || meta.track || undefined;
      const artista = meta.artist || meta.artists || meta.performer || (meta.result && meta.result.artist) || undefined;
      const inicioSec = typeof f.startSec === 'number' ? f.startSec : f.start || 0;
      const fimSec = typeof f.endSec === 'number' ? f.endSec : f.end || (inicioSec + SEG_SECONDS);
      const isrc = extractIsrc(meta);
      const dataLanc = extractReleaseDate(meta);
      musicasEncontradas.push({ inicioSegundos: inicioSec, fimSegundos: fimSec, titulo, artista, isrc, dataLancamento: dataLanc, fonte: meta });
    }

    // Função para converter segundos em formato MM:SS
    function secondsToTimecode(seconds: number): string {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // Ordenar por tempo de início e consolidar músicas contíguas/sobrepostas
    musicasEncontradas.sort((a, b) => a.inicioSegundos - b.inicioSegundos);
    
    const dedup: typeof musicasEncontradas = [];
    for (const m of musicasEncontradas) {
      const last = dedup[dedup.length - 1];
      if (!last) {
        dedup.push(m);
        continue;
      }
      
      // Consolidar se a música atual começa dentro ou logo após a anterior (gap de até 2 segundos)
      const gap = m.inicioSegundos - last.fimSegundos;
      const sameMusic = (
        (m.titulo && last.titulo && m.titulo.toLowerCase() === last.titulo.toLowerCase()) ||
        (m.isrc && last.isrc && m.isrc === last.isrc)
      );
      
      if (gap <= 2 && sameMusic) {
        // Consolidar: expandir o fim para cobrir a música inteira
        last.fimSegundos = Math.max(last.fimSegundos, m.fimSegundos);
        console.log(`🔗 Consolidando "${m.titulo}" - expandido até ${last.fimSegundos}s`);
        
        // Atualizar metadados se estiverem faltando
        if (!last.titulo && m.titulo) last.titulo = m.titulo;
        if (!last.artista && m.artista) last.artista = m.artista;
        if (!last.isrc && m.isrc) last.isrc = m.isrc;
        if (!last.dataLancamento && m.dataLancamento) last.dataLancamento = m.dataLancamento;
        if (!last.fonte && m.fonte) last.fonte = m.fonte;
      } else {
        // Nova música
        dedup.push(m);
      }
    }
    
    console.log(`📊 Total de músicas após consolidação: ${dedup.length}`);

    const respostaTraduzida = {
      arquivo: idArquivoBanco ? { id: idArquivoBanco } : undefined,
      caminhoCombinado: combined,
      quantidadeSegmentos: segments.length,
      segundosPorSegmento: SEG_SECONDS,
      quantidadeMusicasEncontradas: dedup.length,
      musicas: dedup.map((m) => {
        const link = extractMusicLink(m.fonte);
        const duracaoSegundos = m.fimSegundos - m.inicioSegundos;
        const timecodeInicio = secondsToTimecode(m.inicioSegundos);
        const timecodeFim = secondsToTimecode(m.fimSegundos);
        
        console.log(`🎵 ${m.titulo || 'Sem título'} - ${timecodeInicio} até ${timecodeFim} (${duracaoSegundos}s)`);
        
        return {
          inicioSegundos: m.inicioSegundos,
          fimSegundos: m.fimSegundos,
          duracaoSegundos: duracaoSegundos,
          timecodeInicio: timecodeInicio,
          timecodeFim: timecodeFim,
          titulo: m.titulo,
          artista: m.artista,
          isrc: m.isrc,
          dataLancamento: m.dataLancamento,
          link: link
        };
      }),
      resultados: segmentosTrad,
      cronograma: cronograma,
      configAudd: { params: { retorno: AUDD_CONFIG?.params?.return ?? '' } },
    };

    // Salvar músicas identificadas no banco e atualizar status para "Finalizado"
    if (idArquivoBanco) {
      try {
        // Preparar dados das músicas para inserção (seguindo schema do banco)
        const musicasParaSalvar: MusicaIdentificadaData[] = dedup.map((m, index) => {
          const meta = m.fonte || {};
          const musicaData = {
            id_arquivo_midia: idArquivoBanco!,
            titulo: m.titulo,
            artista: m.artista,
            album: meta.album || undefined,
            gravadora: meta.label || meta.gravadora || undefined,
            efeito_sonoro: false, // Pode ser melhorado com detecção futura
            genero: meta.genre || undefined,
            isrc: m.isrc,
            timestamp_inicio_seg: m.inicioSegundos,
            timestamp_fim_seg: m.fimSegundos
          };
          
          console.log(`🎵 Música ${index + 1}: "${musicaData.titulo}" - ${musicaData.artista} | ISRC: ${musicaData.isrc || 'N/A'}`);
          return musicaData;
        });

        const duracaoTotal = segments.length * SEG_SECONDS;

        // Inserir todas as músicas de uma vez (se houver)
        if (musicasParaSalvar.length > 0) {
          const resultados = await insertMultiplasMusicasIdentificadas(musicasParaSalvar);
          console.log(`✅ ${resultados.length} músicas salvas no catálogo + detecções criadas`);
          console.log(`⏳ Aguardando validação do usuário. Status: "Não Finalizado"`);
        } else {
          console.log(`⚠️ Nenhuma música encontrada.`);
        }

        // Manter status como "Não Finalizado" até validação do usuário
        await updateArquivoStatus(idArquivoBanco, 'Não Finalizado', duracaoTotal);
        console.log(`📋 Status: "Não Finalizado" - Aguardando validação do usuário. Duração: ${duracaoTotal}s`);
      } catch (err) {
        console.log('⚠️ Erro ao salvar músicas/atualizar status no banco: ' + (err instanceof Error ? err.message : String(err)));
      }
    }

    return reply.send(respostaTraduzida);
  } catch (err: any) {
    console.log('❌ Erro no processamento: ' + (err?.message || String(err)));
    
    // Atualizar status para "Erro" se houver registro no banco
    if (idArquivoBanco) {
      try {
        await updateArquivoStatus(idArquivoBanco, 'Erro');
        console.log('✅ Status atualizado para "Erro" no banco');
      } catch (updateErr) {
        console.log('⚠️ Erro ao atualizar status de erro no banco: ' + (updateErr instanceof Error ? updateErr.message : String(updateErr)));
      }
    }
    
    return reply.status(500).send({ error: err?.message || String(err) });
  }
}

export default { buscaAudDHandler };
