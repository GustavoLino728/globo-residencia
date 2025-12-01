"use client"

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import {Avatar} from "@heroui/avatar";
import { usePathname } from "next/navigation";
import { Link } from "@heroui/link";
import {Image} from "@heroui/image"

export const ContagiaLogo = () => {
  return (
    <Image
      src="/logoWhiteGlobo.png"
      width={30}
    />
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  
  // Verificar se está na página de validação para sinalizar Relatórios
  const isValidationPage = pathname.startsWith("/relatorios/validacao");

  return (
    <HeroUINavbar className="bg-black/65">
      <NavbarBrand>
        <Link color="foreground" href="/" className="gap-2">
          <ContagiaLogo />
          
          <p className="font-bold text-inherit">Contag<span className="font-extrabold 
         bg-gradient-to-r from-purple-600 to-indigo-600 
         bg-clip-text text-transparent">IA</span></p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/dashboard"}>
          <Link 
            color="foreground" 
            href="/dashboard"
            className={`relative ${pathname === "/dashboard" ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
          >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/upload"}>
          <Link 
            color="foreground" 
            href="/upload"
            className={`relative ${pathname === "/upload" ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
          >
            Upload
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/relatorios" || isValidationPage}>
          <Link 
            color="foreground" 
            href="/relatorios"
            className={`relative ${pathname === "/relatorios" || isValidationPage ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" : ""}`}
          >
            Relatórios
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
      </NavbarContent>
    </HeroUINavbar>
  );
}
