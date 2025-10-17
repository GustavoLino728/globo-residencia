"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
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
      
      <main className="flex-1 p-8 relative z-10 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Algo deu errado!
          </h2>
          <p className="text-white/80 mb-8">
            Ocorreu um erro inesperado. Tente novamente.
          </p>
          <button
            onClick={() => reset()}
            className="w-full bg-[#6F1FC6] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#5a1aa8] transition-colors duration-300"
          >
            Tentar novamente
          </button>
        </div>
      </main>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 via-purple-500 via-blue-500 to-green-500"></div>
    </div>
  );
}