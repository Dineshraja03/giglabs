import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Giglabs</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your partner for digital transformation and AI-powered solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              {[
                "Application Services",
                "Data & AI",
                "Cloud",
                "Enterprise Solutions",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} />
                Mangalore, India
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} />
                +91 824 3539291
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} />
                info@giglabs.tech
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Gigabyte Labs Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
