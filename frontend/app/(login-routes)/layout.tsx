import "@/styles/globals.css";
import {Providers} from "../providers";

export default function BeginLayout({children}: { children: React.ReactNode }) {
  return (

      <Providers>
        <div>
                {children}
            </div>
        
      </Providers>
    
  );
}
