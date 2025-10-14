# API de Identificação com AudD

Esta pequena API em Fastify + TypeScript recebe um arquivo MXF (ou áudio bruto), converte para WAV, divide em trechos (padrão 20s), chama o serviço AudD para identificar música em cada trecho, e retorna um JSON com o cronograma de trechos onde foram encontrados matches.

Localização do backend: `backend/`

Requisitos
- Node.js (recomendo v18+)
- ffmpeg disponível no PATH
<<<<<<< HEAD
- npm para instalar dependências
=======
- pnpm (ou npm) para instalar dependências
>>>>>>> 6a314357e5ffe401701619f1cad9f8d0eab5d5d1

Instalação
1. Entre na pasta do backend:
```powershell
cd C:\Next\globo-residencia\backend
```
<<<<<<< HEAD
2. Instale dependências:
```powershell
=======
pnpm install

# ou com npm
>>>>>>> 6a314357e5ffe401701619f1cad9f8d0eab5d5d1
npm install
```

Executando em desenvolvimento
```powershell
<<<<<<< HEAD
# Modo dev
npm run dev

# ou build + node
npm run build
=======
# Com pnpm (modo dev)
pnpm run dev

# Com npm (modo dev)
npm run dev

# ou build + node
pnpm run build
```

Endpoints



A) Multipart/form-data (recomendado)
- URL: http://localhost:3000/buscaAudD
>>>>>>> 6a314357e5ffe401701619f1cad9f8d0eab5d5d1
- Body → form-data
- Envie e aguarde. A resposta pode demorar dependendo do tamanho do arquivo e do número de segmentos.

B) Raw binary (enviar o arquivo diretamente no body)
- Method: POST
<<<<<<< HEAD
- URL: http://localhost:8000/buscaAudD
=======
- URL: http://localhost:3000/buscaAudD
>>>>>>> 6a314357e5ffe401701619f1cad9f8d0eab5d5d1
- Body → binary → Select File
- Headers:
  - Content-Type: application/octet-stream

C) JSON base64 (não recomendado para arquivos grandes)
  "data": "<base64_do_arquivo>"
}
Exemplo PowerShell (Invoke-WebRequest) — raw binary
```powershell
>>>>>>> 6a314357e5ffe401701619f1cad9f8d0eab5d5d1
```

Observações importantes
- O token da API AudD está configurado no arquivo `backend/src/services/auddService.ts` (atualmente hardcoded). Recomendamos mover para variável de ambiente no futuro.
- O `segundosPorSegmento` padrão é 20s. Para mudar, altere `SEG_SECONDS` no controller ou modularize com variável de ambiente.
- Logs de processamento ficam em `backend/tmp_audio/process.log`.
- O arquivo concatenado final fica em `backend/tmp_audio/combined.wav`.

Problemas comuns
- `ffmpeg` não encontrado: instale ffmpeg e adicione ao PATH.
- Timeout no Postman: aumente o Request Timeout em Settings → General → Request timeout (ms) para 0 (infinito).

Próximos passos recomendados
- Mover token para variável de ambiente
- Adicionar rota GET para baixar `combined.wav`
- Tornar `segundosPorSegmento` configurável por variável de ambiente
- Adicionar testes automatizados (jest/mocha)

---
Se quiser, eu atualizo o README com exemplos de resposta ou adiciono instruções para configurar a variável de ambiente do token.