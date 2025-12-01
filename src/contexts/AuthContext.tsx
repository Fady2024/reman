import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
    };
}

export interface Order {
    id: string;
    date: string;
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        size: string;
        image: string;
    }>;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        phone: string;
    };
}

interface AuthContextType {
    user: User | null;
    orders: Order[];
    wishlist: string[];
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => void;
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    addOrder: (order: Omit<Order, "id" | "date" | "status">) => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : null;
    });
    const [orders, setOrders] = useState<Order[]>(() => {
        const saved = localStorage.getItem("orders");
        return saved ? JSON.parse(saved) : [];
    });
    const [wishlist, setWishlist] = useState<string[]>(() => {
        const saved = localStorage.getItem("wishlist");
        return saved ? JSON.parse(saved) : [];
    });
    const { toast } = useToast();

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const login = async (email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Demo user
        const demoUser: User = {
            id: "1",
            name: "Demo User",
            email: email,
            phone: "+201111111111",
            address: {
                street: "123 Main St",
                city: "Cairo",
                state: "Cairo",
                zipCode: "11511",
            },
        };

        setUser(demoUser);
        toast({
            title: "Welcome back!",
            description: `Logged in as ${email}`,
        });
    };

    const signup = async (name: string, email: string, password: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
        };

        setUser(newUser);
        toast({
            title: "Account created!",
            description: "Welcome to REMAN",
        });
    };

    const logout = () => {
        setUser(null);
        toast({
            title: "Logged out",
            description: "You have been logged out successfully",
        });
    };

    const updateProfile = (data: Partial<User>) => {
        if (!user) return;
        setUser({ ...user, ...data });
        toast({
            title: "Profile updated",
            description: "Your profile has been updated successfully",
        });
    };

    const addToWishlist = (productId: string) => {
        if (!wishlist.includes(productId)) {
            setWishlist([...wishlist, productId]);
            toast({
                title: "Added to wishlist",
                description: "Item has been added to your wishlist",
            });
        }
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((id) => id !== productId));
        toast({
            title: "Removed from wishlist",
            description: "Item has been removed from your wishlist",
        });
    };

    const isInWishlist = (productId: string) => wishlist.includes(productId);

    const addOrder = (orderData: Omit<Order, "id" | "date" | "status">) => {
        const newOrder: Order = {
            ...orderData,
            id: Date.now().toString(),
            date: new Date().toISOString(),
            status: "pending",
        };
        setOrders([newOrder, ...orders]);
        toast({
            title: "Order placed!",
            description: `Order #${newOrder.id} has been placed successfully`,
        });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                orders,
                wishlist,
                login,
                signup,
                logout,
                updateProfile,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                addOrder,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
