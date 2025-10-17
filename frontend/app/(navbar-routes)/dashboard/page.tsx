
"use client";
import MusicStats from "@/components/musicStats";
import MusicCharts from "@/components/musicCharts";
import { dashboardMusicData } from "@/data/musicMock";
import PageLayout from "@/components/PageLayout";
import GlassCard from "@/components/GlassCard";

export default function DashboardPage() {
    return(
        <PageLayout 
            title="Dashboard de Músicas" 
            subtitle="Análise das músicas mais utilizadas nos relatórios"
            showGradientAccent={false}
            className="p-4 md:p-6"
        >
            <div className="max-w-5xl md:max-w-6xl mx-auto space-y-6">
                <GlassCard className="bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                    <MusicStats musicData={dashboardMusicData} showFrequency={false} />
                </GlassCard>

                <GlassCard className="bg-slate-800/30 backdrop-blur rounded-xl border border-white/10 shadow-sm p-4 md:p-6">
                    <MusicCharts musicData={dashboardMusicData} />
                </GlassCard>
            </div>
        </PageLayout>
    )
}