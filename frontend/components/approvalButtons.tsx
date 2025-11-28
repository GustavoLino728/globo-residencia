import { Button } from "@heroui/button";

const ApprovalButtons = ({ onApprove, onReject }: { onApprove: () => void; onReject: () => void }) => {
    return (
      <div className="flex gap-4 mt-8 justify-center">
        <Button 
          color="success" 
          variant="solid"
          onPress={onApprove}
          className="w-32 h-10 text-lg text-white font-semibold rounded-xl"
        >
          Aprovar
        </Button>
        <Button 
          color="danger" 
          variant="solid"
          onPress={onReject}
          className="w-32 h-10 text-lg font-semibold rounded-xl"
        >
          Rejeitar
        </Button>
      </div>
    );
  };

  export default ApprovalButtons;
