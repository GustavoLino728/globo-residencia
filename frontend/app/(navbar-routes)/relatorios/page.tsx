"use client";

import VideoCarousel from "@/components/videoCarossel";
import { useRouter } from "next/navigation";
import { notFinishedVideos, finishedVideos } from "@/data/videoMocks"; 
import { useCallback } from "react"; //
import { useState } from "react";
import EDLDownloadModal from "@/components/edlDownloadModal";

const Index = () => {
  const router = useRouter();
  const [modalData, setModalData] = useState<{ id: string, title: string } | null>(null);

  const handleVideoClick = useCallback((id: string, title: string) => {
    router.push(`/relatorios/validacao/${id}?title=${encodeURIComponent(title)}`);
  }, [router]);

  const handleFinishedVideoClick = useCallback((id: string, title: string) => {
    setModalData({ id, title });

}, []);

  return (
    <div>
      
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
