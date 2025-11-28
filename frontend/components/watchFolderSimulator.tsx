"use client";
import React, { useState, useEffect, useRef } from "react";

export default function WatchFolderSimulator() {
  const [dirHandle, setDirHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [isWatching, setIsWatching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para abrir seletor de pasta
  const selectFolder = async () => {
    try {
      const handle = await (window as any).showDirectoryPicker();
      setDirHandle(handle);
      await listFiles(handle);
    } catch (err) {
      // Erro ao selecionar pasta
    }
  };

  // Função para listar arquivos
  const listFiles = async (handle: FileSystemDirectoryHandle) => {
    const temp: string[] = [];
    for await (const entry of handle.values()) {
      if (entry.kind === "file") temp.push(entry.name);
    }
    setFiles(temp);
  };

  // Inicia a simulação de monitoramento
  const startWatching = () => {
    if (!dirHandle) {
      alert("Selecione uma pasta primeiro!");
      return;
    }
    setIsWatching(true);
    intervalRef.current = setInterval(() => listFiles(dirHandle), 3000); // atualiza a cada 3s
  };

  // Para a simulação
  const stopWatching = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsWatching(false);
  };

  // Limpeza ao desmontar componente
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: "2rem",
    }}
  >
    <div
      style={{
        background: "#1e1e1e",
        borderRadius: 12,
        color: "#fff",
        padding: "24px 32px",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        maxWidth: "700px",
        width: "100%",
      }}
    >
      <h2 style={{ marginBottom: 16 }}>🎧 Watch Folder </h2>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={selectFolder}
          style={{
            background: "#0070f3",
            color: "white",
            padding: "10px 18px",
            borderRadius: 8,
            cursor: "pointer",
            border: "none",
            fontWeight: 500,
          }}
        >
          Escolher Pasta
        </button>

        {!isWatching ? (
          <button
            onClick={startWatching}
            style={{
              background: "#10b981",
              color: "white",
              padding: "10px 18px",
              borderRadius: 8,
              cursor: "pointer",
              border: "none",
              fontWeight: 500,
              opacity: dirHandle ? 1 : 0.6,
            }}
            disabled={!dirHandle}
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
              cursor: "pointer",
              border: "none",
              fontWeight: 500,
            }}
          >
            Parar Watch
          </button>
        )}
      </div>

      <div style={{ marginTop: 24 }}>
        <h3 style={{ marginBottom: 8 }}>📂 Arquivos detectados:</h3>
        {files.length === 0 ? (
          <p style={{ color: "#aaa" }}>Nenhum arquivo encontrado.</p>
        ) : (
          <ul style={{ marginLeft: 16, lineHeight: 1.6 }}>
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
