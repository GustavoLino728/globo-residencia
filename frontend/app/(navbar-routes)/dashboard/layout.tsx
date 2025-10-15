import "@/styles/globals.css";
import {Providers} from "@/app/providers";

export default function DashboardLayout({children}: { children: React.ReactNode }) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}