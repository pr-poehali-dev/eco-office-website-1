
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventItem, { EventItemProps } from "@/components/dashboard/EventItem";

interface EventsPanelProps {
  events: EventItemProps[];
  onShowAll?: () => void;
}

const EventsPanel = ({ events, onShowAll }: EventsPanelProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-bold mb-4">Последние события</h2>
        <div className="space-y-3">
          {events.map((event, index) => (
            <EventItem 
              key={index}
              type={event.type}
              message={event.message}
              time={event.time}
            />
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="mt-3 w-full text-sm"
          onClick={onShowAll}
        >
          Показать все события
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventsPanel;
