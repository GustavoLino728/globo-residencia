import { MultipartFile } from '@fastify/multipart';
import { supabase, BUCKET_NAME } from '../config/supabase';
import { insertArquivoMidia } from './databaseService';
import * as fs from 'fs';
import * as path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

export async function saveFile(
  file: MultipartFile,
  userId?: string
): Promise<{
  localPath: string;
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

  const chunks: Buffer[] = [];
  
  for await (const chunk of file.file) {
    chunks.push(chunk);
  }
  const fileBuffer = Buffer.concat(chunks);
  const fileSize = fileBuffer.length;

  const localFilePath = path.join(UPLOAD_DIR, fileName);
  fs.writeFileSync(localFilePath, fileBuffer);
  console.log('✅ Arquivo salvo localmente:', localFilePath);

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
      console.error('⚠️ Erro ao fazer upload no Supabase:', error);
      return {
        localPath: localFilePath,
        supabasePath: '',
        supabaseUrl: '',
        fileName: fileName,
        fileSize: fileSize,
        format: fileExtension
      };
    }

    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(supabasePath);

    console.log('✅ Arquivo salvo no Supabase:', supabasePath);

    let idArquivoBanco: number | undefined;

    if (userId) {
      try {
        idArquivoBanco = await insertArquivoMidia({
          auth_id: userId,
          nome_original_arquivo: fileName,
          caminho_storage: supabasePath,
          tamanho_bytes: fileSize,
          formato: fileExtension
        });

        console.log('✅ Registro criado no banco:', idArquivoBanco);
      } catch (dbError) {
        console.error('⚠️ Erro ao inserir no banco:', dbError);
      }
    }

    return {
      localPath: localFilePath,
      supabasePath: data.path,
      supabaseUrl: urlData.publicUrl,
      fileName: fileName,
      fileSize: fileSize,
      format: fileExtension,
      idArquivoBanco: idArquivoBanco
    };

  } catch (error) {
    console.error('⚠️ Erro no upload para Supabase:', error);
    return {
      localPath: localFilePath,
      supabasePath: '',
      supabaseUrl: '',
      fileName: fileName,
      fileSize: fileSize,
      format: fileExtension
    };
  }
}
