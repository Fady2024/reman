import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, formatPrice } from "@/lib/utils";

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
}: ProductCardProps) {
  return (
    <div className={cn("group", className)} style={style}>
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {isNew && (
            <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded">
              New
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // Add to wishlist logic
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="hero" size="sm" className="w-full">
              Quick View
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
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
