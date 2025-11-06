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
  const { data: usuarioData, error: usuarioError } = await supabase
    .from('usuario')
    .select('id_usuario')
    .eq('auth_id', data.auth_id)
    .single();

  if (usuarioError || !usuarioData) {
    throw new Error('Usuário não encontrado na tabela usuario');
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