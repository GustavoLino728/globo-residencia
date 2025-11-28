"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardBody } from "@heroui/card";

interface MusicPlayerProps {
  videoURL?: string;
  tempoInicio: string; // Formato "MM:SS"
  tempoFim: string; // Formato "MM:SS"
  musica: string;
  artista: string;
  key?: string | number; // Para forçar remontagem quando a música mudar
}

// Função para converter tempo MM:SS para segundos
function timeToSeconds(timeString: string): number {
  if (!timeString || timeString === "N/A") return 0;
  const parts = timeString.split(':');
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }
  return 0;
}

export default function MusicPlayer({ videoURL, tempoInicio, tempoFim, musica, artista }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  const startSeconds = timeToSeconds(tempoInicio);
  const endSeconds = timeToSeconds(tempoFim);
  const segmentDuration = endSeconds - startSeconds;

  // Reset quando a música mudar
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = startSeconds;
      setIsPlaying(false);
      setCurrentTime(startSeconds);
      setHasError(false);
    }
  }, [musica, artista, startSeconds]);

  // Obter URL do vídeo/áudio
  const mediaURL = videoURL || localStorage.getItem("uploadMediaURL") || localStorage.getItem("uploadSupabaseURL");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !mediaURL) return;

    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      setCurrentTime(current);

      // Se passou do tempo de fim, pausar e voltar ao início do segmento
      if (current >= endSeconds) {
        audio.pause();
        audio.currentTime = startSeconds;
        setIsPlaying(false);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      // Definir tempo inicial para o início do segmento
      audio.currentTime = startSeconds;
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, [mediaURL, startSeconds, endSeconds]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || !mediaURL) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Se não está no segmento correto, ir para o início
      if (audio.currentTime < startSeconds || audio.currentTime >= endSeconds) {
        audio.currentTime = startSeconds;
      }
      audio.play().catch(err => {
        setHasError(true);
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const seekTime = parseFloat(e.target.value);
    const clampedTime = Math.max(startSeconds, Math.min(endSeconds, seekTime));
    audio.currentTime = clampedTime;
    setCurrentTime(clampedTime);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = segmentDuration > 0 ? ((currentTime - startSeconds) / segmentDuration) * 100 : 0;

  if (!mediaURL) {
    return (
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-4">
          <div className="text-center text-white/60">
            <p className="text-sm">Nenhum arquivo de mídia disponível</p>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
      <CardBody className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">Trecho da Música</h3>
            <p className="text-white/80 text-xs">{musica}</p>
            <p className="text-white/60 text-xs">{artista}</p>
          </div>

          {hasError ? (
            <div className="text-center py-4">
              <p className="text-red-400 text-sm">Erro ao carregar o áudio</p>
              <p className="text-white/60 text-xs mt-1">Verifique se o arquivo está disponível</p>
            </div>
          ) : (
            <>
              {/* Usar audio mesmo para vídeos - o navegador extrai o áudio automaticamente */}
              <audio
                ref={audioRef}
                src={mediaURL}
                preload="metadata"
                crossOrigin="anonymous"
                onLoadedMetadata={() => {
                  if (audioRef.current) {
                    audioRef.current.currentTime = startSeconds;
                  }
                }}
                style={{ display: 'none' }}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>{formatTime(Math.max(0, currentTime - startSeconds))}</span>
                  <span>{formatTime(segmentDuration)}</span>
                </div>

                <div className="relative">
                  <div className="relative">
                    <input
                      type="range"
                      min={startSeconds}
                      max={endSeconds}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-600"
                      style={{
                        background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${progress}%, rgba(255,255,255,0.2) ${progress}%, rgba(255,255,255,0.2) 100%)`
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center transition-all"
                  >
                    {isPlaying ? (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="text-center text-xs text-white/60">
                  <p>Segmento: {tempoInicio} - {tempoFim}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

