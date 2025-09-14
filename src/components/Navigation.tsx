import { Link, useLocation } from "react-router-dom";
import { Coffee, UtensilsCrossed } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card shadow-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-coffee" />
            <span className="text-xl font-bold text-foreground">TasteBU</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              หน้าแรก
            </Link>
            <Link
              to="/restaurants"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/restaurants")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <UtensilsCrossed className="h-4 w-4" />
              <span>ร้านอาหาร</span>
            </Link>
            <Link
              to="/cafes"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                isActive("/cafes")
                  ? "bg-coffee text-primary-foreground font-medium"
                  : "text-foreground hover:text-coffee hover:bg-cream"
              }`}
            >
              <Coffee className="h-4 w-4" />
              <span>คาเฟ่</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;