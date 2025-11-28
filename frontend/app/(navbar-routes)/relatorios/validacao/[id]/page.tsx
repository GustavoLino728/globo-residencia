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
import PageLayout from "@/components/PageLayout"


export default function ValidandoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params.id as string;
  const urlTitle = searchParams.get('title');

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
  const hasMusicData = musicInfo && musicInfo.length > 0;
  const allSongsValidated = currentMusicData && currentMusicData.length > 0 ? Object.keys(validatedSongs).length === currentMusicData.length : false;
  const [isSubmitting, setIsSubmitting] = useState(false); // Flag para evitar dupla submissão
  
  const handleGenerateEdl = () => {
    // Sempre permitir abrir o modal EDL (mesmo para arquivos upload- não finalizados)
    setShowEDLModal(true);
  };
  
  // Carregar os dados do banco de dados quando o componente montar
  useEffect(() => {
    const loadData = async () => {
      try {
        // Extrair ID numérico do banco (formato: db-123 ou apenas 123)
        let idArquivo: number | null = null;
        
        if (id.startsWith('db-')) {
          idArquivo = parseInt(id.replace('db-', ''), 10);
        } else if (!isNaN(parseInt(id, 10))) {
          idArquivo = parseInt(id, 10);
        }

        // Se tem ID válido, buscar do banco
        if (idArquivo && !isNaN(idArquivo)) {
          const response = await fetch(`http://127.0.0.1:8000/arquivo/${idArquivo}`, {
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
              // Se há músicas identificadas, mostrar
              if (data.musicas && data.musicas.length > 0) {
                // Converter músicas do banco para o formato do componente
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
                // Arquivo existe mas não tem músicas ainda
                // Mostrar erro apenas se não estiver processando
                if (data.arquivo.status !== 'Em Processamento') {
                  setHasError(true);
                }
                setIsLoading(false);
                return;
              }
            }
          }
        }

        // Fallback: tentar localStorage (para uploads muito recentes)
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

        // Nenhum dado encontrado
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
  
  // Função auxiliar para formatar segundos em MM:SS
  function formatTime(seconds: number): string {
    if (typeof seconds !== 'number') return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Buscar o título do vídeo do searchParams ou sessionStorage
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
    
    // Verificar se todas as músicas foram validadas após esta aprovação
    const totalValidated = Object.keys(newValidatedSongs).length;
    const totalMusics = currentMusicData?.length || 0;
    
    // Se todas as músicas foram validadas, finalizar automaticamente
    // MAS apenas se o arquivo já estiver salvo no banco (não é upload- local)
    if (totalValidated === totalMusics && totalMusics > 0) {
      if (id.startsWith('upload-')) {
        // Apenas avançar para próxima música ou mostrar mensagem
        if (currentMusicData && currentIndex < currentMusicData.length - 1) {
          setTimeout(() => handleNext(), 500);
        }
      } else {
        // Pequeno delay para o usuário ver a última validação
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
    
    // Verificar se todas as músicas foram validadas após esta rejeição
    const totalValidated = Object.keys(newValidatedSongs).length;
    const totalMusics = currentMusicData?.length || 0;
    
    // Se todas as músicas foram validadas, finalizar automaticamente
    // MAS apenas se o arquivo já estiver salvo no banco (não é upload- local)
    if (totalValidated === totalMusics && totalMusics > 0) {
      if (id.startsWith('upload-')) {
        // Apenas avançar para próxima música ou mostrar mensagem
        if (currentMusicData && currentIndex < currentMusicData.length - 1) {
          setTimeout(() => handleNext(), 500);
        }
      } else {
        // Pequeno delay para o usuário ver a última validação
        setTimeout(() => {
          handleAutoFinalizar();
        }, 1000);
      }
    } else if (currentMusicData && currentIndex < currentMusicData.length - 1) {
      setTimeout(() => handleNext(), 500);
    }
  };
  
  // Função para finalizar arquivo (apenas muda status, não cria relatório EDL)
  const handleAutoFinalizar = async () => {
    try {
      // Extrair ID numérico
      let idArquivo: number | null = null;
      
      if (id.startsWith('db-')) {
        idArquivo = parseInt(id.replace('db-', ''), 10);
      } else if (id.startsWith('upload-')) {
        // Upload local não pode ser finalizado
        return;
      } else {
        const numericId = parseInt(id, 10);
        if (!isNaN(numericId)) {
          idArquivo = numericId;
        }
      }

      if (!idArquivo || isNaN(idArquivo)) {
        return;
      }

      // Apenas atualizar status para Finalizado (sem criar relatório EDL)
      const response = await fetch(`http://127.0.0.1:8000/arquivo/${idArquivo}/finalizar`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          apenasStatus: true  // Flag para indicar que não deve criar relatório EDL
        }),
      });

      if (response.ok) {
        // Redirecionar para a página de relatórios
        setTimeout(() => {
          router.push('/relatorios');
        }, 1000);
      }
    } catch (error) {
      // Silencioso - auto-finalização não deve mostrar erros ao usuário
    }
  };
  
  // Função para gerar EDL (cria relatório no banco e abre modal)
  const handleFinalizar = async () => {
    // Evitar dupla submissão
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      
      // Extrair ID numérico
      let idArquivo: number | null = null;
      
      if (id.startsWith('db-')) {
        idArquivo = parseInt(id.replace('db-', ''), 10);
      } else if (id.startsWith('upload-')) {
        // ID de upload local - apenas gerar EDL localmente, sem salvar no banco
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

      // Calcular contadores de validação
      const totalMusicas = currentMusicData?.length || 0;
      const musicasAprovadas = Object.values(validatedSongs).filter(status => status === 'approved').length;
      const musicasRejeitadas = Object.values(validatedSongs).filter(status => status === 'rejected').length;

      // Criar relatório EDL no banco
      const response = await fetch(`http://127.0.0.1:8000/arquivo/${idArquivo}/finalizar`, {
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
        // Abrir modal EDL
        handleGenerateEdl();
        
        // Redirecionar para a página de relatórios após 2 segundos
        setTimeout(() => {
          router.push('/relatorios');
        }, 2000);
      } else {
        const error = await response.json();
        alert(`Erro ao finalizar arquivo: ${error.details || error.error}`);
        setIsSubmitting(false);
      }
    } catch (error) {
      alert('Erro ao finalizar arquivo.');
      setIsSubmitting(false);
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

  // Estado de erro ou sem músicas - só mostrar se realmente não houver dados
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
          fileName={validationTitle}
          validationTitle={validationTitle}
          musicData={currentMusicData}
          validatedSongs={validatedSongs}
        />
      </div>
    </PageLayout>
  );
}
