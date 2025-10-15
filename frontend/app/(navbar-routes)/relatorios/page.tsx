"use client";
import VideoCarousel from "@/components/videoCarossel";
import { useRouter } from "next/navigation";
import { notFinishedVideos, finishedVideos } from "@/data/videoMocks"; 

const Index = () => {
  const router = useRouter();

  // Função para navegar para a página de validação
  const handleVideoClick = (id: string, title: string) => {
    // Armazenar o título na sessionStorage para usar na página de validação
    sessionStorage.setItem('validationTitle', title);
    router.push(`/relatorios/validacao/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Relatórios
        </h1>

        <div className="max-w-7xl mx-auto space-y-8">
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
        </div>
      </main>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Index;
