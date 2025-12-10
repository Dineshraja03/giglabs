import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10">
        {/* Top CTA Section */}
        <div className="container mx-auto px-6 py-16 border-b border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              Ready to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">create</span> something amazing?
            </h3>
            <p className="text-lg text-slate-400 mb-8">
              Let's work together to bring your vision to life. Contact us today and let's discuss your next project.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-lg font-bold transition-all duration-300 hover:gap-4"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <h4 className="text-2xl font-black mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Giglabs
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We're a team of designers, developers, and strategists creating exceptional digital experiences for ambitious brands.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 hover:border-orange-500 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 hover:border-orange-500 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-700 hover:border-orange-500 flex items-center justify-center text-slate-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-sm font-black uppercase tracking-wider mb-6 text-white">Services</h5>
              <ul className="space-y-4">
                {["Web Design", "App Design", "UI/UX Design", "Development", "Branding"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-sm font-black uppercase tracking-wider mb-6 text-white">Company</h5>
              <ul className="space-y-4">
                {["About Us", "Projects", "Team", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-sm font-black uppercase tracking-wider mb-6 text-white">Contact</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">Mangalore, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@giglabs.tech"
                    className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    info@giglabs.tech
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <a
                    href="tel:+918243539291"
                    className="text-slate-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                  >
                    +91 824 3539291
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800" />

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Gigabyte Labs Pvt Ltd. All Rights Reserved</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-orange-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-orange-500 transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link to="/" className="hover:text-orange-500 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
