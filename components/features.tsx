"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Users, Shield, BarChart3, Cpu, ChevronRight, Sparkles, CheckCircle, Play, Pause, ArrowRight, Globe, ShoppingBag } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function ModernFeatures() {
  const [activeTab, setActiveTab] = useState("erp")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const tabsRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Set mounted state to true on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate tabs
  useEffect(() => {
    if (isPlaying && mounted) {
      const duration = 5000 // 5 seconds per tab
      const steps = 100 // Progress steps
      const stepDuration = duration / steps
      
      setProgress(0)
      
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            const currentIndex = features.findIndex(f => f.id === activeTab)
            const nextIndex = (currentIndex + 1) % features.length
            setActiveTab(features[nextIndex].id)
            return 0
          }
          return prev + (100 / steps)
        })
      }, stepDuration)
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, activeTab, mounted])

  const features = [
    {
      id: "erp",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Custom ERP Solutions",
      description: "We help businesses streamline complex operations with tailor-made ERP systems. From manufacturing to retail, our ERP platforms centralize data, automate workflows, and improve real-time decision-making.",
      benefits: [
        "Integrated inventory & accounting modules",
        "Role-based access control",
        "Custom dashboards & analytics",
        "Improved operational efficiency",
      ],
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop",
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      stats: ["50% faster reporting", "30% cost reduction", "Real-time data sync"]
    },
    {
      id: "saas",
      icon: <Zap className="h-5 w-5" />,
      title: "SaaS Product Development",
      description: "From concept to cloud deployment, Tennissine's Space builds scalable SaaS products designed for growth. We focus on performance, security, and user experience so you can launch fast and scale confidently.",
      benefits: [
        "Modular multi-tenant architecture",
        "Subscription management & analytics",
        "Automated deployments with CI/CD",
        "Enterprise-grade security practices",
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      stats: ["99.9% uptime", "Auto-scaling", "Global CDN"]
    },
    {
      id: "pos",
      icon: <ShoppingBag className="h-5 w-5" />,
      title: "Smart POS Systems",
      description: "We deliver modern POS systems that connect sales, inventory, and finance seamlessly. Our POS platforms help retailers and restaurants improve checkout speed and inventory visibility in real time.",
      benefits: [
        "Offline-first transaction support",
        "Real-time sales and stock tracking",
        "Customizable receipt and invoice flows",
        "Hardware integration (barcode, printer, etc.)",
      ],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop",
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      stats: ["60% faster checkout", "24/7 offline mode", "Multi-store sync"]
    },
    {
      id: "ecommerce",
      icon: <Globe className="h-5 w-5" />,
      title: "E-Commerce Platforms",
      description: "Our eCommerce solutions combine elegant design with solid architecture. We build fast, secure, and customizable platforms for both B2B and B2C brands that scale effortlessly with demand.",
      benefits: [
        "Headless storefront & API integration",
        "Optimized checkout experience",
        "Payment gateway integrations",
        "SEO and analytics optimization",
      ],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      stats: ["3x conversion rate", "2s page load", "Mobile-first"]
    },
    {
      id: "ai",
      icon: <Cpu className="h-5 w-5" />,
      title: "AI & Emerging Tech",
      description: "We integrate next-gen technologies like Artificial Intelligence, Machine Learning, and Cloud DevOps into business systems. From predictive analytics to intelligent automation, we help you stay ahead of the curve.",
      benefits: [
        "AI-driven process automation",
        "Machine learning model deployment",
        "Cloud infrastructure optimization",
        "Smart chatbots & recommendation engines",
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      stats: ["90% automation", "Real-time predictions", "Smart insights"]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setIsPlaying(false)
    setProgress(0)
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    if (isMobile && mounted) {
      setTimeout(() => {
        const element = document.getElementById(`${value}-content`)
        if (element) {
          const yOffset = -100
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 150)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const activeFeature = features.find(f => f.id === activeTab)

  return (
    <section 
      id="features" 
      className="py-12 px-4 sm:py-16 md:py-24 bg-background relative border-t border-border/50 overflow-hidden"
      ref={containerRef}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main animated gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full blur-[100px]"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 25%, transparent 70%)',
              'radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 25%, transparent 70%)',
              'radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.2) 0%, rgba(52, 211, 153, 0.1) 25%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Moving gradient particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[80px] h-[80px] rounded-full blur-[40px]"
            style={{
              background: i % 4 === 0 
                ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)'
                : i % 4 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 70%)'
                : i % 4 === 2
                ? 'radial-gradient(circle, rgba(34, 197, 94, 0.15), transparent 70%)'
                : 'radial-gradient(circle, rgba(245, 158, 11, 0.15), transparent 70%)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
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
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Our Specialties</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block">Featured Projects &</span>
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
              Case Studies
            </motion.span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore how Tennissine's Space builds modern, scalable software solutions
          </p>
        </motion.div>

        {/* Interactive Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {/* Auto-rotate toggle */}
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

            {/* Progress bar */}
            <div className="flex-1 sm:flex-none sm:w-32">
              <div className="h-1 w-full bg-surface/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
                  animate={{ width: isPlaying ? `${progress}%` : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>

          {/* View all projects button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Interactive Tabs */}
        <Tabs defaultValue="erp" value={activeTab} onValueChange={handleTabChange}>
          {/* Enhanced Tabs Navigation */}
          <div className="relative mb-6 sm:mb-8 overflow-x-auto pb-3" ref={tabsRef}>
            <div className="relative min-w-max">
              {/* Background glow for active tab */}
              <motion.div
                className="absolute bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-lg backdrop-blur-sm"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <TabsList className="bg-transparent backdrop-blur-md border border-border/20 p-1 rounded-xl flex-nowrap shadow-inner shadow-black/20 dark:shadow-white/20">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.id}
                    value={feature.id}
                    className={`relative rounded-lg p-3 sm:px-4 sm:py-2.5 whitespace-nowrap transition-all duration-300 ${
                      activeTab === feature.id 
                        ? "text-white" 
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                    onMouseEnter={() => setHoveredTab(feature.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                      <motion.div
                        animate={activeTab === feature.id ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <span className="text-sm md:text-base font-medium">{feature.title}</span>
                      
                      {/* Hover indicator */}
                      {hoveredTab === feature.id && activeTab !== feature.id && (
                        <motion.div
                          className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gradient-from"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {features.map((feature) => (
                activeTab === feature.id && (
                  <TabsContent
                    key={feature.id}
                    value={feature.id}
                    className="mt-0 focus-visible:outline-none focus-visible:ring-0"
                    forceMount
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                      {/* Left Column: Content */}
                      <div className="space-y-6">
                        {/* Stats Badges */}
                        <div className="flex flex-wrap gap-2">
                          {feature.stats.map((stat, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-surface/20 backdrop-blur-sm border border-border/30"
                            >
                              <Zap className="h-3 w-3 text-gradient-from" />
                              {stat}
                            </motion.span>
                          ))}
                        </div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>

                        {/* Benefits List */}
                        <motion.ul
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-3"
                        >
                          {feature.benefits.map((benefit, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`mt-1 p-1 rounded-full ${feature.gradient}`}>
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-sm sm:text-base">{benefit}</span>
                            </motion.li>
                          ))}
                        </motion.ul>

                        {/* CTA Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                          className="flex flex-col sm:flex-row gap-3 pt-4"
                        >
                          <button className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              View Case Study
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                          </button>
                          
                          <button className="px-6 py-3 rounded-lg font-medium border border-border hover:bg-accent/10 transition-all duration-300">
                            Schedule a Demo
                          </button>
                        </motion.div>
                      </div>

                      {/* Right Column: Image with Interactive Effects */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative"
                      >
                        {/* Outer glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-3xl blur-xl"></div>
                        
                        {/* Main image container */}
                        <div className="relative bg-surface/20 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden group">
                          <div className="aspect-video relative overflow-hidden">
                            <Image
                              src={feature.image || "/placeholder.svg"}
                              alt={feature.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                              priority
                            />
                            
                            {/* Image overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Interactive floating elements */}
                            <motion.div
                              className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md border border-border rounded-lg p-2 shadow-lg"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Sparkles className="h-4 w-4 text-gradient-from" />
                            </motion.div>
                            
                            <motion.div
                              className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur-md border border-border rounded-lg p-3 shadow-lg"
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <div className="text-xs text-foreground/70">Live Preview</div>
                            </motion.div>
                          </div>
                          
                          {/* Tech stack badges */}
                          <div className="absolute bottom-4 right-4 flex gap-2">
                            {["React", "Node.js", "PostgreSQL", "AWS"].map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="px-2 py-1 text-xs bg-background/80 backdrop-blur-sm border border-border/30 rounded-md"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Floating particles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${10 + i * 10}%`,
                            }}
                            animate={{
                              y: [0, -20, 0],
                              x: [0, 10, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </TabsContent>
                )
              ))}
            </AnimatePresence>
          </div>
        </Tabs>

        {/* Navigation hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-sm text-foreground/60"
        >
          <p>
            {isPlaying 
              ? `Auto-rotating to ${features[(features.findIndex(f => f.id === activeTab) + 1) % features.length].title} in ${Math.round((5000 - (progress * 50)) / 1000)}s` 
              : "Click tabs to explore or enable auto-rotate"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}