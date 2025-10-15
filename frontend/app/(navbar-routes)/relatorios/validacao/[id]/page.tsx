"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import EDLDownloadModal from "@/components/edlDownloadModal";
import  { VideoPlayer }  from "@/components/videoPlayer";
import { sampleMusicData, defaultUndefinedMusicData } from "@/data/musicMock";
import ValidationPanel from "@/components/validationPainel"
import ErrorState from "@/components/errorState";

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
      <ErrorState
        id={id} // Passa o ID da URL
        isNewFile={isNewFile} // Passa o resultado da checagem
        isNewFileId={isNewFileId} // Passa o resultado da checagem
        sampleMusicData={sampleMusicData} // Passa o objeto mock
      />
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
