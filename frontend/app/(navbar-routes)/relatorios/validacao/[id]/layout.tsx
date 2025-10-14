import "@/styles/globals.css";
import {Providers} from "@/app/providers";

export default function ValidacaoLayout({children}: { children: React.ReactNode }) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}