"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ChevronLeft, Sparkles, CheckCircle, ArrowRight, Zap, Target, Palette, Code, Rocket, Shield } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    number: 1,
    title: "Plan & Discover",
    subtitle: "The Foundation",
    description: "We dive deep into your business DNA to uncover hidden opportunities and define a bulletproof strategy.",
    highlights: ["Business Logic Mapping", "Market Gap Analysis", "Technical Feasibility"],
    icon: <Target className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    title: "Design & Prototype",
    subtitle: "Visualizing Success",
    description: "Our designers craft immersive digital experiences that aren't just beautiful—they're engineered to convert.",
    highlights: ["High-Fidelity UI/UX", "Interactive Prototypes", "User Flow Optimization"],
    icon: <Palette className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    title: "Build & Test",
    subtitle: "Precision Engineering",
    description: "We transform pixels into high-performance code, with rigorous automated testing at every commit.",
    highlights: ["Scalable Architecture", "TDD & CI/CD Pipelines", "Real-time Monitoring"],
    icon: <Code className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 4,
    title: "Launch & Deploy",
    subtitle: "Mission Control",
    description: "We execute flawless zero-downtime deployments, ensuring your transition to production is smooth and secure.",
    highlights: ["Cloud Infrastructure", "Security Hardening", "Global CDN Setup"],
    icon: <Rocket className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    number: 5,
    title: "Support & Improve",
    subtitle: "Continuous Evolution",
    description: "Our partnership doesn't end at launch. We continuously optimize, scale, and evolve your product.",
    highlights: ["24/7 Priority Support", "Data-Driven Updates", "Scaling Roadmaps"],
    icon: <Shield className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
  },
];

export default function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout| null>(null);
  const activeStep = processSteps[activeIndex];
  const progress = ((activeIndex + 1) / processSteps.length) * 100;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && inView) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % processSteps.length);
      }, 5000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, inView]);

  const goToStep = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-border/50">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Our Methodology</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
            How We Build <span className="text-gradient-from">Excellence</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto">
            A battle-tested methodology designed for speed, quality, and extreme scalability.
          </p>
        </motion.div>

        {/* Interactive Process Container */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Navigation - Left Side (4 columns) */}
          <div className="lg:col-span-5 space-y-4">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => goToStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                  activeIndex === index
                    ? "border-transparent bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-xl shadow-gradient-from/20"
                    : "border-border/50 bg-surface/5 hover:bg-surface/10 backdrop-blur-sm"
                }`}
              >
                {/* Active hover effect for non-active items */}
                {activeIndex !== index && (
                   <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/0 to-gradient-from/5 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                )}

                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-white/20 text-white" 
                      : `bg-gradient-to-br ${step.color} bg-opacity-10 text-gradient-from`
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-lg font-bold ${activeIndex === index ? "text-white" : "text-foreground"}`}>
                        {step.title}
                      </h3>
                      <span className={`text-xs font-black tracking-tighter ${activeIndex === index ? "text-white/60" : "text-foreground/30"}`}>
                        0{step.number}
                      </span>
                    </div>
                    <p className={`text-sm line-clamp-1 ${activeIndex === index ? "text-white/80" : "text-foreground/60"}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details - Right Side (7 columns) */}
          <div className="lg:col-span-7 relative h-full">
            <div className="sticky top-24">
              {/* Progress Indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-foreground/50 mb-3">
                  <span>Current Phase Progress</span>
                  <span className="text-gradient-from">{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 w-full bg-surface/10 rounded-full overflow-hidden border border-border/30">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                  />
                </div>
              </div>

              {/* Detail Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative p-10 lg:p-14 rounded-[3rem] bg-surface/5 border border-border/50 backdrop-blur-xl overflow-hidden shadow-2xl"
                >
                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeStep.color} opacity-5 blur-[80px] -mr-32 -mt-32`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                       <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-gradient-to-r ${activeStep.color} bg-clip-text text-transparent border border-gradient-from/20`}>
                        {activeStep.subtitle}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      {activeStep.title}
                    </h3>

                    <p className="text-xl text-foreground/70 mb-10 leading-relaxed">
                      {activeStep.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                      {activeStep.highlights.map((highlight, i) => (
                        <motion.div
                          key={highlight}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/30 group hover:border-gradient-from/30 transition-colors"
                        >
                          <CheckCircle className={`h-5 w-5 bg-gradient-to-br ${activeStep.color} bg-clip-text text-transparent flex-shrink-0`} />
                          <span className="text-sm font-bold text-foreground/80">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation Actions */}
                    <div className="flex items-center justify-between pt-10 border-t border-border/30">
                       <button
                        onClick={() => goToStep((activeIndex - 1 + processSteps.length) % processSteps.length)}
                        className="flex items-center gap-2 text-sm font-bold text-foreground/50 hover:text-foreground transition-colors group"
                      >
                        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Previous
                      </button>
                      
                      <Link
                        href="/contact"
                        className="flex items-center gap-3 bg-gradient-to-r from-gradient-from to-gradient-to text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-gradient-from/20 transition-all scale-100 hover:scale-105"
                      >
                        Start {activeStep.title.split(" ")[0]} <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}