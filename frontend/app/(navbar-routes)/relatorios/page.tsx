"use client";

import VideoCarousel from "@/components/videoCarossel";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useMemo } from "react";
import { VideoInfo } from "@/data/videoMocks";
import EDLDownloadModal from "@/components/edlDownloadModal";
import { getArquivosPorStatus } from "@/config/api";

const Index = () => {
  const router = useRouter();
  const [uploadResults, setUploadResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showClearMessage, setShowClearMessage] = useState(false);
  const [modalData, setModalData] = useState<{ 
    id: string; 
    title: string;
    musicData?: any[];
    validatedSongs?: Record<number, 'approved' | 'rejected'>;
    totalMusicas?: number; 
    musicasAprovadas?: number; 
    musicasRejeitadas?: number;
    duracaoArquivo?: number;
  } | null>(null);
  const [uploadedVideos, setUploadedVideos] = useState<VideoInfo[]>([]);
  const [dbVideosNaoFinalizados, setDbVideosNaoFinalizados] = useState<VideoInfo[]>([]);
  const [dbVideosFinalizados, setDbVideosFinalizados] = useState<VideoInfo[]>([]);

  // Função para formatar duração em MM:SS
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Função para converter arquivo do banco em VideoInfo
  const arquivoToVideoInfo = (arquivo: any): VideoInfo => ({
    id: `db-${arquivo.id_arquivo}`,
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
    title: arquivo.nome_original_arquivo,
    duration: arquivo.duracao_segundos ? formatDuration(arquivo.duracao_segundos) : "00:00",
  });

  // Função para carregar dados
  const loadData = useCallback(async () => {
    setLoading(true);
    
    try {
      // Buscar TODOS os arquivos do banco
      const response = await fetch('http://127.0.0.1:8000/arquivos', {
          method: 'GET',
          mode: 'cors',
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar arquivos: ${response.status}`);
        }

        const data = await response.json();
        const todosArquivos = data.arquivos || [];
        
        // Criar Set de IDs para deduplicação
        const idsNoBanco = new Set(todosArquivos.map((arq: any) => arq.id_arquivo));

        // Separar por status (EXCLUSIVAMENTE baseado no status do banco)
        const naoFinalizados = todosArquivos.filter((arq: any) => 
          arq.status === 'Não Finalizado' || arq.status === 'Em Processamento' || arq.status === 'Erro'
        );

        // Converter arquivos não finalizados
        const videosNaoFinalizados = naoFinalizados.map(arquivoToVideoInfo);
        setDbVideosNaoFinalizados(videosNaoFinalizados);

        // Buscar arquivos finalizados com id_relatorio
        const finalizadosResponse = await fetch('http://127.0.0.1:8000/arquivos-finalizados', {
          method: 'GET',
          mode: 'cors',
        });

        if (finalizadosResponse.ok) {
          const finalizadosData = await finalizadosResponse.json();
          const videosFinalizados = (finalizadosData.arquivos || [])
            .map((arq: any) => ({
              id: `db-${arq.id_arquivo}`,
              thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
              title: arq.nome_original_arquivo,
              duration: arq.duracao_segundos ? formatDuration(arq.duracao_segundos) : "00:00",
              idRelatorio: arq.id_relatorio // Pode ser null
            }));
          setDbVideosFinalizados(videosFinalizados);
        } else {
          // Fallback
          const finalizados = todosArquivos.filter((arq: any) => arq.status === 'Finalizado');
          const videosFinalizados = finalizados.map(arquivoToVideoInfo);
          setDbVideosFinalizados(videosFinalizados);
        }

        // Limpar localStorage se o arquivo já está no banco
        const lastUploadId = localStorage.getItem("lastUploadId");
        if (lastUploadId) {
          // Extrair ID numérico do lastUploadId se for do tipo "upload-123"
          const numericId = parseInt(lastUploadId.replace('upload-', ''), 10);
          if (!isNaN(numericId) && idsNoBanco.has(numericId)) {
            localStorage.removeItem("uploadResults");
            localStorage.removeItem("lastUploadId");
            localStorage.removeItem("uploadFileName");
          }
        }
      } catch (error) {
        // Erro ao buscar arquivos
      }
      
      setLoading(false);
    }, []);

  useEffect(() => {
    loadData();
    
    // Recarregar dados quando a página ficar visível
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadData();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [loadData]);

  // APENAS vídeos do banco de dados (sem duplicatas, sem localStorage)
  const allNotFinishedVideos = useMemo(() => {
    // Remover duplicatas por ID usando Map
    const uniqueVideos = new Map<string, VideoInfo>();
    
    dbVideosNaoFinalizados.forEach(video => {
      uniqueVideos.set(video.id, video);
    });
    
    return Array.from(uniqueVideos.values());
  }, [dbVideosNaoFinalizados]);

  // APENAS vídeos finalizados do banco (sem duplicatas)
  const allFinishedVideos = useMemo(() => {
    // Remover duplicatas por ID usando Map
    const uniqueVideos = new Map<string, VideoInfo>();
    
    dbVideosFinalizados.forEach(video => {
      uniqueVideos.set(video.id, video);
    });
    
    return Array.from(uniqueVideos.values());
  }, [dbVideosFinalizados]);

  // Função para limpar os resultados
  const handleClearResults = () => {
    // Perguntar confirmação ao usuário
    const confirmed = window.confirm("Tem certeza que deseja limpar todos os resultados do último upload?");
    
    if (confirmed) {
      // Obter o ID do último upload antes de limpar
      const uploadId = localStorage.getItem("lastUploadId");
      
      // Remover do localStorage
      localStorage.removeItem("uploadResults");
      localStorage.removeItem("lastUploadId");
      localStorage.removeItem("uploadFileName");
      
      // Atualizar o estado para remover da visualização
      setUploadResults(null);
      
      // Remover da lista de vídeos não finalizados
      if (uploadId) {
        setUploadedVideos(prev => prev.filter(v => v.id !== uploadId));
      }
      
      // Mostrar mensagem de sucesso
      setShowClearMessage(true);
      
      // Esconder a mensagem após 3 segundos
      setTimeout(() => {
        setShowClearMessage(false);
      }, 3000);
    }
  };

  const handleVideoClick = useCallback((id: string, title: string) => {
    router.push(`/relatorios/validacao/${id}?title=${encodeURIComponent(title)}`);
  }, [router]);

  const handleFinishedVideoClick = useCallback(async (id: string, title: string) => {
    // Buscar o vídeo para pegar o id_relatorio
    const video = dbVideosFinalizados.find(v => v.id === id);

    // Extrair ID numérico do arquivo
    let numericId: number;
    if (id.startsWith('db-')) {
      numericId = parseInt(id.replace('db-', ''), 10);
    } else {
      numericId = parseInt(id, 10);
    }
    
    if (isNaN(numericId) || numericId <= 0) {
      alert('ID de arquivo inválido');
      return;
    }

    try {
      // Buscar dados do arquivo com músicas
      const arquivoResponse = await fetch(`http://127.0.0.1:8000/arquivo/${numericId}`, {
        method: 'GET',
        mode: 'cors',
      });

      let musicData: any[] = [];
      let duracaoArquivo = 0;

      if (arquivoResponse.ok) {
        const arquivoData = await arquivoResponse.json();
        
        // Pegar duração do arquivo
        if (arquivoData.arquivo && arquivoData.arquivo.duracao_segundos) {
          duracaoArquivo = arquivoData.arquivo.duracao_segundos;
        }
        
        // Formatar músicas para o modal
        if (arquivoData.musicas && arquivoData.musicas.length > 0) {
          musicData = arquivoData.musicas.map((musica: any) => ({
            musica: musica.titulo || 'Música Desconhecida',
            efeitoSonoro: musica.efeito_sonoro ? 'Sim' : undefined,
            artista: musica.artista || 'Artista Desconhecido',
            interprete: musica.artista || 'Artista Desconhecido',
            gravadora: musica.gravadora || 'Gravadora Desconhecida',
            tempoInicio: formatTime(musica.timestamp_inicio_seg || 0),
            tempoFim: formatTime(musica.timestamp_fim_seg || 0),
            isrc: musica.isrc || 'N/A',
            tempoTotal: formatTime((musica.timestamp_fim_seg || 0) - (musica.timestamp_inicio_seg || 0))
          }));
        }
      }

      // Verificar se existe id_relatorio antes de buscar
      if (video?.idRelatorio) {
        // Buscar dados do relatório EDL pelo id_relatorio
        const response = await fetch(`http://127.0.0.1:8000/relatorio/${video.idRelatorio}`, {
          method: 'GET',
          mode: 'cors',
        });

        if (response.ok) {
          const relatorio = await response.json();

          // Para arquivos finalizados, todas as músicas retornadas são aprovadas
          const validatedSongs: Record<number, 'approved' | 'rejected'> = {};
          musicData.forEach((_, index) => {
            validatedSongs[index] = 'approved';
          });

          setModalData({
            id, 
            title,
            musicData,
            validatedSongs,
            totalMusicas: relatorio.total_musicas,
            musicasAprovadas: relatorio.musicas_aprovadas,
            musicasRejeitadas: relatorio.musicas_rejeitadas,
            duracaoArquivo
          });
        } else {
          // Se falhar ao buscar relatório, abrir modal apenas com as músicas
          const validatedSongs: Record<number, 'approved' | 'rejected'> = {};
          musicData.forEach((_, index) => {
            validatedSongs[index] = 'approved';
          });
          
          setModalData({ 
            id, 
            title, 
            musicData,
            validatedSongs,
            totalMusicas: musicData.length, 
            musicasAprovadas: musicData.length, 
            musicasRejeitadas: 0,
            duracaoArquivo
          });
        }
      } else {
        // Arquivo finalizado mas sem relatório (finalizou apenas status)
        const validatedSongs: Record<number, 'approved' | 'rejected'> = {};
        musicData.forEach((_, index) => {
          validatedSongs[index] = 'approved';
        });
        
        setModalData({ 
          id, 
          title, 
          musicData,
          validatedSongs,
          totalMusicas: musicData.length, 
          musicasAprovadas: musicData.length, 
          musicasRejeitadas: 0,
          duracaoArquivo
        });
      }
    } catch (error) {
      console.error('Erro ao buscar dados do arquivo:', error);
      alert('Erro ao buscar dados do arquivo finalizado');
    }
  }, [dbVideosFinalizados]);

  // Remover a renderização de músicas do localStorage - agora vem apenas do banco

  // Função para formatar segundos em formato de tempo (MM:SS)
  const formatTime = (seconds: number) => {
    if (!seconds && seconds !== 0) return '--:--';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  return (
    <PageLayout title="Relatórios">
      {/* Mensagem de sucesso ao limpar resultados */}
      {showClearMessage && (
        <div className="fixed top-8 right-8 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Resultados limpos com sucesso!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        {loading ? (
          <div className="flex flex-col justify-center items-center h-32 space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            <p className="text-white/70">Carregando relatórios...</p>
          </div>
        ) : (
          <>
            <GlassCard>
              <VideoCarousel 
                title="Não Finalizados" 
                videos={allNotFinishedVideos} 
                onVideoClick={handleVideoClick}
              />
              {allNotFinishedVideos.length === 0 && (
                <div className="text-center py-8 text-white/70">
                  Nenhum arquivo não finalizado. Faça upload de um arquivo para começar.
                </div>
              )}
            </GlassCard>
            
            <GlassCard>
              <VideoCarousel 
                title="Finalizados" 
                videos={allFinishedVideos} 
                onVideoClick={handleFinishedVideoClick}
              />
              {allFinishedVideos.length === 0 && (
                <div className="text-center py-8 text-white/70">
                  Nenhum arquivo finalizado ainda.
                </div>
              )}
            </GlassCard>
          </>
        )}
      </div>

      <EDLDownloadModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)} 
        fileName={modalData?.id || ""} 
        validationTitle={modalData?.title || ""}
        musicData={modalData?.musicData || []}
        validatedSongs={modalData?.validatedSongs || {}}
        totalMusicas={modalData?.totalMusicas}
        musicasAprovadas={modalData?.musicasAprovadas}
        musicasRejeitadas={modalData?.musicasRejeitadas}
        duracaoArquivo={modalData?.duracaoArquivo}
      />
    </PageLayout>
  );
};

export default Index;
