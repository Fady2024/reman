import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-main.jpg";
import sustainabilityImage from "@/assets/sustainability-hero.jpg";

const features = [
  {
    icon: Recycle,
    title: "100% Recycled",
    description: "Every piece is crafted from end-of-season stock and textile waste",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reducing fashion waste while creating unique, premium pieces",
  },
  {
    icon: Heart,
    title: "One of a Kind",
    description: "Limited quantities mean you wear something truly unique",
  },
];

export default function Index() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Reman sustainable menswear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 animate-fade-in">
              Sustainable Fashion for Men
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Premium Style.
              <br />
              <span className="text-accent">Zero Waste.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Discover unique menswear pieces crafted from recycled end-of-season
              stock from leading fashion brands. Look good. Do good.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="accent" size="xl" asChild>
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/sustainability">Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">New Arrivals</h2>
              <p className="text-muted-foreground">Fresh drops from recycled collections</p>
            </div>
            <Button variant="link" asChild className="hidden md:flex">
              <Link to="/shop">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="accent-outline" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="text-accent font-medium mb-4 block">Our Commitment</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Fashion That Doesn't Cost the Earth
              </h2>
              <p className="text-muted-foreground mb-6">
                The fashion industry produces 92 million tons of textile waste annually.
                At Reman, we're changing that narrative. By rescuing premium end-of-season
                stock and giving it new life, we create unique pieces that reduce waste
                and save resources.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "85% less water used compared to new production",
                  "Zero new raw materials for fabric",
                  "Each purchase saves 3kg of textile waste from landfill",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" asChild>
                <Link to="/sustainability">
                  Learn More About Our Process
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src={sustainabilityImage}
                  alt="Sustainable fabric materials"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg">
                  <div className="text-4xl font-bold">92M</div>
                  <div className="text-sm opacity-90">tons of textile waste yearly</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
            Be part of a community redefining men's fashion. Subscribe for exclusive
            drops, early access, and sustainability insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="accent" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
