"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import NavigationControls from "@/components/navigationControl";
import ApprovalButtons from "@/components/approvalButtons";
import MusicCounter from "@/components/musicCounter";
import VideoPlayer from "@/components/videoPlayer";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";
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

export default function ValidandoPage() {
  const params = useParams();
  const id = params.id as string;

  // Busca os dados da música baseado no ID da rota
  const musicInfo = sampleMusicData[id];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (musicInfo && currentIndex < musicInfo.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleApprove = () => {
    console.log("Música aprovada!");
    if (musicInfo && currentIndex < musicInfo.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleReject = () => {
    console.log("Música rejeitada!");
    if (musicInfo && currentIndex < musicInfo.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  if (!musicInfo) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Conteúdo não encontrado
          </h2>
          <p className="text-muted-foreground">
            O ID "{id}" não corresponde a nenhuma validação disponível.
          </p>
        </div>
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
      </div>
    );
  }

  return (
    <PageLayout title={`Validação ${id}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Video Player Section */}
        <div className="flex items-center">
          <VideoPlayer />
        </div>

        {/* Validation Panel with Glass Effect */}
        <GlassCard className="flex flex-col p-8">
          <NavigationControls
            currentIndex={currentIndex}
            total={musicInfo.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          <div className="mb-6">
            <MusicInfoCard info={musicInfo[currentIndex]} />
          </div>

          <ApprovalButtons
            onApprove={handleApprove}
            onReject={handleReject}
          />

          <div className="flex justify-center">
            <MusicCounter
              current={currentIndex + 1}
              total={musicInfo.length}
            />
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}
