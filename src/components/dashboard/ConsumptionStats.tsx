
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface OfficeConsumptionProps {
  name: string;
  status: "Оптимально" | "Повышенное" | "Критическое";
  consumption: string;
  trend: {
    value: string;
    positive: boolean;
  };
}

const OfficeConsumption = ({ name, status, consumption, trend }: OfficeConsumptionProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "Оптимально": return "text-primary";
      case "Повышенное": return "text-amber-500";
      case "Критическое": return "text-destructive";
    }
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{name}</div>
          <div className={`text-sm ${getStatusColor()}`}>{status}</div>
        </div>
        <div className="text-right">
          <div className="font-medium">{consumption}</div>
          <div className={`flex items-center justify-end text-xs ${trend.positive ? "text-primary" : "text-destructive"}`}>
            <Icon name={trend.positive ? "TrendingUp" : "TrendingDown"} className="mr-1 h-3 w-3" />
            {trend.value}
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Icon name="MoreVertical" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const ConsumptionStats = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Статистика энергопотребления</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="day">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="day">День</TabsTrigger>
            <TabsTrigger value="week">Неделя</TabsTrigger>
            <TabsTrigger value="month">Месяц</TabsTrigger>
          </TabsList>
          <TabsContent value="day" className="space-y-0">
            <OfficeConsumption 
              name="Главный офис" 
              status="Оптимально" 
              consumption="126.4 кВт⋅ч" 
              trend={{ value: "11.5%", positive: true }} 
            />
            <Separator />
            <OfficeConsumption 
              name="Отдел разработки" 
              status="Повышенное" 
              consumption="98.2 кВт⋅ч" 
              trend={{ value: "5.2%", positive: false }} 
            />
            <Separator />
            <OfficeConsumption 
              name="Переговорная" 
              status="Оптимально" 
              consumption="42.6 кВт⋅ч" 
              trend={{ value: "3.8%", positive: true }} 
            />
          </TabsContent>
          <TabsContent value="week">
            {/* Содержимое для недельной статистики */}
          </TabsContent>
          <TabsContent value="month">
            {/* Содержимое для месячной статистики */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ConsumptionStats;
