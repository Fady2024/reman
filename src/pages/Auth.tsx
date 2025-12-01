import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login, signup } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const from = (location.state as any)?.from?.pathname || "/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isLogin) {
                await login(formData.email, formData.password);
            } else {
                await signup(formData.name, formData.email, formData.password);
            }
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <motion.div
                className="w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h1>
                    <p className="text-muted-foreground">
                        {isLogin
                            ? "Log in to your REMAN account"
                            : "Join REMAN for sustainable fashion"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatePresence mode="wait">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <Input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    required={!isLogin}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>

                    {isLogin && (
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-muted-foreground">Remember me</span>
                            </label>
                            <button type="button" className="text-accent hover:underline">
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                    >
                        {isLoading ? "Please wait..." : isLogin ? "Log In" : "Sign Up"}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-muted-foreground">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </span>{" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-accent hover:underline font-medium"
                    >
                        {isLogin ? "Sign up" : "Log in"}
                    </button>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-center text-muted-foreground">
                        By continuing, you agree to REMAN's{" "}
                        <Link to="/terms" className="text-accent hover:underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="text-accent hover:underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
