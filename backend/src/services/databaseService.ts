import { supabase } from '../config/database';

export interface ArquivoMidiaData {
  nome_original_arquivo: string;
  caminho_storage: string;
  tamanho_bytes: number;
  formato: string;
  duracao_segundos?: number;
}

export async function insertArquivoMidia(data: ArquivoMidiaData): Promise<number> {
  const { data: result, error } = await supabase
    .from('arquivo_midia')
    .insert({
      nome_original_arquivo: data.nome_original_arquivo,
      caminho_storage: data.caminho_storage,
      tamanho_bytes: data.tamanho_bytes,
      formato: data.formato,
      duracao_segundos: data.duracao_segundos,
      status: 'Não Finalizado'
    })
    .select('id_arquivo')
    .single();

  if (error) {
    throw new Error(`Erro ao inserir registro no banco: ${error.message}`);
  }

  return result.id_arquivo;
}

export async function updateArquivoStatus(
  idArquivo: number, 
  status: 'Não Finalizado' | 'Em Processamento' | 'Finalizado' | 'Erro',
  duracaoSegundos?: number
): Promise<void> {
  const updateData: any = { status };
  
  if (duracaoSegundos !== undefined) {
    updateData.duracao_segundos = duracaoSegundos;
  }

  const { error } = await supabase
    .from('arquivo_midia')
    .update(updateData)
    .eq('id_arquivo', idArquivo);

  if (error) {
    // If the enum value was rejected (invalid input), try common variants (underscores/no-spaces/uppercase)
    const msg = (error && (error.message || '')).toString();
    if (msg.includes('invalid input value for enum') || msg.includes('invalid input value')) {
      const candidates = [
        // replace spaces with underscore
        (status as string).replace(/\s+/g, '_'),
        // remove spaces
        (status as string).replace(/\s+/g, ''),
        // uppercase with underscores
        (status as string).toUpperCase().replace(/\s+/g, '_')
      ];

      for (const candidate of candidates) {
        const { error: err2 } = await supabase
          .from('arquivo_midia')
          .update({ status: candidate })
          .eq('id_arquivo', idArquivo);
        if (!err2) return;
      }
    }

    throw new Error(`Erro ao atualizar status do arquivo: ${error.message}`);
  }
}

export interface MusicaIdentificadaData {
  id_arquivo_midia: number;
  titulo?: string;
  artista?: string;
  album?: string;
  gravadora?: string;
  efeito_sonoro?: boolean;
  genero?: string;
  isrc?: string;
  timestamp_inicio_seg: number;
  timestamp_fim_seg: number;
}

export async function insertMusicaIdentificada(data: MusicaIdentificadaData): Promise<{ idMusica: number; idDeteccao: number }> {
  let idMusica: number;
  
  if (data.isrc) {
    const { data: musicaExistente } = await supabase
      .from('musica')
      .select('id_musica')
      .eq('isrc', data.isrc)
      .single();
    
    if (musicaExistente) {
      idMusica = musicaExistente.id_musica;
    } else {
      const { data: novaMusica, error: errorMusica } = await supabase
        .from('musica')
        .insert({
          titulo: data.titulo,
          artista: data.artista,
          album: data.album,
          gravadora: data.gravadora,
          efeito_sonoro: data.efeito_sonoro || false,
          genero: data.genero,
          isrc: data.isrc
        })
        .select('id_musica')
        .single();

      if (errorMusica) {
        throw new Error(`Erro ao inserir música no catálogo: ${errorMusica.message}`);
      }
      idMusica = novaMusica.id_musica;
    }
  } else {
    const { data: novaMusica, error: errorMusica } = await supabase
      .from('musica')
      .insert({
        titulo: data.titulo,
        artista: data.artista,
        album: data.album,
        gravadora: data.gravadora,
        efeito_sonoro: data.efeito_sonoro || false,
        genero: data.genero,
        isrc: data.isrc
      })
      .select('id_musica')
      .single();

    if (errorMusica) {
      throw new Error(`Erro ao inserir música no catálogo: ${errorMusica.message}`);
    }
    idMusica = novaMusica.id_musica;
  }

  const { data: deteccao, error: errorDeteccao } = await supabase
    .from('deteccao_musical')
    .insert({
      id_arquivo_midia: data.id_arquivo_midia,
      id_musica: idMusica,
      timestamp_inicio_seg: data.timestamp_inicio_seg,
      timestamp_fim_seg: data.timestamp_fim_seg
    })
    .select('id_deteccao')
    .single();

  if (errorDeteccao) {
    throw new Error(`Erro ao criar detecção musical: ${errorDeteccao.message}`);
  }

  return { idMusica, idDeteccao: deteccao.id_deteccao };
}

