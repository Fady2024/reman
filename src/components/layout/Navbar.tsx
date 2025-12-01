import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { SearchBar } from "@/components/SearchBar";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();
  const { isAuthenticated, user } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">
            Re<span className="text-accent">man</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Search */}
          <div className="hidden sm:block">
            <SearchBar />
          </div>

          <ModeToggle />

          {/* User Account */}
          {isAuthenticated ? (
            <Link
              to="/account"
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              title={user?.name}
            >
              <User className="h-5 w-5" />
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Log In
              </Button>
            </Link>
          )}

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden h-9 w-9 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 space-y-2">
              {/* Mobile Search */}
              <div className="pb-4 border-b border-border">
                <SearchBar />
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-md font-medium transition-colors",
                    location.pathname === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-border">
                {isAuthenticated ? (
                  <Link
                    to="/account"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-md font-medium text-muted-foreground hover:bg-muted"
                  >
                    My Account
                  </Link>
                ) : (
                  <Link
                    to="/auth"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button variant="hero" className="w-full">
                      Log In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
