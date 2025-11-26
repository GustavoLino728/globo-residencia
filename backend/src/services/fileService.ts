import { MultipartFile } from '@fastify/multipart';
import { supabase, BUCKET_NAME } from '../config/supabase';
import { insertArquivoMidia } from './databaseService';
import * as path from 'path';

export async function saveFile(
  file: MultipartFile
): Promise<{
  fileBuffer: Buffer;
  supabasePath: string;
  supabaseUrl: string;
  fileName: string;
  fileSize: number;
  format: string;
  idArquivoBanco?: number;
}> {
  const fileName = file.filename;
  const timestamp = Date.now();
  const uniqueFileName = `${timestamp}-${fileName}`;

  // Ler arquivo diretamente para buffer (sem salvar localmente)
  const chunks: Buffer[] = [];
  for await (const chunk of file.file) {
    chunks.push(chunk);
  }
  const fileBuffer = Buffer.concat(chunks);
  const fileSize = fileBuffer.length;
  const fileSizeMB = fileSize / (1024 * 1024);

  console.log(`📦 Arquivo recebido: ${fileName} (${fileSizeMB.toFixed(2)} MB)`);

  // Limite de 500MB para Supabase Storage
  const MAX_SIZE_MB = 500;
  if (fileSizeMB > MAX_SIZE_MB) {
    throw new Error(`Arquivo muito grande (${fileSizeMB.toFixed(2)} MB). Limite: ${MAX_SIZE_MB} MB`);
  }

  const fileExtension = path.extname(fileName).toLowerCase().replace('.', '');

  try {
    const supabasePath = `uploads/${uniqueFileName}`;

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(supabasePath, fileBuffer, {
        contentType: file.mimetype || 'application/octet-stream',
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('⚠️ Erro ao fazer upload no Supabase Storage:', error);
      throw new Error(`Falha ao fazer upload: ${error.message}`);
    }

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(supabasePath);

    console.log('✅ Arquivo salvo no Supabase Storage:', supabasePath);

    let idArquivoBanco: number | undefined;

    try {
      idArquivoBanco = await insertArquivoMidia({
        nome_original_arquivo: fileName,
        caminho_storage: supabasePath,
        tamanho_bytes: fileSize,
        formato: fileExtension
      });

      console.log('✅ Registro criado no banco:', idArquivoBanco);
    } catch (dbError) {
      console.error('⚠️ Erro ao inserir no banco:', dbError);
    }

    return {
      fileBuffer,
      supabasePath: data.path,
      supabaseUrl: urlData.publicUrl,
      fileName: fileName,
      fileSize: fileSize,
      format: fileExtension,
      idArquivoBanco: idArquivoBanco
    };

  } catch (error) {
    console.error('⚠️ Erro no processo de upload:', error);
    throw error;
  }
}
