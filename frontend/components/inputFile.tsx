"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Spacer } from "@heroui/spacer";
import LoadingScreen from "./loadingScreen";
import Notification from "./notification";
import { getApiUrl, API_CONFIG, checkBackendHealth } from "@/config/api";

export default function MediaUpload() {
  const router = useRouter();
  const [fileName, setFileName] = useState<string | null>(null);
  const [mediaURL, setMediaURL] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const urlRef = useRef<string | null>(null);
  const mediaElementRef = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);

  const handleFile = (file: File) => {
    setIsRemoving(false); // Reset removal state when adding a new file
    
    // Verificar tamanho do arquivo (limite: 500MB)
    const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB em bytes
    if (file.size > MAX_FILE_SIZE) {
      alert(`❌ Arquivo muito grande!\n\nTamanho: ${(file.size / (1024 * 1024)).toFixed(2)} MB\nLimite: 500 MB\n\nPor favor, escolha um arquivo menor ou comprima o vídeo.`);
      return;
    }
    
    // Aceitar arquivos de áudio, vídeo, ou extensões específicas (.mxf, .mp4, .mov, .avi, etc)
    const validExtensions = ['.mxf', '.mp4', '.mov', '.avi', '.mkv', '.wav', '.mp3', '.aac', '.flac'];
    const fileExtension = file.name.toLowerCase().match(/\.\w+$/)?.[0];
    const isValidFile = file.type.startsWith("audio/") || 
                       file.type.startsWith("video/") || 
                       (fileExtension && validExtensions.includes(fileExtension));
    
    if (file && isValidFile) {
      setFileName(file.name);
      // Revoga URL anterior se existir
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
      }
      const newUrl = URL.createObjectURL(file);
      urlRef.current = newUrl;
      setMediaURL(newUrl);
      setFileType(file.type || 'video/mxf');
    } else {
      alert("Por favor, envie um arquivo de áudio ou vídeo válido 🎵🎬\n\nFormatos aceitos: MP4, MXF, MOV, AVI, MKV, WAV, MP3, AAC, FLAC");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleUpload = async () => {
    if (!fileName) return;
    
    try {
      // Obter o arquivo do input ANTES de qualquer verificação
      const input = document.getElementById("media-upload") as HTMLInputElement;
      const file = input.files?.[0];
      
      if (!file) {
        alert("Arquivo não encontrado. Por favor, selecione um arquivo novamente.");
        return;
      }
      
      // VERIFICAR TAMANHO ANTES DE TUDO (limite: 500MB)
      const MAX_FILE_SIZE = 500 * 1024 * 1024; // 500MB
      const fileSizeMB = file.size / (1024 * 1024);
      
      if (file.size > MAX_FILE_SIZE) {
        alert(`❌ Arquivo muito grande!\n\n` +
              `Tamanho: ${fileSizeMB.toFixed(2)} MB\n` +
              `Limite máximo: 500 MB\n\n` +
              `Por favor, comprima o vídeo antes de fazer upload.\n` +
              `Recomendamos usar HandBrake ou FFmpeg para reduzir o tamanho.`);
        return;
      }
      
      // Verificar se o backend está disponível
      console.log("Verificando conexão com o backend...");
      const healthCheck = await checkBackendHealth();
      
      if (!healthCheck.ok) {
        alert(`Erro de conexão: ${healthCheck.message}\n\nVerifique se o backend está rodando em ${API_CONFIG.BASE_URL}`);
        return;
      }
      
      console.log("Backend está disponível:", healthCheck.message);
      
      // Log detalhado sobre o arquivo
      console.log("Enviando arquivo:", {
        nome: file.name, 
        tamanho: fileSizeMB.toFixed(2) + " MB", 
        tipo: file.type,
        ultimaModificacao: new Date(file.lastModified).toLocaleString()
      });
      
      // Ativar a tela de loading APENAS após todas as verificações
      setIsLoading(true);
      
      // Criar FormData e adicionar o arquivo
      const formData = new FormData();
      formData.append("file", file, file.name);
      
      console.log("Iniciando envio do arquivo...");
      
      // Usar a URL configurada
      const apiUrl = getApiUrl('BUSCA_AUDD');
      console.log(`Enviando para ${apiUrl}`);
      
      // Configuração completa e explícita do fetch
      // Não usar timeout para arquivos grandes - deixar o backend controlar
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10 * 60 * 1000); // 10 minutos
      
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
        mode: API_CONFIG.CORS.MODE,
        cache: "no-cache",
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      // Log detalhado da resposta
      console.log("Resposta recebida:", {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText
      });
      
      // Verificar se a resposta foi bem-sucedida
      if (!response.ok) {
        console.error("Resposta não ok:", response.status, response.statusText);
        let errorText = "";
        try {
          const errorData = await response.text();
          console.error("Detalhes do erro:", errorData);
          errorText = errorData;
        } catch (e) {
          errorText = "Erro desconhecido";
        }
        throw new Error(`Erro no upload (${response.status}): ${errorText}`);
      }
      
      console.log("Resposta recebida, processando JSON...");
      
      // Processar a resposta
      const data = await response.json();
      console.log("Resposta completa do servidor:", data);
      
      // Usar o ID do banco de dados se disponível, senão gerar ID local
      const uploadId = data.arquivo?.id ? `db-${data.arquivo.id}` : `upload-${Date.now()}`;
      
      // Armazenar a resposta no localStorage com ID único
      localStorage.setItem("uploadResults", JSON.stringify(data));
      localStorage.setItem("lastUploadId", uploadId);
      localStorage.setItem("uploadFileName", file.name);
      
      // Armazenar ID do banco se disponível
      if (data.arquivo?.id) {
        localStorage.setItem("uploadDatabaseId", data.arquivo.id.toString());
        console.log(`✅ Arquivo salvo no banco com ID: ${data.arquivo.id}`);
      }
      
      console.log("Processamento do backend concluído!");
      console.log(`Músicas encontradas: ${data.quantidadeMusicasEncontradas || 0}`);
      
      // Pequeno delay para suavidade visual antes do redirecionamento
      setTimeout(() => {
        console.log("Iniciando redirecionamento...");
        
        // Redirecionar diretamente para a página de validação do arquivo
        console.log(`Redirecionando para validação do arquivo: ${uploadId}`);
        router.push(`/relatorios/validacao/${uploadId}?title=${encodeURIComponent(file.name)}`);
      }, 1500);
      
    } catch (error: any) {
      console.error("Erro ao fazer upload:", error);
      setIsLoading(false);
      
      // Construir mensagem de erro detalhada
      let mensagemErro = "Ocorreu um erro ao enviar o arquivo.";
      let detalhes = "";
      
      if (error.name === "AbortError") {
        mensagemErro = "O upload demorou muito e foi cancelado.";
        detalhes = "Tente um arquivo menor ou verifique sua conexão.";
      } else if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
        mensagemErro = "Não foi possível conectar ao servidor.";
        detalhes = `Verifique se o backend está rodando em ${API_CONFIG.BASE_URL}`;
      } else if (error.message) {
        mensagemErro = error.message;
      }
      
      alert(`${mensagemErro}${detalhes ? '\n\n' + detalhes : ''}`);
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    
    // Usar setTimeout para dar tempo para a animação acontecer
    setTimeout(() => {
      // Pausa a reprodução se estiver tocando
      if (mediaElementRef.current) {
        mediaElementRef.current.pause();
        mediaElementRef.current.currentTime = 0;
      }
      setFileName(null);
      setMediaURL(null);
      setFileType(null);
      setIsRemoving(false);
      // Revoga URL do objeto
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
        urlRef.current = null;
      }
      // limpa o input de arquivo
      const input = document.getElementById("media-upload") as HTMLInputElement;
      if (input) input.value = "";
    }, 500); // Tempo suficiente para a animação ocorrer
  };

  // Revoga URL ao desmontar o componente
  useEffect(() => {
    return () => {
      if (urlRef.current) {
        URL.revokeObjectURL(urlRef.current);
      }
    };
  }, []);

  return (
    <>
    <Card
      className="max-w-md mx-auto p-8 rounded-2xl bg-white/2 text-center border-1 border-solid border-[#4B4B53]/10 mt-20 mb-20"
      onDragOver={(e) => {
        if (fileName && mediaURL) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        if (fileName && mediaURL) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={fileName && mediaURL ? undefined : handleDrop}
    >
      <CardBody className="flex flex-col items-center justify-center gap-4 ">
        {/* Input de arquivo escondido */}
        <input
          id="media-upload"
          type="file"
          accept="audio/*,video/*,.mxf,.mp4,.mov,.avi,.mkv,.wav,.mp3,.aac,.flac"
          onChange={handleFileChange}
          disabled={!!(fileName && mediaURL)}
          style={{ display: "none" }}
        />

        {!fileName && !mediaURL && (
          <div
            className="w-full h-30 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => document.getElementById("media-upload")?.click()}
          >
            <h2 className="text-white-900 text-lg font-semibold mb-1">
              Arraste e solte o arquivo aqui
            </h2>
            <p className="text-white-600 text-sm">
              ou clique aqui para selecionar um arquivo
            </p>
            
          </div>
        )}
        <div className="transition-all duration-500 ease-in-out transform flex justify-center">

        </div>
        <div className={`transition-all duration-500 ease-in-out transform ${
          fileName && mediaURL
            ? isRemoving 
              ? 'opacity-0 scale-95 translate-y-2' // Estado de saída durante remoção
              : 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none h-0 overflow-hidden'
        }`}>
          <div className="w-full">
            <div className="mb-4">
              <p className="text-white text-sm mb-2">Arquivo selecionado: {fileName}</p>
              {fileType?.startsWith("audio/") ? (
                <audio 
                  controls 
                  className="w-full"
                  src={mediaURL || undefined}
                  ref={mediaElementRef as React.RefObject<HTMLAudioElement>}
                >
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              ) : (
                <video 
                  controls 
                  className="w-full max-h-64"
                  src={mediaURL || undefined}
                  ref={mediaElementRef as React.RefObject<HTMLVideoElement>}
                >
                  Seu navegador não suporta o elemento de vídeo.
                  {fileName?.toLowerCase().endsWith('.mxf') && (
                    <p className="text-xs text-gray-400 mt-1">
                      Arquivo MXF detectado. Alguns navegadores podem não reproduzir este formato.
                    </p>
                  )}
                </video>
              )}
            </div>
            <div className="flex justify-between">
              <Button
                className={`justify-center px-6 text-sm rounded-full transition-all duration-300 ease-in-out ${
                  isRemoving ? 'scale-90 opacity-75' : 'scale-100 opacity-100'
                }`}
                color="danger"
                variant="flat"
                onClick={handleRemove}
                disabled={isRemoving}
              >
                {isRemoving ? 'Removendo...' : 'Remover'}
              </Button>

              <Button
                className={`text-white px-12 font-semibold rounded-full text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 `}
                onClick={() => {
                  if (fileName) {
                    handleUpload();
                  } else {
                    document.getElementById("media-upload")?.click()
                  }
                }}
              >
                {fileName ? 'Enviar' : 'Fazer upload'}
          </Button>
            </div>
          </div>
        </div>

      </CardBody>
    </Card>

    {/* Loading Screen */}
    {isLoading && fileName && (
      <LoadingScreen 
        fileName={fileName}
      />
    )}

    {/* Notification */}
    <Notification
      isVisible={showNotification}
      message={`${fileName} carregado com sucesso! Redirecionando para validação...`}
      type="success"
      duration={3000}
      onClose={() => setShowNotification(false)}
    />
    </>
  );
}
