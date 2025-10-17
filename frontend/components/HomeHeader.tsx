import { Link } from "@heroui/link";

export default function HomeHeader() {
  return (
    <header className="flex justify-between items-center py-6 px-16">
      <div className="flex items-center space-x-2 w-full">
        <img 
          src="/logoWhiteGlobo.png" 
          alt="Logo Globo" 
        />
      </div>

      <nav className="hidden flex justify-around md:flex space-x-12 w-full">
        <Link href="#" className="text-white hover:text-gray-400 text-lg">
          COMO FUNCIONA?
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 text-lg">
          SOBRE NÓS
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 text-lg">
          CONTATO
        </Link>
      </nav>
    </header>
  );
}
