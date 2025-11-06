export const UserSchema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      email: { type: 'string' },
      name: { type: 'string' }
    }
  };
  
  export const SessionSchema = {
    type: 'object',
    properties: {
      access_token: { type: 'string' },
      refresh_token: { type: 'string' },
      expires_in: { type: 'number' }
    }
  };
  
  export const ErrorSchema = {
    type: 'object',
    properties: {
      error: { type: 'string' },
      message: { type: 'string' }
    }
  };
  