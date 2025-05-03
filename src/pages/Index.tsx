
import Navbar from "@/components/layout/Navbar";
import EnergyOverview from "@/components/dashboard/EnergyOverview";
import ConsumptionStats from "@/components/dashboard/ConsumptionStats";
import EventLog from "@/components/dashboard/EventLog";
import QuickActions from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Обзор состояния офисов</h1>
        </div>
        
        <div className="mb-8">
          <EnergyOverview />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ConsumptionStats />
          </div>
          <div className="space-y-6">
            <EventLog />
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
