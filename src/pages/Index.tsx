
import React from 'react';
import Navbar from "@/components/layout/Navbar";
import StatCard from "@/components/dashboard/StatCard";
import EnergyStats from "@/components/dashboard/EnergyStats";
import EventsPanel from "@/components/dashboard/EventsPanel";
import QuickActions from "@/components/dashboard/QuickActions";
import Icon from "@/components/ui/icon";
import { useToast } from "@/components/ui/use-toast";
import { officeStatsData, eventsData, quickActionsData } from "@/data/dashboardData";

const Index = () => {
  const { toast } = useToast();
  
  const handleShowAllEvents = () => {
    toast({
      title: "Все события",
      description: "Переход к полному журналу событий",
    });
  };
  
  const handleOfficeMoreClick = (index: number) => {
    toast({
      title: `Детали офиса`,
      description: `Подробная информация о ${officeStatsData[index].name}`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-6">
        <h1 className="text-2xl font-bold mb-6">Обзор состояния офисов</h1>
        
        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Потребление энергии */}
          <StatCard 
            icon="Zap"
            title="Потребление энергии"
            value={126.4}
            unit="кВт·ч"
            subtitle="Сегодня"
            trend={{ value: 11.5, isPositive: true }}
          />
          
          {/* Активные офисы */}
          <StatCard 
            icon="Building"
            title="Активные офисы"
            value="3/4"
            subtitle="Сейчас работают"
            action={{ label: "Подробнее" }}
          />
          
          {/* Углеродный след */}
          <StatCard 
            icon="Leaf"
            title="Углеродный след"
            value="-35.6%"
            subtitle="По сравнению с прошлым месяцем"
            suffix={<Icon name="ThumbsUp" className="h-4 w-4 text-primary" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Статистика энергопотребления */}
          <EnergyStats 
            offices={officeStatsData} 
            onOfficeMoreClick={handleOfficeMoreClick}
          />
          
          {/* Правая колонка - События и действия */}
          <div className="col-span-1 space-y-6">
            {/* Последние события */}
            <EventsPanel events={eventsData} onShowAll={handleShowAllEvents} />
            
            {/* Быстрые действия */}
            <QuickActions actions={quickActionsData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
