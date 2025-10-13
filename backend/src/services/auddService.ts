import axios from 'axios';
import * as fs from 'fs';
import FormData from 'form-data';

// Configure seu token do audd e quaisquer parâmetros padrão aqui
export const AUDD_CONFIG = {
  // TOKEN definido via variável de ambiente AUDD_TOKEN
  // Para alterar, edite o arquivo start_server_with_token.bat
  token: process.env.AUDD_TOKEN || 'dedd3859464b7bd712cd83e14be921cd',
  // Example: return 'lyrics' or 'accurate' or other flags the API supports
  params: {
    return: 'timecode,apple_music,deezer'
  }
};

// Esta função mostra onde configurar o corpo da requisição para audd.
// Você pode modificar as chamadas `form.append()` para enviar outros campos para audd.io.
export async function identifyAudioByFile(filePath: string) {
  const form = new FormData();
  // Sempre usa a variável de ambiente primeiro, garantindo que alterações no .bat sejam aplicadas
  const tokenToUse = process.env.AUDD_TOKEN || AUDD_CONFIG.token;
  form.append('api_token', tokenToUse);
  // local para configurar parâmetros adicionais/corpo
  // ex.: form.append('return', 'timecode,apple_music');
  form.append('return', (AUDD_CONFIG.params.return as string) || 'timecode');
  form.append('file', fs.createReadStream(filePath));

  const headers = form.getHeaders();

  const res = await axios.post('https://api.audd.io/', form, { headers });
  return res.data; // resposta crua do audd
}
