"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Spacer } from "@heroui/spacer";
import LoadingScreen from "./loadingScreen";
import Notification from "./notification";

// Removida a função de retry

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
    if (file && (file.type.startsWith("audio/") || file.type.startsWith("video/") || file.name.toLowerCase().endsWith('.mxf'))) {
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
      alert("Por favor, envie um arquivo de áudio ou vídeo válido 🎵🎬");
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
      // Ativar a tela de loading
      setIsLoading(true);
      
      // Obter o arquivo do input
      const input = document.getElementById("media-upload") as HTMLInputElement;
      const file = input.files?.[0];
      
      if (!file) {
        alert("Arquivo não encontrado. Por favor, selecione um arquivo novamente.");
        setIsLoading(false);
        return;
      }
      
      // Log mais detalhado sobre o arquivo
      console.log("Enviando arquivo:", {
        nome: file.name, 
        tamanho: (file.size / (1024 * 1024)).toFixed(2) + "MB", 
        tipo: file.type,
        ultimaModificacao: new Date(file.lastModified).toLocaleString()
      });
      
      // Criar um FormData e adicionar o arquivo
      const formData = new FormData();
      formData.append("file", file, file.name);
      
      try {
        console.log("Iniciando envio do arquivo...");
        
        // Como todos os testes funcionaram, vamos usar uma abordagem mais simples e robusta
        console.log("Enviando arquivo para o backend...");
        
        // Usando 127.0.0.1 como endereço mais confiável
        const apiUrl = "http://127.0.0.1:8000/buscaAudD";
        console.log(`Enviando para ${apiUrl}`);
        
        // Configuração completa e explícita do fetch
        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
          mode: "cors", // Explicitamente definir o modo CORS
          cache: "no-cache", // Evitar problemas de cache
          headers: {
            // Sem Content-Type explícito pois o navegador define automaticamente para multipart/form-data
          },
          signal: AbortSignal.timeout(5 * 60 * 1000) // 5 minutos para arquivos grandes
        });
        
        // Log detalhado da resposta para diagnóstico
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
            // Tentar obter detalhes do erro
            const errorData = await response.text();
            console.error("Detalhes do erro:", errorData);
            errorText = errorData;
          } catch (e) {
            errorText = "Erro desconhecido";
          }
          throw new Error(`Erro no upload (${response.status}): ${errorText}`);
        }
        
        if (!response.ok) {
          console.error("Resposta não ok:", response.status, response.statusText);
          let errorText = "";
          try {
            // Tentar obter detalhes do erro
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
        
        // Armazenar a resposta no localStorage para acessar na página de resultados
        localStorage.setItem("uploadResults", JSON.stringify(data));
        
        // Backend terminou o processamento, agora podemos redirecionar
        console.log("Processamento do backend concluído!");
        
        // Manter a tela de loading por um momento para suavidade visual
        // e então fazer o redirecionamento
        setTimeout(() => {
          console.log("Iniciando redirecionamento...");
          
          // Redirecionar baseado nos resultados
          if (data && data.quantidadeMusicasEncontradas > 0) {
            console.log(`${data.quantidadeMusicasEncontradas} música(s) encontrada(s), redirecionando para validação...`);
            window.location.href = "/relatorios/validacao/1";
          } else {
            console.log("Nenhuma música encontrada, redirecionando para relatórios...");
            window.location.href = "/relatorios";
          }
        }, 1500); // Pequeno delay para suavidade visual
        
      } catch (fetchError: any) {
        console.error("Erro na requisição:", fetchError);
        
        // Trata especificamente o erro "Failed to fetch"
        if (fetchError.message.includes("Failed to fetch") || 
            fetchError.name === "TypeError" || 
            fetchError.message.includes("servidor backend não está disponível")) {
          throw new Error("Não foi possível conectar ao servidor. Verifique se o backend está em execução.");
        } else {
          throw new Error(`Erro na comunicação com o servidor: ${fetchError.message}`);
        }
      }
      
    } catch (error: any) {
      console.error("Erro ao fazer upload:", error);
      
      // Tentar método alternativo de upload com XMLHttpRequest
      console.log("Tentando método alternativo com XMLHttpRequest...");
      try {
        const xhr = new XMLHttpRequest();
        const formData2 = new FormData();
        
        // Obter o arquivo novamente
        const input = document.getElementById("media-upload") as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) {
          throw new Error("Arquivo não encontrado");
        }
        
        formData2.append("file", file);
        
        // Configurar uma promise para resolver quando o XHR completar
        const xhrPromise = new Promise((resolve, reject) => {
          xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(xhr.responseText);
            } else {
              reject(new Error(`XHR falhou com status ${xhr.status}: ${xhr.statusText}`));
            }
          };
          
          xhr.onerror = function() {
            reject(new Error("Erro de conexão XHR"));
          };
        });
        
        // Iniciar o XHR
        xhr.open("POST", "http://127.0.0.1:8000/buscaAudD");
        xhr.send(formData2);
        
        // Aguardar a conclusão
        const responseText = await xhrPromise;
        console.log("XHR bem-sucedido, resposta recebida");
        
        // Processar a resposta
        const data = JSON.parse(responseText as string);
        console.log("Resposta completa do servidor (XHR):", data);
        
        localStorage.setItem("uploadResults", JSON.stringify(data));
        
        // Backend terminou o processamento, agora podemos redirecionar
        console.log("Processamento do backend concluído via XHR!");
        
        // Manter a tela de loading por um momento e então redirecionar
        setTimeout(() => {
          console.log("Iniciando redirecionamento (XHR)...");
          
          // Redirecionar baseado nos resultados
          if (data && data.quantidadeMusicasEncontradas > 0) {
            console.log(`${data.quantidadeMusicasEncontradas} música(s) encontrada(s), redirecionando para validação...`);
            window.location.href = "/relatorios/validacao/1";
          } else {
            console.log("Nenhuma música encontrada, redirecionando para relatórios...");
            window.location.href = "/relatorios";
          }
        }, 1500); // Pequeno delay para suavidade visual
        
        // Retornar para evitar o alerta de erro
        return;
      } catch (xhrError: any) {
        console.error("Método alternativo XHR falhou:", xhrError);
        // Continuar para o alerta de erro
      }
      
      // Se chegou aqui, ambos os métodos falharam
      console.error("Erro detalhado:", error);
      
      // Construir uma mensagem de erro mais detalhada para diagnóstico
      let mensagemErro = "Ocorreu um erro ao enviar o arquivo.";
      let detalhes = "Tente usar a página de diagnóstico para identificar o problema.";
      
      if (error.name === "AbortError") {
        mensagemErro = "O upload demorou muito e foi cancelado.";
        detalhes = "Tente um arquivo menor ou verifique sua conexão.";
      } else if (error.name === "TypeError" && error.message.includes("Failed to fetch")) {
        mensagemErro = "Não foi possível conectar ao servidor.";
        detalhes = "Acesse a página de diagnóstico para testar diferentes métodos de upload.";
      } else if (error.message) {
        mensagemErro = `Erro: ${error.message}`;
      }
      
      // Mostrar um alerta
      alert(`${mensagemErro}\n\n${detalhes}`);
      
      setIsLoading(false);
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
      className="max-w-md mx-auto p-8 rounded-2xl bg-white text-center border-2 border-solid border-[#4B4B53] mt-20 mb-20"
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={handleDrop}
    >
      <CardBody className="flex flex-col items-center justify-center gap-4">
        {/* Input de arquivo escondido */}
        <input
          id="media-upload"
          type="file"
          accept="audio/*,video/*,.mxf"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div
          className="w-full h-30 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => document.getElementById("media-upload")?.click()}
        >
          <h2 className="text-gray-900 text-lg font-semibold mb-1">
            Arraste e solte o arquivo aqui
          </h2>
          <p className="text-gray-600 text-sm">
            ou clique aqui para selecionar um arquivo
          </p>
          
        </div>
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
              <p className="text-black text-sm mb-2">Arquivo selecionado: {fileName}</p>
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
