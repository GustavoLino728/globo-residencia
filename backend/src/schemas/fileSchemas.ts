import { UserSchema, ErrorSchema } from './components';

export const uploadSchema = {
  tags: ['Files'],
  description: 'Upload de arquivo MXF (requer autenticação)',  consumes: ['multipart/form-data'],
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
  description: 'Identificar músicas em arquivo de áudio (requer autenticação)',  consumes: ['multipart/form-data', 'application/octet-stream'],
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

export const getArquivosSchema = {
  tags: ['Files'],
  description: 'Buscar todos os arquivos do banco ordenados por data de upload',  response: {
    200: {
      type: 'object',
      properties: {
        arquivos: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id_arquivo: { type: 'number' },
              nome_original_arquivo: { type: 'string' },
              caminho_storage: { type: 'string' },
              tamanho_bytes: { type: 'number' },
              formato: { type: 'string' },
              duracao_segundos: { type: 'number', nullable: true },
              status: { type: 'string', enum: ['Não Finalizado', 'Em Processamento', 'Finalizado', 'Erro'] },
              data_upload: { type: 'string', format: 'date-time' }
            }
          }
        }
      }
    },
    500: ErrorSchema
  }
};

export const getArquivosPorStatusSchema = {
  tags: ['Files'],
  description: 'Buscar arquivos filtrados por status',  params: {
    type: 'object',
    properties: {
      status: { 
        type: 'string',
        description: 'Status do arquivo',
        enum: ['Não Finalizado', 'Em Processamento', 'Finalizado', 'Erro']
      }
    },
    required: ['status']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        arquivos: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id_arquivo: { type: 'number' },
              nome_original_arquivo: { type: 'string' },
              caminho_storage: { type: 'string' },
              tamanho_bytes: { type: 'number' },
              formato: { type: 'string' },
              duracao_segundos: { type: 'number', nullable: true },
              status: { type: 'string' },
              data_upload: { type: 'string', format: 'date-time' }
            }
          }
        }
      }
    },
    500: ErrorSchema
  }
};

export const getArquivoByIdSchema = {
  tags: ['Files'],
  description: 'Buscar arquivo específico com suas músicas detectadas',  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'ID do arquivo' }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        arquivo: {
          type: 'object',
          properties: {
            id_arquivo: { type: 'number' },
            nome_original_arquivo: { type: 'string' },
            caminho_storage: { type: 'string' },
            tamanho_bytes: { type: 'number' },
            formato: { type: 'string' },
            duracao_segundos: { type: 'number', nullable: true },
            status: { type: 'string' },
            data_upload: { type: 'string', format: 'date-time' }
          }
        },
        musicas: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id_musica: { type: 'number' },
              titulo: { type: 'string' },
              artista: { type: 'string', nullable: true },
              album: { type: 'string', nullable: true },
              gravadora: { type: 'string', nullable: true },
              efeito_sonoro: { type: 'boolean' },
              genero: { type: 'string', nullable: true },
              isrc: { type: 'string', nullable: true },
              timestamp_inicio_seg: { type: 'number' },
              timestamp_fim_seg: { type: 'number' }
            }
          }
        }
      }
    },
    400: ErrorSchema,
    404: ErrorSchema,
    500: ErrorSchema
  }
};

export const getRelatorioSchema = {
  tags: ['Reports'],
  description: 'Buscar relatório EDL de um arquivo',  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'ID do arquivo' }
    },
    required: ['id']
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id_relatorio: { type: 'number' },
        id_arquivo_midia: { type: 'number' },
        total_musicas: { type: 'number' },
        musicas_aprovadas: { type: 'number' },
        musicas_rejeitadas: { type: 'number' },
        data_geracao: { type: 'string', format: 'date-time' }
      }
    },
    400: ErrorSchema,
    404: ErrorSchema,
    500: ErrorSchema
  }
};

export const getMusicasSchema = {
  tags: ['Music'],
  description: 'Buscar todas as músicas do catálogo',  response: {
    200: {
      type: 'object',
      properties: {
        musicas: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id_musica: { type: 'number' },
              titulo: { type: 'string' },
              artista: { type: 'string', nullable: true },
              album: { type: 'string', nullable: true },
              gravadora: { type: 'string', nullable: true },
              efeito_sonoro: { type: 'boolean' },
              genero: { type: 'string', nullable: true },
              isrc: { type: 'string', nullable: true },
              criado_em: { type: 'string', format: 'date-time' }
            }
          }
        }
      }
    },
    500: ErrorSchema
  }
};

export const finalizarArquivoSchema = {
  tags: ['Files'],
  description: 'Finalizar arquivo após validação. Pode apenas mudar o status (apenasStatus: true) ou criar relatório EDL com contadores.',  params: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'ID do arquivo' }
    },
    required: ['id']
  },
  body: {
    type: 'object',
    properties: {
      apenasStatus: { 
        type: 'boolean', 
        description: 'Se true, apenas muda status sem criar relatório EDL (auto-finalização)',
        default: false
      },
      totalMusicas: { 
        type: 'number', 
        description: 'Total de músicas detectadas (necessário se apenasStatus=false)',
        minimum: 0
      },
      musicasAprovadas: { 
        type: 'number', 
        description: 'Quantidade de músicas aprovadas (necessário se apenasStatus=false)',
        minimum: 0
      },
      musicasRejeitadas: { 
        type: 'number', 
        description: 'Quantidade de músicas rejeitadas (necessário se apenasStatus=false)',
        minimum: 0
      }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        id_arquivo: { type: 'number' },
        id_relatorio: { type: 'number', description: 'ID do relatório EDL criado (se aplicável)' },
        status: { type: 'string' },
        warning: { type: 'string', description: 'Aviso se houver algum problema' }
      }
    },
    400: ErrorSchema,
    404: ErrorSchema,
    500: ErrorSchema
  }
};