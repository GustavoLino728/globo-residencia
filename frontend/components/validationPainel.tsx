// components/ValidationPanel.tsx

import React from 'react';
// Importe todos os componentes internos que ele usa
import NavigationControls from "@/components/navigationControl";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";
import ApprovalButtons from "@/components/approvalButtons";
import MusicCounter from "@/components/musicCounter";
import { Button } from "@heroui/button";

// Definição das Props (propriedades)
interface ValidationPanelProps {
  // Estado e dados
  isNewFile: boolean;
  isNewFileId: boolean;
  currentMusicData: MusicInfo[];
  currentIndex: number;
  validatedSongs: Record<number, 'approved' | 'rejected'>;
  allSongsValidated: boolean;

  // Handlers (funções de interação)
  handlePrevious: () => void;
  handleNext: () => void;
  handleApprove: () => void;
  handleReject: () => void;
  onGenerateEdl: () => void; // A função para abrir o modal
  onFinalizar?: () => void; // Nova função para finalizar o arquivo (opcional)
}

// O componente em si
export default function ValidationPanel({
  isNewFile,
  isNewFileId,
  currentMusicData,
  currentIndex,
  validatedSongs,
  allSongsValidated,
  handlePrevious,
  handleNext,
  handleApprove,
  handleReject,
  onGenerateEdl,
  onFinalizar,
}: ValidationPanelProps) {

  // O componente NÃO precisa de useState, useEffect, ou useParams!
  // Toda a lógica de estado e roteamento fica no componente pai.

  return (
    // O div com o estilo de 'glass effect'
    <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col p-8 shadow-2xl w-full">
      
      {/* Aviso para arquivos novos - Mantido, pois usa as props isNewFile e isNewFileId */}
      {isNewFile && isNewFileId && (
        <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-yellow-200 text-sm font-medium">
              Arquivo carregado - Informações da música não identificadas pela API
            </p>
          </div>
        </div>
      )}

      {/* Navegação */}
      <NavigationControls
        currentIndex={currentIndex}
        total={currentMusicData.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {/* Cartão de Informações da Música */}
      <div className="mb-6">
        <MusicInfoCard 
          info={currentMusicData[currentIndex]} 
          validationStatus={validatedSongs[currentIndex]}
        />
      </div>

      {/* Botões de Aprovação */}
      <ApprovalButtons
        onApprove={handleApprove}
        onReject={handleReject}
      />
      
      {/* Botão Gerar EDL (visível apenas se tudo for validado) */}
      {allSongsValidated && (
        <div className="mt-8 flex justify-center">
          <Button
            color="primary"
            variant="solid"
            onPress={onFinalizar || onGenerateEdl}
            className="w-full h-12 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            Gerar EDL
          </Button>
        </div>
      )}

      {/* Contador */}
      <div className="flex justify-center">
        <MusicCounter
          current={currentIndex + 1}
          total={currentMusicData.length}
        />
      </div>
    </div>
  );
}
