// src/utils/watchUtils.ts
import fs from "fs";
import path from "path";
import { uploadFileToBackend } from "../services/uploaderService";

let watcher: any | null = null;

// 1. MUDANÇA CRÍTICA: O Set deve ficar FORA da função para persistir na memória
// enquanto o servidor estiver rodando.
const processed = new Set<string>();

export async function startWatch(folderPath: string) {
  console.log("🔍 Iniciando Watch Folder:", folderPath);

  // Fecha watcher anterior, se existir
  if (watcher) {
    try {
      await watcher.close();
      console.log("🛑 Watcher anterior fechado.");
    } catch (err) {
      console.warn("Erro ao fechar watcher anterior:", err);
    }
    watcher = null;
  }

  // Importação dinâmica do chokidar
  const chokidarModule = await import("chokidar");
  const chokidar = (chokidarModule as any).default || chokidarModule;

  watcher = chokidar.watch(folderPath, {
    persistent: true,
    ignoreInitial: true, // Ignora arquivos que já estavam lá ao iniciar

    awaitWriteFinish: {
      stabilityThreshold: 2000, // Aumentei para 2s para garantir que arquivos grandes terminaram de copiar
      pollInterval: 100,
    },

    usePolling: true,
    interval: 300,

    ignored: (filePath: string) => {
      return (
        filePath.includes("AppData\\Local\\Temp") ||
        filePath.includes("fastify") ||
        filePath.endsWith(".tmp") ||
        filePath.endsWith(".part") ||
        filePath.endsWith(".partial") ||
        filePath.includes("node_modules") ||
        filePath.includes(".git")
      );
    },
  });

  watcher.on("add", async (filePath: string) => {
    console.log("📄 Novo arquivo detectado pelo Chokidar:", filePath);

    // 2. Verificação de Duplicidade
    if (processed.has(filePath)) {
      console.log("⏩ Arquivo já está na lista de processados, ignorando:", filePath);
      return;
    }

    // 3. Marca IMEDIATAMENTE antes de começar o upload
    processed.add(filePath);

    try {
        // No backend, passamos o CAMINHO (string), não o objeto File
        await uploadFileToBackend(filePath);
        console.log("✅ Upload concluído com sucesso:", filePath);
        
    } catch (error) {
        console.error("❌ Falha no upload:", filePath, error);
        
        // 4. MUDANÇA IMPORTANTE: Se falhar, removemos da lista
        // Isso permite que, se você mover o arquivo ou salvar de novo, ele tente outra vez.
        processed.delete(filePath);
    }
  });

  watcher.on("error", (error: any) => {
    console.error("❌ Erro no Chokidar:", error);
  });
}