import * as dotenv from 'dotenv';
import axios from 'axios';

// Garante que estamos usando apenas o valor do arquivo .env
delete process.env.AUDD_TOKEN;
dotenv.config();
import * as fs from 'fs';
import FormData from 'form-data';

// Configure seu token do audd e quaisquer parâmetros padrão aqui
export const AUDD_CONFIG = {
  // TOKEN definido via arquivo .env
  // Para alterar, edite o arquivo .env na raiz do projeto
  token: process.env.AUDD_TOKEN,
  // Example: return 'lyrics' or 'accurate' or other flags the API supports
  params: {
    return: 'timecode,apple_music,deezer'
  }
};

// Esta função mostra onde configurar o corpo da requisição para audd.
// Você pode modificar as chamadas `form.append()` para enviar outros campos para audd.io.
export async function identifyAudioByFile(filePath: string) {
  const form = new FormData();
  const tokenToUse = process.env.AUDD_TOKEN;
  console.log('[AUDD] Token:', tokenToUse);
  console.log('[AUDD] Enviando arquivo:', filePath);
  if (!tokenToUse) throw new Error('AUDD_TOKEN não definido. Configure o token no arquivo .env na raiz do projeto.');
  form.append('api_token', tokenToUse);
  form.append('return', (AUDD_CONFIG.params.return as string) || 'timecode');
  form.append('file', fs.createReadStream(filePath));

  const headers = form.getHeaders();

  try {
    const res = await axios.post('https://api.audd.io/', form, { headers });
    return res.data; // resposta crua do audd
  } catch (err) {
    console.error('[AUDD] Erro ao enviar requisição:', (err as any)?.response?.data || err);
    throw err;
  }
}
