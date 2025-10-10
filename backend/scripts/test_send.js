const fs = require('fs');
const path = require('path');
const axios = require('axios');

(async () => {
  try {
    const filePath = path.join('C:', 'Next', 'globo-residencia', 'teste', 'PERNAMBUCANOS BR.transfer.mxf');
    console.log('Lendo arquivo:', filePath);
  const FormData = require('form-data');
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath), { filename: 'PERNAMBUCANOS.transfer.mxf' });

  console.log('Enviando multipart para http://localhost:3000/buscaAudD ... (isso pode demorar)');
  const res = await axios.post('http://localhost:3000/buscaAudD', form, { headers: form.getHeaders(), timeout: 0, maxContentLength: Infinity, maxBodyLength: Infinity });
    console.log('Status:', res.status);
    console.log('Resposta (sintetizada):');
    console.log(JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error('===== ERRO DETALHADO =====');
    if (err && err.response) {
      try {
        console.error('Status:', err.response.status);
        console.error('Headers:', JSON.stringify(err.response.headers, null, 2));
        console.error('Data:', JSON.stringify(err.response.data, null, 2));
      } catch (e) {
        console.error('Erro ao serializar response:', e);
      }
    }
    if (err && err.stack) console.error('Stack:', err.stack);
    console.error('Erro (toString):', String(err));
    process.exit(1);
  }
})();
