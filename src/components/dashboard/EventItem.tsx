
import Icon from "@/components/ui/icon";

export type EventType = 'info' | 'warning' | 'success' | 'error';

export interface EventItemProps {
  type: EventType;
  message: string;
  time: string;
}

// Конфигурация для различных типов событий
const EVENT_TYPE_CONFIG = {
  info: { 
    icon: "Info",
    style: "bg-blue-100 text-blue-600"
  },
  warning: { 
    icon: "AlertTriangle",
    style: "bg-amber-100 text-amber-600"
  },
  success: { 
    icon: "CheckCircle",
    style: "bg-primary/20 text-primary-dark"
  },
  error: { 
    icon: "XCircle",
    style: "bg-error/20 text-error"
  }
};

const EventItem = ({ type, message, time }: EventItemProps) => {
  const config = EVENT_TYPE_CONFIG[type] || EVENT_TYPE_CONFIG.info;
  
  return (
    <div className="flex items-start gap-3">
      <div className={`flex items-center justify-center h-7 w-7 rounded-full ${config.style}`}>
        <Icon name={config.icon} className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm">{message}</p>
        <p className="text-xs text-secondary">{time}</p>
      </div>
    </div>
  );
};

export default EventItem;
