"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Users, Shield, BarChart3 } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ModernFeatures() {
  const [activeTab, setActiveTab] = useState("analytics")
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  // Set mounted state to true on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      id: "erp",
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Custom ERP Solutions",
      description:
        "We help businesses streamline complex operations with tailor-made ERP systems. From manufacturing to retail, our ERP platforms centralize data, automate workflows, and improve real-time decision-making.",
      benefits: [
        "Integrated inventory & accounting modules",
        "Role-based access control",
        "Custom dashboards & analytics",
        "Improved operational efficiency",
      ],
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "saas",
      icon: <Zap className="h-5 w-5" />,
      title: "SaaS Product Development",
      description:
        "From concept to cloud deployment, Tennissine’s Space builds scalable SaaS products designed for growth. We focus on performance, security, and user experience so you can launch fast and scale confidently.",
      benefits: [
        "Modular multi-tenant architecture",
        "Subscription management & analytics",
        "Automated deployments with CI/CD",
        "Enterprise-grade security practices",
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "pos",
      icon: <Users className="h-5 w-5" />,
      title: "Smart POS Systems",
      description:
        "We deliver modern POS systems that connect sales, inventory, and finance seamlessly. Our POS platforms help retailers and restaurants improve checkout speed and inventory visibility in real time.",
      benefits: [
        "Offline-first transaction support",
        "Real-time sales and stock tracking",
        "Customizable receipt and invoice flows",
        "Hardware integration (barcode, printer, etc.)",
      ],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ecommerce",
      icon: <Shield className="h-5 w-5" />,
      title: "E-Commerce Platforms",
      description:
        "Our eCommerce solutions combine elegant design with solid architecture. We build fast, secure, and customizable platforms for both B2B and B2C brands that scale effortlessly with demand.",
      benefits: [
        "Headless storefront & API integration",
        "Optimized checkout experience",
        "Payment gateway integrations",
        "SEO and analytics optimization",
      ],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ai",
      icon: <Zap className="h-5 w-5 text-accent" />,
      title: "Emerging Tech & AI Integrations",
      description:
        "We integrate next-gen technologies like Artificial Intelligence, Machine Learning, and Cloud DevOps into business systems. From predictive analytics to intelligent automation, we help you stay ahead of the curve.",
      benefits: [
        "AI-driven process automation",
        "Machine learning model deployment",
        "Cloud infrastructure optimization",
        "Smart chatbots & recommendation engines",
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
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

  // Automatically update activeTab when a user selects a new tab
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    
    // Only scroll on mobile devices - fixed scrolling UX issue
    if (isMobile && mounted) {
      setTimeout(() => {
        const element = document.getElementById(`${value}-content`)
        if (element) {
          const yOffset = -80 // Adjust for header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  // Prepare stable dimensions for content to prevent layout shifts
  const contentStyle = {
    minHeight: mounted ? "400px" : "auto", // Reduced height for mobile
  }

  return (
    <section id="features" className="py-12 px-4 sm:py-16 md:py-24 bg-background relative border-t border-border/50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Featured Projects & Case Studies
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore how Tennissine’s Space builds modern, scalable software — from ERP systems and SaaS platforms to AI-integrated business solutions.
          </p>



        </motion.div>

        <Tabs defaultValue="analytics" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide">
            <TabsList className="bg-transparent 
                  backdrop-blur-md 
                  border border-border/20 
                  p-1 
                  rounded-xl 
                  flex-nowrap 
                  shadow-inner 
                  shadow-black/20 dark:shadow-white/20">
            
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gradient-from data-[state=active]:to-gradient-to data-[state=active]:text-foreground rounded-lg p-2 sm:px-3 sm:py-1.5 whitespace-nowrap"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="flex items-center justify-center">{feature.icon}</span>
                    <span className="hidden sm:inline text-sm md:text-base">{feature.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Mobile feature title display - only visible on mobile */}
          <div className="sm:hidden text-center mb-4">
            <h3 className="text-lg font-bold">{features.find(f => f.id === activeTab)?.title}</h3>
          </div>

          <div style={contentStyle} className="relative">
            {features.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="focus-visible:outline-none focus-visible:ring-0 scroll-mt-20 absolute top-0 left-0 w-full transition-opacity"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Image shown first on mobile and a simpler feature display */}
                    <div className="relative order-first mb-4 md:hidden min-h-[185px]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl blur-md opacity-70"></div>
                      <div className="relative bg-background/80 backdrop-blur-sm border border-border/10 rounded-xl overflow-hidden p-1">
                        <img
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          className="w-full h-auto rounded-lg"
                           
                        />
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 text-sm sm:text-base mb-4 mt-8 sm:mb-6">{feature.description}</p>

                    {/* More simplified list for mobile */}
                    <ul className="space-y-2 sm:space-y-3">
                      {feature.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                          <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to flex items-center justify-center text-xs font-bold">
                            ✓
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Desktop image view */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative hidden md:block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl blur-lg opacity-70"></div>
                    <div className="relative bg-background/80 backdrop-blur-sm border border-border/10 rounded-xl overflow-hidden p-1 ">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title} 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
