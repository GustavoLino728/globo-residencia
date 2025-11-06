import { UserSchema, ErrorSchema } from './components';

export const uploadSchema = {
  tags: ['Files'],
  description: 'Upload de arquivo MXF (requer autenticação)',
  security: [{ bearerAuth: [] }],
  consumes: ['multipart/form-data'],
  response: {
    200: {
      description: 'Arquivo enviado com sucesso',
      type: 'object',
      properties: {
        message: { type: 'string' },
        uploadedBy: UserSchema,
        arquivo: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            nomeOriginal: { type: 'string' },
            tamanhoBytes: { type: 'number' },
            formato: { type: 'string' }
          }
        },
        local: {
          type: 'object',
          properties: {
            path: { type: 'string' }
          }
        },
        supabase: {
          type: 'object',
          properties: {
            path: { type: 'string' },
            url: { type: 'string' }
          }
        }
      }
    },
    400: ErrorSchema,
    500: ErrorSchema
  }
};

export const buscaAudDSchema = {
  tags: ['Files'],
  description: 'Identificar músicas em arquivo de áudio (requer autenticação)',
  security: [{ bearerAuth: [] }],
  consumes: ['multipart/form-data', 'application/octet-stream'],
  response: {
    200: {
      type: 'object',
      properties: {
        caminhoCombinado: { type: 'string' },
        quantidadeSegmentos: { type: 'number' },
        segundosPorSegmento: { type: 'number' },
        quantidadeMusicasEncontradas: { type: 'number' },
        musicas: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              inicioSegundos: { type: 'number' },
              fimSegundos: { type: 'number' },
              titulo: { type: 'string' },
              artista: { type: 'string' },
              isrc: { type: 'string' },
              dataLancamento: { type: 'string' },
              link: { type: 'string' }
            }
          }
        }
      }
    },
    400: ErrorSchema,
    500: ErrorSchema
  }
};