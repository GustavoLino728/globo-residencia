export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface SignupRequest {
    email: string;
    password: string;
    name: string;
  }
  
  export interface AuthResponse {
    user: {
      id: string;
      email: string;
      name?: string;
      role?: string;
    };
    session: {
      access_token: string;
      refresh_token: string;
      expires_in: number;
    };
  }
  
  export interface AuthUser {
    id: string;
    email: string;
    name?: string;
    role?: string;
  }
  
  declare module 'fastify' {
    interface FastifyRequest {
      user?: AuthUser;
    }
  }
  