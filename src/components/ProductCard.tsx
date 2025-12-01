import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string[];
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  className,
  style,
  sizes = ["S", "M", "L", "XL"],
}: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useAuth();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const isFavorite = isInWishlist(id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
    }
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Add to cart with default size M
    addToCart({
      id,
      name,
      price,
      image,
      size: "M",
      category,
      quantity: 1,
    });
  };

  return (
    <div className={cn("group", className)} style={style}>
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
          <motion.img
            layoutId={`product-image-${id}`}
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* New Badge */}
          {isNew && (
            <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded">
              New
            </span>
          )}

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={cn(
              "absolute top-3 right-3 h-9 w-9 rounded-full flex items-center justify-center transition-all",
              "bg-background/90 backdrop-blur-sm hover:bg-background hover:scale-110",
              "opacity-0 group-hover:opacity-100"
            )}
            title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-all",
                isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
              )}
            />
          </button>

          {/* Quick Add to Cart */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              onClick={handleQuickAdd}
              variant="hero"
              size="sm"
              className="w-full gap-2"
            >
              <ShoppingCart className="h-4 w-4" />
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {category}
        </p>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground hover:text-accent transition-colors mb-1">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{formatPrice(price)}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
              <span className="text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded">
                Save {Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
