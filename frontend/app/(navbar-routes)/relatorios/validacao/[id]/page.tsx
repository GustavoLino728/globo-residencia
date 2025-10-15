"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import NavigationControls from "@/components/navigationControl";
import EDLDownloadModal from "@/components/edlDownloadModal";
import { Button } from "@heroui/button";
import MusicCounter from "@/components/musicCounter";
import ApprovalButtons from "@/components/approvalButtons";
import  { VideoPlayer }  from "@/components/videoPlayer";
import { sampleMusicData, defaultUndefinedMusicData } from "@/data/musicMock";
import ValidationPanel from "@/components/validationPainel"

export default function ValidandoPage() {
  const params = useParams();
  const id = params.id as string;

  // Estados para armazenar os dados do upload
  const [musicInfo, setMusicInfo] = useState<MusicInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showEDLModal, setShowEDLModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  
  // Verificar se é um arquivo novo (sem dados da API)
  const isNewFileId = id.includes('-') && id.split('-').length > 1; // IDs gerados pelo upload têm formato timestamp-nome
  
  // Dados da música atual para exibição - calculado baseado no estado atual
  const currentMusicData = useMemo(() => {
    if (musicInfo && musicInfo.length > 0) {
      return musicInfo;
    }
    if (isNewFileId) {
      return defaultUndefinedMusicData;
    }
    return [];
  }, [musicInfo, isNewFileId]);
  
  const isNewFile = !musicInfo || musicInfo.length === 0;
  const allSongsValidated = currentMusicData && currentMusicData.length > 0 ? Object.keys(validatedSongs).length === currentMusicData.length : false;
  
  const handleGenerateEdl = () => {
    console.log("Abrindo modal de download EDL...");
    setShowEDLModal(true);
  };
  
  // Carregar os dados do localStorage quando o componente montar
  useEffect(() => {
    try {
      const uploadResults = localStorage.getItem('uploadResults');
      if (uploadResults) {
        const data = JSON.parse(uploadResults);
        console.log("Dados carregados do localStorage:", data);
        
        if (data && data.musicas && Array.isArray(data.musicas)) {
          // Converter os dados do backend para o formato esperado pelo componente
          const formattedData: MusicInfo[] = data.musicas.map((musica: any, index: number) => ({
            musica: musica.titulo || `Música ${index + 1}`,
            efeitoSonoro: "N/A",
            artista: musica.artista || "Desconhecido",
            interprete: musica.artista || "Desconhecido",
            gravadora: "N/A",
            tempoInicio: formatTime(musica.inicioSegundos) || "00:00",
            tempoFim: formatTime(musica.fimSegundos) || "00:00",
            isrc: musica.isrc || "Não informado",
            tempoTotal: formatTime(musica.fimSegundos - musica.inicioSegundos) || "00:00"
          }));
          
          setMusicInfo(formattedData);
          setValidationTitle(`Validação do Arquivo ${data.caminhoCombinado?.split('/').pop() || id}`);
        } else {
          // Fallback para os dados de exemplo se não houver dados válidos
          setMusicInfo(sampleMusicData[id] || []);
        }
      } else {
        // Fallback para os dados de exemplo se não houver dados no localStorage
        setMusicInfo(sampleMusicData[id] || []);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do upload:", error);
      setHasError(true);
      // Fallback para os dados de exemplo em caso de erro
      setMusicInfo(sampleMusicData[id] || []);
    } finally {
      setIsLoading(false);
    }
  }, [id]);
  
  // Função auxiliar para formatar segundos em MM:SS
  function formatTime(seconds: number): string {
    if (typeof seconds !== 'number') return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Buscar o título do vídeo do sessionStorage
  useEffect(() => {
    const title = sessionStorage.getItem('validationTitle');
    if (title) {
      setValidationTitle(title);
    }
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleApprove = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'approved' }));
    console.log("Música aprovada!");
    if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleReject = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'rejected' }));
    console.log("Música rejeitada!");
    if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  // Estado de carregamento
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                <img src="/logoGlobo.png" alt="Globo" className="w-10 object-contain" />
              </div>
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Carregando dados de validação...</h2>
        </div>
      </div>
    );
  }

  // Estado de erro ou sem músicas
  if (hasError || !musicInfo || musicInfo.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="flex flex-col items-center justify-center p-8 max-w-md text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-semibold text-white mb-2 mt-4">
              {hasError ? "Erro ao carregar dados" : "Nenhuma música encontrada"}
            </h2>
            <p className="text-white/70">
              {hasError 
                ? "Ocorreu um erro ao processar os dados de validação. Por favor, tente fazer o upload novamente."
                : "Não foram encontradas músicas para validação neste ID. Faça um novo upload ou verifique o ID informado."
              }
            </p>
          </div>
          <Button
            color="primary"
            variant="solid"
            onClick={() => window.location.href = "/upload"}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
          >
            Voltar para upload
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          {validationTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto">
          {/* Video Player Section - 2/3 da largura */}
          <VideoPlayer/>

          <ValidationPanel
          isNewFile={isNewFile}
          isNewFileId={isNewFileId}
          currentMusicData={currentMusicData}
          currentIndex={currentIndex}
          validatedSongs={validatedSongs}
          allSongsValidated={allSongsValidated}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleApprove={handleApprove}
          handleReject={handleReject}
          onGenerateEdl={handleGenerateEdl} // Passa a função para o painel
          />
        </div>

      </main>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>

      {/* EDL Download Modal */}
      <EDLDownloadModal
        isOpen={showEDLModal}
        onClose={() => setShowEDLModal(false)}
        fileName={validationTitle}
        validationTitle={validationTitle}
      />
    </div>
  );
}
