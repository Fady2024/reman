import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Recycle, Factory, TreePine, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import aboutProcess from "@/assets/about-process.jpg";

const impacts = [
  {
    icon: Droplets,
    value: "85%",
    label: "Less Water Used",
    description: "Compared to producing new garments from raw materials",
  },
  {
    icon: Factory,
    value: "70%",
    label: "Lower Emissions",
    description: "Reduced carbon footprint through material reuse",
  },
  {
    icon: TreePine,
    value: "50K+",
    label: "Items Rescued",
    description: "Premium garments saved from landfills and destruction",
  },
  {
    icon: Shirt,
    value: "3kg",
    label: "Waste Saved Per Purchase",
    description: "Each item you buy prevents textile waste",
  },
];

const process = [
  {
    title: "Sourcing",
    description: "We partner with premium fashion brands across Europe to acquire their unsold end-of-season inventory. These are high-quality pieces that simply didn't find buyers in time.",
    image: aboutProcess,
  },
  {
    title: "Selection",
    description: "Our team carefully inspects every garment. Only pieces meeting our quality standards make it through. We look for durable construction, premium materials, and timeless design.",
    image: sustainabilityHero,
  },
  {
    title: "Redesign",
    description: "Selected pieces undergo transformation. We update fits, replace hardware, refresh details, and sometimes combine elements from multiple garments to create something entirely new.",
    image: aboutProcess,
  },
  {
    title: "Quality Control",
    description: "Every finished piece goes through rigorous quality checks. We ensure perfect stitching, proper fit, and premium finish before it reaches you.",
    image: sustainabilityHero,
  },
];

export default function Sustainability() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={sustainabilityHero}
            alt="Sustainable fashion materials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Commitment
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Fashion That Respects the Planet
            </h1>
            <p className="text-xl text-primary-foreground/80">
              The fashion industry is one of the world's largest polluters. We're on a mission 
              to change that by giving premium materials a second life.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Fashion Waste Crisis</h2>
            <p className="text-lg text-muted-foreground">
              Every year, the fashion industry produces over 92 million tons of textile waste. 
              Much of this comes from perfectly good garments that simply didn't sell. Instead 
              of being reused, they're destroyed or sent to landfills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "92M", label: "Tons of textile waste produced annually" },
              { value: "20%", label: "Of global wastewater from fashion" },
              { value: "10%", label: "Of global carbon emissions from fashion" },
              { value: "300B", label: "Worth of unsold inventory destroyed yearly" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-muted p-6 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              We intercept premium materials before they become waste, transforming them into 
              unique pieces you'll love wearing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact) => (
              <div key={impact.label} className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold mb-2">{impact.value}</div>
                <div className="font-medium mb-1">{impact.label}</div>
                <p className="text-sm text-primary-foreground/60">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Recycle Fashion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From rescue to rewear, every step is designed to minimize waste and maximize style.
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="text-5xl font-bold text-accent/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Sustainable Men's Fashion Matters
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For too long, sustainable fashion has been marketed primarily to women. 
                  Men's options have been limited, often sacrificing style for sustainability 
                  or vice versa.
                </p>
                <p>
                  At Reman, we believe men shouldn't have to choose. Our pieces prove that 
                  sustainable fashion can be masculine, stylish, and affordable—all at once.
                </p>
                <p>
                  When you choose Reman, you're not just buying clothes. You're making a 
                  statement that men care about the planet too. You're supporting a circular 
                  economy that values quality over quantity.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/shop">
                    Shop Sustainable <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <Recycle className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Circular Economy</h4>
                  <p className="text-sm text-muted-foreground">
                    Materials stay in use longer, reducing demand for new resources
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <Leaf className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Reduced Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Less water, energy, and emissions than new production
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <Shirt className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Unique Style</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited quantities mean truly individual pieces
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <Factory className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Sourced from brands known for durability and craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Every purchase contributes to a more sustainable fashion industry. 
            Explore our collection of rescued and redesigned menswear.
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

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
