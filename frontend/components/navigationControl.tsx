import { ChevronLeft, ChevronRight } from "lucide-react";
import {Button} from "@heroui/button";
import {Chip} from "@heroui/chip";

interface NavigationControlsProps {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationControls = ({
  currentIndex,
  total,
  onPrevious,
  onNext,
}: NavigationControlsProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <Button
        isIconOnly
        color="secondary"
        variant="flat"
        size="lg"
        onPress={onPrevious}
        isDisabled={currentIndex === 0}
        radius="full"
        className="bg-purple-600 text-white hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500"
      >
        <ChevronLeft size={24} />
      </Button>
      
      <Chip
        color="secondary"
        variant="flat"
        size="lg"
        className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-2 text-base"
      >
        Música Atual
      </Chip>
      
      <Button
        isIconOnly
        color="secondary"
        variant="flat"
        size="lg"
        onPress={onNext}
        isDisabled={currentIndex === total - 1}
        radius="full"
        className="bg-indigo-600 text-white hover:bg-purple-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default NavigationControls;
