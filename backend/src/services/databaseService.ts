import { supabase } from '../config/supabase';

export interface ArquivoMidiaData {
  auth_id: string;
  nome_original_arquivo: string;
  caminho_storage: string;
  tamanho_bytes: number;
  formato: string;
  duracao_segundos?: number;
}

export async function insertArquivoMidia(data: ArquivoMidiaData): Promise<number> {
  // Buscar usuário pelo auth_id
  let { data: usuarioData, error: usuarioError } = await supabase
    .from('usuario')
    .select('id_usuario')
    .eq('auth_id', data.auth_id)
    .single();

  // Se usuário não existe, criar automaticamente (útil para desenvolvimento)
  if (usuarioError || !usuarioData) {
    console.log(`⚠️ Usuário com auth_id '${data.auth_id}' não encontrado. Criando automaticamente...`);
    
    const isDevUser = data.auth_id === '8f03973e-3b82-4a3a-9504-caa08e053e2d' || data.auth_id === 'dev-user-id';
    
    const { data: novoUsuario, error: erroInsercao } = await supabase
      .from('usuario')
      .insert({
        nome: isDevUser ? 'Dev User' : 'Usuário Automático',
        email: isDevUser ? 'dev@localhost' : `${data.auth_id}@system.local`,
        auth_id: data.auth_id
      })
      .select('id_usuario')
      .single();

    if (erroInsercao || !novoUsuario) {
      throw new Error(`Erro ao criar usuário automaticamente: ${erroInsercao?.message}`);
    }

    usuarioData = novoUsuario;
    console.log(`✅ Usuário criado com id_usuario: ${usuarioData.id_usuario}`);
  }

  const { data: result, error } = await supabase
    .from('arquivo_midia')
    .insert({
      id_usuario_upload: usuarioData.id_usuario,
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
  id_usuario_gerador?: number;
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
      timestamp_fim_seg: data.timestamp_fim_seg,
      id_usuario_gerador: data.id_usuario_gerador
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
  id_usuario_gerador: number;
  data_geracao: string;
}

// Interface para tabela relatorio_edl
export interface RelatorioEDLData {
  id_relatorio: number;
  id_arquivo_midia: number;
  id_usuario_gerador: number;
  data_geracao: string;
}

// Criar detecção musical (relacionamento entre arquivo e músicas detectadas)
export async function insertDeteccaoMusical(
  idArquivoMidia: number,
  idMusica: number,
  idUsuarioGerador: number
): Promise<number> {
  const { data: result, error } = await supabase
    .from('deteccao_musical')
    .insert({
      id_arquivo_midia: idArquivoMidia,
      id_musica: idMusica,
      id_usuario_gerador: idUsuarioGerador
    })
    .select('id_deteccao')
    .single();

  if (error) {
    throw new Error(`Erro ao criar detecção musical: ${error.message}`);
  }

  return result.id_deteccao;
}

// Criar relatório EDL
export async function insertRelatorioEDL(
  idArquivoMidia: number,
  idUsuarioGerador: number
): Promise<number> {
  const { data: result, error } = await supabase
    .from('relatorio_edl')
    .insert({
      id_arquivo_midia: idArquivoMidia,
      id_usuario_gerador: idUsuarioGerador
    })
    .select('id_relatorio')
    .single();

  if (error) {
    throw new Error(`Erro ao criar relatório EDL: ${error.message}`);
  }

  return result.id_relatorio;
}

export async function getArquivosPorStatus(status: string, userId?: string) {
  let query = supabase
    .from('arquivo_midia')
    .select('*')
    .eq('status', status)
    .order('data_upload', { ascending: false });

  // Se userId for fornecido, filtrar por usuário
  if (userId) {
    // Buscar id_usuario a partir do auth_id
    const { data: usuarioData } = await supabase
      .from('usuario')
      .select('id_usuario')
      .eq('auth_id', userId)
      .single();
    
    if (usuarioData) {
      query = query.eq('id_usuario_upload', usuarioData.id_usuario);
    }
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`Erro ao buscar arquivos: ${error.message}`);
  }

  return data || [];
}

export async function getArquivoComMusicas(idArquivo: number) {
  const { data: arquivo, error: arquivoError } = await supabase
    .from('arquivo_midia')
    .select('*')
    .eq('id_arquivo', idArquivo)
    .single();

  if (arquivoError) {
    throw new Error(`Erro ao buscar arquivo: ${arquivoError.message}`);
  }

  // Buscar detecções com dados das músicas (JOIN)
  const { data: deteccoes, error: deteccoesError } = await supabase
    .from('deteccao_musical')
    .select(`
      id_deteccao,
      timestamp_inicio_seg,
      timestamp_fim_seg,
      data_geracao,
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
    throw new Error(`Erro ao buscar músicas: ${deteccoesError.message}`);
  }

  // Transformar dados para formato mais legível
  const musicas = (deteccoes || []).map((d: any) => ({
    id_deteccao: d.id_deteccao,
    timestamp_inicio_seg: d.timestamp_inicio_seg,
    timestamp_fim_seg: d.timestamp_fim_seg,
    data_geracao: d.data_geracao,
    ...d.musica
  }));

  return {
    arquivo,
    musicas
  };
}