"use client";

import { useState, useEffect } from "react";
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
    <div className="flex gap-4 mt-8 justify-center">
      <Button 
        color="success" 
        variant="solid"
        onPress={onApprove}
        className="w-32 h-10 text-lg text-white font-semibold rounded-xl"
      >
        Aprovar
      </Button>
      <Button 
        color="danger" 
        variant="solid"
        onPress={onReject}
        className="w-32 h-10 text-lg font-semibold rounded-xl"
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
      variant="flat" 
      size="lg"
      className="mt-6 text-[#FFFFFFA] font-semibold px-6 py-4 text-lg bg-purple-600/0"
    >
      {current} de {total} músicas
    </Chip>
  );
};

export default function ValidandoPage() {
  const params = useParams();
  const id = params.id as string;

  // Estados para armazenar os dados do upload
  const [musicInfo, setMusicInfo] = useState<MusicInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  const allSongsValidated = musicInfo ? Object.keys(validatedSongs).length === musicInfo.length : false;
  
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
    if (musicInfo && currentIndex < musicInfo.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleApprove = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'approved' }));
    console.log("Música aprovada!");
    if (musicInfo && currentIndex < musicInfo.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleReject = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'rejected' }));
    console.log("Música rejeitada!");
    if (musicInfo && currentIndex < musicInfo.length - 1) {
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
          <div className="lg:col-span-2 flex items-center">
            <div className="w-full h-full p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
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

          {/* Validation Panel with Glass Effect - 1/3 da largura */}
          <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col p-8 shadow-2xl w-full">
            <NavigationControls
              currentIndex={currentIndex}
              total={musicInfo.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />

            <div className="mb-6">
              <MusicInfoCard 
                info={musicInfo[currentIndex]} 
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
                total={musicInfo.length}
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
                console.log("Gerando EDL...");
                // Aqui você pode implementar a lógica para gerar o EDL
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
    </div>
  );
}
