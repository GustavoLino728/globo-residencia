import * as dotenv from 'dotenv';
import Fastify from 'fastify';

// Força a recarga do arquivo .env e limpa qualquer variável de ambiente existente
delete process.env.AUDD_TOKEN;
dotenv.config();
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import fileRoutes from './routes/fileRoutes';


const fastify = Fastify({ logger: true, bodyLimit: 1024 * 1024 * 1024 }); // limite de corpo 1GB

// Aceitar corpos binários (raw) para tipos application/octet-stream e audio/video
fastify.addContentTypeParser('application/octet-stream', { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^audio\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^video\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});

// Configurar multipart para stream de arquivos e permitir uploads grandes (ajuste limites se necessário)
fastify.register(multipart, {
  attachFieldsToBody: false,
  limits: {
    fileSize: 1024 * 1024 * 1024, // 1GB per file
    files: 10
  }
});
// Registrar CORS para permitir requisições do frontend
fastify.register(cors, {
  origin: true, // Permitir qualquer origem em ambiente de desenvolvimento
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
});

// Rota de health check para verificar se o servidor está funcionando
fastify.get('/', async (request, reply) => {
  // Garantir headers CORS em todas as respostas
  reply.header('Access-Control-Allow-Origin', '*');
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return { status: 'ok', message: 'Servidor backend funcionando' };
});

// Endpoint de teste específico para testar CORS
fastify.get('/cors-test', async (request, reply) => {
  // Garantir headers CORS em todas as respostas
  reply.header('Access-Control-Allow-Origin', '*');
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return { status: 'ok', message: 'CORS test successful' };
});

fastify.register(fileRoutes);

fastify.listen({ port: 8000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta 8000`);
});

console.log('AUDD_TOKEN:', process.env.AUDD_TOKEN);
