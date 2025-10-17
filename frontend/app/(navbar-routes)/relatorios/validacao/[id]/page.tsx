"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Validação {id}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Video Player Section */}
          <div className="flex items-center">
            <div className="w-full h-150 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
                <p className="text-white/80 font-medium">Player de vídeo</p>
              </div>
            </div>
          </div>

          {/* Validation Panel with Glass Effect */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col p-8 shadow-2xl">
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
          </div>
        </div>
      </main>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
    </div>
  );
}
