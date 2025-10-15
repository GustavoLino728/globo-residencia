"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import NavigationControls from "@/components/navigationControl";
import EDLDownloadModal from "@/components/edlDownloadModal";
import { Button } from "@heroui/button";
import MusicCounter from "@/components/musicCounter";
import ApprovalButtons from "@/components/approvalButtons";
import  {VideoPlayer}  from "@/components/videoPlayer";

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

  // Verificar se é um arquivo novo (sem dados da API)
  const isNewFile = !musicInfo;
  const isNewFileId = id.includes('-') && id.split('-').length > 1; // IDs gerados pelo upload têm formato timestamp-nome

  // Criar dados de música indefinidos para arquivos novos
  const undefinedMusicData: MusicInfo[] = isNewFile && isNewFileId ? [
    {
      musica: "Informação não encontrada",
      efeitoSonoro: "Não identificado",
      artista: "Artista desconhecido",
      interprete: "Intérprete não identificado",
      gravadora: "Gravadora não identificada",
      tempoInicio: "00:00",
      tempoFim: "00:00",
      isrc: "N/A",
      tempoTotal: "00:00"
    }
  ] : [];

  // Usar dados reais ou dados indefinidos
  const currentMusicData = musicInfo || undefinedMusicData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  const [showEDLModal, setShowEDLModal] = useState(false);
  const allSongsValidated = currentMusicData ? Object.keys(validatedSongs).length === currentMusicData.length : false;

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

          {/* Validation Panel with Glass Effect - 1/3 da largura */}
          <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col p-8 shadow-2xl w-full">
            {/* Aviso para arquivos novos */}
            {isNewFile && isNewFileId && (
              <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-yellow-200 text-sm font-medium">
                    Arquivo carregado - Informações da música não identificadas pela API
                  </p>
                </div>
              </div>
            )}

            <NavigationControls
              currentIndex={currentIndex}
              total={currentMusicData.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />

            <div className="mb-6">
              <MusicInfoCard 
                info={currentMusicData[currentIndex]} 
                validationStatus={validatedSongs[currentIndex]}
              />
            </div>

            <ApprovalButtons
              onApprove={handleApprove}
              onReject={handleReject}
            />

            <div className="flex justify-center">
              <MusicCounter
                current={currentIndex + 1}
                total={currentMusicData.length}
              />
            </div>
          </div>
        </div>

        {/* Generate EDL Button */}
        {allSongsValidated && (
          <div className="mt-8 flex justify-center">
            <Button
              color="primary"
              variant="solid"
              onPress={() => {
                console.log("Abrindo modal de download EDL...");
                setShowEDLModal(true);
              }}
              className="w-48 h-12 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Gerar EDL
            </Button>
          </div>
        )}
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
