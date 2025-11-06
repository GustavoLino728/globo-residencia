import { FastifyInstance } from 'fastify';
import { signup, login, logout, refreshToken } from '../services/authService';
import { LoginRequest, SignupRequest } from '../types/auth';
import { authMiddleware } from '../middleware/authMiddleware';
import { 
  signupSchema, 
  loginSchema, 
  logoutSchema, 
  refreshTokenSchema,
  meSchema 
} from '../schemas/authSchemas';

async function authRoutes(fastify: FastifyInstance) {
  
  fastify.post<{ Body: SignupRequest }>('/auth/signup', { 
    schema: signupSchema 
  }, async (request, reply) => {
    try {
      const { email, password, name } = request.body;

      if (!email || !password || !name) {
        return reply.status(400).send({
          error: 'Dados incompletos',
          message: 'Email, senha e nome são obrigatórios'
        });
      }

      const result = await signup({ email, password, name });

      return reply.status(201).send({
        message: 'Usuário criado com sucesso',
        user: result.user,
        session: result.session
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao criar usuário';
      return reply.status(400).send({
        error: 'Erro no signup',
        message: errorMessage
      });
    }
  });

  fastify.post<{ Body: LoginRequest }>('/auth/login', { 
    schema: loginSchema 
  }, async (request, reply) => {
    try {
      const { email, password } = request.body;

      if (!email || !password) {
        return reply.status(400).send({
          error: 'Dados incompletos',
          message: 'Email e senha são obrigatórios'
        });
      }

      const result = await login({ email, password });

      return reply.send({
        message: 'Login realizado com sucesso',
        user: result.user,
        session: result.session
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login';
      return reply.status(401).send({
        error: 'Erro no login',
        message: errorMessage
      });
    }
  });

  fastify.post('/auth/logout', { 
    preHandler: authMiddleware, 
    schema: logoutSchema 
  }, async (request, reply) => {
    try {
      const authHeader = request.headers.authorization;
      const token = authHeader!.substring(7);

      await logout(token);

      return reply.send({
        message: 'Logout realizado com sucesso'
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer logout';
      return reply.status(400).send({
        error: 'Erro no logout',
        message: errorMessage
      });
    }
  });

  fastify.post<{ Body: { refresh_token: string } }>('/auth/refresh', { 
    schema: refreshTokenSchema 
  }, async (request, reply) => {
    try {
      const { refresh_token } = request.body;

      if (!refresh_token) {
        return reply.status(400).send({
          error: 'Refresh token não fornecido'
        });
      }

      const result = await refreshToken(refresh_token);

      return reply.send({
        message: 'Token renovado com sucesso',
        user: result.user,
        session: result.session
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao renovar token';
      return reply.status(401).send({
        error: 'Erro ao renovar token',
        message: errorMessage
      });
    }
  });

  fastify.get('/auth/me', { 
    preHandler: authMiddleware, 
    schema: meSchema 
  }, async (request, reply) => {
    return reply.send({
      user: request.user
    });
  });
}

export default authRoutes;