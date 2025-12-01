"use client";
import React, { useState, useEffect, useRef } from "react";
import { listDirectoryFiles, getNewFiles, uploadFileToBackend, processedFiles} from "./watchUtils";

export default function WatchFolderSimulator() {
  const [dirHandle, setDirHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const intervalRef = useRef<any>(null);

  const selectFolder = async () => {
    try {
      const handle = await (window as any).showDirectoryPicker();
      setDirHandle(handle);

      const initialFiles = await listDirectoryFiles(handle);
      setFiles(initialFiles);

      // ❌ removido: não envia arquivos ao selecionar
    } catch (err) {
      // Erro ao selecionar pasta
    }
  };


  const startWatching = async () => {
    if (!dirHandle) return alert("Selecione uma pasta primeiro!");
    setIsWatching(true);

    // 📌 1) ENVIAR ARQUIVOS EXISTENTES (Legado)
    try {
      const initialFiles = await listDirectoryFiles(dirHandle);

      for (const fileName of initialFiles) {
        // Evita reprocessar se parar e iniciar o watch rapidamente
        if (processedFiles.has(fileName)) continue;

        const fileHandle = await dirHandle.getFileHandle(fileName);
        const file = await fileHandle.getFile();

        console.log("📤 Enviando arquivo inicial:", file.name);
        
        // Marca ANTES de enviar para evitar duplicidade se algo for muito rápido
        processedFiles.add(fileName); 
        
        try {
            await uploadFileToBackend(file);
        } catch (e) {
            console.error("Falha no upload inicial, removendo da lista processada", e);
            processedFiles.delete(fileName); // Remove se falhar para tentar de novo
        }
      }

      setFiles(initialFiles);
    } catch (err) {
      console.error("Erro ao enviar arquivos iniciais:", err);
    }

    // 📌 2) INICIAR O WATCHER (Loop)
    intervalRef.current = setInterval(async () => {
      try {
        const currentFiles = await listDirectoryFiles(dirHandle);
        const newFiles = getNewFiles(files, currentFiles);

        if (newFiles.length > 0) {
          for (const fileName of newFiles) {
            
            // Checa se já processou
            if (processedFiles.has(fileName)) continue;

            // 🛑 CORREÇÃO CRÍTICA 1:
            // Marque como processado IMEDIATAMENTE. 
            // Não espere o await terminar, senão o próximo intervalo pega o arquivo de novo.
            processedFiles.add(fileName);

            try {
                // 🛑 CORREÇÃO CRÍTICA 2: Pegar o objeto File real
                const fileHandle = await dirHandle.getFileHandle(fileName);
                const file = await fileHandle.getFile();

                console.log("📤 Enviando novo arquivo:", file.name);

                // Passa o objeto FILE, não string
                await uploadFileToBackend(file); 
            } catch (uploadErr) {
                console.error("Erro no upload, permitindo tentativa futura:", uploadErr);
                // Se falhar, removemos da lista para tentar novamente no próximo ciclo
                processedFiles.delete(fileName);
            }
          }
        }

        setFiles(currentFiles);
      } catch (err) {
        console.error("Erro no watch:", err);
        stopWatching();
      }
    }, 1500);
  };




  const stopWatching = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsWatching(false);
  };

  useEffect(() => {
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <div
        style={{
          background: "#1e1e1e",
          borderRadius: 12,
          color: "#fff",
          padding: "24px 32px",
          maxWidth: 700,
          width: "100%",
        }}
      >
        <h2 style={{ marginBottom: 16 }}>🎧 Watch Folder</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={selectFolder}
            style={{
              background: "#0070f3",
              color: "white",
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
            }}
          >
            Escolher Pasta
          </button>

          {!isWatching ? (
            <button
              onClick={startWatching}
              disabled={!dirHandle}
              style={{
                background: "#10b981",
                color: "white",
                padding: "10px 18px",
                borderRadius: 8,
                border: "none",
                opacity: dirHandle ? 1 : 0.6,
              }}
            >
              Iniciar Watch
            </button>
          ) : (
            <button
              onClick={stopWatching}
              style={{
                background: "#ef4444",
                color: "white",
                padding: "10px 18px",
                borderRadius: 8,
                border: "none",
              }}
            >
              Parar Watch
            </button>
          )}
        </div>

        <div style={{ marginTop: 24 }}>
          <h3>📂 Arquivos detectados:</h3>
          {files.length === 0 ? (
            <p style={{ color: "#aaa" }}>Nenhum arquivo encontrado.</p>
          ) : (
            <ul style={{ marginLeft: 16 }}>
              {files.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

