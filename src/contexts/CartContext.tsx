import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
    category: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
    removeFromCart: (id: string, size: string) => void;
    updateQuantity: (id: string, size: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const addToCart = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find(
                (i) => i.id === item.id && i.size === item.size
            );

            if (existingItem) {
                toast({
                    title: "Updated cart",
                    description: `${item.name} quantity updated`,
                });
                return prevItems.map((i) =>
                    i.id === item.id && i.size === item.size
                        ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                        : i
                );
            }

            toast({
                title: "Added to cart",
                description: `${item.name} has been added to your cart`,
            });
            return [...prevItems, { ...item, quantity: item.quantity || 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string, size: string) => {
        setItems((prevItems) => prevItems.filter((i) => !(i.id === id && i.size === size)));
        toast({
            title: "Removed from cart",
            description: "Item has been removed from your cart",
        });
    };

    const updateQuantity = (id: string, size: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(id, size);
            return;
        }
        setItems((prevItems) =>
            prevItems.map((i) =>
                i.id === id && i.size === size ? { ...i, quantity } : i
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        toast({
            title: "Cart cleared",
            description: "All items have been removed from your cart",
        });
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                isCartOpen,
                setIsCartOpen,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
};
