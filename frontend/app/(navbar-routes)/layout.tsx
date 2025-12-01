import "@/styles/globals.css";
import {Navbar} from "@/components/navbar"

export default function NavLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
