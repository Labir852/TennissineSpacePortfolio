"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SeedPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSeed = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/seed");
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to seed database");
      }
    } catch (err) {
      setStatus("error");
      setMessage("An unexpected connection error occurred.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-gradient-from/10 to-transparent blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl p-10 rounded-[3rem] bg-surface/5 border border-border/50 backdrop-blur-xl shadow-2xl text-center"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gradient-from to-gradient-to p-0.5 shadow-xl shadow-gradient-from/20">
            <div className="w-full h-full bg-background rounded-[22px] flex items-center justify-center">
              <Database className="h-10 w-10 text-gradient-from" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-black mb-4 tracking-tight">Database Initializer</h1>
        <p className="text-foreground/60 mb-10 leading-relaxed max-w-sm mx-auto">
          Ready to seed the initial administrative credentials for Tennissine Space Control.
        </p>

        {status === "idle" && (
          <Button
            onClick={handleSeed}
            className="w-full py-8 rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to text-white font-black text-lg hover:shadow-2xl hover:shadow-gradient-from/30 transition-all group"
          >
            Run Setup Sequence
            <ShieldCheck className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
          </Button>
        )}

        {status === "loading" && (
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-surface/10 border border-border/30">
            <Loader2 className="h-10 w-10 text-gradient-from animate-spin" />
            <p className="font-bold tracking-widest uppercase text-xs text-foreground/50">Processing Secure Payload...</p>
          </div>
        )}

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-green-500/10 border border-green-500/30 text-green-500"
          >
            <CheckCircle2 className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Payload Delivered!</h3>
            <p className="text-sm opacity-80 mb-6">{message}</p>
            <Button
              asChild
              className="bg-green-500 text-white hover:bg-green-600 rounded-xl"
              onClick={() => window.location.href = "/login"}
            >
              Go to Login
            </Button>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 rounded-3xl bg-red-500/10 border border-red-500/30 text-red-500"
          >
            <AlertCircle className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Sequence Aborted</h3>
            <p className="text-sm opacity-80 mb-6">{message}</p>
            <Button
              onClick={() => setStatus("idle")}
              className="bg-red-500 text-white hover:bg-red-600 rounded-xl"
            >
              Retry Connection
            </Button>
          </motion.div>
        )}

        <div className="mt-10 pt-8 border-t border-border/30">
          <div className="grid grid-cols-2 gap-4">
             <div className="text-left p-4 rounded-xl bg-surface/5 border border-border/20">
                <p className="text-[10px] font-black uppercase text-foreground/30 mb-1">Admin Email</p>
                <p className="text-xs font-bold truncate">admin@tennissine.space</p>
             </div>
             <div className="text-left p-4 rounded-xl bg-surface/5 border border-border/20">
                <p className="text-[10px] font-black uppercase text-foreground/30 mb-1">Admin Pass</p>
                <p className="text-xs font-bold">admin123</p>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
