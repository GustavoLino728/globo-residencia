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
<<<<<<< HEAD
    const supabasePath = `uploads/${uniqueFileName}`;

    // Retry logic for transient network errors (e.g., connect timeouts)
    const maxAttempts = 3;
    let attempt = 0;
    let uploadResult: { data: any; error: any } | null = null;

    while (attempt < maxAttempts) {
      attempt += 1;
      try {
        uploadResult = await supabase.storage
          .from(BUCKET_NAME)
          .upload(supabasePath, fileBuffer, {
            contentType: file.mimetype || 'application/octet-stream',
            cacheControl: '3600',
            upsert: false
          });

        if (uploadResult.error) {
          // If it's a server-side response error (bad request, etc.), don't retry
          const err = uploadResult.error;
          // If the error seems transient (no message or network), retry
          const isTransient = !err.status || err.status >= 500 || /timeout|connect/i.test(err.message || "");
          if (!isTransient) {
            console.error('⚠️ Erro ao fazer upload no Supabase Storage (não transitório):', err);
            throw new Error(`Falha ao fazer upload: ${err.message || JSON.stringify(err)}`);
          }
          // else fallthrough to retry
        } else {
          break; // success
        }
      } catch (e: any) {
        const isConnectTimeout = e?.originalError?.cause?.code === 'UND_ERR_CONNECT_TIMEOUT' || /Connect Timeout|connect timeout|UND_ERR_CONNECT_TIMEOUT/i.test(e?.message || "");
        const isNetworkErr = /fetch failed|network error|ECONNREFUSED|ENOTFOUND|EHOSTUNREACH/i.test(e?.message || "");

        if (attempt >= maxAttempts || (!isConnectTimeout && !isNetworkErr)) {
          console.error('⚠️ Erro ao fazer upload no Supabase Storage:', e);
          // Bubble up a clearer message
          throw new Error(`Falha ao fazer upload: ${e?.message || String(e)}`);
        }

        // Wait exponential backoff before retrying
        const backoffMs = 500 * Math.pow(2, attempt - 1);
        console.warn(`Tentativa ${attempt} falhou, retrying in ${backoffMs}ms...`);
        await new Promise((res) => setTimeout(res, backoffMs));
      }
    }

    if (!uploadResult) {
      throw new Error('Falha ao fazer upload: resultado indefinido após tentativas');
    }

    const { data, error } = uploadResult;

    if (error) {
      console.error('⚠️ Erro final ao fazer upload no Supabase Storage:', error);
      // Fallback: save file locally so processing can continue even if Supabase is unreachable
      try {
        const os = await import('os');
        const fs = await import('fs/promises');
        const localDir = path.join(process.cwd(), 'uploads-local');
        await fs.mkdir(localDir, { recursive: true });
        const localPath = path.join(localDir, uniqueFileName);
        await fs.writeFile(localPath, fileBuffer);
        console.warn(`⚠️ Supabase indisponível — arquivo salvo localmente em: ${localPath}`);

        // Return a structure consistent with a successful upload but pointing to local file
        return {
          fileBuffer,
          supabasePath: `local:${localPath}`,
          supabaseUrl: `file://${localPath}`,
          fileName: fileName,
          fileSize: fileSize,
          format: fileExtension,
          idArquivoBanco: undefined
        };
      } catch (localErr) {
        console.error('⚠️ Falha ao salvar arquivo localmente:', localErr);
        throw new Error(`Falha ao fazer upload: ${error.message || JSON.stringify(error)}`);
      }
    }

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(supabasePath);

    console.log('✅ Arquivo salvo no Supabase Storage:', supabasePath);

=======
>>>>>>> 82f2e50ca4e4e479e22a4c769643831c2caca99d
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
