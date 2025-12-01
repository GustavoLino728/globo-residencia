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
  const form = new FormData();
  form.append("file", file, file.name);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10 * 60 * 1000); // 10 minutes

  try {
    const res = await fetch(getApiUrl("BUSCA_AUDD"), {
      method: "POST",
      body: form,
      mode: API_CONFIG.CORS.MODE,
      cache: "no-cache",
      signal: controller.signal,
    });

    clearTimeout(timeout);
    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

