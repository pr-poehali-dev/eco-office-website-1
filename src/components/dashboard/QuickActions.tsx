
import { Card, CardContent } from "@/components/ui/card";
import ActionButton from "@/components/dashboard/ActionButton";
import { Link } from "react-router-dom";

interface ActionItem {
  icon: string;
  label: string;
  path: string;
}

interface QuickActionsProps {
  actions: ActionItem[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-lg font-bold mb-4">Быстрые действия</h2>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Link key={index} to={action.path}>
              <ActionButton icon={action.icon} label={action.label} />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
