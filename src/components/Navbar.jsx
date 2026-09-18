import { Link } from "react-router-dom";
import {
  CloudRain,
  Map,
  ShieldCheck,
  Bell,
} from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="brand-icon">
          <CloudRain size={24} />
        </div>

        <div>
          <h2>Chennai Flood</h2>
          <span>Nowcasting System</span>
        </div>
      </div>

      <nav className="navbar-links">
        <Link to="/">
          Public Portal
        </Link>

        <Link to="/map">
          <Map size={17} />
          Live Map
        </Link>

        <Link to="/alerts">
          <Bell size={17} />
          Alerts
        </Link>

        <Link to="/authority">
          <ShieldCheck size={17} />
          Authority
        </Link>
      </nav>

      <div className="system-status">
        <span className="status-dot"></span>
        System Online
      </div>
    </header>
  );
}

export default Navbar;