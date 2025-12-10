"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import * as Tooltip from "@radix-ui/react-tooltip"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import { Zap, Sparkles, Cpu, Globe, Database, Code, ChevronRight, Play, Pause } from "lucide-react"

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState("Language")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [rotationProgress, setRotationProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const rotationInterval = useRef<NodeJS.Timeout | null>(null)

  const integrations = [
    { name: "HTML", category: "Language", logo: "/images/TechStacks/html.png", color: "from-orange-500 to-red-500" },
    { name: "CSS", category: "Language", logo: "/images/TechStacks/css.svg", color: "from-blue-500 to-indigo-500" },
    { name: "Javascript", category: "Language", logo: "/images/TechStacks/javascript.svg", color: "from-yellow-500 to-amber-500" },
    { name: "C#", category: "Language", logo: "/images/TechStacks/Csharp.png", color: "from-purple-500 to-pink-500" },
    { name: "Python", category: "Language", logo: "/images/TechStacks/Python.svg", color: "from-blue-400 to-cyan-500" },
    { name: "PHP", category: "Language", logo: "/images/TechStacks/php.svg", color: "from-indigo-400 to-purple-500" },
    { name: "ReactJs", category: "Frontend", logo: "/images/TechStacks/react.svg", color: "from-cyan-500 to-blue-500" },
    { name: "NextJs", category: "Frontend", logo: "/images/TechStacks/next.png", color: "from-gray-800 to-gray-900" },
    { name: "Material UI", category: "Frontend", logo: "/images/TechStacks/mui.png", color: "from-blue-600 to-blue-700" },
    { name: "Tailwind CSS", category: "Frontend", logo: "/images/TechStacks/tailwind.png", color: "from-teal-500 to-cyan-500" },
    { name: "React Native", category: "Mobile Application", logo: "/images/TechStacks/react.svg", color: "from-cyan-500 to-blue-500" },
    { name: "ASP.NET", category: "Backend", logo: "/images/TechStacks/dotnet.png", color: "from-purple-600 to-purple-700" },
    { name: "Node.Js", category: "Backend", logo: "/images/TechStacks/NodeJs.svg", color: "from-green-600 to-green-700" },
    { name: "Express.Js", category: "Backend", logo: "/images/TechStacks/express.png", color: "from-gray-700 to-gray-800" },
    { name: "Laravel", category: "Backend", logo: "/images/TechStacks/Laravel.svg", color: "from-red-500 to-pink-500" },
    { name: "Microsoft SQL Server", category: "Database", logo: "/images/TechStacks/mssql.png", color: "from-red-600 to-red-700" },
    { name: "PostgreSQL", category: "Database", logo: "/images/TechStacks/postgresql.svg", color: "from-blue-700 to-blue-800" },
    { name: "MySQL", category: "Database", logo: "/images/TechStacks/mysql.svg", color: "from-blue-500 to-blue-600" },
    { name: "MongoDB", category: "Database", logo: "/images/TechStacks/mongodb.svg", color: "from-green-500 to-green-600" },
    { name: "Redis", category: "Database", logo: "/images/TechStacks/redis.svg", color: "from-red-500 to-red-600" },
    { name: "Docker", category: "DevOps", logo: "/images/TechStacks/docker.png", color: "from-blue-500 to-blue-600" },
    { name: "Kubernetes", category: "DevOps", logo: "/images/TechStacks/kubernetes.png", color: "from-blue-600 to-blue-700" },
    { name: "CI / CD", category: "DevOps", logo: "/images/TechStacks/cicd.png", color: "from-green-500 to-green-600" },
    { name: "AWS", category: "DevOps", logo: "/images/TechStacks/aws.svg", color: "from-orange-500 to-yellow-500" },
    { name: "GCP", category: "DevOps", logo: "/images/TechStacks/gcp.png", color: "from-blue-500 to-green-500" },
    { name: "Azure", category: "DevOps", logo: "/images/TechStacks/azure.png", color: "from-blue-500 to-blue-600" },
    { name: "Wordpress", category: "CMS", logo: "/images/TechStacks/wordpress.svg", color: "from-blue-900 to-blue-800" },
  ];

  const categories = [
    { id: "Language", icon: <Code className="h-4 w-4" /> },
    { id: "Frontend", icon: <Globe className="h-4 w-4" /> },
    { id: "Backend", icon: <Cpu className="h-4 w-4" /> },
    { id: "Database", icon: <Database className="h-4 w-4" /> },
    { id: "DevOps", icon: <Zap className="h-4 w-4" /> },
    { id: "CMS", icon: <Sparkles className="h-4 w-4" /> },
  ] as const

  // Auto-rotate categories
  useEffect(() => {
    if (isPlaying && isInView) {
      const duration = 6000 // 6 seconds per category
      const steps = 100
      const stepDuration = duration / steps
      
      setRotationProgress(0)
      
      rotationInterval.current = setInterval(() => {
        setRotationProgress(prev => {
          if (prev >= 100) {
            const currentIndex = categories.findIndex(c => c.id === activeCategory)
            const nextIndex = (currentIndex + 1) % categories.length
            setActiveCategory(categories[nextIndex].id)
            return 0
          }
          return prev + (100 / steps)
        })
      }, stepDuration)
    }
    
    return () => {
      if (rotationInterval.current) {
        clearInterval(rotationInterval.current)
      }
    }
  }, [isPlaying, activeCategory, isInView])

  const getFilteredIntegrations = (category: string) => {
    if (category === "Frontend") {
      return integrations.filter(integration => 
        integration.category === "Frontend" || integration.category === "Mobile Application"
      )
    }
    return integrations.filter(integration => integration.category === category)
  }

  const toggleAutoRotate = () => {
    setIsPlaying(!isPlaying)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setIsPlaying(false)
    setRotationProgress(0)
    if (rotationInterval.current) {
      clearInterval(rotationInterval.current)
    }
  }

  return (
    <section 
      className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden border-t border-border/50"
      aria-labelledby="integrations-heading"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[60px] h-[60px] rounded-full blur-[30px]"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Circuit pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Tech Stack</span>
          </div>
          
          <h2 
            id="integrations-heading" 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            <span className="block">Technology</span>
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
              Ecosystem
            </motion.span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our comprehensive technology stack for building modern, scalable solutions
          </p>
        </motion.div>

        {/* Interactive Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Auto-rotate toggle */}
          <div className="flex items-center gap-2 bg-surface/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm text-foreground/70">Auto-explore:</span>
            <button
              onClick={toggleAutoRotate}
              className="relative w-12 h-6 bg-surface/50 rounded-full flex items-center p-1 transition-all duration-300 group"
              aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
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
          <div className="flex-1 sm:flex-none sm:w-48">
            <div className="h-1 w-full bg-surface/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
                animate={{ width: isPlaying ? `${rotationProgress}%` : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Tabs Navigation */}
        <Tabs 
          value={activeCategory} 
          onValueChange={handleCategoryChange}
          className="w-full"
        >
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-3">
            <TabsList className="bg-surface/5 backdrop-blur-sm border border-border/20 p-1 rounded-xl flex-nowrap relative">
              {/* Active tab background */}
              <motion.div
                className="absolute bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 backdrop-blur-sm rounded-lg"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`relative rounded-lg px-4 py-2 whitespace-nowrap text-sm transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "text-white font-medium" 
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onMouseEnter={() => setHoveredTech(category.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="flex items-center gap-2 relative z-10">
                    <motion.div
                      animate={activeCategory === category.id ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <span>{category.id}</span>
                    
                    {/* Hover indicator */}
                    {hoveredTech === category.id && activeCategory !== category.id && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-from"
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

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              activeCategory === category.id && (
                <TabsContent 
                  key={category.id} 
                  value={category.id} 
                  className="mt-0 focus-visible:outline-none"
                  forceMount
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    {/* Category description */}
                    <div className="text-center mb-6">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-foreground/70"
                      >
                        {category.id === "Language" && "Programming languages we excel in"}
                        {category.id === "Frontend" && "Modern frontend frameworks and libraries"}
                        {category.id === "Backend" && "Server-side technologies and frameworks"}
                        {category.id === "Database" && "Database systems and storage solutions"}
                        {category.id === "DevOps" && "Deployment, infrastructure, and automation tools"}
                        {category.id === "CMS" && "Content management systems and platforms"}
                      </motion.p>
                    </div>

                    {/* Tech Grid */}
                    <Tooltip.Provider delayDuration={100} skipDelayDuration={500}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {getFilteredIntegrations(category.id).map((tech, index) => (
                          <Tooltip.Root key={index}>
                            <Tooltip.Trigger asChild>
                              <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                  duration: 0.4,
                                  delay: index * 0.03,
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 15
                                }}
                                whileHover={{ 
                                  y: -8,
                                  scale: 1.05,
                                  transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setHoveredTech(tech.name)}
                                onMouseLeave={() => setHoveredTech(null)}
                                className="relative group cursor-pointer"
                              >
                                {/* Outer glow on hover */}
                                <motion.div
                                  className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  style={{
                                    background: `radial-gradient(circle at center, ${tech.color.split(' ')[1].replace('from-', '')}20, transparent 70%)`,
                                  }}
                                />

                                {/* Main card */}
                                <div 
                                  className="relative bg-surface/10 backdrop-blur-sm border border-border/30 rounded-xl p-4 sm:p-5 
                                    group-hover:border-gradient-from/50 group-hover:bg-surface/20
                                    transition-all duration-300 h-full flex flex-col items-center justify-center"
                                >
                                  {/* Logo container with gradient background */}
                                  <div className="relative mb-3">
                                    <motion.div
                                      className={`absolute inset-0 ${tech.color} opacity-10 rounded-full blur-md`}
                                      animate={hoveredTech === tech.name ? {
                                        scale: [1, 1.2, 1],
                                      } : {}}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                    />
                                    
                                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                                      <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        width={56}
                                        height={56}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                      />
                                    </div>
                                    
                                    {/* Active indicator */}
                                    {hoveredTech === tech.name && (
                                      <motion.div
                                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-from"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: [0, 1.2, 1] }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    )}
                                  </div>

                                  {/* Tech name */}
                                  <motion.p
                                    className="text-xs sm:text-sm font-medium text-center text-foreground/80 group-hover:text-foreground
                                      transition-colors duration-300 truncate w-full"
                                    animate={hoveredTech === tech.name ? {
                                      scale: 1.05,
                                    } : {}}
                                  >
                                    {tech.name}
                                  </motion.p>

                                  {/* Hover indicator line */}
                                  <motion.div
                                    className="h-0.5 w-0 bg-gradient-to-r from-gradient-from to-gradient-to mt-2"
                                    initial={false}
                                    animate={{ 
                                      width: hoveredTech === tech.name ? "2rem" : "0rem" 
                                    }}
                                    transition={{ duration: 0.3 }}
                                  />
                                </div>
                              </motion.div>
                            </Tooltip.Trigger>

                            <Tooltip.Portal>
                              <Tooltip.Content
                                side="top"
                                sideOffset={5}
                                className="z-50 px-3 py-2 text-sm bg-foreground text-background rounded-lg shadow-lg backdrop-blur-sm"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{tech.name}</span>
                                  <ChevronRight className="h-3 w-3" />
                                </div>
                                <Tooltip.Arrow className="fill-foreground" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        ))}
                      </div>
                    </Tooltip.Provider>
                  </motion.div>
                </TabsContent>
              )
            ))}
          </AnimatePresence>
        </Tabs>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-surface/10 backdrop-blur-sm px-6 py-5 rounded-2xl border border-border/30">
            <div className="text-left">
              <p className="text-base sm:text-lg font-medium mb-1">Need a different technology?</p>
              <p className="text-sm text-foreground/70">We're experts in a wide range of modern technologies</p>
            </div>
            
            <Link 
              href="/contact"
              className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to text-white px-6 py-2.5 rounded-lg font-medium
                hover:shadow-xl hover:shadow-gradient-from/20 transition-all duration-300 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Custom Integration
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Link>
          </div>
        </motion.div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6 text-sm text-foreground/60"
        >
          <p>
            {isPlaying 
              ? `Auto-rotating to ${categories[(categories.findIndex(c => c.id === activeCategory) + 1) % categories.length].id} in ${Math.round((6000 - (rotationProgress * 60)) / 1000)}s` 
              : "Click categories to explore or enable auto-rotate"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}