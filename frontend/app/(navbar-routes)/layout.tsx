import "@/styles/globals.css";
import {Providers} from "../providers";
import {Navbar} from "@/components/navbar"

export default function NavLayout({children}: { children: React.ReactNode }) {
  return (

      <Providers>
          <Navbar></Navbar>
        {children}
      </Providers>
    
  );
}