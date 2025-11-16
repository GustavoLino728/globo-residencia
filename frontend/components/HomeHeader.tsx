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

    </header>
  );
}
