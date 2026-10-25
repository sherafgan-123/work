import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BookButton } from "./Buttons";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "../data/site";
import logo from "../assets/logo-sa.webp";

const links = [
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${site.name}, home`}>
          <img className="brand-logo" src={logo} width="40" height="40" alt="" />
          <span>{site.name}</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <ThemeToggle />
        <div className="header-cta">
          <BookButton variant="light" className="btn-sm" />
        </div>
        <button
          type="button"
          className="icon-btn menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bars" aria-hidden="true" />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="mobile-link">
              {l.label}
            </NavLink>
          ))}
          <BookButton variant="light" className="btn-block" />
        </nav>
      </div>
    </header>
  );
}
