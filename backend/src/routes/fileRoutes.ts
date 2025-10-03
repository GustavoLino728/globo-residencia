import { FastifyInstance } from 'fastify';
import { saveFile } from '../services/fileService';

async function fileRoutes(fastify: FastifyInstance) {
  fastify.post('/upload', async (request, reply) => {
    const data = await request.file();
    if (!data) {
      return reply.status(400).send({ error: 'Nenhum arquivo enviado' });
    }

    const savedPath = await saveFile(data);

    return { message: 'Arquivo salvo com sucesso', path: savedPath };
  });
}

export default fileRoutes;
