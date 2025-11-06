import * as dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fileRoutes from './routes/fileRoutes';
import authRoutes from './routes/authRoutes';

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
  allowedHeaders: ['Content-Type', 'Authorization']
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
        url: 'http://localhost:8000',
        description: 'Desenvolvimento'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    tags: [
      { name: 'Authentication', description: 'Endpoints de autenticação' },
      { name: 'Files', description: 'Endpoints de upload e processamento de arquivos' }
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
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return { 
    status: 'ok', 
    message: 'Servidor backend funcionando',
    docs: 'http://localhost:8000/docs'
  };
});

fastify.register(authRoutes);
fastify.register(fileRoutes);

fastify.listen({ port: 8000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Servidor rodando na porta 8000`);
  console.log(`📚 Documentação Swagger: http://localhost:8000/docs`);
  console.log('📋 Variáveis carregadas:');
  console.log('  - NODE_ENV:', process.env.NODE_ENV || 'production');
  console.log('  - SKIP_AUTH:', process.env.SKIP_AUTH === 'true' ? '✅ Sem Autenticação (DEV)' : '✅ Utilizando Autenticação (PROD)');
  console.log('  - AUDD_TOKEN:', process.env.AUDD_TOKEN ? '✅ Configurado' : '❌ Não encontrado');
  console.log('  - SUPABASE_URL:', process.env.SUPABASE_URL ? '✅ Configurado' : '❌ Não encontrado');
  console.log('  - SUPABASE_SERVICE_KEY:', process.env.SUPABASE_SERVICE_KEY ? '✅ Configurado' : '❌ Não encontrado');
});
