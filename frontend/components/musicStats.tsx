"use client";
import { Card, CardBody } from "@heroui/card";
import { MusicInfo } from "./validationCard";

interface MusicStatsProps {
  musicData: MusicInfo[];
}

interface MusicUsage {
  musica: string;
  artista: string;
  count: number;
  totalDuration: number;
  gravadora: string;
}

const MusicStats = ({ musicData }: MusicStatsProps) => {
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

  return (
    <div className="space-y-6">
      {/* Cards de estatísticas gerais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
          <CardBody className="text-center p-6">
            <div className="text-3xl font-bold text-white mb-2">{totalMusics}</div>
            <div className="text-white/80">Total de Músicas</div>
          </CardBody>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <CardBody className="text-center p-6">
            <div className="text-3xl font-bold text-white mb-2">{uniqueMusics}</div>
            <div className="text-white/80">Músicas Únicas</div>
          </CardBody>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
          <CardBody className="text-center p-6">
            <div className="text-3xl font-bold text-white mb-2">{formatTime(totalDuration)}</div>
            <div className="text-white/80">Duração Total</div>
          </CardBody>
        </Card>
      </div>

      {/* Top músicas mais utilizadas */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Músicas Mais Utilizadas</h3>
          <div className="space-y-4">
            {sortedMusic.map((music, index) => (
              <div key={`${music.musica}-${music.artista}`} 
                   className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{music.musica}</div>
                    <div className="text-white/70 text-sm">{music.artista}</div>
                    <div className="text-white/50 text-xs">{music.gravadora}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{music.count}x</div>
                  <div className="text-white/70 text-sm">{formatTime(music.totalDuration)}</div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Gráfico de barras simples */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Frequência de Uso</h3>
          <div className="space-y-3">
            {sortedMusic.slice(0, 5).map((music, index) => {
              const maxCount = sortedMusic[0].count;
              const percentage = (music.count / maxCount) * 100;
              
              return (
                <div key={`${music.musica}-${music.artista}`} className="space-y-2">
                  <div className="flex justify-between text-sm text-white/80">
                    <span className="truncate max-w-[200px]">{music.musica}</span>
                    <span>{music.count}x</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

// Função auxiliar para converter tempo para segundos
function parseTimeToSeconds(timeString: string): number {
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
