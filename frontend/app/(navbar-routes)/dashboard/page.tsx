
"use client";
import MusicStats from "@/components/musicStats";
import MusicCharts from "@/components/musicCharts";
import { MusicInfo } from "@/components/validationCard";

// Dados de exemplo baseados nos dados existentes do sistema
const sampleMusicData: MusicInfo[] = [
  {
    musica: "Bohemian Rhapsody",
    efeitoSonoro: "Reverb suave",
    artista: "Queen",
    interprete: "Freddie Mercury",
    gravadora: "EMI Records",
    tempoInicio: "00:15",
    tempoFim: "03:45",
    isrc: "GBUM71029678",
    tempoTotal: "05:55"
  },
  {
    musica: "We Will Rock You",
    efeitoSonoro: "Stomp clap",
    artista: "Queen",
    interprete: "Freddie Mercury",
    gravadora: "EMI Records",
    tempoInicio: "00:00",
    tempoFim: "02:03",
    isrc: "GBUM71029679",
    tempoTotal: "02:03"
  },
  {
    musica: "Imagine",
    efeitoSonoro: "Piano natural",
    artista: "John Lennon",
    interprete: "John Lennon",
    gravadora: "Apple Records",
    tempoInicio: "00:00",
    tempoFim: "03:07",
    isrc: "USRC17607839",
    tempoTotal: "03:07"
  },
  {
    musica: "Billie Jean",
    efeitoSonoro: "Bass sintético",
    artista: "Michael Jackson",
    interprete: "Michael Jackson",
    gravadora: "Epic Records",
    tempoInicio: "00:30",
    tempoFim: "04:54",
    isrc: "USUM70903642",
    tempoTotal: "04:54"
  },
  {
    musica: "Beat It",
    efeitoSonoro: "Guitar solo",
    artista: "Michael Jackson",
    interprete: "Michael Jackson",
    gravadora: "Epic Records",
    tempoInicio: "00:00",
    tempoFim: "04:18",
    isrc: "USUM70903643",
    tempoTotal: "04:18"
  },
  // Dados adicionais para demonstrar estatísticas
  {
    musica: "Bohemian Rhapsody",
    efeitoSonoro: "Reverb suave",
    artista: "Queen",
    interprete: "Freddie Mercury",
    gravadora: "EMI Records",
    tempoInicio: "00:15",
    tempoFim: "03:45",
    isrc: "GBUM71029678",
    tempoTotal: "05:55"
  },
  {
    musica: "We Will Rock You",
    efeitoSonoro: "Stomp clap",
    artista: "Queen",
    interprete: "Freddie Mercury",
    gravadora: "EMI Records",
    tempoInicio: "00:00",
    tempoFim: "02:03",
    isrc: "GBUM71029679",
    tempoTotal: "02:03"
  },
  {
    musica: "Billie Jean",
    efeitoSonoro: "Bass sintético",
    artista: "Michael Jackson",
    interprete: "Michael Jackson",
    gravadora: "Epic Records",
    tempoInicio: "00:30",
    tempoFim: "04:54",
    isrc: "USUM70903642",
    tempoTotal: "04:54"
  },
  {
    musica: "Hotel California",
    efeitoSonoro: "Guitar acústica",
    artista: "Eagles",
    interprete: "Eagles",
    gravadora: "Asylum Records",
    tempoInicio: "00:00",
    tempoFim: "06:30",
    isrc: "USRC17607840",
    tempoTotal: "06:30"
  },
  {
    musica: "Sweet Child O' Mine",
    efeitoSonoro: "Guitar solo",
    artista: "Guns N' Roses",
    interprete: "Guns N' Roses",
    gravadora: "Geffen Records",
    tempoInicio: "00:00",
    tempoFim: "05:56",
    isrc: "USGF18800001",
    tempoTotal: "05:56"
  },
  {
    musica: "Imagine",
    efeitoSonoro: "Piano natural",
    artista: "John Lennon",
    interprete: "John Lennon",
    gravadora: "Apple Records",
    tempoInicio: "00:00",
    tempoFim: "03:07",
    isrc: "USRC17607839",
    tempoTotal: "03:07"
  },
  {
    musica: "Hotel California",
    efeitoSonoro: "Guitar acústica",
    artista: "Eagles",
    interprete: "Eagles",
    gravadora: "Asylum Records",
    tempoInicio: "00:00",
    tempoFim: "06:30",
    isrc: "USRC17607840",
    tempoTotal: "06:30"
  }
];


export default function DashboardPage() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white flex flex-col relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
            
            <main className="flex-1 p-4 md:p-6 relative z-10">
                <div className="max-w-5xl md:max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                            Dashboard de Músicas
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">
                            Análise das músicas mais utilizadas nos relatórios
                        </p>
                    </div>

                    {/* Estatísticas das músicas */}
                    <div className="mb-6 bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                        <MusicStats musicData={sampleMusicData} />
                    </div>

                    {/* Gráficos e visualizações */}
                    <div className="mb-6 bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                        <MusicCharts musicData={sampleMusicData} />
                    </div>
                </div>
            </main>

            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
        </div>
    )
}