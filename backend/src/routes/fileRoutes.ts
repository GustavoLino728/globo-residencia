import { FastifyInstance } from 'fastify';
import { saveFile } from '../services/fileService';
import audioController from '../controllers/audioController';
import { 
  uploadSchema, 
  buscaAudDSchema, 
  getArquivosSchema, 
  getArquivosPorStatusSchema,
  getArquivoByIdSchema,
  getRelatorioSchema,
  getMusicasSchema,
  finalizarArquivoSchema,
  getRelatorioByIdSchema,
  getArquivosFinalizadosSchema
} from '../schemas/fileSchemas';
import { 
  getArquivosPorStatus, 
  getArquivoComMusicas, 
  insertRelatorioEDL,
  getAllArquivos,
  getRelatorioEDLById,
  getArquivosFinalizados,
  getAllMusicas,
  getArquivoById,
  finalizarArquivo
} from '../services/databaseService';

async function fileRoutes(fastify: FastifyInstance) {
  
  fastify.post('/upload', {
    schema: uploadSchema
  }, async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ error: 'Nenhum arquivo enviado' });
    }

    try {
      const fileInfo = await saveFile(data);

      return { 
        message: 'Arquivo salvo com sucesso',
        arquivo: {
          id: fileInfo.idArquivoBanco,
          nomeOriginal: fileInfo.fileName,
          tamanhoBytes: fileInfo.fileSize,
          formato: fileInfo.format
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
    schema: buscaAudDSchema
  }, audioController.buscaAudDHandler);

  fastify.get('/arquivos', {
    schema: getArquivosSchema
  }, async (request, reply) => {
    try {
      const arquivos = await getAllArquivos();

      return { arquivos };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivos',
        details: errorMessage
      });
    }
  });

  fastify.get('/arquivos/:status', {
    schema: getArquivosPorStatusSchema
  }, async (request, reply) => {
    try {
      const { status } = request.params as { status: string };

      const arquivos = await getArquivosPorStatus(status);

      return { arquivos };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivos',
        details: errorMessage
      });
    }
  });

  fastify.get('/arquivo/:id', {
    schema: getArquivoByIdSchema
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const idArquivo = parseInt(id, 10);
    
    try {
      if (isNaN(idArquivo)) {
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      const resultado = await getArquivoComMusicas(idArquivo);
      
      return resultado;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      
      if (errorMessage.includes('não encontrado') || errorMessage.includes('not found')) {
        return reply.status(404).send({ 
          error: 'Arquivo não encontrado',
          details: errorMessage
        });
      }
      
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivo',
        details: errorMessage
      });
    }
  });

  fastify.get('/arquivo/:id/relatorio', {
    schema: getRelatorioSchema
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const idArquivo = parseInt(id, 10);
    
    try {
      if (isNaN(idArquivo)) {
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      const { getRelatorioEDL } = await import('../services/databaseService.js');
      const relatorio = await getRelatorioEDL(idArquivo);
      
      if (!relatorio) {
        return reply.status(404).send({ error: 'Relatório EDL não encontrado' });
      }
      
      return relatorio;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar relatório EDL',
        details: errorMessage
      });
    }
  });

  fastify.get('/relatorio/:id', {
    schema: getRelatorioByIdSchema
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const idRelatorio = parseInt(id, 10);
    
    try {
      if (isNaN(idRelatorio)) {
        return reply.status(400).send({ error: 'ID de relatório inválido' });
      }

      const relatorio = await getRelatorioEDLById(idRelatorio);
      
      return relatorio;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar relatório EDL',
        details: errorMessage
      });
    }
  });

  fastify.get('/arquivos-finalizados', {
    schema: getArquivosFinalizadosSchema
  }, async (request, reply) => {
    try {
      const arquivos = await getArquivosFinalizados();

      return { arquivos };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivos finalizados',
        details: errorMessage
      });
    }
  });

  fastify.get('/musicas', {
    schema: getMusicasSchema
  }, async (request, reply) => {
    try {
      const musicas = await getAllMusicas();
      
      return { musicas };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar músicas',
        details: errorMessage
      });
    }
  });

  fastify.post('/arquivo/:id/finalizar', {
    schema: finalizarArquivoSchema
  }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const idArquivo = parseInt(id, 10);

      if (isNaN(idArquivo)) {
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      await getArquivoById(idArquivo);
      await finalizarArquivo(idArquivo);

      const body = request.body as any;
      
      if (body?.apenasStatus) {
        return { 
          message: 'Arquivo finalizado (status atualizado)',
          id_arquivo: idArquivo,
          status: 'Finalizado'
        };
      }
      
      const totalMusicas = body?.totalMusicas || 0;
      const musicasAprovadas = body?.musicasAprovadas || 0;
      const musicasRejeitadas = body?.musicasRejeitadas || 0;

      try {
        const idRelatorio = await insertRelatorioEDL(idArquivo, totalMusicas, musicasAprovadas, musicasRejeitadas);
        
        return { 
          message: 'Arquivo finalizado e relatório EDL criado com sucesso',
          id_arquivo: idArquivo,
          id_relatorio: idRelatorio,
          status: 'Finalizado'
        };
      } catch (edlError) {
        console.error(`❌ Erro ao criar relatório EDL:`, edlError);
        
        return { 
          message: 'Arquivo finalizado com sucesso (relatório EDL não criado)',
          id_arquivo: idArquivo,
          status: 'Finalizado',
          warning: 'Relatório EDL não foi criado'
        };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao finalizar arquivo',
        details: errorMessage
      });
    }
  });
}


export default fileRoutes;