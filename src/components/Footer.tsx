import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { name: "About Us", type: "external" as const, href: "https://portfolio-harun.vercel.app/" },
    { name: "Contact", type: "internal" as const, href: "/#contact" },
    { name: "Support", type: "internal" as const, href: "/#community" },
    { name: "Community", type: "internal" as const, href: "/#community" },
    { name: "Careers", type: "internal" as const, href: "/dashboard" },
    { name: "Security", type: "internal" as const, href: "/enterprise" },
    { name: "Partnerships", type: "internal" as const, href: "/#partnerships" },
  ];

  return (
    <footer className="border-t border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">Q</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">Qubit</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The AI-powered development platform that understands your intent and delivers results.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Enterprise
                </Link>
              </li>
              <li>
                <a href="https://github.com/SAKMOTO/Qubit.git" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  {link.type === "external" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.slice(4).map((link) => (
                <li key={link.name}>
                  {link.type === "external" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Qubit. Made by Mohammed Harun
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/SAKMOTO/Qubit.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
