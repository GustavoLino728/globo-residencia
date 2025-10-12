import "@/styles/globals.css";
import {Providers} from "../providers";

export default function BeginLayout({children}: { children: React.ReactNode }) {
  return (

      <Providers>
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
                {children}
            </div>
        
      </Providers>
    
  );
}