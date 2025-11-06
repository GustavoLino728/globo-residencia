import { FastifyRequest, FastifyReply } from 'fastify';
import { verifyToken } from '../services/authService';

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return reply.status(401).send({
        error: 'Token de autenticação não fornecido',
        message: 'Acesso negado. Forneça um token válido.'
      });
    }

    const token = authHeader.substring(7);

    const user = await verifyToken(token);

    request.user = user;

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Token inválido';
    return reply.status(401).send({
      error: 'Não autorizado',
      message: errorMessage
    });
  }
}