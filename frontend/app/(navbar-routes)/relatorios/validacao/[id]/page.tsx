"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import EDLDownloadModal from "@/components/edlDownloadModal";
import  { VideoPlayer }  from "@/components/videoPlayer";
import { sampleMusicData, defaultUndefinedMusicData } from "@/data/musicMock";
import ValidationPanel from "@/components/validationPainel"
import ErrorState from "@/components/errorState";
import { useSearchParams } from 'next/navigation';

export default function ValidandoPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const urlTitle = searchParams.get('title');
  
  const musicInfo = sampleMusicData[id];
  const isNewFile = !musicInfo;
  const isNewFileId = id.includes('-') && id.split('-').length > 1;

  const currentMusicData = musicInfo || (
    isNewFile && isNewFileId ? defaultUndefinedMusicData : []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [validationTitle, setValidationTitle] = useState(`Validação ${id}`);
  const [validatedSongs, setValidatedSongs] = useState<Record<number, 'approved' | 'rejected'>>({});
  const [showEDLModal, setShowEDLModal] = useState(false);
  const allSongsValidated = currentMusicData ? Object.keys(validatedSongs).length === currentMusicData.length : false;
  
  const handleGenerateEdl = () => {
    console.log("Abrindo modal de download EDL...");
    setShowEDLModal(true);
  };

  useEffect(() => {
    if (urlTitle) {
      setValidationTitle(urlTitle);
    } else {
      setValidationTitle(`Validação ${id}`); 
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
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'approved' }));
    console.log("Música aprovada!");
};

const handleReject = () => {
    setValidatedSongs(prev => ({ ...prev, [currentIndex]: 'rejected' }));
    console.log("Música rejeitada!");
};

useEffect(() => {
  if (validatedSongs[currentIndex]) { 
      const hasNext = currentMusicData && currentIndex < currentMusicData.length - 1;
      if (hasNext) {
          const timer = setTimeout(() => {
              setCurrentIndex(currentIndex + 1);
          }, 500); 
          return () => clearTimeout(timer); 
      }
  }
}, [validatedSongs, currentIndex, currentMusicData]); 

  if (!currentMusicData || currentMusicData.length === 0) {
    return (
      <ErrorState
        id={id} 
        isNewFile={isNewFile} 
        isNewFileId={isNewFileId} 
        sampleMusicData={sampleMusicData}
      />
    );
  }

  return (
    <div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      
      <main className="flex-1 p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          {validationTitle}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto">

          <VideoPlayer/>

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
          />
        </div>

      </main>

      <EDLDownloadModal
        isOpen={showEDLModal}
        onClose={() => setShowEDLModal(false)}
        fileName={validationTitle}
        validationTitle={validationTitle}
      />
    </div>
  );
}
