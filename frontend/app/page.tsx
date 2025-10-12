"use client";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

export default function Home() {
  return (
    <div className="
      min-h-screen 
      text-white 
      flex flex-col
      font-sans 
      bg-[url('/Home.png')] 
      bg-cover 
      bg-center 
      bg-no-repeat 
      h-230">
      <div className=" 
        backdrop-blur-md
        bg-white/3                
        border border-white/3       
        p-8                           
        rounded-3xl           
        shadow-2xl                    
        text-white        
        mx-40   
        my-auto
        ">
      <header className="flex justify-between items-center py-6 px-16">
      
        <div className="flex items-center space-x-2 w-full">
          <img 
            src="/logoWhiteGlobo.png" 
            alt="Logo Globo" 
          />
        </div>

        <nav className="hidden flex justify-around md:flex space-x-12 w-full">
          <Link href="#" className="text-white hover:text-gray-400 text-lg">
            COMO FUNCIONA?
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 text-lg">
            SOBRE NÓS
          </Link>
          <Link href="#" className="text-white hover:text-gray-400 text-lg">
            CONTATO
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 flex-col md:flex-row items-center justify-center p-8 md:p-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Contag<span className="text-[#8444e2]">IA</span>
          </h1>

          <p className="max-w-md text-lg md:text-xl text-gray-300 mb-8">
            Get personalised insurance plans by answering few simple questions
          </p>

          <Button className="bg-[#6F1FC6]  text-white font-bold rounded-full px-17 py-6 transform transition-all duration-300 hover:scale-105">
            <Link 
              className="text-lg" 
              color="foreground" 
              href="/upload"
            >  
                Comece já!
            </Link>
          </Button>
        </div>

        <Image
          isBlurred
          alt="Logo da Globo - Principal"
          src="/logoGlobo.svg"
          />       
      </main>
      </div>
    </div>
  );
}