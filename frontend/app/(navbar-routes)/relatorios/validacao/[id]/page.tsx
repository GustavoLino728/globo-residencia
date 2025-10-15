"use client";

import { useState, useEffect } from "react";
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

  // Busca os dados da música baseado no ID da rota
  const musicInfo = sampleMusicData[id];

  // Verificar se é um arquivo novo (sem dados da API)
  const isNewFile = !musicInfo;
  const isNewFileId = id.includes('-') && id.split('-').length > 1; // IDs gerados pelo upload têm formato timestamp-nome

  const currentMusicData = musicInfo || (
    isNewFile && isNewFileId ? defaultUndefinedMusicData : []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  const [showEDLModal, setShowEDLModal] = useState(false);
  const allSongsValidated = currentMusicData ? Object.keys(validatedSongs).length === currentMusicData.length : false;
  
  const handleGenerateEdl = () => {
    console.log("Abrindo modal de download EDL...");
    setShowEDLModal(true);
  };

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

  if (!currentMusicData || currentMusicData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            {isNewFile && isNewFileId ? "Arquivo em processamento" : "Conteúdo não encontrado"}
          </h2>
          <p className="text-muted-foreground">
            {isNewFile && isNewFileId 
              ? "O arquivo foi carregado mas ainda não foi processado pela API. As informações da música aparecerão como 'não encontradas'."
              : `O ID "${id}" não corresponde a nenhuma validação disponível.`
            }
          </p>
        </div>
        {!isNewFile && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">
              IDs disponíveis para teste:
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              {Object.keys(sampleMusicData).map((availableId) => (
                <span
                  key={availableId}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
                >
                  {availableId}
                </span>
              ))}
            </div>
          </div>
        )}
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
