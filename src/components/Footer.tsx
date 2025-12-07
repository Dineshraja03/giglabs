import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Brand Section */}
      <div className="container mx-auto px-6 py-12 text-center border-b border-border">
        <h3 className="text-2xl font-serif italic mb-2">Giglabs</h3>
        <p className="text-sm text-muted-foreground">
          Great ideas. Impeccable execution, memorable branding.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          {["facebook", "linkedin", "instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              aria-label={social}
            >
              <span className="sr-only">{social}</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Links Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* CTA */}
          <div>
            <h4 className="text-3xl font-serif mb-4">
              Let's <span className="text-accent italic">work</span>
              <br />
              together.
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Have an idea? Let's talk for the Next Big 
              Thing! Or you're not sure where to start?
            </p>
            <Link to="/contact" className="text-sm text-accent hover:underline underline-offset-4">
              Let's talk →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {["Agency", "Projects", "Insights", "Career", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Services</h5>
            <ul className="space-y-3">
              {["Web design", "App Design", "UI/UX Design", "Development"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Contact Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">
                Mangalore, India
              </li>
              <li>
                <a href="mailto:info@giglabs.tech" className="hover:text-accent transition-colors">
                  info@giglabs.tech
                </a>
              </li>
              <li>
                <a href="tel:+918243539291" className="hover:text-accent transition-colors">
                  +91 824 3539291
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gigabyte Labs Pvt Ltd. All Rights Reserved</p>
          <Link to="/" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
