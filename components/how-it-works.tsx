"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronRight, Sparkles, Zap, Shield, Cpu, Wrench } from "lucide-react";

export default function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const steps = [
    {
      number: "001",
      title: "5+ Years of Experience",
      description: "Our team brings over 10 years of experience, with senior experts leading every project. Hence, you get unmatched expertise, strategic insight, and results aligned with your goals.",
      icon: <Zap className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      number: "002",
      title: "Agile Development",
      description: "Our agile development process fosters flexibility and collaboration, allowing us to adapt quickly to your changing needs. We deliver high-quality results with consistent progress, keeping you informed.",
      icon: <Cpu className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      number: "003",
      title: "Security & Compliance",
      description: "We develop solutions that are not only secure but also compliant, ensuring your business meets industry standards today and tomorrow. We also protect what matters most to you.",
      icon: <Shield className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      number: "004",
      title: "Custom-Built Solutions",
      description: "We build custom solutions designed to scale with your business, ensuring lasting success. Our work stands the test of time, with systems that continue to perform seamlessly for years",
      icon: <Wrench className="h-5 w-5" />,
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
    {
      number: "005",
      title: "Support & Maintenance",
      description: "We don't just build and walk away. Our proactive support and maintenance ensure your systems run smoothly, issues are caught early, and updates keep your business ahead of the curve.",
      icon: <Sparkles className="h-5 w-5" />,
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    },
  ];
  // Animated background particles
  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.gradient-particle');
    
    particles.forEach((particle, index) => {
      const element = particle as HTMLElement;
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
    });
  }, []);

  // Update selected index when the carousel scrolls
  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Initialize onSelect callback once emblaApi is available
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Navigation helper
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  // Animated gradient lines connecting desktop cards
  const renderConnectingLines = () => {
    return (
      <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 z-0">
        <motion.div
          className="h-full w-full bg-gradient-to-r from-gradient-from/20 via-gradient-from/40 to-gradient-to/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    );
  };

  return (
    <section 
      className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-background border-t border-border/50"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main animated gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 25%, transparent 70%)',
              'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 25%, transparent 70%)',
              'radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.2) 0%, rgba(52, 211, 153, 0.1) 25%, transparent 70%)',
              'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 25%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Moving gradient particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="gradient-particle absolute w-[80px] h-[80px] rounded-full blur-[40px]"
            style={{
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%)'
                : 'radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent 70%)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Gradient mesh overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Our Advantages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="block">Why Choose </span>
            <motion.span
              className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Tennissine's Space
            </motion.span>
          </h2>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Discover what makes us different and how we deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Desktop / Tablet view with connecting lines */}
        <div className="hidden sm:block relative">
          {renderConnectingLines()}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "backOut",
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                {/* Animated outer glow */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${step.color.split(' ')[1].replace('to-', '')}, ${step.color.split(' ')[3]})`,
                  }}
                  animate={hoveredIndex === index ? {
                    scale: [1, 1.05, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Main card */}
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 h-full flex flex-col
                  hover:shadow-2xl transition-all duration-500 ease-out
                  group-hover:border-gradient-from/30">
                  
                  {/* Number with animated gradient */}
                  <div className="relative mb-4">
                    <motion.h1
                      className="text-5xl font-black opacity-90 group-hover:opacity-100"
                      style={{
                        WebkitTextStroke: `1.5px transparent`,
                        background: `linear-gradient(135deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                        
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                      animate={hoveredIndex === index ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      {step.number}
                    </motion.h1>
                    
                    {/* Floating icon */}
                    <motion.div
                      className="absolute top-0 right-0 p-2 rounded-lg"
                      style={{
                        background: step.gradient,
                      }}
                      animate={hoveredIndex === index ? {
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        rotate: { duration: 2, ease: "linear", repeat: Infinity },
                        scale: { duration: 1.5, repeat: Infinity },
                      }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>

                  {/* Animated divider */}
                  <motion.div
                    className="h-[2px] mb-4"
                    style={{
                      background: `linear-gradient(90deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                    }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "3rem" } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  />

                  {/* Content with staggered animation */}
                  <div className="space-y-4 flex-grow">
                    <motion.h3
                      className="text-lg font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-sm text-foreground/70 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? {
                      x: [0, 5, 0],
                    } : {}}
                    transition={{
                      x: { duration: 1.5, repeat: Infinity },
                    }}
                  >
                    <span className="text-xs font-medium text-gradient-from">Learn more</span>
                    <ChevronRight className="h-3 w-3 text-gradient-from" />
                  </motion.div>

                  {/* Interactive background overlay */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${step.gradient}`} />
                </div>

                {/* Floating animation on hover */}
                {hoveredIndex === index && (
                  <>
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile view - Enhanced Carousel */}
        <div className="sm:hidden">
          <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4"
                >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-5 h-[320px] flex flex-col justify-between
                      hover:shadow-lg transition-all duration-300"
                  >
                    {/* Number with mobile animation */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <h1
                        className="text-4xl font-black mb-4"
                        style={{
                          WebkitTextStroke: `1px transparent`,
                          background: `linear-gradient(135deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        {step.number}
                      </h1>
                      
                      <div className="absolute top-0 right-0 p-2 rounded-lg" style={{ background: step.gradient }}>
                        {step.icon}
                      </div>
                    </motion.div>

                    {/* Animated divider */}
                    <motion.div
                      className="h-[2px] w-12 mb-4"
                      style={{
                        background: `linear-gradient(90deg, ${step.color.split(' ')[1].replace('from-', '')}, ${step.color.split(' ')[3]})`,
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />

                    {/* Content */}
                    <div className="space-y-3">
                      <h6 className="text-base font-semibold">{step.title}</h6>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Tap hint for mobile */}
                    <motion.div
                      className="flex items-center justify-center gap-1 mt-4 pt-3 border-t border-border/30"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs text-foreground/60">Tap for details</span>
                      <ChevronRight className="h-3 w-3 text-foreground/60" />
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive pagination indicators */}
          <div className="flex justify-center items-center mt-8 gap-2">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                className={`relative rounded-full ${
                  selectedIndex === index
                    ? "w-12 h-1"
                    : "w-4 h-1"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to step ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    selectedIndex === index
                      ? "bg-gradient-to-r from-gradient-from to-gradient-to"
                      : "bg-foreground/20"
                  }`}
                />
                
                {selectedIndex === index && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-from"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-foreground/70 text-sm sm:text-base mb-6">
            Ready to experience our process?
          </p>
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to text-white px-8 py-3 rounded-lg font-medium
              hover:shadow-xl hover:shadow-gradient-from/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </span>
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}