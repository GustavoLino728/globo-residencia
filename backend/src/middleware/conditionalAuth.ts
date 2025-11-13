import { FastifyRequest, FastifyReply } from 'fastify';
import { authMiddleware } from './authMiddleware';

export async function conditionalAuth(request: FastifyRequest, reply: FastifyReply) {
  const skipAuth = process.env.SKIP_AUTH === 'true';

  if (skipAuth) {
    console.log('⚠️  Autenticação DESABILITADA (modo desenvolvimento)');
    request.user = {
      id: '8f03973e-3b82-4a3a-9504-caa08e053e2d',
      email: 'dev@localhost',
      name: 'Dev User'
    };
    return;
  }

  return authMiddleware(request, reply);
}
