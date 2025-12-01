import * as dotenv from 'dotenv';
dotenv.config();
import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';

// Importação das rotas
import uploadRoutes from "./routes/uploadRoutes";
import fileRoutes from './routes/fileRoutes';
// import authRoutes from './routes/authRoutes';
import watchRoutes from "./routes/watchRoutes";

const PORT = Number(process.env.PORT) || 8000;

const fastify = Fastify({ 
  logger: true, 
  bodyLimit: 1024 * 1024 * 1024 // 1GB Limite Global
});

// 1️⃣ CORS deve ser o PRIMEIRO registro para evitar bloqueios
fastify.register(cors, {
  origin: '*', // Permite qualquer origem (Frontend, Postman, Mobile)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: false, // ⚠️ OBRIGATÓRIO ser false quando origin é '*'
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
});

// Parsers manuais (opcionais, mas mantidos para compatibilidade com sua lógica específica)
fastify.addContentTypeParser('application/octet-stream', { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^audio\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});
fastify.addContentTypeParser(/^video\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
  done(null, body);
});

// 2️⃣ Configuração do Multipart (Uploads)
fastify.register(multipart, {
  attachFieldsToBody: false, // Força o uso de req.file()
  limits: {
    fileSize: 1024 * 1024 * 1024, // 1GB
    files: 10
  }
});

// Documentação Swagger
fastify.register(swagger, {
  openapi: {
    info: {
      title: 'Globo Residência API',
      description: 'API para upload de arquivos MXF e identificação de músicas',
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // ✅ Ajustado para usar a porta correta
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

// Rota de Health Check
fastify.get('/', async (request, reply) => {
  // CORS já é tratado pelo plugin acima, não adicione headers manuais aqui
  return { 
    status: 'ok', 
    message: 'Servidor backend funcionando',
    docs: `http://localhost:${PORT}/docs`
  };
});

// Registro das Rotas
fastify.register(fileRoutes);
fastify.register(uploadRoutes, { prefix: "/api/upload" });
fastify.register(watchRoutes, { prefix: "/api/watch" });

// Inicialização do Servidor
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
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
  // Ajuste o nome da variável conforme seu .env real
  console.log('  - SUPABASE_SERVICE_KEY:', (process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY) ? '✅ Configurado' : '❌ Não encontrado');
});