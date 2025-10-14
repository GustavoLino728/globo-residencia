import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[hsl(var(--nav-background))] backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Button variant="ghost" size="icon" className="hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </Button>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Upload
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-primary pb-1"
            >
              Estatísticas
            </a>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-white/10 transition-all hover:scale-110"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-card border-border">
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10">
              Configurações
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/10 text-destructive">
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;