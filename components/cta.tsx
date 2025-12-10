"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Calendar, MessageSquare, Zap, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function ModernCta() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })
  
  const rotateY = useTransform(springX, [-100, 100], [5, -5])
  const rotateX = useTransform(springY, [-100, 100], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      x.set(e.clientX - centerX)
      y.set(e.clientY - centerY)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const benefits = [
    { text: "30-minute free consultation", icon: <Clock className="h-4 w-4" /> },
    { text: "No technical knowledge needed", icon: <Sparkles className="h-4 w-4" /> },
    { text: "Custom quote in 24 hours", icon: <Zap className="h-4 w-4" /> },
  ]

  const [activeBenefit, setActiveBenefit] = useState(0)

  // Rotate benefits
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>
      {/* Animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Moving gradient particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-from/30"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              x: [null, `${Math.random() * 100 - 50}px`],
              y: [null, `${Math.random() * 100 - 50}px`],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={containerRef}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-gradient-from/20 via-gradient-to/20 to-gradient-from/20 rounded-2xl blur-xl opacity-70"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Main card */}
            <div className="relative bg-background/80 backdrop-blur-sm border border-border/20 rounded-xl p-8 text-center">
              {/* Rotating benefit */}
              <motion.div
                key={activeBenefit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex items-center gap-2 bg-gradient-from/10 text-gradient-from px-4 py-2 rounded-full mb-6"
              >
                {benefits[activeBenefit].icon}
                <span className="text-sm font-medium">{benefits[activeBenefit].text}</span>
              </motion.div>

              {/* Main heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Build Your{" "}
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
                  Software?
                </motion.span>
              </h2>

              {/* Subtitle */}
              <p className="text-base text-foreground/70 mb-8 max-w-lg mx-auto">
                Get a custom solution for your business. No complexity, just results.
              </p>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredButton("primary")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <Link href="/contact">
                    <Button className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white px-8 py-6 text-base font-medium w-full sm:w-auto">
                      <span className="relative z-10 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Start Free Consultation
                        <motion.div
                          animate={{ x: hoveredButton === "primary" ? [0, 4, 0] : 0 }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </span>
                      
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute -top-1 -left-12 h-16 w-8 bg-white/20 transform rotate-12"
                        animate={{
                          x: hoveredButton === "primary" ? ["0%", "400%"] : "0%",
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 0.1,
                        }}
                      />
                    </Button>
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setHoveredButton("secondary")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <Link href="#workmodels">
                    <Button
                      variant="outline"
                      className="group border-border hover:bg-accent/10 px-8 py-6 text-base w-full sm:w-auto"
                    >
                      <span className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        See How We Work
                      </span>
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Quick benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {[
                  "No upfront costs",
                  "Expert team included",
                  "Fixed timelines"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-border/20"
              >
                <p className="text-xs text-foreground/50">
                  Trusted by 50+ businesses across 6 countries
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-2 text-xs text-foreground/50">
              <span>Move cursor around to see 3D effect</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ArrowRight className="h-3 w-3" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}