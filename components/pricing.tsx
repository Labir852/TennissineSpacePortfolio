"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Sparkles, Users, Briefcase, MessageSquare, Zap, Play, Pause } from "lucide-react"
import Link from "next/link"

export default function EngagementModels() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null)
  const [hoveredModel, setHoveredModel] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentCycle, setCurrentCycle] = useState(0)

  const models = [
    {
      id: 1,
      name: "Project-Based",
      description: "Complete software solution from start to finish",
      icon: <Briefcase className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      bestFor: "One-time projects with clear requirements",
      features: [
        "Fixed price & timeline",
        "Clear milestones",
        "Full development team",
        "Project manager included",
        "Launch support"
      ],
      cta: "Start Project",
      popular: false
    },
    {
      id: 2,
      name: "Dedicated Team",
      description: "Your own dedicated developers & designers",
      icon: <Users className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      bestFor: "Long-term projects or ongoing development",
      features: [
        "Flexible team size",
        "Direct communication",
        "Monthly billing",
        "Scalable resources",
        "Full-time availability"
      ],
      cta: "Build Team",
      popular: true
    },
    {
      id: 3,
      name: "Consultation",
      description: "Expert advice for your software needs",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
      bestFor: "Technical guidance & strategy",
      features: [
        "Technical audits",
        "System reviews",
        "Architecture planning",
        "Performance advice",
        "Support packages"
      ],
      cta: "Book Call",
      popular: false
    }
  ]

  // Auto-cycle through models
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentCycle(prev => {
          const next = (prev + 1) % models.length
          setSelectedModel(next)
          return next
        })
      }, 4000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleModelClick = (index: number) => {
    setSelectedModel(index)
    setIsPlaying(false)
  }

  return (
    <section
      id="workmodels"
      className="py-16 sm:py-20 bg-background relative overflow-hidden border-t border-border/50"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Choose Your Model</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            How We Work Together
          </h2>
          
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Pick the approach that fits your needs. Simple, clear, and effective.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-sm text-foreground/70">Auto-view:</span>
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
            Tap any option to learn more
          </div>
        </div>

        {/* Model Selection */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {models.map((model, index) => (
            <motion.button
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleModelClick(index)}
              onMouseEnter={() => setHoveredModel(index)}
              onMouseLeave={() => setHoveredModel(null)}
              className={`relative p-4 rounded-xl border transition-all duration-300 ${
                selectedModel === index
                  ? "border-transparent shadow-lg"
                  : "border-border hover:border-gradient-from/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background gradient on selected */}
              {selectedModel === index && (
                <motion.div
                  className={`absolute inset-0 rounded-xl ${model.gradient}`}
                  layoutId="selectedModel"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Popular badge */}
              {model.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gradient-from to-gradient-to text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${model.gradient}`}>
                    <div className="text-foreground">{model.icon}</div>
                  </div>
                  <h3 className="font-bold text-lg">{model.name}</h3>
                </div>

                <p className="text-sm text-foreground/70 mb-3 text-left">
                  {model.description}
                </p>

                <div className="text-xs text-foreground/60 text-left">
                  Best for: {model.bestFor}
                </div>

                {/* Selection indicator */}
                {selectedModel === index && (
                  <motion.div
                    className="absolute -right-2 -top-2 w-4 h-4 rounded-full bg-gradient-from"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Details Panel */}
        <AnimatePresence mode="wait">
          {selectedModel !== null && (
            <motion.div
              key={selectedModel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className={`${models[selectedModel].gradient} backdrop-blur-sm border border-border rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${models[selectedModel].gradient}`}>
                    {models[selectedModel].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{models[selectedModel].name}</h3>
                    <p className="text-foreground/70">{models[selectedModel].description}</p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {selectedModel === 0 && (
                    <>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Fixed Price</div>
                        <div className="text-sm text-foreground/70">Clear budget</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Timeline</div>
                        <div className="text-sm text-foreground/70">Defined schedule</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Full Team</div>
                        <div className="text-sm text-foreground/70">All roles included</div>
                      </div>
                    </>
                  )}
                  
                  {selectedModel === 1 && (
                    <>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Flexible</div>
                        <div className="text-sm text-foreground/70">Team size adjusts</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Direct</div>
                        <div className="text-sm text-foreground/70">Daily communication</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Scalable</div>
                        <div className="text-sm text-foreground/70">Grow as needed</div>
                      </div>
                    </>
                  )}
                  
                  {selectedModel === 2 && (
                    <>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Expert Advice</div>
                        <div className="text-sm text-foreground/70">Technical guidance</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Audits</div>
                        <div className="text-sm text-foreground/70">System reviews</div>
                      </div>
                      <div className="text-center p-3 bg-background/20 rounded-lg">
                        <div className="text-lg font-bold">Strategy</div>
                        <div className="text-sm text-foreground/70">Planning & roadmaps</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <div className="space-y-2">
                    {models[selectedModel].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-from"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30">
                  <div className="text-sm text-foreground/70">
                    Ready to get started with {models[selectedModel].name}?
                  </div>
                  
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {models[selectedModel].cta}
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Comparison Help */}
        {selectedModel !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-foreground/70">
              Not sure which model is right for you?{" "}
              <Link
                href="/contact"
                className="text-gradient-from hover:underline"
              >
                Let's chat about your needs
              </Link>
            </p>
          </motion.div>
        )}

        {/* Guide for first-time visitors */}
        {selectedModel === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-3 rounded-xl">
              <Zap className="h-4 w-4 text-gradient-from" />
              <p className="text-sm text-foreground/70">
                Click on any model above to see details
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}