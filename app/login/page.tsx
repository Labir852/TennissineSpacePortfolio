"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      } else {
        // Hard redirect ensures the browser sends the new session cookie
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-3xl bg-surface/5 border border-border/50 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black mb-2">Admin Login</h1>
          <p className="text-foreground/60 text-sm">Secure access to Tennissine Space Control</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground/70 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border/50 focus:ring-2 focus:ring-gradient-from/50 outline-none transition-all"
                placeholder="admin@tennissine.space"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-foreground/70 ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border/50 focus:ring-2 focus:ring-gradient-from/50 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center font-medium"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold hover:shadow-xl hover:shadow-gradient-from/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Sign In to Dashboard"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
