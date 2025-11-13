import { FastifyInstance } from 'fastify';
import { saveFile } from '../services/fileService';
import audioController from '../controllers/audioController';
import { conditionalAuth } from '../middleware/conditionalAuth';
import { uploadSchema, buscaAudDSchema } from '../schemas/fileSchemas';

async function fileRoutes(fastify: FastifyInstance) {
  
  fastify.post('/upload', {
    preHandler: conditionalAuth,
    schema: uploadSchema
  }, async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ error: 'Nenhum arquivo enviado' });
    }

    try {
      const userId = request.user?.id;
      
      const fileInfo = await saveFile(data, userId);

      return { 
        message: 'Arquivo salvo com sucesso',
        uploadedBy: {
          id: request.user?.id,
          email: request.user?.email,
          name: request.user?.name
        },
        arquivo: {
          id: fileInfo.idArquivoBanco,
          nomeOriginal: fileInfo.fileName,
          tamanhoBytes: fileInfo.fileSize,
          formato: fileInfo.format
        },
        local: {
          path: fileInfo.localPath
        },
        supabase: {
          path: fileInfo.supabasePath,
          url: fileInfo.supabaseUrl
        }
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao salvar arquivo',
        details: errorMessage
      });
    }
  });

  fastify.post('/buscaAudD', {
    preHandler: conditionalAuth,
    schema: buscaAudDSchema
  }, audioController.buscaAudDHandler);

  // Buscar arquivos por status
  fastify.get('/arquivos/:status', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    try {
      const { status } = request.params as { status: string };
      const userId = request.user?.id;

      const { getArquivosPorStatus } = await import('../services/databaseService.js');
      const arquivos = await getArquivosPorStatus(status, userId);

      return { arquivos };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivos',
        details: errorMessage
      });
    }
  });

  // Buscar arquivo específico com suas músicas
  fastify.get('/arquivo/:id', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const idArquivo = parseInt(id, 10);

      if (isNaN(idArquivo)) {
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      const { getArquivoComMusicas } = await import('../services/databaseService.js');
      const resultado = await getArquivoComMusicas(idArquivo);

      return resultado;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivo',
        details: errorMessage
      });
    }
  });
}

export default fileRoutes;