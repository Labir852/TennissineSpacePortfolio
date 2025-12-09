"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ChevronLeft, Play, Pause, Sparkles, CheckCircle, ArrowRight, Zap } from "lucide-react";

const processSteps = [
  {
    number: 1,
    title: "Plan & Discover",
    description: "We start by understanding your business goals and challenges to create a clear plan.",
    highlights: ["Understand your needs", "Define project goals", "Create roadmap"],
    icon: "🎯",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 2,
    title: "Design & Prototype",
    description: "We create visual designs and interactive prototypes to show how the final product will work.",
    highlights: ["Create designs", "Build prototypes", "Get your feedback"],
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 3,
    title: "Build & Test",
    description: "Our developers build your software while continuously testing for quality and performance.",
    highlights: ["Code development", "Quality testing", "Bug fixing"],
    icon: "⚡",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: 4,
    title: "Launch & Deploy",
    description: "We launch your software smoothly and ensure everything works perfectly from day one.",
    highlights: ["Final testing", "Go live", "User training"],
    icon: "🚀",
    color: "from-orange-500 to-red-500",
  },
  {
    number: 5,
    title: "Support & Improve",
    description: "We provide ongoing support and continuously improve your software based on user feedback.",
    highlights: ["24/7 support", "Regular updates", "Performance monitoring"],
    icon: "🛠️",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const activeStep = processSteps[activeIndex];
  const progress = ((activeIndex + 1) / processSteps.length) * 100;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && inView) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % processSteps.length);
      }, 4000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, inView]);

  const goToStep = (direction: "prev" | "next") => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    if (direction === "prev") {
      setActiveIndex((prev) => (prev === 0 ? processSteps.length - 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === processSteps.length - 1 ? 0 : prev + 1));
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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
      className="relative overflow-hidden bg-background py-16 sm:py-24"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Our Process</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            How We Build Your Software
          </h2>
          
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Simple steps, clear communication, and reliable delivery
          </p>
        </motion.div>

        {/* Progress Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm text-foreground/70">Auto-play:</span>
            <button
              onClick={togglePlay}
              className="relative w-10 h-5 bg-surface/50 rounded-full flex items-center p-1 transition-all duration-300"
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                animate={{ x: isPlaying ? 18 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
          </div>
          
          <div className="text-sm text-foreground/70">
            Step {activeIndex + 1} of {processSteps.length}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Step Cards */}
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPlaying(false);
                }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "border-transparent bg-gradient-to-r from-gradient-from to-gradient-to text-white"
                    : "border-border hover:border-gradient-from/50 hover:bg-accent/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-2xl ${activeIndex === index ? "opacity-100" : "opacity-70"}`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${activeIndex === index ? "text-white" : "text-foreground"}`}>
                        {step.title}
                      </h3>
                      <span className={`text-sm ${activeIndex === index ? "text-white/80" : "text-foreground/50"}`}>
                        Step {step.number}
                      </span>
                    </div>
                    
                    <p className={`text-sm mt-1 ${activeIndex === index ? "text-white/90" : "text-foreground/70"}`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {activeIndex === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-2"
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Side - Active Step Details */}
          <div className="relative">
            {/* Step Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-foreground/70 mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full bg-surface/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Active Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-surface/5 backdrop-blur-sm border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{activeStep.icon}</div>
                  <div>
                    <div className="text-sm text-gradient-from font-medium mb-1">
                      Step {activeStep.number}
                    </div>
                    <h3 className="text-xl font-bold">{activeStep.title}</h3>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeStep.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-from"></div>
                      <span className="text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-border/30">
                  <button
                    onClick={() => goToStep("prev")}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>
                  
                  <button
                    onClick={() => goToStep("next")}
                    className="flex items-center gap-2 text-sm bg-gradient-to-r from-gradient-from to-gradient-to text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Next Step
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-foreground/70 mb-4">
                Ready to start your project?
              </p>
              <button className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Process Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="hidden lg:block mt-12 relative"
        >
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-border/30 -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step circle */}
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    activeIndex >= index
                      ? "border-gradient-from bg-gradient-from text-white"
                      : "border-border bg-background"
                  }`}
                >
                  {activeIndex > index ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-medium">{step.number}</span>
                  )}
                </div>
                
                {/* Step label */}
                <div className="mt-3 text-center max-w-[100px]">
                  <div className="text-xs font-medium">{step.title.split(" ")[0]}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}