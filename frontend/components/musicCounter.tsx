import {Chip} from "@heroui/chip";

const MusicCounter = ({ current, total }: { current: number; total: number }) => {
    return (
      <Chip 
        variant="flat" 
        size="lg"
        className="mt-6 text-[#FFFFFFA] font-semibold px-6 py-4 text-lg bg-purple-600/0"
      >
        {current} de {total} músicas
      </Chip>
    );
  };

  export default MusicCounter;
