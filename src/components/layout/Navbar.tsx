
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="h-6 w-6 text-secondary" />
            <span className="text-xl font-semibold">Эко Офис</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <NavItem to="/" icon="Home" text="Главная" active />
            <NavItem to="/profile" icon="User" text="Мой профиль" />
            <NavItem to="/monitoring" icon="BarChart2" text="Мониторинг" />
            <NavItem to="/devices" icon="Sliders" text="Управление" />
            <NavItem to="/reports" icon="FileText" text="Отчеты" />
          </nav>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/settings">
                <Icon name="Settings" className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/logout">
                <Icon name="LogOut" className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <Separator />
    </>
  );
};

interface NavItemProps {
  to: string;
  icon: string;
  text: string;
  active?: boolean;
}

const NavItem = ({ to, icon, text, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors hover:text-primary ${
        active ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <Icon name={icon} className="h-5 w-5" />
      <span>{text}</span>
    </Link>
  );
};

export default Navbar;
