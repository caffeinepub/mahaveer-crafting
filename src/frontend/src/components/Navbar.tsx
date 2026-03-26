import logoUrl from "@/assets/logo.jpg";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/services" as const, label: "Services" },
  { to: "/gallery" as const, label: "Gallery" },
  { to: "/pricing" as const, label: "Pricing" },
  { to: "/reviews" as const, label: "Reviews" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          to="/"
          data-ocid="nav.link"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2"
        >
          <img
            src={logoUrl}
            alt="Mahaveer Crafting Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="font-bold text-base text-primary"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Mahaveer Crafting
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              DTF Printing Experts
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className={`block py-3 px-4 rounded-md text-sm font-semibold my-1 transition-colors ${
                pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
