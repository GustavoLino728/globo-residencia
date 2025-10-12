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

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <HeroUINavbar className="bg-black/25">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <AcmeLogo />
          <p className="font-bold text-inherit">Contag<span className="text-[#6f1fc6] font-black">IA</span></p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === "/dashboard"}>
          <Link color={pathname === "/dashboard" ? "secondary" : "foreground"} href="/dashboard">
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/upload"}>
          <Link color={pathname === "/upload" ? "secondary" : "foreground"} href="/upload">
            Upload
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/relatorios"}>
          <Link color={pathname === "/relatorios" ? "secondary" : "foreground"} href="/relatorios">
            Relatórios
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Minhas configurações</DropdownItem>
            <DropdownItem key="team_settings">Configurações da Equipe</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="configurations">Configurações</DropdownItem>
            <DropdownItem key="help_and_feedback">Ajuda e Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </HeroUINavbar>
  );
}