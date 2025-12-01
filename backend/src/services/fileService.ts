import { MultipartFile } from '@fastify/multipart';
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

  const chunks: Buffer[] = [];
  for await (const chunk of file.file) {
    chunks.push(chunk);
  }
  const fileBuffer = Buffer.concat(chunks);
  const fileSize = fileBuffer.length;
  const fileSizeMB = fileSize / (1024 * 1024);

  const MAX_SIZE_MB = 500;
  if (fileSizeMB > MAX_SIZE_MB) {
    throw new Error(`Arquivo muito grande (${fileSizeMB.toFixed(2)} MB). Limite: ${MAX_SIZE_MB} MB`);
  }

  const fileExtension = path.extname(fileName).toLowerCase().replace('.', '');

  try {
    let idArquivoBanco: number | undefined;

    try {
      idArquivoBanco = await insertArquivoMidia({
        nome_original_arquivo: fileName,
        caminho_storage: 'memory', // Indica que o arquivo não foi salvo
        tamanho_bytes: fileSize,
        formato: fileExtension
      });
    } catch (dbError) {
      console.error('⚠️ Erro ao inserir no banco:', dbError);
    }

    return {
      fileBuffer,
      supabasePath: 'memory', // Não há caminho físico
      supabaseUrl: '', // Não há URL
      fileName: fileName,
      fileSize: fileSize,
      format: fileExtension,
      idArquivoBanco: idArquivoBanco
    };

  } catch (error) {
    console.error('⚠️ Erro no processo:', error);
    throw error;
  }
}
