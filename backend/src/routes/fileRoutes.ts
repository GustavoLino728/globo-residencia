import { FastifyInstance } from 'fastify';
import { saveFile } from '../services/fileService';
import * as fs from 'fs';
import * as path from 'path';
import audioController from '../controllers/audioController';

async function fileRoutes(fastify: FastifyInstance) {
  // existing multipart upload
  fastify.post('/upload', async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ error: 'Nenhum arquivo enviado' });
    }

    const savedPath = await saveFile(data);

    return { message: 'Arquivo salvo com sucesso', path: savedPath };
  });

  // New endpoint: receive base64 MXF via JSON, analyze and return results
  fastify.post('/buscaAudD', audioController.buscaAudDHandler);
}

export default fileRoutes;
