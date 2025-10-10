import "@/styles/globals.css";
import {Providers} from "../../providers";

export default function RelatoriosLayout({children}: { children: React.ReactNode }) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}