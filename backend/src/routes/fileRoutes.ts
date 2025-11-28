import { FastifyInstance } from 'fastify';
import { saveFile } from '../services/fileService';
import audioController from '../controllers/audioController';
import { conditionalAuth } from '../middleware/conditionalAuth';
import { uploadSchema, buscaAudDSchema } from '../schemas/fileSchemas';
import { supabase } from '../config/supabase';
import { getArquivosPorStatus, getArquivoComMusicas, insertRelatorioEDL } from '../services/databaseService';

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
      const fileInfo = await saveFile(data);

      return { 
        message: 'Arquivo salvo com sucesso',
        arquivo: {
          id: fileInfo.idArquivoBanco,
          nomeOriginal: fileInfo.fileName,
          tamanhoBytes: fileInfo.fileSize,
          formato: fileInfo.format
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

  // Buscar TODOS os arquivos do banco
  fastify.get('/arquivos', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    try {
      const { data: arquivos, error } = await supabase
        .from('arquivo_midia')
        .select('*')
        .order('data_upload', { ascending: false });

      if (error) {
        console.error('❌ Erro ao buscar arquivos:', error);
        throw new Error(`Erro ao buscar arquivos: ${error.message}`);
      }

      console.log(`✅ Total de arquivos no banco: ${arquivos?.length || 0}`);
      return { arquivos: arquivos || [] };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      return reply.status(500).send({ 
        error: 'Erro ao buscar arquivos',
        details: errorMessage
      });
    }
  });

  // Buscar arquivos por status
  fastify.get('/arquivos/:status', {
    preHandler: conditionalAuth
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

  // Buscar arquivo específico com suas músicas
  fastify.get('/arquivo/:id', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const idArquivo = parseInt(id, 10);
    
    try {
      console.log(`📥 [GET /arquivo/${id}] Requisição recebida`);

      if (isNaN(idArquivo)) {
        console.error(`❌ ID inválido: ${id}`);
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      const resultado = await getArquivoComMusicas(idArquivo);
      
      console.log(`✅ [GET /arquivo/${id}] Retornando ${resultado.musicas.length} músicas`);
      return resultado;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error(`❌ [GET /arquivo/${id}] Erro:`, errorMessage);
      
      // Se o erro for "arquivo não encontrado", retornar 404 ao invés de 500
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

  // Buscar relatório EDL de um arquivo
  fastify.get('/arquivo/:id/relatorio', {
    preHandler: conditionalAuth
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

  // Buscar todas as músicas do banco (apenas tabela musica, sem JOIN)
  fastify.get('/musicas', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    try {
      // SELECT * FROM musica (simples, sem verificação de detecções)
      const { data: musicas, error } = await supabase
        .from('musica')
        .select('*')
        .order('criado_em', { ascending: false });

      if (error) {
        console.error('❌ Erro Supabase ao buscar músicas:', error);
        throw new Error(`Erro ao buscar músicas: ${error.message}`);
      }

      console.log(`✅ Músicas encontradas no banco: ${musicas?.length || 0}`);
      
      return { musicas: musicas || [] };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error('❌ Erro no endpoint /musicas:', errorMessage);
      return reply.status(500).send({ 
        error: 'Erro ao buscar músicas',
        details: errorMessage
      });
    }
  });

  // Finalizar arquivo após validação do usuário
  fastify.post('/arquivo/:id/finalizar', {
    preHandler: conditionalAuth
  }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const idArquivo = parseInt(id, 10);

      if (isNaN(idArquivo)) {
        return reply.status(400).send({ error: 'ID de arquivo inválido' });
      }

      // Verificar se o arquivo existe
      const { data: arquivo, error: arquivoError } = await supabase
        .from('arquivo_midia')
        .select('status')
        .eq('id_arquivo', idArquivo)
        .single();

      if (arquivoError || !arquivo) {
        return reply.status(404).send({ error: 'Arquivo não encontrado' });
      }

      // Atualizar status para Finalizado
      const { error: updateError } = await supabase
        .from('arquivo_midia')
        .update({ status: 'Finalizado' })
        .eq('id_arquivo', idArquivo);

      if (updateError) {
        throw new Error(`Erro ao finalizar arquivo: ${updateError.message}`);
      }

      console.log(`✅ Arquivo ${idArquivo} finalizado pelo usuário`);

      // Extrair contadores de validação do corpo da requisição
      const body = request.body as any;
      
      // Se apenasStatus=true, não criar relatório EDL (auto-finalização)
      if (body?.apenasStatus) {
        console.log(`📌 Auto-finalização - apenas mudando status, sem criar relatório EDL`);
        return { 
          message: 'Arquivo finalizado (status atualizado)',
          id_arquivo: idArquivo,
          status: 'Finalizado'
        };
      }
      
      // Caso contrário, criar relatório EDL com contadores
      const totalMusicas = body?.totalMusicas || 0;
      const musicasAprovadas = body?.musicasAprovadas || 0;
      const musicasRejeitadas = body?.musicasRejeitadas || 0;

      console.log(`📊 Contadores recebidos - Total: ${totalMusicas}, Aprovadas: ${musicasAprovadas}, Rejeitadas: ${musicasRejeitadas}`);

      // Criar registro do relatório EDL com os contadores
      try {
        console.log(`📝 Criando relatório EDL para arquivo ${idArquivo}...`);
        const idRelatorio = await insertRelatorioEDL(idArquivo, totalMusicas, musicasAprovadas, musicasRejeitadas);
        console.log(`✅ Relatório EDL ${idRelatorio} criado com sucesso!`);
        
        return { 
          message: 'Arquivo finalizado e relatório EDL criado com sucesso',
          id_arquivo: idArquivo,
          id_relatorio: idRelatorio,
          status: 'Finalizado'
        };
      } catch (edlError) {
        console.warn(`⚠️ Erro ao criar relatório EDL: ${edlError instanceof Error ? edlError.message : String(edlError)}`);
        
        // Mesmo se falhar a criação do EDL, o arquivo foi finalizado
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