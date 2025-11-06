import { UserSchema, SessionSchema, ErrorSchema } from './components';

export const signupSchema = {
  tags: ['Authentication'],
  description: 'Criar nova conta de usuário',
  body: {
    type: 'object',
    required: ['email', 'password', 'name'],
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
      name: { type: 'string' }
    }
  },
  response: {
    201: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: UserSchema,
        session: SessionSchema
      }
    },
    400: ErrorSchema
  }
};

export const loginSchema = {
  tags: ['Authentication'],
  description: 'Fazer login e obter token JWT',
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: UserSchema,
        session: SessionSchema
      }
    },
    401: ErrorSchema
  }
};

export const logoutSchema = {
  tags: ['Authentication'],
  description: 'Fazer logout (requer autenticação)',
  security: [{ bearerAuth: [] }],
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    400: ErrorSchema
  }
};

export const refreshTokenSchema = {
  tags: ['Authentication'],
  description: 'Renovar token de acesso',
  body: {
    type: 'object',
    required: ['refresh_token'],
    properties: {
      refresh_token: { type: 'string' }
    }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        user: UserSchema,
        session: SessionSchema
      }
    },
    401: ErrorSchema
  }
};

export const meSchema = {
  tags: ['Authentication'],
  description: 'Obter dados do usuário autenticado',
  security: [{ bearerAuth: [] }],
  response: {
    200: {
      type: 'object',
      properties: {
        user: UserSchema
      }
    },
    401: ErrorSchema
  }
};