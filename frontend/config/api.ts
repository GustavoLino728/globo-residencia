/**
 * Configuração centralizada da API
 * Facilita mudanças de ambiente (desenvolvimento, produção)
 */

const isDevelopment = process.env.NODE_ENV === 'development';

// URLs da API
export const API_CONFIG = {
  // URL base do backend
  BASE_URL: isDevelopment 
    ? 'http://127.0.0.1:8000' 
    : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  
  // Endpoints específicos
  ENDPOINTS: {
    UPLOAD: '/upload',
    BUSCA_AUDD: '/buscaAudD',
    HEALTH: '/',
    CORS_TEST: '/cors-test',
  },
  
  // Timeout padrão para requisições (5 minutos para arquivos grandes)
  TIMEOUT: 5 * 60 * 1000,
  
  // Configurações de CORS
  CORS: {
    MODE: 'cors' as RequestMode,
    CREDENTIALS: 'include' as RequestCredentials,
  },
};

/**
 * Retorna a URL completa de um endpoint
 * @param endpoint - Nome do endpoint (ex: 'BUSCA_AUDD')
 * @returns URL completa
 */
export function getApiUrl(endpoint: keyof typeof API_CONFIG.ENDPOINTS): string {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
}

/**
 * Verifica se o backend está acessível
 * @returns Promise com status da conexão
 */
export async function checkBackendHealth(): Promise<{ ok: boolean; message: string }> {
  try {
    const response = await fetch(getApiUrl('HEALTH'), {
      method: 'GET',
      mode: API_CONFIG.CORS.MODE,
      signal: AbortSignal.timeout(5000), // 5 segundos para health check
    });
    
    if (!response.ok) {
      return { ok: false, message: `Backend respondeu com status ${response.status}` };
    }
    
    const data = await response.json();
    return { ok: true, message: data.message || 'Backend funcionando' };
  } catch (error: any) {
    return { 
      ok: false, 
      message: error.message.includes('Failed to fetch') 
        ? 'Não foi possível conectar ao backend. Verifique se está rodando.' 
        : error.message 
    };
  }
}
