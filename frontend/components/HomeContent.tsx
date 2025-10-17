import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image as HeroImage } from "@heroui/image";

export default function HomeContent() {
  return (
    <main className="flex flex-1 flex-col md:flex-row items-center justify-center p-8 md:p-16">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Contag<span className="font-extrabold 
         bg-gradient-to-r from-purple-600 to-indigo-600 
         bg-clip-text text-transparent">IA</span>
        </h1>

        <p className="max-w-md text-lg md:text-xl text-gray-300 mb-8">
          Utilize a Inteligência Artificial para transcrever áudio e gerar sua EDL em segundos.
        </p>

        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 text-white font-bold rounded-full px-17 py-6 transform transition-all duration-300 hover:scale-105">
          <Link 
            className="text-lg" 
            color="foreground" 
            href="/upload"
          >  
            Comece já!
          </Link>
        </Button>
      </div>

      <HeroImage
        isBlurred
        alt="Logo da Globo - Principal"
        src="/logoGlobo.svg"
      />       
    </main>
  );
}
