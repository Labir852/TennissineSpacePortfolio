"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause, Volume2, Sparkles, Heart, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ModernTestimonials() {
  const testimonials = [
    {
      quote: "Tennissine's Space built our complete ERP system — integrating HR, accounts & inventory into one platform. As well they have delivered us with their excellent POS software to run our battalion store. Their execution speed and attention to detail were outstanding.",
      author: "Major Mamun",
      role: "Project Director",
      company: "Bangladesh Army",
      avatar: "/clients/clients photo/mamun.jpg",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    },
    {
      quote: "Our eCommerce platform, developed by Tennissine's Space, has been running flawlessly. Their technical capability and post-deployment support exceeded expectations.",
      author: "Shahina Akter Shoshi",
      role: "Founder",
      company: "Mixora Trading Ltd.",
      avatar: "/clients/clients photo/shahina.jpg",
      rating: 5,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    },
    {
      quote: "They designed and implemented our institutional website & ERP integrating University Management System, Online admission and online payments automated with a clean, modern interface and a powerful admin dashboard. The process was smooth from start to finish.",
      author: "Tariful Islam Akash",
      role: "Head of IT",
      company: "Primeasia University",
      avatar: "/clients/clients photo/akash.jpg",
      rating: 5,
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    },
    {
      quote: "Our digital marketing website and Our POS system went live in multiple retail locations with zero downtime. Tennissine's Space's technical team handled everything — from deployment to training — flawlessly.",
      author: "Mr. Pranta Paul",
      role: "Founder",
      company: "DevHome Digital",
      avatar: "/clients/clients photo/pranta.jpg",
      rating: 5,
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    },
    {
      quote: "Tennissine's Space developed our Claim Settlement portal and helped automate several manual workflows. The system has improved our reporting efficiency dramatically.",
      author: "Mr. Md. Abdul Halim",
      role: "Assistant Director",
      company: "Capital Market Stabilization Fund",
      avatar: "/clients/clients photo/halim.jpg",
      rating: 5,
      color: "from-indigo-500 to-blue-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
    },
  ]

  const companies = [
    { name: "Bangladesh Army", logo: "/clients/bangladesharmylogonobg.png" },
    { name: "Capital Market Stabilizaiton Fund", logo: "/clients/cmsf.png" },
    { name: "Primeasia University", logo: "/clients/Primeasia.png" },
    { name: "Mixora Trading Ltd.", logo: "/clients/mixorabl.png" },
    { name: "DevHome Digital", logo: "/clients/devhome.png" },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [progress, setProgress] = useState(0)
  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null)
  const [isLiked, setIsLiked] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const rotateY = useTransform(x, [-100, 100], [-15, 15])
  const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])

  // Auto-rotation with progress
  useEffect(() => {
    if (!autoplay) return

    const duration = 6000 // 6 seconds per testimonial
    const steps = 100
    const stepDuration = duration / steps

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrent(prev => (prev + 1) % testimonials.length)
          return 0
        }
        return prev + (100 / steps)
      })
    }, stepDuration)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent(prev => (prev + 1) % testimonials.length)
    setProgress(0)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)
    setProgress(0)
  }

  const goToTestimonial = (index: number) => {
    setAutoplay(false)
    setCurrent(index)
    setProgress(0)
  }

  const toggleAutoplay = () => {
    setAutoplay(!autoplay)
  }

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50
    if (info.offset.x > threshold) {
      prev()
    } else if (info.offset.x < -threshold) {
      next()
    }
  }

  const currentTestimonial = testimonials[current]

  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden border-t border-border/50"
      ref={containerRef}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main gradient */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px]"
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

        {/* Floating stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-from/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Client Love</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="block">What Our</span>
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
              Customers Say
            </motion.span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        {/* Interactive Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Auto-play toggle */}
          <div className="flex items-center gap-2 bg-surface/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm text-foreground/70">Auto-play:</span>
            <button
              onClick={toggleAutoplay}
              className="relative w-12 h-6 bg-surface/50 rounded-full flex items-center p-1 transition-all duration-300 group"
              aria-label={autoplay ? "Pause auto-play" : "Play auto-play"}
            >
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                animate={{ x: autoplay ? 24 : 0 }}
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
                animate={{ width: autoplay ? `${progress}%` : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Like button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full ${isLiked ? 'bg-gradient-from/20' : 'bg-surface/20'} backdrop-blur-sm border border-border/30`}
            aria-label={isLiked ? "Unlike testimonial" : "Like testimonial"}
          >
            <motion.div
              animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-foreground/60'}`} />
            </motion.div>
          </motion.button>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          {/* Quote marks */}
          <motion.div
            className="absolute -top-6 -left-6 text-gradient-from/10 hidden sm:block"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Quote size={80} />
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 text-gradient-to/10 hidden sm:block"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <Quote size={80} />
          </motion.div>

          {/* Dragable testimonial card */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ x, rotateY, opacity }}
            className="cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className={`relative ${currentTestimonial.gradient} backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-12 overflow-hidden`}>
                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 backdrop-blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <ThumbsUp className="h-5 w-5 text-gradient-from" />
                  </motion.div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Avatar and Info */}
                    <div className="lg:w-1/3 w-full">
                      <div className="relative">
                        {/* Avatar glow */}
                        <motion.div
                          className="absolute -inset-4 rounded-full blur-xl opacity-60"
                          style={{
                            // background: `linear-gradient(135deg, ${currentTestimonial.color.split(' ')[1].replace('from-', '')}, ${currentTestimonial.color.split(' ')[3].replace('to-', '')})`,
                          }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <div className="relative">
                          <motion.div
                            className="relative h-32 w-32 mx-auto rounded-full overflow-hidden border-4 border-background"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Image
                              src={currentTestimonial.avatar || "/placeholder.svg"}
                              alt={`Portrait of ${currentTestimonial.author}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 128px, 128px"
                            />
                          </motion.div>
                          
                          {/* Company badge */}
                          <motion.div
                            className="absolute -bottom-2 -right-2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="h-8 w-8 relative">
                              <Image
                                src={companies.find(c => c.name.includes(currentTestimonial.company))?.logo || "/placeholder.svg"}
                                alt={`${currentTestimonial.company} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </motion.div>
                        </div>

                        <motion.div
                          className="text-center mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-xl font-bold mb-1">{currentTestimonial.author}</h3>
                          <p className="text-foreground/70 text-sm mb-2">{currentTestimonial.role}</p>
                          <div className="flex items-center justify-center gap-1 mb-3">
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                <Star className="w-5 h-5 fill-current text-yellow-500" />
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/20 backdrop-blur-sm border border-border/30">
                            <span className="text-xs font-medium">{currentTestimonial.company}</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="lg:w-2/3 w-full">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-4 h-8 w-8 text-gradient-from/20" />
                          
                          <p className="text-lg md:text-xl lg:text-2xl italic mb-6 leading-relaxed">
                            "{currentTestimonial.quote}"
                          </p>
                          
                          {/* Animated divider */}
                          <motion.div
                            className="h-[2px] w-16 bg-gradient-to-r from-gradient-from to-gradient-to"
                            initial={{ width: 0 }}
                            animate={{ width: "4rem" }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          />

                          {/* Client stats */}
                          <motion.div
                            className="flex flex-wrap gap-4 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-gradient-from/10">
                                <Volume2 className="h-4 w-4 text-gradient-from" />
                              </div>
                              <div>
                                <div className="text-sm font-medium">100% Satisfaction</div>
                                <div className="text-xs text-foreground/60">Client Feedback</div>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <div className="p-1.5 rounded-md bg-gradient-to/10">
                                <Sparkles className="h-4 w-4 text-gradient-to" />
                              </div>
                              <div>
                                <div className="text-sm font-medium">50+ Projects</div>
                                <div className="text-xs text-foreground/60">Completed</div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="p-3 rounded-full bg-surface/20 backdrop-blur-sm border border-border/30 hover:bg-surface/30 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </motion.button>

          {/* Progress Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToTestimonial(idx)}
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${idx + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    current === idx 
                      ? "bg-gradient-to-r from-gradient-from to-gradient-to" 
                      : "bg-foreground/20"
                  }`}
                  animate={current === idx ? {
                    scale: [1, 1.5, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Hover effect */}
                {current === idx && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-from/20"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="p-3 rounded-full bg-surface/20 backdrop-blur-sm border border-border/30 hover:bg-surface/30 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Company Logos 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-center text-sm text-foreground/70 mb-6">Trusted by leading companies</p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCompany(index)}
                onMouseLeave={() => setHoveredCompany(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative h-12 w-32 flex items-center justify-center">
                 
                  {hoveredCompany === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-lg blur-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                  
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={120}
                    height={48}
                    className="relative object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                
                <AnimatePresence>
                  {hoveredCompany === index && (
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-foreground text-background rounded text-xs font-medium whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {company.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>*/}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-foreground/70 mb-4">Ready to join our satisfied clients?</p>
          <Button
            className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white px-8 py-6 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}