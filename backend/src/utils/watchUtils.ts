import fs from "fs";
import path from "path";
import { uploadFileToBackend } from "../services/uploaderService";

let watcher: any | null = null;

const processed = new Set<string>();

export async function startWatch(folderPath: string) {
  console.log("🔍 Iniciando Watch Folder:", folderPath);

  if (watcher) {
    try {
      await watcher.close();
      console.log("🛑 Watcher anterior fechado.");
    } catch (err) {
      console.warn("Erro ao fechar watcher anterior:", err);
    }
    watcher = null;
  }

  const chokidarModule = await import("chokidar");
  const chokidar = (chokidarModule as any).default || chokidarModule;

  watcher = chokidar.watch(folderPath, {
    persistent: true,
    ignoreInitial: true,

    awaitWriteFinish: {
      stabilityThreshold: 2000,
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

    if (processed.has(filePath)) {
      console.log("⏩ Arquivo já está na lista de processados, ignorando:", filePath);
      return;
    }

    processed.add(filePath);

    try {
        await uploadFileToBackend(filePath);
        console.log("✅ Upload concluído com sucesso:", filePath);
        
    } catch (error) {
        console.error("❌ Falha no upload:", filePath, error);
        processed.delete(filePath);
    }
  });

  watcher.on("error", (error: any) => {
    console.error("❌ Erro no Chokidar:", error);
  });
}