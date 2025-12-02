const isDevelopment = process.env.NODE_ENV === 'development';

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  
  ENDPOINTS: {
    UPLOAD: '/upload',
    BUSCA_AUDD: '/buscaAudD',
    HEALTH: '/',
    CORS_TEST: '/cors-test',
    ARQUIVOS: '/arquivos',
    ARQUIVO: '/arquivo',
  },
  
  TIMEOUT: 5 * 60 * 1000,
  
  CORS: {
    MODE: 'cors' as RequestMode,
    CREDENTIALS: 'include' as RequestCredentials,
  },
};

export function getApiUrl(endpoint: keyof typeof API_CONFIG.ENDPOINTS): string {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
}

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

/**
 * Busca arquivos por status
 * @param status - Status do arquivo ('Não Finalizado', 'Em Processamento', 'Finalizado', 'Erro')
 * @returns Promise com lista de arquivos
 */
export async function getArquivosPorStatus(status: string): Promise<any[]> {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ARQUIVOS}/${encodeURIComponent(status)}`;
    const response = await fetch(url, {
      method: 'GET',
      mode: API_CONFIG.CORS.MODE,
      signal: AbortSignal.timeout(10000),
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar arquivos: ${response.status}`);
    }
    
    const data = await response.json();
    return data.arquivos || [];
  } catch (error: any) {
    console.error('Erro ao buscar arquivos:', error);
    throw error;
  }
}

/**
 * Busca arquivo específico com suas músicas
 * @param idArquivo - ID do arquivo no banco
 * @returns Promise com dados do arquivo e músicas
 */
export async function getArquivoComMusicas(idArquivo: number): Promise<any> {
  try {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ARQUIVO}/${idArquivo}`;
    const response = await fetch(url, {
      method: 'GET',
      mode: API_CONFIG.CORS.MODE,
      signal: AbortSignal.timeout(10000),
    });
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar arquivo: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Erro ao buscar arquivo:', error);
    throw error;
  }
}
