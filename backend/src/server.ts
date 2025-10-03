import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import fileRoutes from './routes/fileRoutes';


const fastify = Fastify({ logger: true });

fastify.register(multipart);
fastify.register(fileRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando na porta 3000`);
});
