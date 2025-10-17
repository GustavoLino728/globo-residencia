
import Image from "next/image";

export default function DashboardPage() {
    return(
        <div className="min-h-screen text-white flex flex-col font-sans relative">
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
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
            
            <main className="flex-1 p-8 relative z-10">
                <h1 className="text-4xl font-bold mb-8 text-white text-center">
                    Dashboard
                </h1>

                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Bem-vindo ao Dashboard
                            </h2>
                            <p className="text-white/80 text-lg">
                                Gerencie seus projetos e acompanhe o progresso
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom gradient accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
        </div>
    )
}