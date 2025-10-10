import "@/styles/globals.css";
import {Providers} from "../../providers";

export default function UploadLayout({children}: { children: React.ReactNode }) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}