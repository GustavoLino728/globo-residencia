"use client";

import VideoCarousel from "@/components/videoCarossel";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import EDLDownloadModal from "@/components/edlDownloadModal";
import { notFinishedVideos, finishedVideos } from "@/data/videoMock";

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
    <PageLayout title="Relatórios">
      <div className="max-w-7xl mx-auto space-y-8">
        <GlassCard>
          <VideoCarousel 
            title="Não Finalizados" 
            videos={notFinishedVideos} 
            onVideoClick={handleVideoClick}
          />
        </GlassCard>
        
        <GlassCard>
          <VideoCarousel 
            title="Finalizados" 
            videos={finishedVideos} 
            onVideoClick={handleFinishedVideoClick}
          />
        </GlassCard>
      </div>

      <EDLDownloadModal
        isOpen={!!modalData}
        onClose={() => setModalData(null)} 
        fileName={modalData?.id || ""} 
        validationTitle={modalData?.title || ""} 
      />
    </PageLayout>
  );
};

export default Index;
