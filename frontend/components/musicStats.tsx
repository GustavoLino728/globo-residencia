"use client";
import { Card, CardBody } from "@heroui/card";
import { MusicInfo } from "./validationCard";
import { useMemo } from "react";

interface MusicStatsProps {
  musicData: MusicInfo[];
  showFrequency?: boolean;
}

interface MusicUsage {
  musica: string;
  artista: string;
  count: number;
  totalDuration: number;
  gravadora: string;
}

const MusicStats = ({ musicData, showFrequency = true }: MusicStatsProps) => {
  // Otimizar cálculos com useMemo
  const { sortedMusic, totalMusics, uniqueMusics, totalDuration } = useMemo(() => {
    // Processar dados para encontrar músicas mais utilizadas
    const musicUsageMap = new Map<string, MusicUsage>();

    musicData.forEach(music => {
      const key = `${music.musica}-${music.artista}`;
      if (musicUsageMap.has(key)) {
        const existing = musicUsageMap.get(key)!;
        existing.count += 1;
        existing.totalDuration += parseTimeToSeconds(music.tempoTotal);
      } else {
        musicUsageMap.set(key, {
          musica: music.musica,
          artista: music.artista,
          count: 1,
          totalDuration: parseTimeToSeconds(music.tempoTotal),
          gravadora: music.gravadora
        });
      }
    });

    // Converter para array e ordenar por frequência
    const sortedMusic = Array.from(musicUsageMap.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 10); // Top 10

    // Calcular estatísticas gerais
    const totalMusics = musicData.length;
    const uniqueMusics = musicUsageMap.size;
    const totalDuration = musicData.reduce((acc, music) => 
      acc + parseTimeToSeconds(music.tempoTotal), 0);

    return { sortedMusic, totalMusics, uniqueMusics, totalDuration };
  }, [musicData]);

  return (
    <div className="space-y-4">
        {/* Cards de estatísticas gerais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <Card className="bg-gradient-to-br from-purple-500/15 to-pink-500/15 border border-purple-500/25">
            <CardBody className="text-center p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{totalMusics}</div>
              <div className="text-white/80 text-xs md:text-sm">Total de Músicas</div>
            </CardBody>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/15 to-cyan-500/15 border border-blue-500/25">
            <CardBody className="text-center p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{uniqueMusics}</div>
              <div className="text-white/80 text-xs md:text-sm">Músicas Únicas</div>
            </CardBody>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/15 to-emerald-500/15 border border-green-500/25">
            <CardBody className="text-center p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{formatTime(totalDuration)}</div>
              <div className="text-white/80 text-xs md:text-sm">Duração Total</div>
            </CardBody>
          </Card>
        </div>

      {/* Top músicas mais utilizadas */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-3 md:p-4">
          <h3 className="text-sm md:text-base font-semibold text-white mb-3">Músicas Mais Utilizadas</h3>
          <div className="space-y-2">
            {sortedMusic.slice(0, 5).map((music, index) => (
              <div key={`${music.musica}-${music.artista}`} 
                   className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-[9px]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs md:text-sm">{music.musica}</div>
                    <div className="text-white/70 text-[11px] md:text-xs">{music.artista}</div>
                    <div className="text-white/50 text-[10px] md:text-xs hidden md:block">{music.gravadora}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-xs md:text-sm">{music.count}x</div>
                  <div className="text-white/70 text-[11px] md:text-xs">{formatTime(music.totalDuration)}</div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Gráfico de barras simples */}
      {showFrequency && (
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
          <CardBody className="p-3 md:p-4">
            <h3 className="text-xs md:text-sm font-semibold text-white mb-2">Frequência de Uso</h3>
            <div className="space-y-2">
              {sortedMusic.slice(0, 4).map((music, index) => {
                const maxCount = sortedMusic[0].count;
                const percentage = (music.count / maxCount) * 100;
                
                return (
                  <div key={`${music.musica}-${music.artista}`} className="space-y-1.5">
                    <div className="flex justify-between text-[11px] md:text-xs text-white/80">
                      <span className="truncate max-w-[160px] md:max-w-[200px]">{music.musica}</span>
                      <span>{music.count}x</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-md h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-md transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

// Função auxiliar para converter tempo para segundos
function parseTimeToSeconds(timeString: string): number {
  if (!timeString) return 0;
  
  const parts = timeString.split(':');
  if (parts.length === 2) {
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }
  return 0;
}

// Função auxiliar para formatar tempo
function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

export default MusicStats;
