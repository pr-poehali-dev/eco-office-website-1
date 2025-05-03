
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const ReportsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Отчеты</h1>
          <div className="flex gap-3">
            <Button>
              <Icon name="FileBarChart" className="mr-2 h-4 w-4" />
              Создать отчет
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Фильтры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Период</label>
                    <Select defaultValue="may2025">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Выберите период" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="may2025">Май 2025</SelectItem>
                        <SelectItem value="apr2025">Апрель 2025</SelectItem>
                        <SelectItem value="mar2025">Март 2025</SelectItem>
                        <SelectItem value="q1_2025">1 квартал 2025</SelectItem>
                        <SelectItem value="q4_2024">4 квартал 2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Офис</label>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Выберите офис" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все офисы</SelectItem>
                        <SelectItem value="main">Главный офис</SelectItem>
                        <SelectItem value="dev">Отдел разработки</SelectItem>
                        <SelectItem value="sales">Отдел продаж</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Тип данных</label>
                    <Select defaultValue="consumption">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Выберите тип данных" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consumption">Энергопотребление</SelectItem>
                        <SelectItem value="co2">Выбросы CO₂</SelectItem>
                        <SelectItem value="cost">Затраты</SelectItem>
                        <SelectItem value="efficiency">Эффективность</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Формат</label>
                    <Select defaultValue="pdf">
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Выберите формат" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">
                    Применить фильтры
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Сформированные отчеты</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Icon name="SortDesc" className="mr-2 h-4 w-4" />
                      Сортировка
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ReportItem 
                    title="Отчет по энергопотреблению за Апрель 2025" 
                    date="03.05.2025" 
                    type="consumption"
                    format="pdf"
                    size="2.4 MB"
                  />
                  
                  <ReportItem 
                    title="Сводка по выбросам CO₂ за 1 квартал 2025" 
                    date="15.04.2025" 
                    type="co2"
                    format="excel"
                    size="1.8 MB"
                  />
                  
                  <ReportItem 
                    title="Анализ эффективности систем отопления" 
                    date="07.04.2025" 
                    type="efficiency"
                    format="pdf"
                    size="3.2 MB"
                  />
                  
                  <ReportItem 
                    title="Потребление электроэнергии по отделам" 
                    date="31.03.2025" 
                    type="consumption"
                    format="excel"
                    size="1.5 MB"
                  />
                  
                  <ReportItem 
                    title="Финансовый отчет по затратам на электроэнергию" 
                    date="15.03.2025" 
                    type="cost"
                    format="pdf"
                    size="4.1 MB"
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

interface ReportItemProps {
  title: string;
  date: string;
  type: "consumption" | "co2" | "cost" | "efficiency";
  format: "pdf" | "excel" | "csv";
  size: string;
}

const ReportItem = ({ title, date, type, format, size }: ReportItemProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "consumption":
        return "Zap";
      case "co2":
        return "Leaf";
      case "cost":
        return "DollarSign";
      case "efficiency":
        return "BarChart";
    }
  };
  
  const getFormatIcon = () => {
    switch (format) {
      case "pdf":
        return "FileText";
      case "excel":
        return "FileSpreadsheet";
      case "csv":
        return "FileDigit";
    }
  };
  
  const getFormatColor = () => {
    switch (format) {
      case "pdf":
        return "text-red-500";
      case "excel":
        return "text-green-700";
      case "csv":
        return "text-blue-500";
    }
  };
  
  return (
    <div className="flex items-center p-3 bg-card rounded-md border hover:bg-muted/5">
      <div className="flex items-center gap-3 flex-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
          <Icon name={getTypeIcon()} className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-muted-foreground">Создан: {date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="flex items-center gap-1">
          <Icon name={getFormatIcon()} className={`h-3 w-3 ${getFormatColor()}`} />
          <span className="uppercase">{format}</span>
        </Badge>
        <span className="text-xs text-muted-foreground">{size}</span>
      </div>
      
      <div className="ml-4 flex gap-1">
        <Button variant="ghost" size="icon">
          <Icon name="Download" className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="Eye" className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Icon name="MoreVertical" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ReportsPage;
