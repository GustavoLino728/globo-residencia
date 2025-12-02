"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { listDirectoryFiles, getNewFiles, uploadFileToBackend, processedFiles} from "./watchUtils";

const MAX_CONCURRENT = 2;

export default function WatchFolderSimulator() {
  const router = useRouter();
  const [dirHandle, setDirHandle] = useState<FileSystemDirectoryHandle | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const [processingFiles, setProcessingFiles] = useState<Set<string>>(new Set());
  const [queuedFiles, setQueuedFiles] = useState<string[]>([]);
  const [processedCount, setProcessedCount] = useState<number>(0);
  const intervalRef = useRef<any>(null);
  const processingCountRef = useRef<number>(0);

  const selectFolder = async () => {
    try {
      const handle = await (window as any).showDirectoryPicker();
      setDirHandle(handle);

      const initialFiles = await listDirectoryFiles(handle);
      const audioVideoFiles = initialFiles.filter(name => {
        const ext = name.toLowerCase().match(/\.\w+$/)?.[0];
        return ext && ['.mxf', '.mp4', '.mov', '.avi', '.mkv', '.wav', '.mp3', '.aac', '.flac'].includes(ext);
      });
      
      setFiles(audioVideoFiles);
      setProcessedCount(0);
      setQueuedFiles([]);
      processedFiles.clear();
      setProcessingFiles(new Set());
      processingCountRef.current = 0;
    } catch (err: any) {
      if (err?.name === 'AbortError') {
        console.log("Seleção de pasta cancelada pelo usuário");
      } else {
        console.error("Erro ao selecionar pasta:", err);
      }
    }
  };


  const processFileFromQueue = async (fileName: string) => {
    if (processedFiles.has(fileName)) {
      console.log(`⏩ Arquivo já foi processado anteriormente: ${fileName}`);
      processingCountRef.current--;
      return;
    }

    processedFiles.add(fileName);
    
    try {
      const fileHandle = await dirHandle!.getFileHandle(fileName);
      const file = await fileHandle.getFile();

      console.log("📤 Processando arquivo:", file.name);
      
      setProcessingFiles(prev => new Set(prev).add(fileName));
      
      await uploadFileToBackend(file);
      
      setProcessedCount(prev => prev + 1);
      setProcessingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileName);
        return newSet;
      });
    } catch (e) {
      console.error("❌ Falha no processamento:", e);
      processedFiles.delete(fileName);
      setProcessingFiles(prev => {
        const newSet = new Set(prev);
        newSet.delete(fileName);
        return newSet;
      });
    } finally {
      processingCountRef.current--;
      setTimeout(() => processNextInQueue(), 100);
    }
  };

  const processNextInQueue = () => {
    setQueuedFiles(currentQueue => {
      if (currentQueue.length === 0 || processingCountRef.current >= MAX_CONCURRENT) {
        return currentQueue;
      }

      const [nextFile, ...remainingQueue] = currentQueue;
      
      if (processedFiles.has(nextFile)) {
        console.log(`⏩ Removendo da fila (já processado): ${nextFile}`);
        if (remainingQueue.length > 0) {
          setTimeout(() => processNextInQueue(), 10);
        }
        return remainingQueue;
      }
      
      processingCountRef.current++;
      processFileFromQueue(nextFile);
      
      return remainingQueue;
    });
  };

  const addToQueue = (fileName: string) => {
    if (processedFiles.has(fileName)) {
      console.log(`⏩ Arquivo já processado, ignorando: ${fileName}`);
      return;
    }
    
    setQueuedFiles(prev => {
      if (prev.includes(fileName)) {
        console.log(`⏩ Arquivo já está na fila, ignorando: ${fileName}`);
        return prev;
      }
      console.log(`📋 Adicionando à fila: ${fileName}`);
      const newQueue = [...prev, fileName];
      
      if (processingCountRef.current < MAX_CONCURRENT) {
        setTimeout(() => processNextInQueue(), 10);
      }
      
      return newQueue;
    });
  };

  const startWatching = async () => {
    if (!dirHandle) return alert("Selecione uma pasta primeiro!");
    setIsWatching(true);
    setProcessedCount(0);
    setQueuedFiles([]);
    processingCountRef.current = 0;

    try {
      const initialFiles = await listDirectoryFiles(dirHandle);
      const audioVideoFiles = initialFiles.filter(name => {
        const ext = name.toLowerCase().match(/\.\w+$/)?.[0];
        return ext && ['.mxf', '.mp4', '.mov', '.avi', '.mkv', '.wav', '.mp3', '.aac', '.flac'].includes(ext);
      });

      setFiles(audioVideoFiles);
      
      audioVideoFiles.forEach(fileName => addToQueue(fileName));

    } catch (err) {
      console.error("Erro ao processar arquivos iniciais:", err);
    }

    intervalRef.current = setInterval(async () => {
      try {
        const currentFiles = await listDirectoryFiles(dirHandle);
        const audioVideoFiles = currentFiles.filter(name => {
          const ext = name.toLowerCase().match(/\.\w+$/)?.[0];
          return ext && ['.mxf', '.mp4', '.mov', '.avi', '.mkv', '.wav', '.mp3', '.aac', '.flac'].includes(ext);
        });
        
        const newFiles = getNewFiles(files, audioVideoFiles);

        if (newFiles.length > 0) {
          console.log(`📥 ${newFiles.length} novo(s) arquivo(s) detectado(s)`);
          newFiles.forEach(fileName => addToQueue(fileName));
        }

        setFiles(audioVideoFiles);
      } catch (err) {
        console.error("Erro no watch:", err);
        stopWatching();
      }
    }, 2000);
  };




  const stopWatching = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsWatching(false);
    
    if (processedCount > 0) {
      console.log(`✅ Watch finalizado. ${processedCount} arquivo(s) processado(s). Redirecionando...`);
      setTimeout(() => {
        router.push('/relatorios');
      }, 500);
    }
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
        <h2 style={{ marginBottom: 8 }}>🎧 Watch Folder - Monitoramento Automático</h2>
        <p style={{ fontSize: "14px", color: "#aaa", marginBottom: 16 }}>
          Monitore uma pasta e processe automaticamente arquivos de áudio/vídeo com identificação de música
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={selectFolder}
            disabled={isWatching}
            style={{
              background: "#0070f3",
              color: "white",
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              cursor: isWatching ? "not-allowed" : "pointer",
              opacity: isWatching ? 0.5 : 1,
            }}
          >
            {dirHandle ? "📁 Trocar Pasta" : "📁 Escolher Pasta"}
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
                cursor: dirHandle ? "pointer" : "not-allowed",
                opacity: dirHandle ? 1 : 0.6,
              }}
            >
              ▶️ Iniciar Watch
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
                cursor: "pointer",
              }}
            >
              ⏹️ Parar & Ver Relatórios
            </button>
          )}
        </div>
        
        {dirHandle && (
          <div style={{ marginTop: 12, padding: 8, background: "#2d2d2d", borderRadius: 6, fontSize: "13px" }}>
            <strong>Formatos aceitos:</strong> MP4, MXF, MOV, AVI, MKV, WAV, MP3, AAC, FLAC
          </div>
        )}

        {isWatching && (
          <div style={{ marginTop: 16, padding: 12, background: "#2d2d2d", borderRadius: 8 }}>
            <p style={{ margin: 0, color: "#10b981" }}>
              ✅ Arquivos processados: <strong>{processedCount}</strong>
            </p>
            {processingFiles.size > 0 && (
              <p style={{ margin: "8px 0 0 0", color: "#fbbf24" }}>
                ⏳ Processando: <strong>{processingFiles.size}</strong> arquivo(s)
              </p>
            )}
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          <h3>📂 Arquivos detectados:</h3>
          {!dirHandle ? (
            <p style={{ color: "#aaa" }}>Selecione uma pasta primeiro.</p>
          ) : files.length === 0 ? (
            <p style={{ color: "#aaa" }}>Nenhum arquivo de áudio/vídeo encontrado nesta pasta.</p>
          ) : (
            <ul style={{ marginLeft: 16, listStyle: "none", padding: 0 }}>
              {files.map((file, index) => (
                <li key={index} style={{ 
                  padding: "8px 12px", 
                  margin: "4px 0", 
                  background: processingFiles.has(file) ? "#3b2f00" : processedFiles.has(file) ? "#1a3a2a" : queuedFiles.includes(file) ? "#1e3a5f" : "#2d2d2d",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                }}>
                  {processingFiles.has(file) ? "⏳" : processedFiles.has(file) ? "✅" : queuedFiles.includes(file) ? "📋" : "📄"} {file}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

