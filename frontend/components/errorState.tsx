import React from 'react';

type SampleMusicData = Record<string, any>; 

interface ErrorStateProps {
  id: string;
  isNewFile: boolean;
  isNewFileId: boolean;

  sampleMusicData: SampleMusicData; 
}

export default function ErrorState({
  id,
  isNewFile,
  isNewFileId,
  sampleMusicData,
}: ErrorStateProps) {

  // Lógica de determinação da mensagem (baseada no seu código original)
  const isProcessing = isNewFile && isNewFileId;
  
  const title = isProcessing ? "Arquivo em processamento" : "Conteúdo não encontrado";
  
  const message = isProcessing
    ? "O arquivo foi carregado mas ainda não foi processado pela API. As informações da música aparecerão como 'não encontradas'."
    : `O ID "${id}" não corresponde a nenhuma validação disponível.`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {title}
        </h2>
        <p className="text-muted-foreground">
          {message}
        </p>
      </div>

      {/* Exibe a lista de IDs de mock SOMENTE se não for um arquivo novo (ou seja, se o ID for inválido) */}
      {!isNewFile && ( 
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">
            IDs disponíveis para teste:
          </p>
          <div className="flex gap-2 flex-wrap justify-center">
            {Object.keys(sampleMusicData).map((availableId) => (
              <span
                key={availableId}
                className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
              >
                {availableId}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
