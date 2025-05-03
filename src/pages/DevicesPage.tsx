
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const DevicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Управление устройствами</h1>
          <div className="flex gap-3">
            <Button>
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Добавить устройство
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Помещения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary font-medium"
                  >
                    <Icon name="Building" className="mr-2 h-4 w-4" />
                    Все устройства
                  </Button>
                  
                  <Separator className="my-2" />
                  
                  <p className="px-4 text-xs font-medium text-muted-foreground mb-2">
                    ГЛАВНЫЙ ОФИС
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Icon name="Coffee" className="mr-2 h-4 w-4" />
                    Кухня
                    <Badge className="ml-auto bg-secondary" variant="secondary">4</Badge>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Icon name="Users" className="mr-2 h-4 w-4" />
                    Общая зона
                    <Badge className="ml-auto bg-secondary" variant="secondary">7</Badge>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                    Переговорные
                    <Badge className="ml-auto bg-secondary" variant="secondary">6</Badge>
                  </Button>
                  
                  <Separator className="my-2" />
                  
                  <p className="px-4 text-xs font-medium text-muted-foreground mb-2">
                    ОТДЕЛ РАЗРАБОТКИ
                  </p>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Icon name="Code" className="mr-2 h-4 w-4" />
                    Рабочая зона
                    <Badge className="ml-auto bg-secondary" variant="secondary">12</Badge>
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                  >
                    <Icon name="Coffee" className="mr-2 h-4 w-4" />
                    Зона отдыха
                    <Badge className="ml-auto bg-secondary" variant="secondary">5</Badge>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Список устройств</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="Filter" className="mr-2 h-4 w-4" />
                      Фильтр
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="RefreshCw" className="mr-2 h-4 w-4" />
                      Обновить
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <DeviceItem 
                    name="Кондиционер Samsung AR7000" 
                    location="Общая зона" 
                    status="active" 
                    type="air" 
                    consumption="1.2 кВт⋅ч" 
                  />
                  <Separator />
                  <DeviceItem 
                    name="Освещение основное" 
                    location="Отдел разработки" 
                    status="active" 
                    type="light" 
                    consumption="0.8 кВт⋅ч" 
                  />
                  <Separator />
                  <DeviceItem 
                    name="Кофемашина Delonghi" 
                    location="Кухня" 
                    status="inactive" 
                    type="appliance" 
                    consumption="0.0 кВт⋅ч" 
                  />
                  <Separator />
                  <DeviceItem 
                    name="Терморегулятор Tado" 
                    location="Переговорная №1" 
                    status="active" 
                    type="climate" 
                    consumption="0.5 кВт⋅ч" 
                  />
                  <Separator />
                  <DeviceItem 
                    name="Проектор Sony VPL" 
                    location="Переговорная №2" 
                    status="inactive" 
                    type="media" 
                    consumption="0.0 кВт⋅ч" 
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

interface DeviceItemProps {
  name: string;
  location: string;
  status: "active" | "inactive" | "error";
  type: "air" | "light" | "climate" | "media" | "appliance";
  consumption: string;
}

const DeviceItem = ({ name, location, status, type, consumption }: DeviceItemProps) => {
  const getDeviceIcon = () => {
    switch (type) {
      case "air":
        return "Wind";
      case "light":
        return "Lightbulb";
      case "climate":
        return "Thermometer";
      case "media":
        return "Monitor";
      case "appliance":
        return "PocketKnife";
    }
  };
  
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "text-primary";
      case "inactive":
        return "text-muted-foreground";
      case "error":
        return "text-destructive";
    }
  };
  
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3 flex-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <Icon name={getDeviceIcon()} className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className={`flex items-center ${getStatusColor()}`}>
          <div className={`h-2 w-2 rounded-full mr-2 ${status === 'active' ? 'bg-primary' : status === 'inactive' ? 'bg-muted' : 'bg-destructive'}`}></div>
          <span className="text-sm">
            {status === 'active' ? 'Активно' : status === 'inactive' ? 'Выключено' : 'Ошибка'}
          </span>
        </div>
      </div>
      
      <div className="w-24 text-right">
        <span className="text-sm font-medium">{consumption}</span>
      </div>
      
      <div className="ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Icon name="MoreVertical" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Icon name="Power" className="mr-2 h-4 w-4" />
              {status === 'active' ? 'Выключить' : 'Включить'}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="Settings" className="mr-2 h-4 w-4" />
              Настройки
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="LineChart" className="mr-2 h-4 w-4" />
              Статистика
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icon name="Trash2" className="mr-2 h-4 w-4" />
              Удалить
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default DevicesPage;
