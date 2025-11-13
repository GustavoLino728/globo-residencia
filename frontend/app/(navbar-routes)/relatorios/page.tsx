"use client";

import VideoCarousel from "@/components/videoCarossel";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useMemo } from "react";
import { notFinishedVideos, finishedVideos, VideoInfo } from "@/data/videoMocks";
import EDLDownloadModal from "@/components/edlDownloadModal";
import { getArquivosPorStatus } from "@/config/api";

const Index = () => {
  const router = useRouter();
  const [uploadResults, setUploadResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showClearMessage, setShowClearMessage] = useState(false);
  const [modalData, setModalData] = useState<{ id: string, title: string } | null>(null);
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

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      try {
        // Buscar arquivos do banco
        const [naoFinalizados, finalizados] = await Promise.all([
          getArquivosPorStatus('Não Finalizado'),
          getArquivosPorStatus('Finalizado')
        ]);

        // Converter para VideoInfo
        setDbVideosNaoFinalizados(naoFinalizados.map(arquivoToVideoInfo));
        setDbVideosFinalizados(finalizados.map(arquivoToVideoInfo));

        console.log(`✅ Carregados ${naoFinalizados.length} arquivos não finalizados e ${finalizados.length} finalizados do banco`);
      } catch (error) {
        console.error('❌ Erro ao buscar arquivos do banco:', error);
        // Em caso de erro, usar dados de fallback
      }

      // Recuperar resultados do localStorage (fallback para uploads locais)
      const results = localStorage.getItem("uploadResults");
      const uploadId = localStorage.getItem("lastUploadId");
      const fileName = localStorage.getItem("uploadFileName");
      
      if (results) {
        try {
          const parsedResults = JSON.parse(results);
          setUploadResults(parsedResults);
          
          // Se há um upload recente, adicionar à lista de não finalizados (se não veio do banco)
          if (uploadId && fileName && !uploadId.startsWith('db-')) {
            const uploadVideo: VideoInfo = {
              id: uploadId,
              thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
              title: fileName,
              duration: parsedResults.segundosPorSegmento && parsedResults.quantidadeSegmentos
                ? formatDuration(parsedResults.segundosPorSegmento * parsedResults.quantidadeSegmentos)
                : "00:00",
            };
            
            // Verificar se já não existe na lista
            setUploadedVideos(prev => {
              const exists = prev.some(v => v.id === uploadId);
              if (exists) return prev;
              return [uploadVideo, ...prev];
            });
          }
        } catch (e) {
          console.error("Erro ao processar resultados do upload:", e);
        }
      }
      
      setLoading(false);
    };

    loadData();
  }, []);

  // Combinar vídeos não finalizados: banco + localStorage + mocks
  const allNotFinishedVideos = useMemo(() => {
    return [...dbVideosNaoFinalizados, ...uploadedVideos, ...notFinishedVideos];
  }, [dbVideosNaoFinalizados, uploadedVideos]);

  // Combinar vídeos finalizados: banco + mocks
  const allFinishedVideos = useMemo(() => {
    return [...dbVideosFinalizados, ...finishedVideos];
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
      
      // Feedback no console
      console.log("Resultados limpos com sucesso!");
    }
  };

  const handleVideoClick = useCallback((id: string, title: string) => {
    router.push(`/relatorios/validacao/${id}?title=${encodeURIComponent(title)}`);
  }, [router]);

  const handleFinishedVideoClick = useCallback((id: string, title: string) => {
    setModalData({ id, title });
  }, []);

  // Função para renderizar os resultados do upload
  const renderUploadResults = () => {
    if (!uploadResults) return null;

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Resultados do Último Upload</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-2 text-white">Informações Gerais</h3>
            <p><span className="font-semibold">Quantidade de Segmentos:</span> {uploadResults.quantidadeSegmentos}</p>
            <p><span className="font-semibold">Segundos por Segmento:</span> {uploadResults.segundosPorSegmento}</p>
            <p><span className="font-semibold">Músicas Encontradas:</span> {uploadResults.quantidadeMusicasEncontradas || 'N/A'}</p>
          </div>
          
          {uploadResults.musicas && uploadResults.musicas.length > 0 && (
            <div className="bg-white/5 rounded-xl p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">Músicas Identificadas</h3>
              <div className="max-h-80 overflow-y-auto pr-2">
                {uploadResults.musicas.map((musica: any, index: number) => (
                  <div key={index} className="mb-3 p-3 bg-white/10 rounded-lg">
                    <p><span className="font-semibold">Título:</span> {musica.titulo || 'Desconhecido'}</p>
                    <p><span className="font-semibold">Artista:</span> {musica.artista || 'Desconhecido'}</p>
                    <p><span className="font-semibold">Tempo:</span> {formatTime(musica.inicioSegundos)} - {formatTime(musica.fimSegundos)}</p>
                    {musica.isrc && <p><span className="font-semibold">ISRC:</span> {musica.isrc}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleClearResults}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors font-semibold shadow-lg hover:shadow-xl"
        >
          Limpar Resultados
        </button>
      </div>
    );
  };

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
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            {uploadResults && (
              <GlassCard>
                {renderUploadResults()}
              </GlassCard>
            )}
            
            <GlassCard>
              <VideoCarousel 
                title="Não Finalizados" 
                videos={allNotFinishedVideos} 
                onVideoClick={handleVideoClick}
              />
            </GlassCard>
            
            <GlassCard>
              <VideoCarousel 
                title="Finalizados" 
                videos={allFinishedVideos} 
                onVideoClick={handleFinishedVideoClick}
              />
            </GlassCard>
          </>
        )}
      </div>

      <EDLDownloadModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)} 
        fileName={modalData?.id || ""} 
        validationTitle={modalData?.title || ""}
        musicData={[]}
        validatedSongs={{}}
      />
    </PageLayout>
  );
};

export default Index;
