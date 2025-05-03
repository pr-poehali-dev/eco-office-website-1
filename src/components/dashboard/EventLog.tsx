
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Event {
  id: number;
  title: string;
  time: string;
  type: "warning" | "success" | "info";
}

const events: Event[] = [
  {
    id: 1,
    title: "Повышенное энергопотребление в Отделе разработки",
    time: "10:24",
    type: "warning"
  },
  {
    id: 2,
    title: "Система кондиционирования переключена в эко-режим",
    time: "09:15",
    type: "success"
  },
  {
    id: 3,
    title: "Отчет за апрель 2025 сформирован",
    time: "08:32",
    type: "info"
  },
  {
    id: 4,
    title: "Обновлены настройки лимитов потребления",
    time: "Вчера",
    type: "info"
  }
];

const EventIcon = ({ type }: { type: Event["type"] }) => {
  switch (type) {
    case "warning":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
          <Icon name="AlertTriangle" className="h-4 w-4 text-amber-500" />
        </div>
      );
    case "success":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
          <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
        </div>
      );
    case "info":
      return (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
          <Icon name="Info" className="h-4 w-4 text-blue-500" />
        </div>
      );
  }
};

const EventLog = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние события</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-3">
              <EventIcon type={event.type} />
              <div className="flex-1">
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="mt-4 w-full text-sm">
          Показать все события
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventLog;
