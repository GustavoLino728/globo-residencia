"use client";

import VideoCarousel from "@/components/videoCarossel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import EDLDownloadModal from "@/components/edlDownloadModal";

const Index = () => {
  const router = useRouter();
  const [modalData, setModalData] = useState<{ id: string, title: string } | null>(null);

  // Mock data for videos
  const notFinishedVideos = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
      title: "Entrevista ao vivo com especialista em tecnologia",
      duration: "45:12",
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=225&fit=crop",
      title: "Análise das últimas notícias do mercado",
      duration: "28:45",
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=225&fit=crop",
      title: "Debate sobre economia global",
      duration: "52:30",
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400&h=225&fit=crop",
      title: "Cobertura especial de eventos corporativos",
      duration: "35:18",
    },
    {
      id: "5",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop",
      title: "Transmissão ao vivo do estúdio",
      duration: "41:05",
    },
  ];

  const finishedVideos = [
    {
      id: "6",
      thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=225&fit=crop",
      title: "Reportagem completa sobre inovação",
      duration: "18:22",
    },
    {
      id: "7",
      thumbnail: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=225&fit=crop",
      title: "Entrevista exclusiva com CEO",
      duration: "25:40",
    },
    {
      id: "8",
      thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&h=225&fit=crop",
      title: "Documentário sobre transformação digital",
      duration: "42:15",
    },
    {
      id: "9",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
      title: "Mesa redonda sobre liderança",
      duration: "33:50",
    },
    {
      id: "10",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop",
      title: "Seminário de estratégia empresarial",
      duration: "55:12",
    },
  ];

  const handleVideoClick = useCallback((id: string, title: string) => {
    router.push(`/relatorios/validacao/${id}?title=${encodeURIComponent(title)}`);
  }, [router]);

  const handleFinishedVideoClick = useCallback((id: string, title: string) => {
    setModalData({ id, title });
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Home.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
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
            <VideoCarousel 
            title="Finalizados" 
            videos={finishedVideos} 
            onVideoClick={handleFinishedVideoClick}
            />
          </div>
        </div>
      </main>

      <EDLDownloadModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)} 
        fileName={modalData?.id || ""} 
        validationTitle={modalData?.title || ""} 
      />

    </div>
  );
};

export default Index;
