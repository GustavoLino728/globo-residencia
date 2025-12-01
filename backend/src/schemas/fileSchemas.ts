import { UserSchema, ErrorSchema } from './components';

export const uploadSchema = {
  tags: ['Files'],
  description: 'Upload de arquivo de mídia para processamento. O arquivo é carregado em memória, metadados são salvos no banco e o processamento de identificação musical é iniciado.',
  consumes: ['multipart/form-data'],
  response: {
    200: {
      description: 'Arquivo enviado com sucesso e salvo no banco de dados',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Arquivo salvo com sucesso' },
        arquivo: {
          type: 'object',
          properties: {
            id: { type: 'number', description: 'ID do arquivo no banco de dados' },
            nomeOriginal: { type: 'string', description: 'Nome original do arquivo' },
            tamanhoBytes: { type: 'number', description: 'Tamanho do arquivo em bytes' },
            formato: { type: 'string', description: 'Formato do arquivo (ex: mp3, wav, mxf)' }
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
  description: 'Processa arquivo de áudio/vídeo para identificar músicas usando a API AudD. Converte para WAV, divide em segmentos, identifica músicas e salva no banco de dados.',
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

export const getArquivosSchema = {
  tags: ['Files'],
  description: 'Lista todos os arquivos de mídia cadastrados no sistema, ordenados por data de upload decrescente. Retorna metadados completos incluindo status de processamento.',
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
  description: 'Filtra arquivos por status de processamento. Útil para buscar apenas arquivos finalizados, em processamento ou com erro.',
  params: {
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
  description: 'Retorna detalhes completos de um arquivo específico incluindo todas as músicas detectadas com seus timestamps e metadados.',
  params: {
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
  description: 'Busca o relatório EDL de um arquivo pelo ID do arquivo. Retorna contadores de validação (total, aprovadas, rejeitadas).',
  params: {
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
  description: 'Lista todas as músicas identificadas no sistema, ordenadas por data de criação. Contém o catálogo completo de músicas detectadas.',
  response: {
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
  description: 'Finaliza o processamento de um arquivo. Se apenasStatus=true, apenas atualiza status. Caso contrário, cria relatório EDL com contadores de validação (total, aprovadas, rejeitadas).',
  params: {
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

export const getRelatorioByIdSchema = {
  tags: ['Reports'],
  description: 'Busca um relatório EDL específico pelo ID do relatório. Retorna todas as informações do relatório incluindo contadores de músicas totais, aprovadas e rejeitadas.',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'ID do relatório EDL'
      }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id_relatorio: { type: 'number' },
        id_arquivo: { type: 'number' },
        total_musicas: { type: 'number', description: 'Total de músicas detectadas' },
        musicas_aprovadas: { type: 'number', description: 'Total de músicas aprovadas' },
        musicas_rejeitadas: { type: 'number', description: 'Total de músicas rejeitadas' },
        data_geracao: { type: 'string', format: 'date-time' },
        observacoes: { type: ['string', 'null'] }
      }
    },
    400: ErrorSchema,
    404: ErrorSchema,
    500: ErrorSchema
  }
};

export const getArquivosFinalizadosSchema = {
  tags: ['Files'],
  description: 'Lista todos os arquivos com status "Finalizado" incluindo o ID do relatório EDL associado. Útil para exibir histórico de processamentos completos.',
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id_arquivo: { type: 'number' },
          nome_arquivo: { type: 'string' },
          tipo_arquivo: { type: 'string' },
          duracao: { type: ['number', 'null'] },
          status: { type: 'string' },
          data_upload: { type: 'string', format: 'date-time' },
          id_relatorio: { type: ['number', 'null'], description: 'ID do relatório EDL associado' }
        }
      }
    },
    500: ErrorSchema
  }
};