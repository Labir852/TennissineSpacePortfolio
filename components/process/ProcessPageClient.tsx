"use client";

import { motion } from "framer-motion";
import { CheckCircle, Search, Palette, Code, Rocket, Shield, ArrowRight, Sparkles, Zap, Cpu } from "lucide-react";
import Link from "next/link";

export default function ProcessPageClient() {
  const steps = [
    {
      title: "Plan & Discover",
      subtitle: "The Foundation of Success",
      description: "We dive deep into your business DNA to uncover hidden opportunities and define a bulletproof strategy.",
      highlights: ["Business Logic Mapping", "Market Gap Analysis", "Technical Feasibility"],
      icon: <Search className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Design & Prototype",
      subtitle: "Visualizing the Future",
      description: "Our designers craft immersive digital experiences that aren't just beautiful—they're engineered to convert.",
      highlights: ["High-Fidelity UI/UX", "Interactive Prototypes", "User Flow Optimization"],
      icon: <Palette className="h-10 w-10" />,
      color: "from-purple-500 to-pink-400",
    },
    {
      title: "Build & Test",
      subtitle: "Precision Engineering",
      description: "We transform pixels into high-performance code, with rigorous automated testing at every single commit.",
      highlights: ["Scalable Architecture", "TDD & CI/CD Pipelines", "Real-time Monitoring"],
      icon: <Code className="h-10 w-10" />,
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Launch & Deploy",
      subtitle: "Mission Control",
      description: "We execute flawless zero-downtime deployments, ensuring your transition to production is smooth and secure.",
      highlights: ["Cloud Infrastructure", "Security Hardening", "Global CDN Setup"],
      icon: <Rocket className="h-10 w-10" />,
      color: "from-orange-500 to-red-400",
    },
    {
      title: "Support & Improve",
      subtitle: "Continuous Evolution",
      description: "Our partnership doesn't end at launch. We continuously optimize, scale, and evolve your product.",
      highlights: ["24/7 Priority Support", "Data-Driven Updates", "Scaling Roadmaps"],
      icon: <Shield className="h-10 w-10" />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/5 border border-border/50 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Execution Framework</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            How We Build <br />
            <span className="bg-gradient-to-r from-gradient-from via-gradient-to to-gradient-from bg-clip-text text-transparent bg-[length:200%_auto] animate-marquee">Masterpieces</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed"
          >
            A battle-tested methodology designed for speed, quality, and extreme scalability.
          </motion.p>
        </div>

        {/* Process Roadmap */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent hidden lg:block"></div>

          <div className="space-y-24 lg:space-y-48">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
                   <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-xl rotate-45`}>
                      <div className="w-full h-full bg-background rounded-[14px] flex items-center justify-center -rotate-45">
                        <span className="text-xl font-black">{index + 1}</span>
                      </div>
                   </div>
                </div>

                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 w-full lg:w-auto"
                  >
                    <div className="relative group">
                      {/* Decorative Glow */}
                      <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>
                      
                      <div className="relative p-12 rounded-[3.5rem] bg-surface/5 border border-border/50 backdrop-blur-xl overflow-hidden min-h-[300px] flex items-center justify-center">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 rounded-full -mr-16 -mt-16 blur-3xl`}></div>
                        
                        <div className={`p-8 rounded-3xl bg-gradient-to-br ${step.color} text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          {step.icon}
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute bottom-8 left-8 flex gap-2">
                          <div className="h-2 w-12 rounded-full bg-border/30"></div>
                          <div className="h-2 w-2 rounded-full bg-border/30"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Element */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-1 space-y-8"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 lg:hidden">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold`}>
                          {index + 1}
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          {step.subtitle}
                        </span>
                      </div>
                      
                      <span className={`hidden lg:block text-sm font-bold uppercase tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.subtitle}
                      </span>
                      
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {step.title}
                      </h2>
                    </div>

                    <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3 p-4 rounded-2xl bg-surface/5 border border-border/30 hover:border-border transition-colors">
                          <CheckCircle className={`h-5 w-5 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                          <span className="text-sm font-semibold text-foreground/80">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1 lg:p-2 rounded-[4rem] bg-gradient-to-r from-gradient-from/20 via-gradient-to/20 to-gradient-from/20 overflow-hidden"
        >
          <div className="p-12 lg:p-24 rounded-[3.5rem] bg-background border border-border/50 relative overflow-hidden text-center">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Ready to Start Your <br /><span className="text-gradient-from">Digital Evolution?</span></h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Stop waiting for the "perfect time." Our process is designed to turn your vision into a market-leading product in record time.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-gradient-from/20 transition-all scale-100 hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  Kickstart Discovery <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/cases"
                  className="px-10 py-5 bg-surface/10 border border-border/50 text-foreground font-bold rounded-2xl hover:bg-surface/20 transition-all flex items-center gap-3"
                >
                  See Our Results <Cpu className="h-5 w-5 opacity-70" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
