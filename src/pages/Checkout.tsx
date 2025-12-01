import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { formatPrice } from "@/lib/utils";
import { CreditCard, Truck, Shield, Check } from "lucide-react";

export default function Checkout() {
    const { user, addOrder, isAuthenticated } = useAuth();
    const { items, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState<"info" | "payment" | "success">("info");
    const [isProcessing, setIsProcessing] = useState(false);

    const [shippingInfo, setShippingInfo] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        street: user?.address?.street || "",
        city: user?.address?.city || "",
        state: user?.address?.state || "",
        zipCode: user?.address?.zipCode || "",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
    });

    if (items.length === 0 && step !== "success") {
        return (
            <div className="container-custom py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
                <p className="text-muted-foreground mb-6">Add some items to get started</p>
                <Button variant="hero" onClick={() => navigate("/shop")}>
                    Continue Shopping
                </Button>
            </div>
        );
    }

    const handleSubmitInfo = (e: React.FormEvent) => {
        e.preventDefault();
        setStep("payment");
    };

    const handleSubmitPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Create order
        if (isAuthenticated) {
            addOrder({
                items: items.map((item) => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    size: item.size,
                    image: item.image,
                })),
                total: totalPrice,
                shippingAddress: shippingInfo,
            });
        }

        clearCart();
        setIsProcessing(false);
        setStep("success");
    };

    if (step === "success") {
        return (
            <div className="container-custom py-16">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
                    <p className="text-muted-foreground mb-8">
                        Thank you for your order. We'll send you a confirmation email shortly.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="hero" onClick={() => navigate("/")}>
                            Continue Shopping
                        </Button>
                        {isAuthenticated && (
                            <Button variant="outline" onClick={() => navigate("/account/orders")}>
                                View Orders
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <>
            {/* Progress Steps */}
            <div className="border-b border-border">
                <div className="container-custom py-6">
                    <div className="flex items-center justify-center gap-8">
                        <div className={`flex items-center gap-2 ${step === "info" ? "text-accent" : "text-muted-foreground"}`}>
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "info" ? "bg-accent text-accent-foreground" : "bg-muted"}`}>
                                1
                            </div>
                            <span className="font-medium">Shipping</span>
                        </div>
                        <div className="h-px w-12 bg-border" />
                        <div className={`flex items-center gap-2 ${step === "payment" ? "text-accent" : "text-muted-foreground"}`}>
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "payment" ? "bg-accent text-accent-foreground" : "bg-muted"}`}>
                                2
                            </div>
                            <span className="font-medium">Payment</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {step === "info" && (
                                <motion.form
                                    key="info"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleSubmitInfo}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                                    <div className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                                <Input
                                                    value={shippingInfo.name}
                                                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Email</label>
                                                <Input
                                                    type="email"
                                                    value={shippingInfo.email}
                                                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Phone</label>
                                            <Input
                                                type="tel"
                                                value={shippingInfo.phone}
                                                onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Street Address</label>
                                            <Input
                                                value={shippingInfo.street}
                                                onChange={(e) => setShippingInfo({ ...shippingInfo, street: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">City</label>
                                                <Input
                                                    value={shippingInfo.city}
                                                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">State</label>
                                                <Input
                                                    value={shippingInfo.state}
                                                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Zip Code</label>
                                                <Input
                                                    value={shippingInfo.zipCode}
                                                    onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button type="submit" variant="hero" size="lg" className="w-full mt-8">
                                        Continue to Payment
                                    </Button>
                                </motion.form>
                            )}

                            {step === "payment" && (
                                <motion.form
                                    key="payment"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    onSubmit={handleSubmitPayment}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Card Number</label>
                                            <Input
                                                value={paymentInfo.cardNumber}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                                            <Input
                                                value={paymentInfo.cardName}
                                                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                                <Input
                                                    value={paymentInfo.expiryDate}
                                                    onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                                                    placeholder="MM/YY"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">CVV</label>
                                                <Input
                                                    value={paymentInfo.cvv}
                                                    onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                                                    placeholder="123"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        <Button type="button" variant="outline" size="lg" onClick={() => setStep("info")} className="flex-1">
                                            Back
                                        </Button>
                                        <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isProcessing}>
                                            {isProcessing ? "Processing..." : `Pay ${formatPrice(totalPrice)}`}
                                        </Button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-muted rounded-lg p-6 sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                            <div className="space-y-3 mb-4">
                                {items.map((item) => (
                                    <div key={`${item.id}-${item.size}`} className="flex gap-3">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm truncate">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                                            <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-border pt-4 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                                    <span>Total</span>
                                    <span>{formatPrice(totalPrice)}</span>
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Truck className="h-4 w-4" />
                                    <span>Free shipping on all orders</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Shield className="h-4 w-4" />
                                    <span>Secure checkout</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CreditCard className="h-4 w-4" />
                                    <span>Multiple payment options</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
