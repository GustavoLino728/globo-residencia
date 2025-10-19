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
    icon: "/logoWhiteGlobo.ico",
  },
};

const globotipoTexto = localFont({
  src: '../public/fonts/Globotipo-Texto.woff2',
  variable: '--font-globotipo', 
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
      <body className="
            min-h-screen 
            text-white 
            flex flex-col
            font-sans 
            bg-[url('/Home.png')] 
            bg-cover 
            bg-center 
            bg-no-repeat 
            h-230">
        <Providers>
          {children}
        </Providers>
        <ColorBar></ColorBar>
      </body>
    </html>
  );
}