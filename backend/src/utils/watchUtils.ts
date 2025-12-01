// src/utils/watchUtils.ts
import fs from "fs";
import path from "path";
import { uploadFileToBackend } from "../services/uploaderService";

let watcher: any | null = null;

export async function startWatch(folderPath: string) {
  console.log("🔍 Iniciando Watch Folder:", folderPath);

  // Fecha watcher anterior, se existir
  if (watcher) {
    try {
      await watcher.close();
    } catch (err) {
      console.warn("Erro ao fechar watcher anterior:", err);
    }
    watcher = null;
  }

  // Conjunto para evitar loop e duplicações
  const processed = new Set<string>();

  // Importação dinâmica do chokidar
  const chokidarModule = await import("chokidar");
  const chokidar = (chokidarModule as any).default || chokidarModule;

  watcher = chokidar.watch(folderPath, {
    persistent: true,
    ignoreInitial: true,

    awaitWriteFinish: {
      stabilityThreshold: 800,
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
        filePath.endsWith(".partial")
      );
    },
  });

  watcher.on("add", async (filePath: string) => {
    console.log("📄 Novo arquivo detectado:", filePath);

    // Evita enviar o mesmo arquivo repetidamente
    if (processed.has(filePath)) {
      console.log("⏩ Já processado, ignorando:", filePath);
      return;
    }

    processed.add(filePath);

    await uploadFileToBackend(filePath);
  });
}
