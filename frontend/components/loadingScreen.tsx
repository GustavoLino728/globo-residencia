"use client";

import { useEffect, useState, useRef } from "react";

interface LoadingScreenProps {
  fileName: string;
  onComplete?: (data?: any) => void;
}

const LoadingScreen = ({ fileName }: LoadingScreenProps) => {
  // Definir os passos do processo
  const steps = [
    "Enviando arquivo...",
    "Processando mídia...",
    "Analisando conteúdo...",
    "Buscando músicas...",
    "Identificando faixas...",
    "Finalizando análise..."
  ];

  // Estado para controlar o progresso e o passo atual
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Refs para controlar o fluxo
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const stepIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para limpar todos os intervalos
  const clearAllIntervals = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    if (stepIntervalRef.current) {
      clearInterval(stepIntervalRef.current);
      stepIntervalRef.current = null;
    }
  };

  // Efeito para iniciar a simulação de progresso
  useEffect(() => {
    // Forçar explicitamente a 0%
    setProgress(0);
    setCurrentStep(0);
    
    // Criar intervalo para aumentar o progresso gradualmente com mais logs
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev >= 95 
          ? 95 
          : Math.min(95, prev + Math.max(0.2, (95 - prev) / 30));
        
        return newProgress;
      });
    }, 250);
    
    // Criar intervalo para avançar os passos do processo
    stepIntervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) return steps.length - 1;
        return prev + 1;
      });
    }, 2000);
    
    // Limpeza ao desmontar o componente
    return () => {
      clearAllIntervals();
    };
  }, []); // Executar apenas uma vez na montagem

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/Home.png)', borderRadius: '24px 24px 0px 0px'
      }}
    >

      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl max-w-md w-full mx-4">
        {/* Animated icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <img 
                  src="/logoGlobo.png" 
                  alt="Globo" 
                  className="w-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Processando Arquivo
        </h2>

        {/* File name */}
        <p className="text-white/80 text-center mb-8 text-sm">
          {fileName}
        </p>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Progresso</span>
            <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Current step */}
        <div className="text-center">
          <p className="text-white/90 font-medium mb-2">
            {steps[currentStep]}
          </p>
          <div className="flex justify-center space-x-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center mt-6 space-x-1">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default LoadingScreen;