export async function insertMultiplasMusicasIdentificadas(
  musicas: MusicaIdentificadaData[]
): Promise<Array<{ idMusica: number; idDeteccao: number }>> {
  if (musicas.length === 0) return [];

  const resultados: Array<{ idMusica: number; idDeteccao: number }> = [];

  for (const musica of musicas) {
    try {
      const resultado = await insertMusicaIdentificada(musica);
      resultados.push(resultado);
    } catch (error) {
      console.error('Erro ao inserir música:', error);
    }
  }

  return resultados;
}

export async function getMusicasPorArquivo(idArquivo: number) {
  const { data, error } = await supabase
    .from('musica')
    .select('*')
    .eq('id_arquivo_midia', idArquivo)
    .order('timestamp_inicio_seg', { ascending: true });

  if (error) {
    throw new Error(`Erro ao buscar músicas: ${error.message}`);
  }

  return data || [];
}

export interface DeteccaoMusicalData {
  id_deteccao: number;
  id_arquivo_midia: number;
  id_musica: number;
  data_geracao: string;
}

export interface RelatorioEDLData {
  id_relatorio: number;
  id_arquivo_midia: number;
  data_geracao: string;
}

export async function insertDeteccaoMusical(
  idArquivoMidia: number,
  idMusica: number
): Promise<number> {
  const { data: result, error } = await supabase
    .from('deteccao_musical')
    .insert({
      id_arquivo_midia: idArquivoMidia,
      id_musica: idMusica
    })
    .select('id_deteccao')
    .single();

  if (error) {
    throw new Error(`Erro ao criar detecção musical: ${error.message}`);
  }

  return result.id_deteccao;
}

export async function insertRelatorioEDL(
  idArquivoMidia: number,
  totalMusicas: number,
  musicasAprovadas: number,
  musicasRejeitadas: number
): Promise<number> {
  const { data: result, error } = await supabase
    .from('relatorio_edl')
    .insert({
      id_arquivo_midia: idArquivoMidia,
      total_musicas: totalMusicas,
      musicas_aprovadas: musicasAprovadas,
      musicas_rejeitadas: musicasRejeitadas
    })
    .select('id_relatorio')
    .single();

  if (error) {
    console.error(`[DB] Erro ao inserir relatório EDL:`, error);
    throw new Error(`Erro ao criar relatório EDL: ${error.message}`);
  }

  return result.id_relatorio;
}

