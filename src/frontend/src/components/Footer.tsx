import logoUrl from "@/assets/logo.jpg";
import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

const WA_URL =
  "https://wa.me/919311246415?text=Hi%20Mahaveer%20Crafting%2C%20I%20am%20interested%20in%20your%20DTF%20printing%20services.%20Please%20share%20more%20details.";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-teal text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-3">
          <img
            src={logoUrl}
            alt="Mahaveer Crafting Logo"
            className="h-16 w-auto object-contain bg-white rounded-lg p-1"
          />
          <p className="text-white/80 text-sm">
            Premium DTF & Sublimation Printing across India.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1.5 text-sm text-white/80">
            {(
              [
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/pricing", label: "Pricing" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ] as const
            ).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Bakhtawarpur, Delhi 110036
            </li>
            <li>
              <a
                href="tel:+919311246415"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" /> +91 9311246415
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/mahaveercrafting?igsh=MXBkdHB1eWk5NWpjeQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583204133717"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <SiFacebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 text-center py-4 text-xs text-white/60">
        © {year} Mahaveer Crafting. Built with ❤️ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          caffeine.ai
        </a>
      </div>
    </footer>
  );
}
