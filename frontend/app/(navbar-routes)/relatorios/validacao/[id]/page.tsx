"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
<<<<<<< HEAD
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import NavigationControls from "@/components/navigationControl";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";

// Dados de exemplo para demonstração - agora como array de arrays de músicas
const sampleMusicData: Record<string, MusicInfo[]> = {
  "1": [
    {
      musica: "Bohemian Rhapsody",
      efeitoSonoro: "Reverb suave",
      artista: "Queen",
      interprete: "Freddie Mercury",
      gravadora: "EMI Records",
      tempoInicio: "00:15",
      tempoFim: "03:45",
      isrc: "GBUM71029678",
      tempoTotal: "05:55"
    },
    {
      musica: "We Will Rock You",
      efeitoSonoro: "Stomp clap",
      artista: "Queen",
      interprete: "Freddie Mercury",
      gravadora: "EMI Records",
      tempoInicio: "00:00",
      tempoFim: "02:03",
      isrc: "GBUM71029679",
      tempoTotal: "02:03"
    }
  ],
  "2": [
    {
      musica: "Imagine",
      efeitoSonoro: "Piano natural",
      artista: "John Lennon",
      interprete: "John Lennon",
      gravadora: "Apple Records",
      tempoInicio: "00:00",
      tempoFim: "03:07",
      isrc: "USRC17607839",
      tempoTotal: "03:07"
    }
  ],
  "3": [
    {
      musica: "Billie Jean",
      efeitoSonoro: "Bass sintético",
      artista: "Michael Jackson",
      interprete: "Michael Jackson",
      gravadora: "Epic Records",
      tempoInicio: "00:30",
      tempoFim: "04:54",
      isrc: "USUM70903642",
      tempoTotal: "04:54"
    },
    {
      musica: "Beat It",
      efeitoSonoro: "Guitar solo",
      artista: "Michael Jackson",
      interprete: "Michael Jackson",
      gravadora: "Epic Records",
      tempoInicio: "00:00",
      tempoFim: "04:18",
      isrc: "USUM70903643",
      tempoTotal: "04:18"
    }
  ]
};

// Componente para botões de aprovação
const ApprovalButtons = ({ onApprove, onReject }: { onApprove: () => void; onReject: () => void }) => {
  return (
    <div className="flex gap-4 mt-8">
      <Button 
        color="success" 
        variant="solid"
        size="lg"
        onPress={onApprove}
        className="flex-1 h-14 text-lg font-semibold rounded-xl"
      >
        Aprovar
      </Button>
      <Button 
        color="danger" 
        variant="solid"
        size="lg"
        onPress={onReject}
        className="flex-1 h-14 text-lg font-semibold rounded-xl"
      >
        Rejeitar
      </Button>
    </div>
  );
};

// Componente para contador personalizado
const MusicCounter = ({ current, total }: { current: number; total: number }) => {
  return (
    <Chip 
      color="primary" 
      variant="flat" 
      size="lg"
      className="mt-6 bg-purple-600/20- text-white-600 font-semibold px-6 py-3 text-lg"
    >
      {current} de {total} músicas
    </Chip>
  );
};
=======
import EDLDownloadModal from "@/components/edlDownloadModal";
import  { VideoPlayer }  from "@/components/videoPlayer";
import { sampleMusicData, defaultUndefinedMusicData } from "@/data/musicMock";
import ValidationPanel from "@/components/validationPainel"
import ErrorState from "@/components/errorState";
import { useSearchParams } from 'next/navigation';
>>>>>>> 9299e6826abd3b2a9bf01e2a4cd06aa5370f4955

export default function ValidandoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const urlTitle = searchParams.get('title');
  
  const musicInfo = sampleMusicData[id];
  const isNewFile = !musicInfo;
  const isNewFileId = id.includes('-') && id.split('-').length > 1;

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

  useEffect(() => {
    if (urlTitle) {
      setValidationTitle(urlTitle);
    } else {
      setValidationTitle(`Validação ${id}`); 
    }
  }, [urlTitle, id]);

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
};

const handleReject = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'rejected' }));
    console.log("Música rejeitada!");
};

useEffect(() => {
  if (validatedSongs[currentIndex]) { 
      const hasNext = currentMusicData && currentIndex < currentMusicData.length - 1;
      if (hasNext) {
          const timer = setTimeout(() => {
              setCurrentIndex(currentIndex + 1);
          }, 500); 
          return () => clearTimeout(timer); 
      }
  }
}, [validatedSongs, currentIndex, currentMusicData]); 

  if (!currentMusicData || currentMusicData.length === 0) {
    return (
      <ErrorState
        id={id} 
        isNewFile={isNewFile} 
        isNewFileId={isNewFileId} 
        sampleMusicData={sampleMusicData}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          {validationTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto">

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
          onGenerateEdl={handleGenerateEdl} 
          />
        </div>

      </main>

      <EDLDownloadModal
        isOpen={showEDLModal}
        onClose={() => setShowEDLModal(false)}
        fileName={validationTitle}
        validationTitle={validationTitle}
      />
    </div>
  );
}
