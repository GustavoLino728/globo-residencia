import { FastifyRequest, FastifyReply } from 'fastify';
import { authMiddleware } from './authMiddleware';

export async function conditionalAuth(request: FastifyRequest, reply: FastifyReply) {
  const skipAuth = process.env.SKIP_AUTH === 'true';

  if (skipAuth) {
    console.log('⚠️  Autenticação DESABILITADA (modo desenvolvimento)');
    request.user = {
      id: 'dev-user-id',
      email: 'dev@localhost',
      name: 'Dev User'
    };
    return;
  }

  return authMiddleware(request, reply);
}