export async function getArquivosPorStatus(status: string) {
  const { data, error } = await supabase
    .from('arquivo_midia')
    .select('*')
    .eq('status', status)
    .order('data_upload', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar arquivos: ${error.message}`);
  }

  return data || [];
}

export async function getRelatorioEDL(idArquivo: number) {
  const { data, error } = await supabase
    .from('relatorio_edl')
    .select('*')
    .eq('id_arquivo_midia', idArquivo)
    .order('data_geracao', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error(`[DB] Erro ao buscar relatório EDL:`, error);
    return null;
  }

  return data;
}

export async function getArquivoComMusicas(idArquivo: number) {
  console.log(`📥 Buscando arquivo ID: ${idArquivo}`);
  
  const { data: arquivo, error: arquivoError } = await supabase
    .from('arquivo_midia')
    .select('*')
    .eq('id_arquivo', idArquivo)
    .single();

  if (arquivoError) {
    console.error('❌ Erro ao buscar arquivo:', arquivoError);
    throw new Error(`Erro ao buscar arquivo: ${arquivoError.message}`);
  }

  console.log('✅ Arquivo encontrado:', arquivo);

  const { data: deteccoes, error: deteccoesError } = await supabase
    .from('deteccao_musical')
    .select(`
      id_deteccao,
      timestamp_inicio_seg,
      timestamp_fim_seg,
      musica:id_musica (
        id_musica,
        titulo,
        artista,
        album,
        gravadora,
        isrc,
        genero,
        efeito_sonoro
      )
    `)
    .eq('id_arquivo_midia', idArquivo)
    .order('timestamp_inicio_seg', { ascending: true });

  if (deteccoesError) {
    console.error('❌ Erro ao buscar detecções musicais:', deteccoesError);
    throw new Error(`Erro ao buscar músicas: ${deteccoesError.message}`);
  }



  const musicas = (deteccoes || []).map((d: any) => ({
    id_deteccao: d.id_deteccao,
    timestamp_inicio_seg: d.timestamp_inicio_seg,
    timestamp_fim_seg: d.timestamp_fim_seg,
    ...d.musica
  }));

  return {
    arquivo,
    musicas
  };
}

export async function getAllArquivos() {
  const { data: arquivos, error } = await supabase
    .from('arquivo_midia')
    .select('*')
    .order('data_upload', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar arquivos: ${error.message}`);
  }

  return arquivos || [];
}

export async function getRelatorioEDLById(idRelatorio: number) {
  const { data: relatorio, error } = await supabase
    .from('relatorio_edl')
    .select('*')
    .eq('id_relatorio', idRelatorio)
    .single();
  
  if (error || !relatorio) {
    throw new Error('Relatório EDL não encontrado');
  }
  
  return relatorio;
}

export async function getArquivosFinalizados() {
  const { data: arquivos, error: arquivosError } = await supabase
    .from('arquivo_midia')
    .select('*')
    .eq('status', 'Finalizado')
    .order('data_upload', { ascending: false });

  if (arquivosError) {
    throw new Error(`Erro ao buscar arquivos: ${arquivosError.message}`);
  }

  console.log(`[DB] Total de arquivos finalizados: ${arquivos?.length || 0}`);

  const arquivosComRelatorio = await Promise.all(
    (arquivos || []).map(async (arquivo: any) => {
      console.log(`[DB] Buscando relatório para arquivo ${arquivo.id_arquivo}...`);
      
      const { data: relatorios, error: relatorioError } = await supabase
        .from('relatorio_edl')
        .select('*')
        .eq('id_arquivo_midia', arquivo.id_arquivo)
        .order('data_geracao', { ascending: false })
        .limit(1);

      console.log(`[DB] Resultado da query:`, { 
        arquivo_id: arquivo.id_arquivo,
        relatorios,
        error: relatorioError 
      });

      const relatorio = relatorios && relatorios.length > 0 ? relatorios[0] : null;

      return {
        ...arquivo,
        id_relatorio: relatorio?.id_relatorio || null
      };
    })
  );

  console.log(`[DB] Arquivos com relatório processados:`, arquivosComRelatorio.map(a => ({
    id: a.id_arquivo,
    nome: a.nome_original_arquivo,
    id_relatorio: a.id_relatorio
  })));

  return arquivosComRelatorio;
}

export async function getAllMusicas() {
  const { data: musicas, error } = await supabase
    .from('musica')
    .select('*')
    .order('criado_em', { ascending: false });

  if (error) {
    throw new Error(`Erro ao buscar músicas: ${error.message}`);
  }
  
  return musicas || [];
}

export async function getArquivoById(idArquivo: number) {
  const { data: arquivo, error } = await supabase
    .from('arquivo_midia')
    .select('status')
    .eq('id_arquivo', idArquivo)
    .single();

  if (error || !arquivo) {
    throw new Error('Arquivo não encontrado');
  }

  return arquivo;
}

export async function finalizarArquivo(idArquivo: number) {
  const { error } = await supabase
    .from('arquivo_midia')
    .update({ status: 'Finalizado' })
    .eq('id_arquivo', idArquivo);

  if (error) {
    throw new Error(`Erro ao finalizar arquivo: ${error.message}`);
  }
}
