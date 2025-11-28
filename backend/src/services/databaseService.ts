import { supabase } from '../config/supabase';

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

  console.log('✅ Registro criado no banco:', result.id_arquivo);
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
  // 1. Verificar se a música já existe no catálogo (por ISRC se disponível)
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
      // Inserir nova música no catálogo
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
    // Sem ISRC, inserir sempre como nova música
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

  // 2. Criar detecção musical (relacionamento com timestamps)
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

  // Processar cada música individualmente para evitar duplicatas no catálogo
  for (const musica of musicas) {
    try {
      const resultado = await insertMusicaIdentificada(musica);
      resultados.push(resultado);
    } catch (error) {
      console.error('Erro ao inserir música:', error);
      // Continuar com as outras músicas mesmo se uma falhar
    }
  }

  return resultados;
}

// Função para buscar músicas de um arquivo
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

// Interface para tabela deteccao_musical
export interface DeteccaoMusicalData {
  id_deteccao: number;
  id_arquivo_midia: number;
  id_musica: number;
  data_geracao: string;
}

// Interface para tabela relatorio_edl
export interface RelatorioEDLData {
  id_relatorio: number;
  id_arquivo_midia: number;
  data_geracao: string;
}

// Criar detecção musical (relacionamento entre arquivo e músicas detectadas)
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

// Atualizar status de validação de uma detecção musical
// Criar relatório EDL com contadores de validação
export async function insertRelatorioEDL(
  idArquivoMidia: number,
  totalMusicas: number,
  musicasAprovadas: number,
  musicasRejeitadas: number
): Promise<number> {
  console.log(`[DB] Inserindo relatório EDL para arquivo ${idArquivoMidia}...`);
  console.log(`[DB] Total: ${totalMusicas}, Aprovadas: ${musicasAprovadas}, Rejeitadas: ${musicasRejeitadas}`);
  
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

  console.log(`[DB] Relatório EDL criado com sucesso! ID: ${result.id_relatorio}`);
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

// Buscar relatório EDL por ID do arquivo
export async function getRelatorioEDL(idArquivo: number) {
  console.log(`[DB] Buscando relatório EDL para arquivo ${idArquivo}...`);
  
  const { data, error } = await supabase
    .from('relatorio_edl')
    .select('*')
    .eq('id_arquivo_midia', idArquivo)
    .order('data_criacao', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error(`[DB] Erro ao buscar relatório EDL:`, error);
    return null;
  }

  console.log(`[DB] Relatório EDL encontrado:`, data);
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

  // Buscar detecções com dados das músicas (JOIN)
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

  console.log(`📊 Total de detecções encontradas: ${deteccoes?.length || 0}`);
  if (deteccoes && deteccoes.length > 0) {
    console.log('🎵 Primeira detecção:', JSON.stringify(deteccoes[0], null, 2));
  }

  // Transformar dados para formato mais legível
  const musicas = (deteccoes || []).map((d: any) => ({
    id_deteccao: d.id_deteccao,
    timestamp_inicio_seg: d.timestamp_inicio_seg,
    timestamp_fim_seg: d.timestamp_fim_seg,
    ...d.musica
  }));

  console.log(`✅ Retornando ${musicas.length} músicas para o frontend`);

  return {
    arquivo,
    musicas
  };
}