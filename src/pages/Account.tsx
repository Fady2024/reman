import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { products } from "@/data/products";

export default function Account() {
    const { user, logout, orders, wishlist, updateProfile, removeFromWishlist } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<"profile" | "orders" | "wishlist">("profile");
    const [isEditing, setIsEditing] = useState(false);

    const [profileData, setProfileData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        street: user?.address?.street || "",
        city: user?.address?.city || "",
        state: user?.address?.state || "",
        zipCode: user?.address?.zipCode || "",
    });

    if (!user) {
        navigate("/auth");
        return null;
    }

    const handleSaveProfile = () => {
        updateProfile({
            name: profileData.name,
            email: profileData.email,
            phone: profileData.phone,
            address: {
                street: profileData.street,
                city: profileData.city,
                state: profileData.state,
                zipCode: profileData.zipCode,
            },
        });
        setIsEditing(false);
    };

    const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

    const getStatusColor = (status: string) => {
        switch (status) {
            case "delivered":
                return "text-green-600 bg-green-100";
            case "shipped":
                return "text-blue-600 bg-blue-100";
            case "processing":
                return "text-yellow-600 bg-yellow-100";
            case "cancelled":
                return "text-red-600 bg-red-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <div className="container-custom py-12">
            <div className="grid lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-muted rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === "profile" ? "bg-background" : "hover:bg-background/50"
                                    }`}
                            >
                                <User className="h-5 w-5" />
                                <span>Profile</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("orders")}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === "orders" ? "bg-background" : "hover:bg-background/50"
                                    }`}
                            >
                                <Package className="h-5 w-5" />
                                <span>Orders</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("wishlist")}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === "wishlist" ? "bg-background" : "hover:bg-background/50"
                                    }`}
                            >
                                <Heart className="h-5 w-5" />
                                <span>Wishlist</span>
                            </button>
                        </nav>

                        <div className="mt-6 pt-6 border-t border-border">
                            <button
                                onClick={() => {
                                    logout();
                                    navigate("/");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-background/50 transition-colors text-red-600"
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Log Out</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="lg:col-span-3">
                    <AnimatePresence mode="wait">
                        {activeTab === "profile" && (
                            <motion.div
                                key="profile"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h1 className="text-3xl font-bold">Profile Settings</h1>
                                    {!isEditing ? (
                                        <Button onClick={() => setIsEditing(true)} variant="outline">
                                            Edit Profile
                                        </Button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Button onClick={() => setIsEditing(false)} variant="outline">
                                                Cancel
                                            </Button>
                                            <Button onClick={handleSaveProfile} variant="hero">
                                                Save Changes
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-muted rounded-lg p-6 space-y-6">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                                <Input
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Email</label>
                                                <Input
                                                    type="email"
                                                    value={profileData.email}
                                                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Phone</label>
                                                <Input
                                                    value={profileData.phone}
                                                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Street Address</label>
                                                <Input
                                                    value={profileData.street}
                                                    onChange={(e) => setProfileData({ ...profileData, street: e.target.value })}
                                                    disabled={!isEditing}
                                                />
                                            </div>
                                            <div className="grid sm:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">City</label>
                                                    <Input
                                                        value={profileData.city}
                                                        onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                                                        disabled={!isEditing}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">State</label>
                                                    <Input
                                                        value={profileData.state}
                                                        onChange={(e) => setProfileData({ ...profileData, state: e.target.value })}
                                                        disabled={!isEditing}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">Zip Code</label>
                                                    <Input
                                                        value={profileData.zipCode}
                                                        onChange={(e) => setProfileData({ ...profileData, zipCode: e.target.value })}
                                                        disabled={!isEditing}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "orders" && (
                            <motion.div
                                key="orders"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h1 className="text-3xl font-bold mb-6">Order History</h1>
                                {orders.length === 0 ? (
                                    <div className="text-center py-12 bg-muted rounded-lg">
                                        <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                        <p className="text-muted-foreground mb-4">No orders yet</p>
                                        <Button variant="hero" onClick={() => navigate("/shop")}>
                                            Start Shopping
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {orders.map((order, index) => (
                                            <motion.div
                                                key={order.id}
                                                className="bg-muted rounded-lg p-6"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <p className="font-medium">Order #{order.id}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {new Date(order.date).toLocaleDateString()}
                                                        </p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                    </span>
                                                </div>
                                                <div className="space-y-3 mb-4">
                                                    {order.items.map((item, idx) => (
                                                        <div key={idx} className="flex gap-4">
                                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                                            <div className="flex-1">
                                                                <p className="font-medium text-sm">{item.name}</p>
                                                                <p className="text-xs text-muted-foreground">
                                                                    Size: {item.size} | Qty: {item.quantity}
                                                                </p>
                                                            </div>
                                                            <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-center pt-4 border-t border-border">
                                                    <span className="font-medium">Total</span>
                                                    <span className="text-lg font-bold">{formatPrice(order.total)}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {activeTab === "wishlist" && (
                            <motion.div
                                key="wishlist"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
                                {wishlistProducts.length === 0 ? (
                                    <div className="text-center py-12 bg-muted rounded-lg">
                                        <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                        <p className="text-muted-foreground mb-4">No items in wishlist</p>
                                        <Button variant="hero" onClick={() => navigate("/shop")}>
                                            Discover Products
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {wishlistProducts.map((product, index) => (
                                            <motion.div
                                                key={product.id}
                                                className="group relative"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link to={`/product/${product.id}`}>
                                                    <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                                                        <img
                                                            src={product.images[0]}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                        />
                                                    </div>
                                                </Link>
                                                <button
                                                    onClick={() => removeFromWishlist(product.id)}
                                                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                                                >
                                                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                                                </button>
                                                <Link to={`/product/${product.id}`}>
                                                    <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                                                    <p className="font-medium">{formatPrice(product.price)}</p>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
