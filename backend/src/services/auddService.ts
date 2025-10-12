import axios from 'axios';
import * as fs from 'fs';
import FormData from 'form-data';

// Configure seu token do audd e quaisquer parâmetros padrão aqui
export const AUDD_CONFIG = {
  // TOKEN FIXO EM CÓDIGO (conforme solicitado).
  // Se quiser trocar, altere aqui.
  token: 'fef661ca7836bd9cef7b4bd669f3feda',
  // Example: return 'lyrics' or 'accurate' or other flags the API supports
  params: {
    return: 'timecode,apple_music,deezer'
  }
};

// Esta função mostra onde configurar o corpo da requisição para audd.
// Você pode modificar as chamadas `form.append()` para enviar outros campos para audd.io.
export async function identifyAudioByFile(filePath: string) {
  const form = new FormData();
  form.append('api_token', AUDD_CONFIG.token);
  // local para configurar parâmetros adicionais/corpo
  // ex.: form.append('return', 'timecode,apple_music');
  form.append('return', (AUDD_CONFIG.params.return as string) || 'timecode');
  form.append('file', fs.createReadStream(filePath));

  const headers = form.getHeaders();

  const res = await axios.post('https://api.audd.io/', form, { headers });
  return res.data; // resposta crua do audd
}
