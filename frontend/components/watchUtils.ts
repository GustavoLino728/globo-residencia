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
    return !previousList.includes(name); 
  });
}
export async function uploadFileToBackend(file: File) {
  if (!file) {
    throw new Error("Tentativa de envio de arquivo inválido/nulo");
  }

  const form = new FormData();
  form.append("file", file); 

  console.log(`🚀 Iniciando processamento de: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`);

  try {
    const BACKEND_URL = getApiUrl('BUSCA_AUDD');

    const res = await fetch(BACKEND_URL, {
      method: "POST",
      body: form,
      mode: API_CONFIG.CORS.MODE,
      cache: "no-cache",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Erro no servidor (${res.status}): ${errorText}`);
    }

    const data = await res.json();
    console.log("✅ Processamento concluído:", data);
    return data;

  } catch (error) {
    console.error("❌ Falha no processamento:", error);
    throw error;
  }
}

