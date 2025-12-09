"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react";
import { Code, ShoppingCart, Globe, BarChart, Cpu, Database, Zap, ChevronRight, Sparkles, CheckCircle, Play, Pause } from "lucide-react"

export default function SocialProof() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: "Bangladesh Army", logo: "/clients/bangladesharmylogonobg.png" },
    { name: "Capital Market Stabilization Fund", logo: "/clients/cmsf.png" },
    { name: "Primeasia University", logo: "/clients/Primeasia.png" },
    { name: "Mixora Trading Ltd.", logo: "/clients/mixorabl.png" },
    { name: "DevHome Digital", logo: "/clients/devhome.png" },
  ];

  const stats = [
    { value: "25+", label: "Successful Deployments" },
    { value: "15+", label: "Global Clients" },
    { value: "10+", label: "Core Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];
  
  const services = [
    { 
      title: "Custom Software", 
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      description: "Tailored software solutions built specifically for your business needs",
      features: ["Scalable Architecture", "Custom Workflows", "Seamless Integration"],
      useCases: ["Startups", "Enterprise", "SMBs"]
    },
    { 
      title: "ERP Systems", 
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      description: "Complete business management systems to streamline your operations",
      features: ["Inventory Management", "Accounting", "HR & Payroll"],
      useCases: ["Manufacturing", "Retail", "Distribution"]
    },
    { 
      title: "E-commerce", 
      icon: <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      description: "Online stores that convert visitors into customers and grow your sales",
      features: ["Payment Integration", "Inventory Sync", "Analytics Dashboard"],
      useCases: ["DTC Brands", "Marketplaces", "B2B Portals"]
    },
    { 
      title: "Website Development", 
      icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      description: "Professional websites that work perfectly on all devices",
      features: ["SEO Optimized", "Mobile First", "Fast Loading"],
      useCases: ["Corporate Sites", "Landing Pages", "Web Apps"]
    },
    { 
      title: "POS Systems", 
      icon: <BarChart className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      description: "Point of Sale systems for smooth retail and restaurant operations",
      features: ["Offline Mode", "Real-time Sync", "Multi-store"],
      useCases: ["Retail Stores", "Restaurants", "Service Businesses"]
    },
    { 
      title: "SaaS Platforms", 
      icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6" />, 
      color: "from-rose-500 to-pink-500",
      gradient: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
      description: "Cloud-based software accessible from anywhere, anytime",
      features: ["Multi-tenant", "Subscription", "API First"],
      useCases: ["B2B SaaS", "Internal Tools", "Marketplace Apps"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease:  [0.25, 0.1, 0.25, 1] ,
      },
    },
  };

  // Auto-rotate services
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 4000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, services.length]);

  // Mouse move effect for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleServiceClick = (index: number) => {
    setActiveService(index);
    setIsPlaying(false); // Pause auto-rotation when user manually selects
  };

  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-background"
      aria-labelledby="social-proof-heading"
      ref={containerRef}
    >
      {/* Animated Gradient Background */}
