import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Leaf, Recycle, Factory, TreePine, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={sustainabilityHero}
            alt="Sustainable fashion materials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Our Commitment
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Fashion That Respects the Planet
            </h1>
            <p className="text-xl text-gray-200">
              The fashion industry is one of the world's largest polluters. We're on a mission
              to change that by giving premium materials a second life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Fashion Waste Crisis</h2>
            <p className="text-lg text-muted-foreground">
              Every year, the fashion industry produces over 92 million tons of textile waste.
              Much of this comes from perfectly good garments that simply didn't sell. Instead
              of being reused, they're destroyed or sent to landfills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "92M", label: "Tons of textile waste produced annually" },
              { value: "20%", label: "Of global wastewater from fashion" },
              { value: "10%", label: "Of global carbon emissions from fashion" },
              { value: "300B", label: "Worth of unsold inventory destroyed yearly" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-muted p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We intercept premium materials before they become waste, transforming them into
              unique pieces you'll love wearing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <motion.div
                key={impact.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <impact.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-4xl font-bold mb-2">{impact.value}</div>
                <div className="font-medium mb-1">{impact.label}</div>
                <p className="text-sm text-gray-400">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Recycle Fashion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From rescue to rewear, every step is designed to minimize waste and maximize style.
            </p>
          </motion.div>

          <div className="space-y-16">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className={cn(
                  "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                  index % 2 === 1 && "lg:grid-flow-dense"
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="bg-accent/10 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Recycle className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Circular Economy</h4>
                  <p className="text-sm text-muted-foreground">
                    Materials stay in use longer, reducing demand for new resources
                  </p>
                </motion.div>
                <motion.div
                  className="bg-accent/10 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Leaf className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Reduced Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    Less water, energy, and emissions than new production
                  </p>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="bg-accent/10 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Shirt className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Unique Style</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited quantities mean truly individual pieces
                  </p>
                </motion.div>
                <motion.div
                  className="bg-accent/10 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Factory className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-1">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Sourced from brands known for durability and craftsmanship
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Every purchase contributes to a more sustainable fashion industry.
              Explore our collection of rescued and redesigned menswear.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
