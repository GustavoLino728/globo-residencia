import { Button } from "@heroui/button";

interface ApprovalButtonsProps {
  onApprove: () => void;
  onReject: () => void;
}

export default function ApprovalButtons({ onApprove, onReject }: ApprovalButtonsProps) {
  return (
    <div className="flex gap-4 mt-8">
      <Button 
        color="success" 
        variant="solid"
        size="lg"
        onPress={onApprove}
        className="flex-1 h-14 text-lg font-semibold rounded-xl"
      >
        Aprovar
      </Button>
      <Button 
        color="danger" 
        variant="solid"
        size="lg"
        onPress={onReject}
        className="flex-1 h-14 text-lg font-semibold rounded-xl"
      >
        Rejeitar
      </Button>
    </div>
  );
}