
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface EnergyCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const EnergyCard = ({ title, value, subtitle, icon, trend, className }: EnergyCardProps) => {
  return (
    <Card className={className}>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Icon name={icon} className="h-5 w-5 text-secondary" />
              <span>{title}</span>
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-3xl font-bold">{value}</span>
              {trend && (
                <span 
                  className={`flex items-center text-xs ${trend.positive ? 'text-primary' : 'text-destructive'}`}
                >
                  <Icon name={trend.positive ? 'TrendingUp' : 'TrendingDown'} className="h-4 w-4 mr-1" />
                  {trend.value}
                </span>
              )}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {subtitle}
            </div>
          </div>
          {trend && (
            <div className={`px-3 py-1 rounded-md ${trend.positive ? 'bg-primary/10 text-primary' : ''}`}>
              <Button variant="ghost" size="sm">Подробнее</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EnergyOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <EnergyCard 
        title="Потребление энергии" 
        value="126.4 кВт⋅ч" 
        subtitle="Сегодня" 
        icon="Zap" 
        trend={{ value: "11.5%", positive: true }} 
      />
      <EnergyCard 
        title="Активные офисы" 
        value="3/4" 
        subtitle="Сейчас работают" 
        icon="Building2" 
      />
      <EnergyCard 
        title="Углеродный след" 
        value="-35.6%" 
        subtitle="По сравнению с прошлым месяцем" 
        icon="Clock" 
        trend={{ value: "35.6%", positive: true }} 
      />
    </div>
  );
};

export default EnergyOverview;
