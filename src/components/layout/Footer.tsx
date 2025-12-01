import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Github, Linkedin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "/shop" },
    { name: "Jackets", href: "/shop?category=jackets" },
    { name: "Tops", href: "/shop?category=tops" },
    { name: "Pants", href: "/shop?category=pants" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Shipping", href: "/contact" },
    { name: "Returns", href: "/contact" },
    { name: "Size Guide", href: "/shop" },
    { name: "FAQ", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                Re<span className="text-accent">man</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Premium recycled menswear. Unique pieces crafted from end-of-season stock,
              redesigned for the modern man who cares about style and sustainability.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold mb-1">Subscribe to our newsletter</h4>
              <p className="text-primary-foreground/70 text-sm">
                Get updates on new arrivals and sustainability initiatives.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-2 rounded-md bg-accent text-accent-foreground font-medium hover:bg-olive-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <span>© 2024 Reman. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <div className="flex items-center gap-2">
              <span>Created by dev Fady Gerges</span>
              <a href="https://github.com/Fady2024/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4 hover:text-primary-foreground transition-colors" />
              </a>
              <a href="https://www.facebook.com/fady.gerges.kodsy/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-4 w-4 hover:text-primary-foreground transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/fady-gerges-kodsy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
