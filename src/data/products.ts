import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  material: string;
  recycledContent: string;
  sizes: string[];
  isNew?: boolean;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Recycled Cotton Hoodie",
    description: "Premium heavyweight hoodie crafted from 100% recycled cotton. Originally from a leading European brand's end-of-season stock, redesigned with our signature minimal aesthetic. Features a relaxed fit, ribbed cuffs, and kangaroo pocket.",
    price: 2750,
    originalPrice: 4650,
    image: product1,
    images: [product1, product2, product3],
    category: "Tops",
    material: "100% Recycled Cotton",
    recycledContent: "Made from recovered textile waste and end-of-season inventory",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Olive Bomber Jacket",
    description: "Classic bomber silhouette in signature olive green. Sourced from premium brand surplus and reimagined with updated hardware and sustainable lining. Water-resistant outer shell with recycled polyester insulation.",
    price: 4500,
    originalPrice: 8700,
    image: product2,
    images: [product2, product1, product3],
    category: "Jackets",
    material: "Recycled Polyester Shell, Recycled Down Alternative Fill",
    recycledContent: "Outer shell made from 45 recycled plastic bottles",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Black Denim Jacket",
    description: "Timeless black denim jacket with a modern edge. Salvaged from premium denim stock and given new life with our signature detailing. Features classic button front, chest pockets, and adjustable waist tabs.",
    price: 3900,
    originalPrice: 6850,
    image: product3,
    images: [product3, product1, product2],
    category: "Jackets",
    material: "100% Recycled Denim",
    recycledContent: "Each jacket saves approximately 1,800 gallons of water",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: false,
    inStock: true,
  },
  {
    id: "4",
    name: "Charcoal Cargo Pants",
    description: "Modern cargo pants in versatile charcoal. Redesigned from premium workwear stock with a contemporary tapered fit. Features multiple utility pockets and adjustable ankle cuffs.",
    price: 2950,
    originalPrice: 5150,
    image: product1,
    images: [product1, product3, product2],
    category: "Pants",
    material: "Recycled Cotton Twill",
    recycledContent: "Made from reclaimed textile manufacturing waste",
    sizes: ["28", "30", "32", "34", "36"],
    isNew: false,
    inStock: true,
  },
  {
    id: "5",
    name: "Minimal Crew Neck Tee",
    description: "Essential crew neck t-shirt in organic cotton. Simple, versatile, and sustainably made. Perfect for layering or wearing on its own.",
    price: 1400,
    originalPrice: 2350,
    image: product2,
    images: [product2, product1, product3],
    category: "Tops",
    material: "Organic Cotton",
    recycledContent: "Dyed with low-impact, water-saving techniques",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isNew: true,
    inStock: true,
  },
  {
    id: "6",
    name: "Utility Overshirt",
    description: "Versatile overshirt that works as a light jacket or heavy shirt. Multiple pockets and relaxed fit make it perfect for urban exploration.",
    price: 3400,
    originalPrice: 5900,
    image: product3,
    images: [product3, product2, product1],
    category: "Jackets",
    material: "Recycled Cotton Canvas",
    recycledContent: "Buttons made from recycled materials",
    sizes: ["S", "M", "L", "XL"],
    isNew: false,
    inStock: true,
  },
];

export const categories = ["All", "Jackets", "Tops", "Pants", "Accessories"];
export const sizes = ["XS", "S", "M", "L", "XL", "XXL", "28", "30", "32", "34", "36"];
export const priceRanges = [
  { label: "Under 1,500 EGP", min: 0, max: 1500 },
  { label: "1,500 - 3,000 EGP", min: 1500, max: 3000 },
  { label: "3,000 - 5,000 EGP", min: 3000, max: 5000 },
  { label: "Over 5,000 EGP", min: 5000, max: Infinity },
];
