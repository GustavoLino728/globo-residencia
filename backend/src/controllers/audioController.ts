import { FastifyReply, FastifyRequest } from 'fastify';
import * as fs from 'fs';
import * as path from 'path';
import { saveFile } from '../services/fileService';
import { saveBase64ToFile, convertMxfToWav, splitWav, concatWavs, clearTmp } from '../services/audioService';
import { identifyAudioByFile, AUDD_CONFIG } from '../services/auddService';
import { enqueue } from '../services/queueService';

export async function buscaAudDHandler(request: FastifyRequest, reply: FastifyReply) {
  const LOG_DIR = path.join(process.cwd(), 'tmp_audio');
  const LOG_FILE = path.join(LOG_DIR, 'process.log');
  const appendLog = (m: string) => {
    try {
      if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
      fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${m}\n`);
    } catch (e) {
      // ignore
    }
  };
  appendLog('Received /buscaAudD request');

  // DECLARAR inputPath NO ESCOPO EXTERNO
  let inputPath: string = '';

  // Este endpoint aceita multipart/form-data com `file`, raw binary ou JSON base64
  const contentType = (request.headers['content-type'] || '').toString();
  
  if (contentType.includes('multipart/form-data')) {
    const file = await (request as any).file();
    if (!file) return reply.status(400).send({ error: 'Nenhum arquivo multipart recebido' });
    appendLog('Saving multipart upload to disk');
    
    // MUDANÇA AQUI: usar fileInfo e extrair localPath
    const fileInfo = await saveFile(file);
    inputPath = fileInfo.localPath;  // ATRIBUIR À VARIÁVEL EXTERNA
    appendLog('Saved upload to ' + inputPath);
    
  } else if (contentType.includes('application/octet-stream') || contentType.startsWith('audio/') || contentType.startsWith('video/')) {
    const buf = request.body as Buffer;
    if (!buf || !Buffer.isBuffer(buf) || buf.length === 0) {
      return reply.status(400).send({ error: 'Empty binary body' });
    }
    appendLog('Saving raw binary body to disk');
    const filename = `upload-${Date.now()}.mxf`;
    const filePath = path.join(process.cwd(), 'uploads', filename);
    fs.writeFileSync(filePath, buf);
    inputPath = filePath;  // ATRIBUIR À VARIÁVEL EXTERNA
    appendLog('Saved raw upload to ' + inputPath);
    
  } else {
    const body = request.body as any;
    if (!body || !body.data) {
      return reply.status(400).send({ error: 'Missing data (base64) in body' });
    }
    appendLog('Saving base64 upload to disk');
    inputPath = await saveBase64ToFile(body.data, body.filename || 'input.mxf');  // ATRIBUIR À VARIÁVEL EXTERNA
    appendLog('Saved base64 upload to ' + inputPath);
  }

  try {
    appendLog('Starting convertMxfToWav for ' + inputPath);
    const wavPath = await convertMxfToWav(inputPath, 'converted.wav');
    appendLog('Converted to wav: ' + wavPath);

    const SEG_SECONDS = 20;
    appendLog(`Starting splitWav for ${wavPath} with segmentSeconds=${SEG_SECONDS}`);
    const segments = await splitWav(wavPath, SEG_SECONDS);
    appendLog('Split into ' + segments.length + ' segments');

    const results: Array<{ segment: string; index: number; auddResponse: any }> = [];
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      appendLog('Enqueuing audd identify for segment ' + seg);
      const promise = enqueue(async () => {
        try {
          appendLog('Calling audd for ' + seg);
          const res = await identifyAudioByFile(seg);
          appendLog('Audd returned for ' + seg);
          return res;
        } catch (err: any) {
          appendLog('Audd error for ' + seg + ': ' + (err && err.message ? err.message : String(err)));
          return { status: 'error', error: { message: err && err.message ? err.message : String(err) } };
        }
      });
      const auddRes = await promise;
      results.push({ segment: seg, index: i, auddResponse: auddRes });
    }

    appendLog('Starting concatWavs');
    const combined = await concatWavs(segments, 'combined.wav');
    appendLog('Concat finished: ' + combined);

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
      return (
        meta.isrc || meta.ISRC ||
        (meta.deezer && meta.deezer.isrc) ||
        (meta.deezer && meta.deezer.data && meta.deezer.data[0] && meta.deezer.data[0].isrc) ||
        (meta.result && meta.result.isrc) ||
        undefined
      );
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

    // remover duplicatas simples e ordenar por tempo de início
    musicasEncontradas.sort((a, b) => a.inicioSegundos - b.inicioSegundos);
    const dedup: typeof musicasEncontradas = [];
    for (const m of musicasEncontradas) {
      const last = dedup[dedup.length - 1];
      if (!last) {
        dedup.push(m);
        continue;
      }
      if (m.inicioSegundos <= last.fimSegundos + 1) {
        last.fimSegundos = Math.max(last.fimSegundos, m.fimSegundos);
        if (!last.titulo && m.titulo) last.titulo = m.titulo;
        if (!last.artista && m.artista) last.artista = m.artista;
        if (!last.isrc && m.isrc) last.isrc = m.isrc;
        if (!last.dataLancamento && m.dataLancamento) last.dataLancamento = m.dataLancamento;
      } else {
        dedup.push(m);
      }
    }

    const respostaTraduzida = {
      caminhoCombinado: combined,
      quantidadeSegmentos: segments.length,
      segundosPorSegmento: SEG_SECONDS,
      quantidadeMusicasEncontradas: dedup.length,
      musicas: dedup.map((m) => {
        const link = extractMusicLink(m.fonte);
        return {
          inicioSegundos: m.inicioSegundos,
          fimSegundos: m.fimSegundos,
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

    return reply.send(respostaTraduzida);
  } catch (err: any) {
    return reply.status(500).send({ error: err?.message || String(err) });
  }
}

export default { buscaAudDHandler };
