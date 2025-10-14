// Script para ler o token do arquivo .bat
const fs = require('fs');
const path = require('path');

try {
  // Lê o arquivo .bat
  const batFilePath = path.join(__dirname, 'start_server_with_token.bat');
  const content = fs.readFileSync(batFilePath, 'utf8');
  
  // Procura o token
  const match = content.match(/set "AUDD_TOKEN=([^"]+)"/);
  
  if (match && match[1]) {
    // Retorna o token para ser usado pelo script npm
    console.log(match[1]);
  } else {
    // Token padrão ou mensagem de erro
    console.log('dedd3859464b7bd712cd83e14be921cd');
    console.error('Aviso: Não foi possível encontrar o token no arquivo .bat');
  }
} catch (err) {
  // Em caso de erro, retorna o token padrão
  console.log('dedd3859464b7bd712cd83e14be921cd');
  console.error(`Erro ao ler o token: ${err.message}`);
}