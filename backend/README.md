# API de Identificação com AudD

Esta pequena API em Fastify + TypeScript recebe um arquivo MXF (ou áudio bruto), converte para WAV, divide em trechos (padrão 20s), chama o serviço AudD para identificar música em cada trecho, e retorna um JSON com o cronograma de trechos onde foram encontrados matches.

Localização do backend: `backend/`

Requisitos
- Node.js (recomendo v18+)
- ffmpeg disponível no PATH
- npm para instalar dependências

Instalação
1. Entre na pasta do backend:
```powershell
cd C:\Next\globo-residencia\backend
```
2. Instale dependências:
```powershell
npm install
```

Executando em desenvolvimento
```powershell
# Modo dev
npm run dev

# ou build + node
npm run build
node dist/server.js
```

Endpoints

1) POST /buscaAudD
- Recebe um arquivo via multipart/form-data (campo `file`), raw binary no body (Content-Type: application/octet-stream) ou JSON com base64.
- Retorna um JSON traduzido em português com campos como `caminhoCombinado`, `quantidadeSegmentos`, `segundosPorSegmento`, `resultados` e `cronograma`.

Exemplo de uso no Postman

A) Multipart/form-data (recomendado)
- Method: POST
- URL: http://localhost:8000/buscaAudD
- Body → form-data
  - Key: `file` (type: File) → selecione o arquivo `.mxf` local
- Envie e aguarde. A resposta pode demorar dependendo do tamanho do arquivo e do número de segmentos.

B) Raw binary (enviar o arquivo diretamente no body)
- Method: POST
- URL: http://localhost:8000/buscaAudD
- Body → binary → Select File
- Headers:
  - Content-Type: application/octet-stream

C) JSON base64 (não recomendado para arquivos grandes)
- Body → raw → JSON
```json
{
  "filename": "meu_arquivo.mxf",
  "data": "<base64_do_arquivo>"
}
```

Exemplo PowerShell (Invoke-WebRequest) — raw binary
```powershell
Invoke-WebRequest -Uri 'http://localhost:8000/buscaAudD' -Method Post -InFile 'C:\caminho\para\arquivo.mxf' -ContentType 'application/octet-stream' -UseBasicParsing -OutFile 'response.json'
Get-Content response.json -Raw
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