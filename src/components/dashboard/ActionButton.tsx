
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface ActionButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const ActionButton = ({ icon, label, onClick }: ActionButtonProps) => (
  <Button 
    variant="outline" 
    className="w-full h-auto py-3 px-4 flex flex-col items-center justify-center gap-2 bg-muted hover:bg-primary/10 border-[#E0E0E0]"
    onClick={onClick}
  >
    <Icon name={icon} className="h-5 w-5 text-primary-dark" />
    <span className="text-sm">{label}</span>
  </Button>
);

export default ActionButton;
