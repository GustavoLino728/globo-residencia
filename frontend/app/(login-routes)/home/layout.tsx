import "@/styles/globals.css";
import {Providers} from "@/app/providers";

export default function HomeLayout({children}: { children: React.ReactNode }) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}