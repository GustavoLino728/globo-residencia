import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "contaGIA",
  description: "Leitor de Informações das músicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}