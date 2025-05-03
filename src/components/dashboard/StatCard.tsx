
import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  icon: string;
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive?: boolean;
  };
  action?: {
    label: string;
    onClick?: () => void;
  };
  suffix?: ReactNode;
}

const StatCard = ({
  icon,
  title,
  value,
  unit,
  subtitle,
  trend,
  action,
  suffix
}: StatCardProps) => {
  return (
    <Card className="eco-stat-card">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1 text-secondary text-sm">
            <Icon name={icon} className="h-4 w-4 text-primary-dark" />
            <span>{title}</span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{value}</span>
            {unit && <span className="text-secondary">{unit}</span>}
          </div>
          
          <div className="flex items-center mt-1">
            {subtitle && <span className="text-xs text-secondary">{subtitle}</span>}
            
            {trend && (
              <span className={`ml-auto text-xs ${trend.isPositive !== false ? 'text-primary' : 'text-error'} flex items-center`}>
                <Icon 
                  name={trend.isPositive !== false ? "TrendingUp" : "TrendingDown"} 
                  className="h-3 w-3 mr-1" 
                />
                {trend.isPositive !== false ? '+' : ''}{trend.value}%
              </span>
            )}
            
            {suffix && <span className="ml-auto">{suffix}</span>}
            
            {action && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={action.onClick}
                className="ml-auto h-7 text-xs text-primary hover:text-primary-dark"
              >
                {action.label}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
