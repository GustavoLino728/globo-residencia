"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";

interface EDLDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  validationTitle: string;
}

const EDLDownloadModal = ({ isOpen, onClose, fileName, validationTitle }: EDLDownloadModalProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadEDL = () => {
    setIsDownloading(true);
    
    // Simular geração e download do EDL
    setTimeout(() => {
      // Criar conteúdo do EDL mais detalhado
      const edlContent = `TITLE: ${validationTitle}
FCM: NON-DROP FRAME
CREATED: ${new Date().toISOString()}
PROJECT: Globo Residência - Validação Musical

001  V     C        00:00:00:00 00:00:05:55 00:00:00:00 00:00:05:55
* FROM CLIP NAME: ${fileName}
* MUSIC: Informação não encontrada
* ARTIST: Artista desconhecido
* INTERPRETER: Intérprete não identificado
* RECORD_LABEL: Gravadora não identificada
* ISRC: N/A
* DURATION: 00:00:05:55
* STATUS: VALIDATED

002  V     C        00:00:05:55 00:00:08:03 00:00:05:55 00:00:08:03
* FROM CLIP NAME: ${fileName}
* MUSIC: We Will Rock You
* ARTIST: Queen
* INTERPRETER: Freddie Mercury
* RECORD_LABEL: EMI Records
* ISRC: GBUM71029679
* DURATION: 00:00:02:08
* STATUS: VALIDATED

003  V     C        00:00:08:03 00:00:11:10 00:00:08:03 00:00:11:10
* FROM CLIP NAME: ${fileName}
* MUSIC: Imagine
* ARTIST: John Lennon
* INTERPRETER: John Lennon
* RECORD_LABEL: Apple Records
* ISRC: USRC17607839
* DURATION: 00:00:03:07
* STATUS: VALIDATED

`;

      // Criar blob e fazer download
      const blob = new Blob([edlContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${validationTitle.replace(/[^a-zA-Z0-9]/g, '_')}_EDL.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setIsDownloading(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4 border border-white/20 animate-in zoom-in-95 duration-300">
        {/* Ícone de sucesso com animação */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Validação Concluída!
        </h2>

        {/* Descrição */}
        <p className="text-white/80 text-center mb-6">
          Todas as músicas foram validadas com sucesso. O arquivo EDL está pronto para download.
        </p>

        {/* Informações do arquivo */}
        <div className="bg-white/10 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{validationTitle}</p>
              <p className="text-white/60 text-xs">Arquivo EDL (.txt)</p>
              <p className="text-white/50 text-xs mt-1">Gerado em {new Date().toLocaleString('pt-BR')}</p>
            </div>
          </div>
        </div>

        {/* Estatísticas do EDL */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-white/80 text-xs">Músicas Validadas</p>
            <p className="text-white font-bold text-lg">3</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-white/80 text-xs">Duração Total</p>
            <p className="text-white font-bold text-lg">11:10</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex space-x-4">
          <Button
            color="primary"
            variant="solid"
            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            onPress={handleDownloadEDL}
            isLoading={isDownloading}
            disabled={isDownloading}
          >
            {isDownloading ? "Gerando EDL..." : "Baixar EDL"}
          </Button>
          
          <Button
            color="default"
            variant="flat"
            className="flex-1 bg-white/10 text-white border border-white/20"
            onPress={onClose}
          >
            Fechar
          </Button>
        </div>

        {/* Informações adicionais */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            O arquivo EDL contém todas as informações das músicas validadas
          </p>
        </div>
      </div>
    </div>
  );
};

export default EDLDownloadModal;
