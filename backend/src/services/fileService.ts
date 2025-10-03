import { MultipartFile } from '@fastify/multipart';
import { pipeline } from 'stream/promises';
import * as fs from 'fs';
import * as path from 'path';

// Caminho para pasta onde os arquivos serão armazenados
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// Garante que a pasta 'uploads' existe
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

export async function saveFile(file: MultipartFile): Promise<string> {
  // Gerar caminho completo para salvar o arquivo
  const filePath = path.join(UPLOAD_DIR, file.filename);

  // Criar write stream para salvar o arquivo
  const writeStream = fs.createWriteStream(filePath);

  // Usar pipeline para transferir corretamente os dados do upload para o disco
  await pipeline(file.file, writeStream);

  return filePath; // Retorna o caminho salvo
}
