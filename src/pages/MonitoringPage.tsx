
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MonitoringPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Мониторинг энергопотребления</h1>
          <div className="flex gap-3">
            <Select defaultValue="realtime">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Режим просмотра" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Реальное время</SelectItem>
                <SelectItem value="history">История показаний</SelectItem>
                <SelectItem value="analytics">Аналитика</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Icon name="Download" className="mr-2 h-4 w-4" />
              Выгрузить
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" className="h-5 w-5 text-amber-500" />
                    <span className="text-sm text-muted-foreground">Общее потребление</span>
                  </div>
                  <Badge variant="outline" className="text-amber-500">Реальное время</Badge>
                </div>
                <div className="text-3xl font-bold">267.8 кВт⋅ч</div>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center text-green-500 mr-2">
                    <Icon name="TrendingDown" className="h-4 w-4 mr-1" />
                    7.2%
                  </span>
                  <span>По сравнению с прошлой неделей</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="AlertCircle" className="h-5 w-5 text-destructive" />
                    <span className="text-sm text-muted-foreground">Превышения лимитов</span>
                  </div>
                  <Badge variant="outline" className="text-destructive">2 помещения</Badge>
                </div>
                <div className="text-3xl font-bold">19.2%</div>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center text-destructive mr-2">
                    <Icon name="TrendingUp" className="h-4 w-4 mr-1" />
                    3.4%
                  </span>
                  <span>По сравнению с прошлым месяцем</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon name="Leaf" className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Экономия CO₂</span>
                  </div>
                  <Badge variant="outline" className="text-primary">Май 2025</Badge>
                </div>
                <div className="text-3xl font-bold">128 кг</div>
                <div className="flex items-center mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center text-primary mr-2">
                    <Icon name="TrendingUp" className="h-4 w-4 mr-1" />
                    12.5%
                  </span>
                  <span>По сравнению с апрелем</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Графики потребления</CardTitle>
                  <Tabs defaultValue="day" className="w-auto">
                    <TabsList>
                      <TabsTrigger value="day">День</TabsTrigger>
                      <TabsTrigger value="week">Неделя</TabsTrigger>
                      <TabsTrigger value="month">Месяц</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-slate-50 rounded-md border-2 border-dashed">
                  <div className="text-center text-muted-foreground">
                    <Icon name="BarChart" className="h-10 w-10 mx-auto mb-2" />
                    <p>График энергопотребления по времени</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Уведомления</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                      <Icon name="AlertTriangle" className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Повышенное потребление в офисе разработки</p>
                      <p className="text-xs text-muted-foreground">Сегодня, 10:24</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                      <Icon name="AlertOctagon" className="h-4 w-4 text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Превышен лимит в переговорной №2</p>
                      <p className="text-xs text-muted-foreground">Сегодня, 09:15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Настройки температуры оптимизированы</p>
                      <p className="text-xs text-muted-foreground">Вчера, 15:30</p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full text-sm">
                    Показать все уведомления
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MonitoringPage;
