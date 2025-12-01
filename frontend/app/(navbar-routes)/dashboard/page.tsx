
"use client";
import { useEffect, useState } from "react";
import MusicStats from "@/components/musicStats";
import MusicCharts from "@/components/musicCharts";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";
import { API_CONFIG } from "@/config/api";

interface MusicData {
  musica: string;
  artista: string;
  interprete: string;
  gravadora: string;
  isrc: string;
  album?: string;
  genero?: string;
    efeitoSonoro: string;
    tempoInicio: string;
    tempoFim: string;
    tempoTotal: string;
}

export default function DashboardPage() {
    const [musicData, setMusicData] = useState<MusicData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMusicasFromDatabase = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Buscar todas as músicas usando SELECT * FROM musica
                const response = await fetch(`${API_CONFIG.BASE_URL}/musicas`, {
                    method: 'GET',
                    mode: API_CONFIG.CORS.MODE
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.details || 'Erro ao buscar músicas do banco');
                }

                const data = await response.json();
                
                const musicas = data.musicas || [];

                // Converter para o formato esperado pelo MusicStats/MusicCharts
                const musicasFormatadas: MusicData[] = musicas.map((m: any) => ({
                    musica: m.titulo || 'Desconhecido',
                    artista: m.artista || 'Desconhecido',
                    interprete: m.artista || 'Desconhecido',
                    gravadora: m.gravadora || 'Desconhecida',
                    isrc: m.isrc || '',
                    efeitoSonoro: m.efeitoSonoro || '',
                    tempoInicio: m.tempoInicio || '',
                    tempoFim: m.tempoFim || '',
                    tempoTotal: m.tempoTotal || '0:00',
                    album: m.album,
                    genero: m.genero
                }));
                
                setMusicData(musicasFormatadas);

                if (musicasFormatadas.length === 0) {
                    setError('Nenhuma música identificada ainda. Faça upload de arquivos para começar.');
                }

            } catch (error) {
                setError(error instanceof Error ? error.message : 'Erro ao carregar músicas do banco de dados.');
            } finally {
                setLoading(false);
            }
        };

        fetchMusicasFromDatabase();
    }, []);

    if (loading) {
        return (
            <PageLayout 
                title="Dashboard de Músicas" 
                subtitle="Análise das músicas mais utilizadas nos relatórios"
                showGradientAccent={false}
                className="p-4 md:p-6"
            >
                <div className="flex flex-col justify-center items-center h-64 space-y-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                    <p className="text-white/70">Carregando músicas...</p>
                </div>
            </PageLayout>
        );
    }

    if (error) {
        return (
            <PageLayout 
                title="Dashboard de Músicas" 
                subtitle="Análise das músicas mais utilizadas nos relatórios"
                showGradientAccent={false}
                className="p-4 md:p-6"
            >
                <div className="flex justify-center items-center h-64">
                    <div className="text-center">
                        <p className="text-white/90 text-lg mb-2">{error}</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Tentar Novamente
                        </button>
                    </div>
                </div>
            </PageLayout>
        );
    }

    if (musicData.length === 0) {
        return (
            <PageLayout 
                title="Dashboard de Músicas" 
                subtitle="Análise das músicas mais utilizadas nos relatórios"
                showGradientAccent={false}
                className="p-4 md:p-6"
            >
                <div className="flex justify-center items-center h-64">
                    <div className="text-center">
                        <p className="text-white/90 text-lg">Nenhuma música identificada ainda</p>
                        <p className="text-white/70 mt-2">Faça upload de arquivos para começar a análise</p>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return(
        <PageLayout 
        title="Dashboard de Músicas" 
        subtitle="Análise das músicas mais utilizadas nos relatórios"
        showGradientAccent={false}
        className="p-4 md:p-6"
        >
            <div className="max-w-5xl md:max-w-6xl mx-auto space-y-6">
                <GlassCard className="bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                    <MusicStats musicData={musicData} showFrequency={false} />
                </GlassCard>

                <GlassCard className="bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                    <MusicCharts musicData={musicData} />
                </GlassCard>
            </div>
        </PageLayout>
    )
}
