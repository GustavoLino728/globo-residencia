"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import EDLDownloadModal from "@/components/edlDownloadModal";
import  { VideoPlayer }  from "@/components/videoPlayer";
import { sampleMusicData, defaultUndefinedMusicData } from "@/data/musicMock";
import ValidationPanel from "@/components/validationPainel"
import ErrorState from "@/components/errorState";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import MusicPlayer from "@/components/musicPlayer";
import { Button } from "@heroui/button";
import { useSearchParams } from 'next/navigation';
import PageLayout from "@/components/PageLayout";
import { API_CONFIG } from "@/config/api";


export default function ValidandoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params.id as string;
  const urlTitle = searchParams.get('title');

  const [musicInfo, setMusicInfo] = useState<MusicInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showEDLModal, setShowEDLModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  
  const isNewFileId = id.includes('-') && id.split('-').length > 1; 
  
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
  const hasMusicData = musicInfo && musicInfo.length > 0;
  const allSongsValidated = currentMusicData && currentMusicData.length > 0 ? Object.keys(validatedSongs).length === currentMusicData.length : false;
  const [isSubmitting, setIsSubmitting] = useState(false); 
  
  const handleGenerateEdl = () => {
    setShowEDLModal(true);
  };
  
  useEffect(() => {
    const loadData = async () => {
      try {

        let idArquivo: number | null = null;
        
        if (id.startsWith('db-')) {
          idArquivo = parseInt(id.replace('db-', ''), 10);
        } else if (!isNaN(parseInt(id, 10))) {
          idArquivo = parseInt(id, 10);
        }

        if (idArquivo && !isNaN(idArquivo)) {
          const response = await fetch(`${API_CONFIG.BASE_URL}/arquivo/${idArquivo}`, {
            method: 'GET',
            mode: 'cors',
          });

          if (response.status === 404) {
            setHasError(true);
            setIsLoading(false);
            return;
          }
          
          if (response.ok) {
            const data = await response.json();

            if (data.arquivo) {
              if (data.musicas && data.musicas.length > 0) {
                const formattedData: MusicInfo[] = data.musicas.map((musica: any, index: number) => {
                  return {
                    musica: musica.titulo || `Música ${index + 1}`,
                    efeitoSonoro: musica.efeito_sonoro ? "Sim" : "Não",
                    artista: musica.artista || "Desconhecido",
                    interprete: musica.artista || "Desconhecido",
                    gravadora: musica.gravadora || "N/A",
                    tempoInicio: formatTime(musica.timestamp_inicio_seg) || "00:00",
                    tempoFim: formatTime(musica.timestamp_fim_seg) || "00:00",
                    isrc: musica.isrc || "Não informado",
                    tempoTotal: formatTime(musica.timestamp_fim_seg - musica.timestamp_inicio_seg) || "00:00"
                  };
                });

                setMusicInfo(formattedData);
                setValidationTitle(urlTitle || data.arquivo.nome_original_arquivo || `Validação ${id}`);
                setHasError(false);
                setIsLoading(false);
                return;
              } else {

                if (data.arquivo.status !== 'Em Processamento') {
                  setHasError(true);
                }
                setIsLoading(false);
                return;
              }
            }
          }
        }

        const lastUploadId = localStorage.getItem('lastUploadId');
        const uploadResults = localStorage.getItem('uploadResults');
        
        if (uploadResults && (id === lastUploadId || id.startsWith('upload-'))) {
          const data = JSON.parse(uploadResults);
          
          if (data && data.musicas && Array.isArray(data.musicas)) {
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
            setValidationTitle(urlTitle || `Validação do Upload`);
            setIsLoading(false);
            return;
          }
        }

        setHasError(true);
        setMusicInfo([]);
        
      } catch (error) {
        setHasError(true);
        setMusicInfo([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [id, urlTitle]);
  
  function formatTime(seconds: number): string {
    if (typeof seconds !== 'number') return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  useEffect(() => {
    if (urlTitle) {
      setValidationTitle(urlTitle);
    } else {
      const title = sessionStorage.getItem('validationTitle');
      if (title) {
        setValidationTitle(title);
      } else {
        setValidationTitle(`Validação ${id}`);
      }
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
    const newValidatedSongs = { ...validatedSongs, [currentIndex]: 'approved' as 'approved' | 'rejected' };
    setValidatedSongs(newValidatedSongs);
    
    const totalValidated = Object.keys(newValidatedSongs).length;
    const totalMusics = currentMusicData?.length || 0;

    if (totalValidated === totalMusics && totalMusics > 0) {
      if (id.startsWith('upload-')) {
        if (currentMusicData && currentIndex < currentMusicData.length - 1) {
          setTimeout(() => handleNext(), 500);
        }
      } else {
        setTimeout(() => {
          handleAutoFinalizar();
        }, 1000);
      }
    } else if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };

  const handleReject = () => {
    const newValidatedSongs = { ...validatedSongs, [currentIndex]: 'rejected' as 'approved' | 'rejected' };
    setValidatedSongs(newValidatedSongs);
    
    const totalValidated = Object.keys(newValidatedSongs).length;
    const totalMusics = currentMusicData?.length || 0;

    if (totalValidated === totalMusics && totalMusics > 0) {
      if (id.startsWith('upload-')) {
        if (currentMusicData && currentIndex < currentMusicData.length - 1) {
          setTimeout(() => handleNext(), 500);
        }
      } else {
        setTimeout(() => {
          handleAutoFinalizar();
        }, 1000);
      }
    } else if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };
  
  const handleAutoFinalizar = async () => {
    try {
      // Extrair ID numérico
      let idArquivo: number | null = null;
      
      if (id.startsWith('db-')) {
        idArquivo = parseInt(id.replace('db-', ''), 10);
      } 
      
      else if (id.startsWith('upload-')) {
        return;
      }
      
      else {
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId)) {
          idArquivo = numericId;
        }
      }

      if (!idArquivo || isNaN(idArquivo)) {
        return;
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}/arquivo/${idArquivo}/finalizar`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          apenasStatus: true
        }),
      });

      if (response.ok) {
        console.log('Arquivo auto-finalizado com sucesso');
      }
    } catch (error) {
    }
  };
  
  const handleFinalizar = async () => {
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      let idArquivo: number | null = null;
      
      if (id.startsWith('db-')) {
        idArquivo = parseInt(id.replace('db-', ''), 10);
      } else if (id.startsWith('upload-')) {
        handleGenerateEdl();
        setIsSubmitting(false);
        return;
      } else {
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId)) {
          idArquivo = numericId;
        }
      }

      if (!idArquivo || isNaN(idArquivo)) {
        handleGenerateEdl();
        setIsSubmitting(false);
        return;
      }

      const totalMusicas = currentMusicData?.length || 0;
      const musicasAprovadas = Object.values(validatedSongs).filter(status => status === 'approved').length;
      const musicasRejeitadas = Object.values(validatedSongs).filter(status => status === 'rejected').length;

      const response = await fetch(`${API_CONFIG.BASE_URL}/arquivo/${idArquivo}/finalizar`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          totalMusicas,
          musicasAprovadas,
          musicasRejeitadas
        }),
      });

      if (response.ok) {
        const result = await response.json();
        
        setIsSubmitting(false);
        
        handleGenerateEdl();
      } else {
        const error = await response.json();
        console.error('❌ Erro ao finalizar:', error);
        alert(`Erro ao finalizar arquivo: ${error.details || error.error}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('Erro ao finalizar arquivo.');
      setIsSubmitting(false);
    }
  };

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

  if (!hasMusicData && !isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <ErrorState
          id={id}
          isNewFile={isNewFile}
          isNewFileId={isNewFileId}
          sampleMusicData={sampleMusicData}
        />
      </div>
    );
  }

  return (
    <PageLayout title={`Validação ${validationTitle}`}>
      <div>
        
        <main className="flex-1 p-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto">

            <VideoPlayer/>

            <div className="lg:col-span-1 space-y-6">
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
              onFinalizar={handleFinalizar}
              />

              {/* Player de Música */}
              {currentMusicData && currentMusicData.length > 0 && currentMusicData[currentIndex] && (
                <MusicPlayer
                  key={`${currentIndex}-${currentMusicData[currentIndex].musica}`}
                  tempoInicio={currentMusicData[currentIndex].tempoInicio}
                  tempoFim={currentMusicData[currentIndex].tempoFim}
                  musica={currentMusicData[currentIndex].musica}
                  artista={currentMusicData[currentIndex].artista}
                />
              )}
            </div>
          </div>

        </main>

        <EDLDownloadModal
          isOpen={showEDLModal}
          onClose={() => setShowEDLModal(false)}
          onDownload={() => {
            setTimeout(() => {
              router.push('/relatorios');
              router.refresh();
            }, 1000);
          }}
          fileName={validationTitle}
          validationTitle={validationTitle}
          musicData={currentMusicData}
          validatedSongs={validatedSongs}
        />
      </div>
    </PageLayout>
  );
}
