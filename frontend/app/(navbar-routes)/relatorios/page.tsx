"use client";
import VideoCarousel from "@/components/videoCarossel";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { notFinishedVideos, finishedVideos } from "@/data/videoMocks";

const Index = () => {
  const router = useRouter();
  const [uploadResults, setUploadResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showClearMessage, setShowClearMessage] = useState(false);

  useEffect(() => {
    // Recuperar resultados do localStorage
    const results = localStorage.getItem("uploadResults");
    if (results) {
      try {
        const parsedResults = JSON.parse(results);
        setUploadResults(parsedResults);
      } catch (e) {
        console.error("Erro ao processar resultados do upload:", e);
      }
    }
    setLoading(false);
  }, []);

  // Função para limpar os resultados
  const handleClearResults = () => {
    // Perguntar confirmação ao usuário
    const confirmed = window.confirm("Tem certeza que deseja limpar todos os resultados do último upload?");
    
    if (confirmed) {
      // Remover do localStorage
      localStorage.removeItem("uploadResults");
      
      // Atualizar o estado para remover da visualização
      setUploadResults(null);
      
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

  // Função para navegar para a página de validação
  const handleVideoClick = (id: string, title: string) => {
    // Armazenar o título na sessionStorage para usar na página de validação
    sessionStorage.setItem('validationTitle', title);
    router.push(`/relatorios/validacao/${id}`);
  };

  // Função para renderizar os resultados do upload
  const renderUploadResults = () => {
    if (!uploadResults) return null;

    return (
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl mb-8">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      {/* Mensagem de sucesso ao limpar resultados */}
      {showClearMessage && (
        <div className="fixed top-8 right-8 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-semibold">Resultados limpos com sucesso!</span>
        </div>
      )}
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Relatórios
        </h1>

        <div className="max-w-7xl mx-auto space-y-8">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              {renderUploadResults()}
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <VideoCarousel 
                  title="Não Finalizados" 
                  videos={notFinishedVideos} 
                  onVideoClick={handleVideoClick}
                />
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                <VideoCarousel title="Finalizados" videos={finishedVideos} />
              </div>
            </>
          )}
        </div>
      </main>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Index;
