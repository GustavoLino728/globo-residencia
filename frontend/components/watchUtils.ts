import { API_CONFIG, getApiUrl } from "@/config/api";

export const processedFiles = new Set<string>();

export async function listDirectoryFiles(dirHandle: FileSystemDirectoryHandle) {
  const files: string[] = [];

  for await (const entry of (dirHandle as any).values()) {
    if (entry.kind === "file") files.push(entry.name);
  }

  return files;
}


export function getNewFiles(previousList: string[], currentList: string[]) {
  return currentList.filter((name) => {
    // Remove a verificação do processedFiles daqui. 
    // O WatchFolderSimulator vai usar o Set APÓS chamar esta função.
    return !previousList.includes(name); 
  });
}


export async function uploadFileToBackend(file: File) {
  // 1. Validação básica antes de enviar
  if (!file) {
    throw new Error("Tentativa de envio de arquivo inválido/nulo");
  }

  const form = new FormData();
  // 'file' deve corresponder ao que o Fastify espera no backend (request.file())
  form.append("file", file); 

  console.log(`🚀 Iniciando upload de: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

  try {
    // ⚠️ ATENÇÃO: Verifique se a porta 8000 é a mesma que aparece no console do seu Backend
    // Se estiver usando variaveis de ambiente, certifique-se que elas estão carregadas
    // Mude de 'localhost' para '127.0.0.1'
    const BACKEND_URL = "http://127.0.0.1:3001/api/upload";

    const res = await fetch(BACKEND_URL, {
      method: "POST",
      body: form,
      // ⛔ IMPORTANTE: Não adicione cabeçalho 'Content-Type': 'multipart/form-data' manualmente!
      // O navegador faz isso automaticamente e adiciona o 'boundary' necessário.
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Erro no servidor (${res.status}): ${errorText}`);
    }

    const data = await res.json();
    console.log("✅ Upload concluído:", data);
    return data;

  } catch (error) {
    console.error("❌ Falha na requisição de upload:", error);
    throw error; // Relança o erro para o startWatching lidar (e remover do processedFiles)
  }
}

