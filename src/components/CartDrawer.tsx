import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer = () => {
    const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/50 z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background shadow-xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ShoppingCart className="h-5 w-5" />
                                <h2 className="text-xl font-bold">Shopping Cart</h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="text-center py-12">
                                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <p className="text-muted-foreground mb-4">Your cart is empty</p>
                                    <Button variant="outline" onClick={() => setIsCartOpen(false)} asChild>
                                        <Link to="/shop">Continue Shopping</Link>
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex gap-4 pb-4 border-b border-border">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-md"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium truncate">{item.name}</h3>
                                                <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                                                <p className="text-sm font-medium mt-1">{formatPrice(item.price)}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-2 mt-2">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                        className="h-6 w-6 flex items-center justify-center rounded border border-border hover:bg-muted"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                        className="h-6 w-6 flex items-center justify-center rounded border border-border hover:bg-muted"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                    <button
                                                        onClick={() => removeFromCart(item.id, item.size)}
                                                        className="ml-auto text-sm text-muted-foreground hover:text-foreground"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-border">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-medium">Total</span>
                                    <span className="text-2xl font-bold">{formatPrice(totalPrice)}</span>
                                </div>
                                <Button variant="hero" size="lg" className="w-full mb-2" asChild>
                                    <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                                        Proceed to Checkout
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full" onClick={() => setIsCartOpen(false)} asChild>
                                    <Link to="/shop">Continue Shopping</Link>
                                </Button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
