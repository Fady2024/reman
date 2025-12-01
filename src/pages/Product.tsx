import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Recycle, Truck, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export default function Product() {
  const { id } = useParams();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useAuth();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
      category: product.category,
    });
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  return (
    <>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <motion.img
                layoutId={`product-image-${product.id}`}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden bg-muted border-2 transition-colors",
                    selectedImage === index
                      ? "border-accent"
                      : "border-transparent hover:border-muted-foreground/30"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-accent font-medium uppercase tracking-wider"
            >
              {product.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-4xl font-bold mt-2 mb-4"
            >
              {product.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="px-2 py-1 bg-accent/10 text-accent text-sm font-medium rounded">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                </>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-8"
            >
              {product.description}
            </motion.p>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium">Select Size</span>
                <button className="text-sm text-accent hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "h-12 min-w-[48px] px-4 rounded-md border-2 font-medium transition-colors",
                      selectedSize === size
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border hover:border-accent"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <span className="font-medium mb-3 block">Quantity</span>
              <div className="inline-flex items-center border border-border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-12 w-12 flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {/* Add to Cart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3"
            >
              <button
                onClick={handleToggleWishlist}
                className="h-14 w-14 flex items-center justify-center rounded-md border-2 border-border hover:border-accent transition-colors"
                title={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={cn("h-5 w-5", isInWishlist(product.id) && "fill-red-500 text-red-500")} />
              </button>
              <Button
                variant="hero"
                size="xl"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart - {formatPrice(product.price * quantity)}
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border"
            >
              {[
                { icon: Recycle, label: "Recycled Materials" },
                { icon: Truck, label: "Free Shipping" },
                { icon: Shield, label: "30-Day Returns" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="h-5 w-5 mx-auto mb-2 text-accent" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Materials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-6 space-y-4"
            >
              <div>
                <h3 className="font-medium mb-2">Materials</h3>
                <p className="text-muted-foreground text-sm">{product.material}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">{product.recycledContent}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24 pt-12 border-t border-border">
            <motion.h2
              className="text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              You Might Also Like
            </motion.h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product, index) => (
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
          </section>
        )}
      </div>
    </>
  );
}
