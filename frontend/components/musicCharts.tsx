"use client";
import { Card, CardBody } from "@heroui/card";
import { MusicInfo } from "./validationCard";

interface MusicChartsProps {
  musicData: MusicInfo[];
}

interface ChartData {
  label: string;
  value: number;
  color: string;
}

const MusicCharts = ({ musicData }: MusicChartsProps) => {
  // Processar dados para gráfico de gravadoras
  const gravadoraMap = new Map<string, number>();
  musicData.forEach(music => {
    const gravadora = music.gravadora || 'Desconhecida';
    gravadoraMap.set(gravadora, (gravadoraMap.get(gravadora) || 0) + 1);
  });

  const gravadoraData: ChartData[] = Array.from(gravadoraMap.entries())
    .map(([label, value], index) => ({
      label,
      value,
      color: getColorByIndex(index)
    }))
    .sort((a, b) => b.value - a.value);

  // Processar dados para gráfico de artistas
  const artistaMap = new Map<string, number>();
  musicData.forEach(music => {
    const artista = music.artista || 'Desconhecido';
    artistaMap.set(artista, (artistaMap.get(artista) || 0) + 1);
  });

  const artistaData: ChartData[] = Array.from(artistaMap.entries())
    .map(([label, value], index) => ({
      label,
      value,
      color: getColorByIndex(index)
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8); // Top 8 artistas

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      {/* Gráfico de Gravadoras */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">Distribuição por Gravadora</h3>
          <div className="space-y-3">
            {gravadoraData.map((item, index) => {
              const total = gravadoraData.reduce((sum, d) => sum + d.value, 0);
              const percentage = (item.value / total) * 100;
              
              return (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-xs md:text-sm text-white/80">
                    <span className="truncate max-w-[120px] md:max-w-[160px]">{item.label}</span>
                    <span>{item.value} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>

      {/* Gráfico de Artistas */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
        <CardBody className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">Top Artistas</h3>
          <div className="space-y-3">
            {artistaData.slice(0, 6).map((item, index) => {
              const maxValue = artistaData[0].value;
              const percentage = (item.value / maxValue) * 100;
              
              return (
                <div key={item.label} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-[10px]">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-white font-medium truncate max-w-[100px] md:max-w-[140px]">{item.label}</span>
                      <span className="text-white/70 text-xs md:text-sm">{item.value}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${percentage}%`,
                          background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}80 100%)`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>

      {/* Gráfico de Efeitos Sonoros */}
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 lg:col-span-2">
        <CardBody className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-white mb-4">Efeitos Sonoros Mais Utilizados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {getEfeitosSonorosData(musicData).slice(0, 6).map((item, index) => (
              <div key={item.label} className="bg-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-white font-medium text-xs md:text-sm">{item.label}</span>
                  <span className="text-white/70 text-xs md:text-sm">{item.value}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(item.value / getEfeitosSonorosData(musicData)[0].value) * 100}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

// Função para obter dados de efeitos sonoros
function getEfeitosSonorosData(musicData: MusicInfo[]): ChartData[] {
  const efeitoMap = new Map<string, number>();
  musicData.forEach(music => {
    const efeito = music.efeitoSonoro || 'Nenhum';
    efeitoMap.set(efeito, (efeitoMap.get(efeito) || 0) + 1);
  });

  return Array.from(efeitoMap.entries())
    .map(([label, value], index) => ({
      label,
      value,
      color: getColorByIndex(index)
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 9); // Top 9 efeitos
}

// Função para obter cores baseadas no índice
function getColorByIndex(index: number): string {
  const colors = [
    '#8B5CF6', // purple-500
    '#EC4899', // pink-500
    '#06B6D4', // cyan-500
    '#10B981', // emerald-500
    '#F59E0B', // amber-500
    '#EF4444', // red-500
    '#3B82F6', // blue-500
    '#84CC16', // lime-500
    '#F97316', // orange-500
    '#6366F1', // indigo-500
  ];
  return colors[index % colors.length];
}

export default MusicCharts;
