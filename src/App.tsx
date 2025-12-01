import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/layout/PageTransition";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartDrawer } from "./components/CartDrawer";
import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import { Layout } from "@/components/layout/Layout";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><Product /></PageTransition>} />
        <Route path="/sustainability" element={<PageTransition><Sustainability /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/auth" element={<PageTransition><Auth /></PageTransition>} />
        <Route path="/account" element={<PageTransition><Account /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

import { ThemeProvider } from "@/components/theme-provider";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Layout>
                <AnimatedRoutes />
              </Layout>
              <CartDrawer />
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
