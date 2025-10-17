
"use client";
import MusicStats from "@/components/musicStats";
import MusicCharts from "@/components/musicCharts";
import {dashboardMusicData} from "@/data/musicMock"
import Image from "next/image";

export default function DashboardPage() {
    return(
        <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Home.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

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

                    <div className="mb-6 bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                        <MusicStats musicData={dashboardMusicData} showFrequency={false} />
                    </div>

                    <div className="mb-6 bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                        <MusicCharts musicData={dashboardMusicData} />
                    </div>
                </div>
            </main>
        </div>
    )
}