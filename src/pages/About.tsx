import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import aboutProcess from "@/assets/about-process.jpg";
import heroMain from "@/assets/hero-main.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To prove that sustainable fashion can be stylish, affordable, and masculine. We rescue premium materials from waste streams and transform them into wardrobe essentials.",
  },
  {
    icon: Lightbulb,
    title: "Vision",
    description: "A world where men's fashion choices contribute to environmental solutions rather than problems. Where every garment tells a story of transformation.",
  },
  {
    icon: Users,
    title: "Values",
    description: "Transparency in our process, quality in our products, and impact in our actions. We believe in doing well by doing good.",
  },
];

const stats = [
  { value: "50K+", label: "Pieces Rescued" },
  { value: "2M", label: "Liters of Water Saved" },
  { value: "15K", label: "Happy Customers" },
  { value: "Zero", label: "Compromise on Style" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-medium mb-4 block animate-fade-in">About Reman</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              Redefining Men's Fashion, One Rescued Piece at a Time
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We believe great style shouldn't cost the earth. Reman transforms
              premium end-of-season stock into unique, sustainable menswear.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Reman was born from a simple observation: millions of perfectly good
                  garments from major fashion brands end up destroyed or in landfills
                  each season simply because they didn't sell.
                </p>
                <p>
                  Founded in 2024 in Cairo, Egypt, we set out to change this. We partner with premium
                  brands to rescue their end-of-season stock before it goes to waste.
                  Our team of designers then reimagines these pieces—updating fits,
                  refreshing details, and creating something entirely new.
                </p>
                <p>
                  The result? Unique, high-quality menswear at accessible prices.
                  Pieces that look and feel premium because they are—they just had
                  a different journey to your wardrobe.
                </p>
              </div>
              <Button variant="hero" className="mt-8" asChild>
                <Link to="/sustainability">
                  See Our Process <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroMain}
                alt="Reman sustainable fashion"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Our circular approach to fashion ensures nothing goes to waste
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rescue",
                description: "We source unsold stock from premium brands at end of season",
              },
              {
                step: "02",
                title: "Redesign",
                description: "Our team updates fits, details, and hardware for modern appeal",
              },
              {
                step: "03",
                title: "Restyle",
                description: "Each piece is professionally finished and quality checked",
              },
              {
                step: "04",
                title: "Rewear",
                description: "You get unique, sustainable style at a fraction of original cost",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Men's Fashion */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={aboutProcess}
                alt="Reman production process"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Men's Fashion Needs More Options
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The sustainable fashion movement has largely focused on womenswear,
                  leaving men with fewer choices. We're changing that.
                </p>
                <p>
                  Men deserve access to stylish, sustainable clothing that doesn't
                  sacrifice on quality or aesthetic. Reman bridges this gap by
                  offering pieces that are:
                </p>
                <ul className="space-y-2">
                  {[
                    "Designed with masculine aesthetics in mind",
                    "Built for durability and everyday wear",
                    "Priced for accessibility without cutting corners",
                    "Unique—no mass production, limited quantities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card p-8 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every purchase supports sustainable fashion and reduces textile waste.
            Explore our collection today.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/shop">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
