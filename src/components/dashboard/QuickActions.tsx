
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Быстрые действия</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 justify-start items-start" asChild>
            <Link to="/reports">
              <div className="flex h-8 w-8 items-center justify-center">
                <Icon name="FileText" className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Отчеты</span>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 justify-start items-start" asChild>
            <Link to="/devices">
              <div className="flex h-8 w-8 items-center justify-center">
                <Icon name="Sliders" className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Управление</span>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 justify-start items-start" asChild>
            <Link to="/users">
              <div className="flex h-8 w-8 items-center justify-center">
                <Icon name="Users" className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Пользователи</span>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 justify-start items-start" asChild>
            <Link to="/notifications">
              <div className="flex h-8 w-8 items-center justify-center">
                <Icon name="Bell" className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">Уведомления</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
