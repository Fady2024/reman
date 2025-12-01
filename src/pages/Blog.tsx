import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Sustainable Men's Fashion",
    excerpt: "How the industry is changing and what it means for conscious consumers. From material innovation to circular business models, the landscape is shifting.",
    image: sustainabilityHero,
    category: "Sustainability",
    readTime: "5 min read",
    date: "Nov 28, 2024",
  },
  {
    id: "2",
    title: "5 Ways to Build a Capsule Wardrobe",
    excerpt: "Discover how to create a versatile wardrobe with fewer, better pieces. Quality over quantity is the key to sustainable style.",
    image: product1,
    category: "Style Tips",
    readTime: "4 min read",
    date: "Nov 25, 2024",
  },
  {
    id: "3",
    title: "Why Recycled Fashion Doesn't Mean Compromised Quality",
    excerpt: "Breaking down the myth that sustainable means sacrificing craftsmanship. Our recycled pieces often exceed the quality of fast fashion alternatives.",
    image: product2,
    category: "Sustainability",
    readTime: "6 min read",
    date: "Nov 22, 2024",
  },
  {
    id: "4",
    title: "Fall Layering: A Complete Guide",
    excerpt: "Master the art of layering with our essential guide. From base layers to outerwear, create looks that are both functional and stylish.",
    image: product3,
    category: "Style Tips",
    readTime: "7 min read",
    date: "Nov 18, 2024",
  },
  {
    id: "5",
    title: "The Environmental Cost of Fast Fashion",
    excerpt: "Understanding the true impact of disposable clothing on our planet. The numbers might surprise you—and motivate change.",
    image: sustainabilityHero,
    category: "Sustainability",
    readTime: "8 min read",
    date: "Nov 15, 2024",
  },
  {
    id: "6",
    title: "How to Care for Your Recycled Garments",
    excerpt: "Extend the life of your clothes with proper care. Simple habits that make your wardrobe last longer and perform better.",
    image: product1,
    category: "Care Guide",
    readTime: "4 min read",
    date: "Nov 12, 2024",
  },
];

const categories = ["All", "Sustainability", "Style Tips", "Care Guide"];

export default function Blog() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">The REMAN Journal</h1>
            <p className="text-muted-foreground">
              Insights on sustainable fashion, style tips, and our journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container-custom">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted first:bg-accent first:text-accent-foreground"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
            <div>
              <span className="text-accent text-sm font-medium">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <Button variant="hero" asChild>
                <Link to={`/blog/${featuredPost.id}`}>
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <span className="text-accent text-sm font-medium">
                  {post.category}
                </span>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 max-w-md mx-auto mb-6">
              Get the latest articles on sustainable fashion, styling tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
