import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");

    const filteredProducts = query.trim().length > 0
        ? products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    return (
        <>
            {/* Search Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                aria-label="Search"
            >
                <SearchIcon className="h-5 w-5" />
            </button>

            {/* Search Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50"
                        />

                        {/* Search Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-background rounded-lg shadow-xl z-50 max-h-[80vh] overflow-hidden"
                        >
                            {/* Search Input */}
                            <div className="p-4 border-b border-border flex items-center gap-3">
                                <SearchIcon className="h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search products..."
                                    className="flex-1 bg-transparent outline-none text-lg"
                                    autoFocus
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Results */}
                            <div className="overflow-y-auto max-h-96 p-4">
                                {query.trim().length === 0 ? (
                                    <p className="text-center text-muted-foreground py-8">
                                        Start typing to search products...
                                    </p>
                                ) : filteredProducts.length === 0 ? (
                                    <p className="text-center text-muted-foreground py-8">
                                        No products found for "{query}"
                                    </p>
                                ) : (
                                    <div className="space-y-2">
                                        {filteredProducts.slice(0, 5).map((product) => (
                                            <Link
                                                key={product.id}
                                                to={`/product/${product.id}`}
                                                onClick={() => setIsOpen(false)}
                                                className="flex gap-4 p-3 rounded-lg hover:bg-muted transition-colors"
                                            >
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-medium truncate">{product.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{product.category}</p>
                                                    <p className="text-sm font-medium mt-1">{formatPrice(product.price)}</p>
                                                </div>
                                            </Link>
                                        ))}
                                        {filteredProducts.length > 5 && (
                                            <Link
                                                to="/shop"
                                                onClick={() => setIsOpen(false)}
                                                className="block text-center text-sm text-accent hover:underline py-2"
                                            >
                                                View all {filteredProducts.length} results
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
