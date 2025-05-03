
import { useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';

const Index = () => {
  const [timeframe, setTimeframe] = useState('day');
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-2xl font-bold mb-6">Обзор состояния офисов</h1>
        
        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="eco-stat-card">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary text-sm">
                  <Icon name="Zap" className="h-4 w-4 text-primary-dark" />
                  <span>Потребление энергии</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">126.4</span>
                  <span className="text-secondary">кВт·ч</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-secondary">Сегодня</span>
                  <span className="ml-auto text-xs text-primary flex items-center">
                    <Icon name="TrendingUp" className="h-3 w-3 mr-1" />
                    11.5%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="eco-stat-card">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary text-sm">
                  <Icon name="Building" className="h-4 w-4 text-primary-dark" />
                  <span>Активные офисы</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">3/4</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-secondary">Сейчас работают</span>
                  <Button variant="ghost" size="sm" className="ml-auto h-7 text-xs text-primary hover:text-primary-dark">
                    Подробнее
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="eco-stat-card">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-secondary text-sm">
                  <Icon name="Leaf" className="h-4 w-4 text-primary-dark" />
                  <span>Углеродный след</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">-35.6%</span>
                </div>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-secondary">По сравнению с прошлым месяцем</span>
                  <span className="ml-auto">
                    <Icon name="ThumbsUp" className="h-4 w-4 text-primary" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Статистика энергопотребления */}
          <Card className="col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Статистика энергопотребления</h2>
                <Tabs defaultValue="day" onValueChange={setTimeframe} className="w-auto">
                  <TabsList className="grid grid-cols-3 h-8">
                    <TabsTrigger value="day" className="text-xs">День</TabsTrigger>
                    <TabsTrigger value="week" className="text-xs">Неделя</TabsTrigger>
                    <TabsTrigger value="month" className="text-xs">Месяц</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              {/* Офисы */}
              <div className="space-y-3">
                <OfficeStatItem 
                  name="Главный офис" 
                  status="optimal" 
                  consumption={126.4} 
                  trend={11.5} 
                />
                
                <OfficeStatItem 
                  name="Отдел разработки" 
                  status="high" 
                  consumption={98.2} 
                  trend={-5.2} 
                />
                
                <OfficeStatItem 
                  name="Переговорная" 
                  status="optimal" 
                  consumption={42.6} 
                  trend={3.8} 
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Правая колонка - События и действия */}
          <div className="col-span-1 space-y-6">
            {/* Последние события */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">Последние события</h2>
                <div className="space-y-3">
                  <EventItem 
                    type="warning" 
                    message="Повышенное энергопотребление в Отделе разработки" 
                    time="10:24" 
                  />
                  
                  <EventItem 
                    type="success" 
                    message="Система кондиционирования переключена в эко-режим" 
                    time="09:15" 
                  />
                  
                  <EventItem 
                    type="info" 
                    message="Отчет за апрель 2025 сформирован" 
                    time="08:32" 
                  />
                  
                  <EventItem 
                    type="info" 
                    message="Обновлены настройки лимитов потребления" 
                    time="Вчера" 
                  />
                </div>
                
                <Button variant="ghost" className="mt-3 w-full text-sm">
                  Показать все события
                </Button>
              </CardContent>
            </Card>
            
            {/* Быстрые действия */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4">Быстрые действия</h2>
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/reports">
                    <ActionButton icon="FileText" label="Отчеты" />
                  </Link>
                  
                  <Link to="/devices">
                    <ActionButton icon="Sliders" label="Управление" />
                  </Link>
                  
                  <Link to="/profile">
                    <ActionButton icon="Users" label="Пользователи" />
                  </Link>
                  
                  <Link to="/monitoring">
                    <ActionButton icon="Bell" label="Уведомления" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

interface OfficeStatItemProps {
  name: string;
  status: 'optimal' | 'warning' | 'high';
  consumption: number;
  trend: number;
}

const OfficeStatItem = ({ name, status, consumption, trend }: OfficeStatItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'optimal': return 'text-primary';
      case 'warning': return 'text-amber-500';
      case 'high': return 'text-error';
      default: return 'text-secondary';
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'optimal': return 'Оптимально';
      case 'warning': return 'Внимание';
      case 'high': return 'Повышенное';
      default: return '';
    }
  };
  
  return (
    <div className="flex items-center justify-between p-3 rounded-md border border-[#E0E0E0] hover:bg-muted/20 transition-colors">
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className={`text-xs ${getStatusColor()}`}>{getStatusText()}</span>
      </div>
      
      <div className="text-right">
        <div className="font-medium">{consumption} кВт·ч</div>
        <div className={`text-xs flex items-center justify-end ${trend > 0 ? 'text-primary' : 'text-error'}`}>
          <Icon name={trend > 0 ? "TrendingUp" : "TrendingDown"} className="h-3 w-3 mr-1" />
          {trend > 0 ? '+' : ''}{trend}%
        </div>
      </div>
      
      <Button variant="ghost" size="icon" className="ml-1 h-7 w-7">
        <Icon name="MoreVertical" className="h-4 w-4" />
      </Button>
    </div>
  );
};

interface EventItemProps {
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
  time: string;
}

const EventItem = ({ type, message, time }: EventItemProps) => {
  const getIconByType = () => {
    switch (type) {
      case 'info': return "Info";
      case 'warning': return "AlertTriangle";
      case 'success': return "CheckCircle";
      case 'error': return "XCircle";
      default: return "Circle";
    }
  };
  
  const getColorByType = () => {
    switch (type) {
      case 'info': return "bg-blue-100 text-blue-600";
      case 'warning': return "bg-amber-100 text-amber-600";
      case 'success': return "bg-primary/20 text-primary-dark";
      case 'error': return "bg-error/20 text-error";
      default: return "bg-secondary/20 text-secondary";
    }
  };
  
  return (
    <div className="flex items-start gap-3">
      <div className={`flex items-center justify-center h-7 w-7 rounded-full ${getColorByType()}`}>
        <Icon name={getIconByType()} className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <p className="text-sm">{message}</p>
        <p className="text-xs text-secondary">{time}</p>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  icon: string;
  label: string;
}

const ActionButton = ({ icon, label }: ActionButtonProps) => (
  <Button 
    variant="outline" 
    className="w-full h-auto py-3 px-4 flex flex-col items-center justify-center gap-2 bg-muted hover:bg-primary/10 border-[#E0E0E0]"
  >
    <Icon name={icon} className="h-5 w-5 text-primary-dark" />
    <span className="text-sm">{label}</span>
  </Button>
);

export default Index;
