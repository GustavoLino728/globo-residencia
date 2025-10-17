import { Chip } from "@heroui/chip";

interface MusicCounterProps {
  current: number;
  total: number;
}

export default function MusicCounter({ current, total }: MusicCounterProps) {
  return (
    <Chip 
      color="primary" 
      variant="flat" 
      size="lg"
      className="mt-6 bg-purple-600/20 text-white-600 font-semibold px-6 py-3 text-lg"
    >
      {current} de {total} músicas
    </Chip>
  );
}