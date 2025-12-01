import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, priceRanges } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      
      let priceMatch = true;
      if (selectedPriceRange) {
        const range = priceRanges.find((r) => r.label === selectedPriceRange);
        if (range) {
          priceMatch = product.price >= range.min && product.price < range.max;
        }
      }

      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPriceRange]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedPriceRange(null);
  };

  const hasActiveFilters = selectedCategory !== "All" || selectedPriceRange !== null;

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Shop Collection</h1>
          <p className="text-muted-foreground">
            Unique recycled menswear pieces, limited quantities available
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container-custom">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Filters - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "block w-full text-left py-2 px-3 rounded-md transition-colors",
                          selectedCategory === category
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === range.label ? null : range.label
                          )
                        }
                        className={cn(
                          "block w-full text-left py-2 px-3 rounded-md transition-colors",
                          selectedPriceRange === range.label
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <Button variant="outline" onClick={clearFilters} className="w-full">
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Mobile Filter Button */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <span className="text-sm text-muted-foreground">
                  {filteredProducts.length} products
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                      !
                    </span>
                  )}
                </Button>
              </div>

              {/* Desktop Sort & Count */}
              <div className="hidden lg:flex items-center justify-between mb-8">
                <span className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </span>
                {hasActiveFilters && (
                  <div className="flex items-center gap-2">
                    {selectedCategory !== "All" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm">
                        {selectedCategory}
                        <button onClick={() => setSelectedCategory("All")}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    {selectedPriceRange && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm">
                        {selectedPriceRange}
                        <button onClick={() => setSelectedPriceRange(null)}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      {...product}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.05}s` } as React.CSSProperties}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">
                    No products found matching your filters.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/50"
            onClick={() => setShowFilters(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background p-6 overflow-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFilters(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "block w-full text-left py-2 px-3 rounded-md transition-colors",
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() =>
                        setSelectedPriceRange(
                          selectedPriceRange === range.label ? null : range.label
                        )
                      }
                      className={cn(
                        "block w-full text-left py-2 px-3 rounded-md transition-colors",
                        selectedPriceRange === range.label
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  Clear Filters
                </Button>
              )}
              <Button
                variant="hero"
                onClick={() => setShowFilters(false)}
                className="w-full"
              >
                Show {filteredProducts.length} Results
              </Button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
