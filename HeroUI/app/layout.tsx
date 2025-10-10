import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import ColorBar from "@/components/coloredFooter";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

const globotipoTexto = localFont({
  src: '../public/fonts/Globotipo-Texto.woff2', // Ajuste o caminho conforme necessário
  variable: '--font-globotipo', // Variável CSS para uso global
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};



export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${globotipoTexto.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
        <ColorBar></ColorBar>
      </body>
    </html>
  );
}