
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OfficeStatItem, { OfficeStatItemProps } from "@/components/dashboard/OfficeStatItem";

export type TimeFrame = 'day' | 'week' | 'month';

interface EnergyStatsProps {
  offices: Omit<OfficeStatItemProps, 'onMoreClick'>[];
  onOfficeMoreClick?: (officeIndex: number) => void;
}

const EnergyStats = ({ offices, onOfficeMoreClick }: EnergyStatsProps) => {
  const [timeframe, setTimeframe] = useState<TimeFrame>('day');
  
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Статистика энергопотребления</h2>
          <Tabs defaultValue="day" onValueChange={(value) => setTimeframe(value as TimeFrame)} className="w-auto">
            <TabsList className="grid grid-cols-3 h-8">
              <TabsTrigger value="day" className="text-xs">День</TabsTrigger>
              <TabsTrigger value="week" className="text-xs">Неделя</TabsTrigger>
              <TabsTrigger value="month" className="text-xs">Месяц</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="space-y-3">
          {offices.map((office, index) => (
            <OfficeStatItem 
              key={index}
              name={office.name}
              status={office.status}
              consumption={office.consumption}
              trend={office.trend}
              onMoreClick={() => onOfficeMoreClick && onOfficeMoreClick(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EnergyStats;
