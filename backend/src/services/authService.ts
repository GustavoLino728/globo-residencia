import { supabase } from '../config/supabase';
import { LoginRequest, SignupRequest, AuthResponse, AuthUser } from '../types/auth';

export async function signup(data: SignupRequest): Promise<AuthResponse> {
  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name
      }
    }
  });

  if (error) {
    throw new Error(`Erro ao criar usuário: ${error.message}`);
  }

  if (!authData.user || !authData.session) {
    throw new Error('Erro ao criar usuário: dados incompletos');
  }

  return {
    user: {
      id: authData.user.id,
      email: authData.user.email!,
      name: authData.user.user_metadata?.name,
      role: authData.user.role
    },
    session: {
      access_token: authData.session.access_token,
      refresh_token: authData.session.refresh_token,
      expires_in: authData.session.expires_in
    }
  };
}

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  });

  if (error) {
    throw new Error(`Erro ao fazer login: ${error.message}`);
  }

  if (!authData.user || !authData.session) {
    throw new Error('Credenciais inválidas');
  }

  return {
    user: {
      id: authData.user.id,
      email: authData.user.email!,
      name: authData.user.user_metadata?.name,
      role: authData.user.role
    },
    session: {
      access_token: authData.session.access_token,
      refresh_token: authData.session.refresh_token,
      expires_in: authData.session.expires_in
    }
  };
}

export async function verifyToken(token: string): Promise<AuthUser> {
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    throw new Error('Token inválido ou expirado');
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name,
    role: data.user.role
  };
}

export async function logout(token: string): Promise<void> {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(`Erro ao fazer logout: ${error.message}`);
  }
}

export async function refreshToken(refreshToken: string): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.refreshSession({
    refresh_token: refreshToken
  });

  if (error || !data.session || !data.user) {
    throw new Error('Erro ao renovar token');
  }

  return {
    user: {
      id: data.user.id,
      email: data.user.email!,
      name: data.user.user_metadata?.name,
      role: data.user.role
    },
    session: {
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      expires_in: data.session.expires_in
    }
  };
}
