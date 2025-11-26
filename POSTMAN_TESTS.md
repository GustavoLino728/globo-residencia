# Testes no Postman - API Globo Residência

## Índice de Endpoints

1. [Upload de Arquivo](#1-upload-de-arquivo-post-upload)
2. [Processar Arquivo com AudD](#2-processar-arquivo-com-audd-post-buscaaudd)
3. [Buscar Todos os Arquivos](#3-buscar-todos-os-arquivos-get-arquivos)
4. [Buscar Arquivos por Status](#4-buscar-arquivos-por-status-get-arquivosstatus)
5. [Buscar Arquivo Específico com Músicas](#5-buscar-arquivo-específico-com-músicas-get-arquivoid)
6. [Buscar Todas as Músicas do Catálogo](#6-buscar-todas-as-músicas-do-catálogo-get-musicas)
7. [Finalizar Arquivo (Após Validação)](#7-finalizar-arquivo-após-validação-post-arquivoidfinalizar)

---

## 1. Upload de Arquivo (POST /upload)

**Endpoint:** `POST http://127.0.0.1:8000/upload`

**Descrição:** Faz upload de um arquivo MXF para o Supabase Storage e cria registro no banco de dados com status "Não Finalizado".

**Tipo:** Multipart/form-data

**Configuração no Postman:**

1. Selecione o método **POST**
2. URL: `http://127.0.0.1:8000/upload`
3. Vá na aba **Body**
4. Selecione **form-data**
5. Adicione uma nova linha:
   - **Key:** `file` (mude o tipo para "File" clicando na seta ao lado)
   - **Value:** Clique em "Select Files" e escolha seu arquivo MXF

**Headers necessários:**
- O Postman adiciona automaticamente `Content-Type: multipart/form-data`

**Resposta de sucesso (200):**
```json
{
  "message": "Arquivo salvo com sucesso",
  "arquivo": {
    "id": 5,
    "nomeOriginal": "seu_arquivo.mxf",
    "tamanhoBytes": 1234567,
    "formato": "mxf"
  },
  "supabase": {
    "path": "uploads/1234567890-seu_arquivo.mxf",
    "url": "https://supabase.co/storage/..."
  }
}
```

**Erros possíveis:**
- `400`: Nenhum arquivo enviado
- `500`: Arquivo muito grande (> 500MB) ou erro no upload

---

## 2. Processar Arquivo com AudD (POST /buscaAudD)

**Endpoint:** `POST http://127.0.0.1:8000/buscaAudD`

**Descrição:** Processa o arquivo, converte MXF para WAV, divide em segmentos de 20s, identifica músicas usando AudD API e salva no banco. Status permanece "Não Finalizado" aguardando validação do usuário.

**Tipo:** Multipart/form-data

**Configuração no Postman:**

1. Selecione o método **POST**
2. URL: `http://127.0.0.1:8000/buscaAudD`
3. Vá na aba **Body**
4. Selecione **form-data**
5. Adicione uma nova linha:
   - **Key:** `file` (mude o tipo para "File")
   - **Value:** Selecione seu arquivo MXF

**Resposta de sucesso (200):**
```json
{
  "caminhoCombinado": "combined.wav",
  "quantidadeSegmentos": 10,
  "segundosPorSegmento": 20,
  "quantidadeMusicasEncontradas": 3,
  "musicas": [
    {
      "inicioSegundos": 0,
      "fimSegundos": 45,
      "titulo": "Song Title",
      "artista": "Artist Name",
      "isrc": "USUM71703861",
      "dataLancamento": "2023",
      "link": "https://..."
    }
  ],
  "resultados": [...],
  "cronograma": [...],
  "configAudd": {
    "params": {
      "retorno": "apple_music,deezer,spotify"
    }
  }
}
```

**Observações:**
- Arquivo fica com status "Não Finalizado" mesmo após identificação
- Músicas são salvas no banco automaticamente
- ISRC é capturado de múltiplas fontes (Spotify, Deezer, Apple Music)
- Duração total é calculada e salva

---

## 3. Buscar Todos os Arquivos (GET /arquivos)

**Endpoint:** `GET http://127.0.0.1:8000/arquivos`

**Descrição:** Retorna todos os arquivos do banco de dados, ordenados por data de upload (mais recentes primeiro).

**Tipo:** GET

**Configuração no Postman:**
1. Selecione o método **GET**
2. URL: `http://127.0.0.1:8000/arquivos`
3. Clique em **Send**

**Resposta de sucesso (200):**
```json
{
  "arquivos": [
    {
      "id_arquivo": 1,
      "nome_original_arquivo": "arquivo.mxf",
      "status": "Não Finalizado",
      "duracao_segundos": 200,
      "caminho_storage": "uploads/1234567890-arquivo.mxf",
      "tamanho_bytes": 1234567,
      "formato": "mxf",
      "data_upload": "2025-11-25T10:30:00Z"
    },
    {
      "id_arquivo": 2,
      "nome_original_arquivo": "outro_arquivo.mxf",
      "status": "Finalizado",
      "duracao_segundos": 300,
      "caminho_storage": "uploads/1234567891-outro_arquivo.mxf",
      "tamanho_bytes": 2345678,
      "formato": "mxf",
      "data_upload": "2025-11-25T09:15:00Z"
    }
  ]
}
```

**Uso:** Ideal para listar todos os arquivos na interface de relatórios.

---

## 4. Buscar Arquivos por Status (GET /arquivos/:status)

**Endpoint:** `GET http://127.0.0.1:8000/arquivos/:status`

**Descrição:** Filtra arquivos por status específico.

**Tipo:** GET

**Opções de status:**
- `Não Finalizado` - Arquivos aguardando processamento ou validação
- `Em Processamento` - Arquivos sendo processados pela AudD
- `Finalizado` - Arquivos validados e finalizados pelo usuário
- `Erro` - Arquivos com erro no processamento

**Exemplos:**

```
GET http://127.0.0.1:8000/arquivos/Não%20Finalizado
GET http://127.0.0.1:8000/arquivos/Em%20Processamento
GET http://127.0.0.1:8000/arquivos/Finalizado
GET http://127.0.0.1:8000/arquivos/Erro
```

**Resposta de sucesso (200):**
```json
{
  "arquivos": [
    {
      "id_arquivo": 1,
      "nome_original_arquivo": "arquivo.mxf",
      "status": "Não Finalizado",
      "duracao_segundos": 200,
      "caminho_storage": "uploads/...",
      "tamanho_bytes": 1234567,
      "formato": "mxf",
      "data_upload": "2025-11-25T10:30:00Z"
    }
  ]
}
```

**Nota:** Use `%20` para codificar espaços na URL.

---

## 5. Buscar Arquivo Específico com Músicas (GET /arquivo/:id)

**Endpoint:** `GET http://127.0.0.1:8000/arquivo/:id`

**Descrição:** Retorna dados completos de um arquivo específico incluindo todas as músicas detectadas com timestamps.

**Tipo:** GET

**Exemplo:**
```
GET http://127.0.0.1:8000/arquivo/1
```

**Resposta de sucesso (200):**
```json
{
  "arquivo": {
    "id_arquivo": 1,
    "nome_original_arquivo": "arquivo.mxf",
    "status": "Não Finalizado",
    "duracao_segundos": 200,
    "caminho_storage": "uploads/...",
    "tamanho_bytes": 1234567,
    "formato": "mxf",
    "data_upload": "2025-11-25T10:30:00Z"
  },
  "musicas": [
    {
      "id_deteccao": 1,
      "timestamp_inicio_seg": 0,
      "timestamp_fim_seg": 45,
      "data_geracao": "2025-11-25T10:35:00Z",
      "id_musica": 10,
      "titulo": "Song Title",
      "artista": "Artist Name",
      "album": "Album Name",
      "gravadora": "Record Label",
      "isrc": "USUM71703861",
      "genero": "Pop",
      "efeito_sonoro": false
    },
    {
      "id_deteccao": 2,
      "timestamp_inicio_seg": 60,
      "timestamp_fim_seg": 120,
      "data_geracao": "2025-11-25T10:35:00Z",
      "id_musica": 11,
      "titulo": "Another Song",
      "artista": "Another Artist",
      "album": "Another Album",
      "gravadora": "Another Label",
      "isrc": "GBUM71703862",
      "genero": "Rock",
      "efeito_sonoro": false
    }
  ]
}
```

**Erros possíveis:**
- `400`: ID de arquivo inválido
- `404`: Arquivo não encontrado
- `500`: Erro ao buscar dados

**Uso:** Para tela de validação de músicas.

---

## 6. Buscar Todas as Músicas do Catálogo (GET /musicas)

**Endpoint:** `GET http://127.0.0.1:8000/musicas`

**Descrição:** Retorna todas as músicas do catálogo (tabela `musica`), ordenadas por data de criação (mais recentes primeiro).

**Tipo:** GET

**Configuração no Postman:**
1. Selecione o método **GET**
2. URL: `http://127.0.0.1:8000/musicas`
3. Clique em **Send**

**Resposta de sucesso (200):**
```json
{
  "musicas": [
    {
      "id_musica": 1,
      "isrc": "USUM71703861",
      "titulo": "Song Title",
      "artista": "Artist Name",
      "album": "Album Name",
      "gravadora": "Record Label",
      "efeito_sonoro": false,
      "genero": "Pop",
      "criado_em": "2025-11-25T10:30:00Z"
    },
    {
      "id_musica": 2,
      "isrc": "GBUM71703862",
      "titulo": "Another Song",
      "artista": "Another Artist",
      "album": null,
      "gravadora": "Another Label",
      "efeito_sonoro": false,
      "genero": "Rock",
      "criado_em": "2025-11-25T09:15:00Z"
    }
  ]
}
```

**Observações:**
- Músicas com mesmo ISRC não são duplicadas no catálogo
- Retorna apenas músicas únicas, não detecções

**Uso:** Para dashboard de estatísticas e catálogo de músicas.

---

## 7. Finalizar Arquivo (Após Validação) (POST /arquivo/:id/finalizar)

**Endpoint:** `POST http://127.0.0.1:8000/arquivo/:id/finalizar`

**Descrição:** Marca um arquivo como "Finalizado" após o usuário validar as músicas identificadas. Muda o status de "Não Finalizado" para "Finalizado".

**Tipo:** POST

**Configuração no Postman:**
1. Selecione o método **POST**
2. URL: `http://127.0.0.1:8000/arquivo/1/finalizar`
3. Não precisa de body
4. Clique em **Send**

**Exemplo:**
```
POST http://127.0.0.1:8000/arquivo/1/finalizar
```

**Resposta de sucesso (200):**
```json
{
  "message": "Arquivo finalizado com sucesso",
  "id_arquivo": 1,
  "status": "Finalizado"
}
```

**Erros possíveis:**
- `400`: ID de arquivo inválido
- `404`: Arquivo não encontrado
- `500`: Erro ao atualizar status

**Uso:** Chamado após o usuário revisar e aprovar as músicas identificadas na tela de validação.

---

## Fluxo Completo de Teste

### Cenário 1: Upload e Processamento Completo

1. **Upload do arquivo**
   ```
   POST /upload
   ```
   - Status inicial: `Não Finalizado`
   - Retorna: `id_arquivo`

2. **Verificar arquivo criado**
   ```
   GET /arquivos
   ```
   - Deve aparecer com status `Não Finalizado`

3. **Processar com AudD**
   ```
   POST /buscaAudD
   ```
   - Identifica músicas
   - Salva no banco
   - Status permanece: `Não Finalizado`

4. **Verificar músicas identificadas**
   ```
   GET /arquivo/1
   ```
   - Ver todas as músicas detectadas com timestamps e ISRC

5. **Validar e finalizar**
   ```
   POST /arquivo/1/finalizar
   ```
   - Status muda para: `Finalizado`

6. **Confirmar finalização**
   ```
   GET /arquivos/Finalizado
   ```
   - Arquivo deve aparecer na lista de finalizados

### Cenário 2: Verificar Estatísticas

1. **Ver todos os arquivos**
   ```
   GET /arquivos
   ```

2. **Ver catálogo de músicas**
   ```
   GET /musicas
   ```

3. **Filtrar por status**
   ```
   GET /arquivos/Não%20Finalizado
   GET /arquivos/Finalizado
   ```

---

## Notas Importantes

### Autenticação
- **SKIP_AUTH está ativado em desenvolvimento:** Não precisa de token ou headers de autenticação
- Em produção, adicione header: `Authorization: Bearer <token>`

### Limites
- **Tamanho máximo de arquivo:** 500MB
- **Formato aceito:** MXF (convertido para WAV automaticamente)
- **Segmentação:** 20 segundos por segmento

### ISRC
- Capturado automaticamente da API AudD
- Busca em múltiplas fontes: Spotify, Deezer, Apple Music
- Validado com mínimo de 12 caracteres
- Usado para deduplicação no catálogo

### Status do Arquivo
- **Não Finalizado:** Upload realizado ou processamento concluído aguardando validação
- **Em Processamento:** Arquivo sendo processado pela AudD
- **Finalizado:** Validado e aprovado pelo usuário
- **Erro:** Falha no processamento

### Temporários
- Arquivos temporários são criados em `os.tmpdir()/globo-residencia-audio`
- Limpeza automática após processamento
- Não há persistência local de arquivos
