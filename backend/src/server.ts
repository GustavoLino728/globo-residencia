import Fastify from 'fastify';
import multipart from '@fastify/multipart';
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
fastify.register(fileRoutes);

fastify.listen({ port: 8000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta 8000`);
});
