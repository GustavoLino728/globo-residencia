"use client";

import { useEffect } from "react";

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
<<<<<<< HEAD
    <div className="min-h-screen text-white flex flex-col font-sans bg-[url('/Home.png')] bg-cover bg-center bg-no-repeat h-230">
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
=======
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
>>>>>>> 9299e6826abd3b2a9bf01e2a4cd06aa5370f4955
    </div>
  );
}
