"use client";

import { useState, useMemo } from "react";
import { Button } from "@heroui/button";

interface MusicData {
  musica: string;
  efeitoSonoro?: string;
  artista: string;
  interprete: string;
  gravadora: string;
  tempoInicio: string;
  tempoFim: string;
  isrc: string;
  tempoTotal: string;
}

interface EDLDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
  fileName: string;
  validationTitle: string;
  musicData?: MusicData[];
  validatedSongs?: Record<number, 'approved' | 'rejected'>;
  totalMusicas?: number;
  musicasAprovadas?: number;
  musicasRejeitadas?: number;
  duracaoArquivo?: number;
}

const EDLDownloadModal = ({ 
  isOpen, 
  onClose,
  onDownload,
  fileName, 
  validationTitle,
  musicData = [],
  validatedSongs = {},
  totalMusicas,
  musicasAprovadas,
  musicasRejeitadas,
  duracaoArquivo
}: EDLDownloadModalProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Calcular estatísticas
  const stats = useMemo(() => {
    let approved: number;
    let rejected: number;
    let total: number;
    
    // Se os contadores foram passados como props (vindo do relatório EDL), usar eles
    if (totalMusicas !== undefined && musicasAprovadas !== undefined && musicasRejeitadas !== undefined) {
      approved = musicasAprovadas;
      rejected = musicasRejeitadas;
      total = totalMusicas;
    } else {
      // Caso contrário, calcular dos dados locais
      approved = Object.values(validatedSongs).filter(status => status === 'approved').length;
      rejected = Object.values(validatedSongs).filter(status => status === 'rejected').length;
      total = musicData.length;
    }
    
    // Calcular duração total do arquivo
    let totalSeconds = 0;
    
    // Se duracaoArquivo foi passada (arquivo do banco), usar ela
    if (duracaoArquivo && duracaoArquivo > 0) {
      totalSeconds = duracaoArquivo;
    } else {
      // Caso contrário, tentar pegar do localStorage (upload novo)
      try {
        const uploadResults = localStorage.getItem('uploadResults');
        if (uploadResults) {
          const data = JSON.parse(uploadResults);
          // Calcular baseado nos dados completos: segundosPorSegmento * quantidadeSegmentos
          if (data.segundosPorSegmento && data.quantidadeSegmentos) {
            totalSeconds = data.segundosPorSegmento * data.quantidadeSegmentos;
          }
        }
      } catch (e) {
        // Erro ao buscar localStorage
      }
    }
    
    // Se não conseguiu do localStorage, calcular pelo maior tempoFim das músicas
    if (totalSeconds === 0 && musicData.length > 0) {
      musicData.forEach((music) => {
        if (music.tempoFim && music.tempoFim !== '--:--' && music.tempoFim !== '00:00') {
          try {
            const timeParts = music.tempoFim.split(':');
            if (timeParts.length === 2) {
              const mins = parseInt(timeParts[0], 10);
              const secs = parseInt(timeParts[1], 10);
              if (!isNaN(mins) && !isNaN(secs)) {
                const musicEndSeconds = (mins * 60) + secs;
                if (musicEndSeconds > totalSeconds) {
                  totalSeconds = musicEndSeconds;
                }
              }
            }
          } catch (e) {
            // Erro ao processar tempo
          }
        }
      });
    }
    
    const totalMins = Math.floor(totalSeconds / 60);
    const totalSecs = totalSeconds % 60;
    const duration = totalSeconds > 0 
      ? `${totalMins.toString().padStart(2, '0')}:${totalSecs.toString().padStart(2, '0')}`
      : '';
    
    return { approved, rejected, total, duration };
  }, [musicData, validatedSongs, totalMusicas, musicasAprovadas, musicasRejeitadas]);

  // Função para converter MM:SS em timecode (HH:MM:SS:FF)
  const timeToTimecode = (time: string): string => {
    if (!time || time === '--:--' || time === '00:00') return '00:00:00:00';
    const [mins, secs] = time.split(':').map(Number);
    const totalSecs = (mins * 60) + secs;
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:00`;
  };

  const handleDownloadEDL = () => {



    setIsDownloading(true);
    
    setTimeout(() => {
      // Cabeçalho do EDL
      let edlContent = `TÍTULO: ${validationTitle}
FORMATO: NON-DROP FRAME
CRIADO EM: ${new Date().toLocaleString('pt-BR')}
PROJETO: Globo Residência - Validação Musical
ARQUIVO: ${fileName}

===================================================================
MÚSICAS VALIDADAS
===================================================================

`;

      // Adicionar cada música validada
      let eventNumber = 1;
      musicData.forEach((music, index) => {
        const status = validatedSongs[index];
        
        // Apenas incluir músicas aprovadas no EDL
        if (status === 'approved') {
          edlContent += `MÚSICA ${eventNumber}
────────────────────────────────────────────────────────────────
NOME DO ARQUIVO: ${fileName}
MÚSICA: ${music.musica || 'Não identificada'}
ARTISTA: ${music.artista || 'Desconhecido'}
INTÉRPRETE: ${music.interprete || 'Não identificado'}
GRAVADORA: ${music.gravadora || 'Não identificada'}
ISRC: ${music.isrc || 'N/A'}
DURAÇÃO: ${music.tempoTotal || '00:00'}
INÍCIO: ${music.tempoInicio || '00:00'}
FIM: ${music.tempoFim || '00:00'}
STATUS: APROVADA

`;
          eventNumber++;
        }
      });

      // Adicionar resumo ao final
      edlContent += `
===================================================================
RESUMO DA VALIDAÇÃO
===================================================================

Total de Músicas: ${stats.total}
Músicas Aprovadas: ${stats.approved}
Músicas Rejeitadas: ${stats.rejected}
Duração Total do Arquivo: ${stats.duration || '00:00'}

Data de Validação: ${new Date().toLocaleString('pt-BR')}
Validado por: Sistema ContagIA

===================================================================

`;

      // Se houver músicas rejeitadas, adicionar seção de rejeitadas
      const rejectedMusics = musicData.filter((_, index) => validatedSongs[index] === 'rejected');
      if (rejectedMusics.length > 0) {
        edlContent += `
MÚSICAS REJEITADAS (Não incluídas no EDL)
===================================================================

`;
        rejectedMusics.forEach((music, idx) => {
          edlContent += `${idx + 1}. ${music.musica || 'Não identificada'} - ${music.artista || 'Desconhecido'}
   Tempo: ${music.tempoInicio} - ${music.tempoFim}
   ISRC: ${music.isrc || 'N/A'}

`;
        });
      }

      // Criar e fazer download do arquivo


      const blob = new Blob([edlContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      const safeFileName = validationTitle.replace(/[^a-zA-Z0-9-_]/g, '_');
      link.download = `${safeFileName}_EDL.txt`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setIsDownloading(false);
      
      // Chamar callback de download se existir
      if (onDownload) {
        onDownload();
      }
      
      // Fechar o modal após download
      setTimeout(() => {
        onClose();
      }, 500);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300">
      <div 
        className="rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4 border border-white/20 animate-in zoom-in-95 duration-300 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/Home.png)' }}
      >
        {/* Overlay escuro para melhor legibilidade do conteúdo */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        <div className="relative z-10">
        {/* Ícone de sucesso fixo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
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
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <p className="text-white/80 text-xs">Total</p>
            <p className="text-white font-bold text-lg">{stats.total}</p>
          </div>
          <div className="bg-green-500/20 rounded-lg p-3 text-center border border-green-500/30">
            <p className="text-white/80 text-xs">Aprovadas</p>
            <p className="text-green-400 font-bold text-lg">{stats.approved}</p>
          </div>
          <div className="bg-red-500/20 rounded-lg p-3 text-center border border-red-500/30">
            <p className="text-white/80 text-xs">Rejeitadas</p>
            <p className="text-red-400 font-bold text-lg">{stats.rejected}</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-3 mb-6 text-center">
          <p className="text-white/80 text-xs">Duração Total do Arquivo</p>
          <p className="text-white font-bold text-xl">{stats.duration || '00:00'}</p>
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
            {stats.approved > 0 
              ? `O arquivo EDL contém ${stats.approved} música(s) aprovada(s) com todas as informações detalhadas`
              : 'Nenhuma música foi aprovada para inclusão no EDL'}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EDLDownloadModal;
