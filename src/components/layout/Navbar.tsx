
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <header className="w-full py-2 px-4 bg-background-light border-b border-[#E0E0E0] shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 text-primary-dark font-bold text-xl">
            <Icon name="Leaf" className="h-6 w-6 text-primary" />
            <span>Эко Офис</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/" icon="Home" label="Главная" />
          <NavItem to="/profile" icon="User" label="Мой профиль" />
          <NavItem to="/monitoring" icon="BarChart2" label="Мониторинг" />
          <NavItem to="/devices" icon="Cpu" label="Управление" />
          <NavItem to="/reports" icon="FileText" label="Отчеты" />
        </nav>
        
        <div className="flex items-center gap-2">
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Icon name="Settings" className="h-5 w-5 text-primary-dark" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Icon name="LogOut" className="h-5 w-5 text-secondary" />
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <Link to={to} className="flex items-center gap-1.5 px-3 py-2 text-secondary hover:text-primary hover:bg-background rounded-md transition-colors">
    <Icon name={icon} className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);

export default Navbar;
