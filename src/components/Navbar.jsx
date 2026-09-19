import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  CloudRain,
  Map,
  ShieldCheck,
  Bell,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();

  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.dashboard"), icon: <LayoutDashboard size={16} /> },
    { to: "/map", label: t("nav.map"), icon: <Map size={16} /> },
    { to: "/alerts", label: t("nav.alerts"), icon: <Bell size={16} /> },
    { to: "/authority", label: t("nav.authority"), icon: <ShieldCheck size={16} /> },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
        <div className="brand-icon" aria-hidden="true">
          <CloudRain size={22} />
        </div>

        <div>
          <h2>{t("nav.brand")}</h2>
          <span>{t("nav.subtitle")}</span>
        </div>
      </Link>

      <nav
        className={`navbar-links ${open ? "open" : ""}`}
        aria-label={t("nav.brand")}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
            aria-current={location.pathname === link.to ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}

        <div className="navbar-mobile-extras">
          <div className="system-status">
            <span className="status-dot" aria-hidden="true"></span>
            {t("nav.simulationOnline")}
          </div>
        </div>
      </nav>

      <div className="navbar-right">
        <div className="system-status desktop-only">
          <span className="status-dot" aria-hidden="true"></span>
          {t("nav.simulationOnline")}
        </div>

        <LanguageSwitcher />

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={t("nav.openMenu")}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
