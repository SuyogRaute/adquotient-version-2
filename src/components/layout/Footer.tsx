import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/adquotient-logo.png";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ],
  solutions: [
    { name: "Platform", path: "/platform" },
    { name: "Inventory", path: "/inventory" },
    { name: "Audience", path: "/audience" },
    { name: "Measurement", path: "/measurement" },
  ],
  resources: [
    { name: "Workflow", path: "/workflow" },
    { name: "For Advertisers", path: "/contact" },
    { name: "For Publishers", path: "/contact" },
    { name: "Partners", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="AdQuotient" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Tech-driven AdSales and Media Planning Partner. Unified access to
              Linear + Digital + CTV + Addressable inventory with AI-powered
              intelligence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary hover:bg-secondary/10 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail size={18} className="mt-1 text-secondary" />
                <span>hello@adquotient.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone size={18} className="mt-1 text-secondary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 text-secondary" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AdQuotient. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
