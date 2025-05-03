
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export type OfficeStatus = 'optimal' | 'warning' | 'high';

export interface OfficeStatItemProps {
  name: string;
  status: OfficeStatus;
  consumption: number;
  trend: number;
  onMoreClick?: () => void;
}

// Статусы и их отображение
const STATUS_CONFIG = {
  optimal: { color: 'text-primary', text: 'Оптимально' },
  warning: { color: 'text-amber-500', text: 'Внимание' },
  high: { color: 'text-error', text: 'Повышенное' }
};

const OfficeStatItem = ({ 
  name, 
  status, 
  consumption, 
  trend,
  onMoreClick 
}: OfficeStatItemProps) => {
  const { color, text } = STATUS_CONFIG[status] || STATUS_CONFIG.optimal;
  
  return (
    <div className="flex items-center justify-between p-3 rounded-md border border-[#E0E0E0] hover:bg-muted/20 transition-colors">
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className={`text-xs ${color}`}>{text}</span>
      </div>
      
      <div className="text-right">
        <div className="font-medium">{consumption} кВт·ч</div>
        <div className={`text-xs flex items-center justify-end ${trend > 0 ? 'text-primary' : 'text-error'}`}>
          <Icon name={trend > 0 ? "TrendingUp" : "TrendingDown"} className="h-3 w-3 mr-1" />
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-1 h-7 w-7"
        onClick={onMoreClick}
      >
        <Icon name="MoreVertical" className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default OfficeStatItem;