<div className="absolute inset-0 z-0 overflow-hidden">
  {/* Main animated gradients */}
  <motion.div
    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full"
    animate={{
      background: [
        'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.3) 0%, rgba(52, 211, 153, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.2) 25%, transparent 70%)',
      ],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />

  <motion.div
    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full"
    animate={{
      background: [
        'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.3) 0%, rgba(239, 68, 68, 0.2) 25%, transparent 70%)',
        'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.2) 25%, transparent 70%)',
      ],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      delay: 2,
    }}
  />

  {/* Moving gradient particles */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full blur-[40px] sm:blur-[60px]"
      style={{
        background: i % 3 === 0 
          ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent 70%)'
          : i % 3 === 1
          ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent 70%)'
          : 'radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent 70%)',
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 1.5,
      }}
    />
  ))}

  {/* Gradient mesh overlay */}
  <div className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}
  />

  {/* Gradient lines */}
  <motion.div
    className="absolute top-0 left-0 w-full h-px"
    style={{
      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
    }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  />

  <motion.div
    className="absolute bottom-0 left-0 w-full h-px"
    style={{
      background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
    }}
    animate={{
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: 1.5,
    }}
  />
</div>
      {/* Interactive background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated gradient orbs that follow cursor */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 blur-[100px]"
          animate={{
            x: mousePosition.x * 0.02 - 150,
            y: mousePosition.y * 0.02 - 150,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg text-foreground font-medium mb-2">Trusted by industry leaders</p>
          <h2 id="social-proof-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            Join the trusted network of our customers
          </h2>
        </motion.div>

        {/* Company logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Companies using our platform"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Image 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  width={80} 
                  height={80} 
                  className="relative object-contain filter group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              {/* Company name tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-2 py-1 bg-foreground text-background rounded text-xs font-medium whitespace-nowrap">
                  {company.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Services Section */}
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build
            </h3>
            <p className="text-foreground/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Interactive showcase of our software development expertise. 
              <span className="hidden sm:inline"> Hover or click to explore each service.</span>
            </p>
          </motion.div>

          {/* Interactive Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-surface/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-sm text-foreground/70">Auto-rotate:</span>
              <button
                onClick={togglePlay}
                className="relative w-12 h-6 bg-surface/50 rounded-full flex items-center p-1 transition-all duration-300 group"
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                  animate={{ x: isPlaying ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-1.5">
                  <Play className="h-3 w-3 text-foreground/40" />
                  <Pause className="h-3 w-3 text-foreground/40" />
                </div>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Services Selector - Left Column */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleServiceClick(index)}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`relative overflow-hidden group p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                      activeService === index
                        ? `border-transparent shadow-lg`
                        : "border-border/50 hover:border-border/80"
                    }`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background gradient on active */}
                    {activeService === index && (
                      <motion.div
                        className={`absolute inset-0 ${service.gradient} opacity-20`}
                        layoutId="activeService"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Hover gradient */}
                    {hoveredService === index && activeService !== index && (
                      <motion.div
                        className={`absolute inset-0 ${service.gradient} opacity-10`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${service.gradient}`}>
                          <div className={`text-gradient-to-r ${service.color}`}>
                            {service.icon}
                          </div>
                        </div>
                        <span className={`font-semibold text-sm sm:text-base ${
                          activeService === index ? "text-foreground" : "text-foreground/80"
                        }`}>
                          {service.title}
                        </span>
                      </div>
                      
                      {/* Progress indicator */}
                      {activeService === index && (
                        <motion.div
                          className="h-1 w-full bg-gradient-to-r from-gradient-from to-gradient-to rounded-full"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 4 }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Active Service Details - Right Column */}
            <div className="lg:col-span-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div className="bg-surface/20 backdrop-blur-sm border border-border/30 rounded-xl p-5 sm:p-6 h-full">
                    {/* Service Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-lg ${services[activeService].gradient}`}>
                        <div className={`text-gradient-to-r ${services[activeService].color}`}>
                          {services[activeService].icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-foreground">
                          {services[activeService].title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-gradient-from" />
                            <span className="text-xs text-foreground/60">
                              Active Selection
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 text-sm sm:text-base mb-6 leading-relaxed">
                      {services[activeService].description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-foreground/90 mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-gradient-from" />
                        Key Features
                      </h5>
                      <div className="space-y-2">
                        {services[activeService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-foreground/70">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground/90 mb-3 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-gradient-to" />
                        Ideal For
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {services[activeService].useCases.map((useCase, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 text-foreground/80 border border-border/30"
                          >
                            {useCase}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6"
                    >
                      <button className="group w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gradient-from to-gradient-to text-white rounded-lg hover:opacity-90 transition-opacity">
                        <span className="font-medium">Learn more about {services[activeService].title}</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative bg-surface/20 backdrop-blur-sm border border-border/30 rounded-xl p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <p className="text-foreground/70 text-sm sm:text-base">
                    {stat.label}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <p className="text-xs sm:text-sm text-foreground/60">
              <span className="hidden sm:inline">Click on any service to learn more • </span>
              {isPlaying ? "Auto-rotating every 4 seconds" : "Paused - Click to rotate"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}