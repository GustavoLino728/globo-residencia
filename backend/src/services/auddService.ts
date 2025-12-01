import * as dotenv from 'dotenv';
import axios from 'axios';

delete process.env.AUDD_TOKEN;
dotenv.config();
import * as fs from 'fs';
import FormData from 'form-data';

export const AUDD_CONFIG = {
  token: process.env.AUDD_TOKEN,
  params: {
    return: 'timecode,apple_music,deezer'
  }
};

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
    return res.data;
  } catch (err) {
    console.error('[AUDD] Erro ao enviar requisição:', (err as any)?.response?.data || err);
    throw err;
  }
}
