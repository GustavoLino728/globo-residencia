import * as dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fileRoutes from './routes/fileRoutes';

const fastify = Fastify({ logger: true, bodyLimit: 1024 * 1024 * 1024 });

fastify.addContentTypeParser('application/octet-stream', { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^audio\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^video\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});

fastify.register(multipart, {
  attachFieldsToBody: false,
  limits: {
    fileSize: 1024 * 1024 * 1024,
    files: 10
  }
});

fastify.register(cors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type']
});

fastify.register(swagger, {
  openapi: {
    info: {
      title: 'Globo Residência API',
      description: 'API para upload de arquivos MXF e identificação de músicas',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Desenvolvimento'
      }
    ],
    tags: [
      { name: 'Files', description: 'Endpoints de upload e processamento de arquivos' },
      { name: 'Music', description: 'Endpoints de catálogo de músicas' },
      { name: 'Reports', description: 'Endpoints de relatórios EDL' }
    ]
  }
});

fastify.register(swaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: true
  },
  staticCSP: true
});

fastify.get('/', async (request, reply) => {
  reply.header('Access-Control-Allow-Origin', '*');
  reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  reply.header('Access-Control-Allow-Headers', 'Content-Type');
  
  return { 
    status: 'ok', 
    message: 'Servidor backend funcionando',
    docs: `http://localhost:${process.env.PORT || 3000}/docs`
  };
});

fastify.register(fileRoutes);

const PORT = parseInt(process.env.PORT || '3000', 10);

fastify.listen({ port: PORT }, async (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📚 Documentação Swagger: http://localhost:${PORT}/docs`);
  console.log('📋 Variáveis carregadas:');
  console.log('  - NODE_ENV:', process.env.NODE_ENV || 'production');
  console.log('  - AUDD_TOKEN:', process.env.AUDD_TOKEN ? '✅ Configurado' : '❌ Não encontrado');
  console.log('  - SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Configurado' : '❌ Não encontrado');
  console.log('  - SUPABASE_SERVICE_KEY:', process.env.SUPABASE_SERVICE_KEY ? '✅ Configurado' : '❌ Não encontrado');
});
