"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronDown,
  Code,
  Database,
  ShoppingBag,
  CreditCard,
  Cloud,
  Globe,
  Zap,
  Cpu,
  Users,
  BookOpen,
  FileText,
  MessageSquare,
  Sparkles,
  Briefcase,
  Mail,
  ArrowRight,
  CheckCircle
} from "lucide-react"

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Service categories with icons and descriptions
  const serviceItems = [
    {
      category: "Business Solutions",
      items: [
        { 
          label: "Custom Software", 
          href: "/services/software",
          icon: <Code className="h-4 w-4" />,
          description: "Tailored solutions for your unique needs",
          features: ["Scalable", "Secure", "Maintainable"]
        },
        { 
          label: "ERP Systems", 
          href: "/services/erp",
          icon: <Database className="h-4 w-4" />,
          description: "Complete business management",
          features: ["Inventory", "Accounting", "HR"]
        },
        { 
          label: "E-commerce", 
          href: "/services/ecommerce",
          icon: <ShoppingBag className="h-4 w-4" />,
          description: "Online stores that drive sales",
          features: ["Payment Gateway", "Inventory", "Analytics"]
        },
      ]
    },
    {
      category: "Technical Services",
      items: [
        { 
          label: "POS Solutions", 
          href: "/services/pos",
          icon: <CreditCard className="h-4 w-4" />,
          description: "Retail & restaurant systems",
          features: ["Offline Mode", "Reporting", "Multi-store"]
        },
        { 
          label: "SaaS Platforms", 
          href: "/services/saas",
          icon: <Cloud className="h-4 w-4" />,
          description: "Cloud-based software",
          features: ["Subscription", "Multi-tenant", "API"]
        },
        { 
          label: "Web Development", 
          href: "/services/web",
          icon: <Globe className="h-4 w-4" />,
          description: "Responsive websites",
          features: ["SEO", "Fast", "Mobile-friendly"]
        },
      ]
    },
    {
      category: "Specialized",
      items: [
        { 
          label: "Automation", 
          href: "/services/automation",
          icon: <Zap className="h-4 w-4" />,
          description: "Workflow automation",
          features: ["AI", "Bots", "Scheduling"]
        },
        { 
          label: "Integration", 
          href: "/services/integration",
          icon: <Cpu className="h-4 w-4" />,
          description: "Connect your systems",
          features: ["API", "Real-time", "Secure"]
        },
        { 
          label: "Consulting", 
          href: "/services/consulting",
          icon: <Users className="h-4 w-4" />,
          description: "Strategy & planning",
          features: ["Audit", "Roadmap", "Implementation"]
        },
      ]
    }
  ]

  // Company items with descriptions
  const companyItems = [
    {
      category: "About",
      items: [
        { 
          label: "Our Story", 
          href: "/about",
          icon: <Users className="h-4 w-4" />,
          description: "Learn about our journey and mission"
        },
        { 
          label: "Our Process", 
          href: "/process",
          icon: <BookOpen className="h-4 w-4" />,
          description: "How we deliver exceptional results"
        },
        { 
          label: "Case Studies", 
          href: "/cases",
          icon: <FileText className="h-4 w-4" />,
          description: "Success stories from our clients"
        },
      ]
    },
    {
      category: "Connect",
      items: [
        { 
          label: "Testimonials", 
          href: "/testimonials",
          icon: <MessageSquare className="h-4 w-4" />,
          description: "What our clients say about us"
        },
        { 
          label: "Blog & Insights", 
          href: "/blog",
          icon: <Sparkles className="h-4 w-4" />,
          description: "Latest trends and insights"
        },
        { 
          label: "Careers", 
          href: "/careers",
          icon: <Briefcase className="h-4 w-4" />,
          description: "Join our talented team"
        },
        { 
          label: "Contact Us", 
          href: "/contact",
          icon: <Mail className="h-4 w-4" />,
          description: "Get in touch with our team"
        },
      ]
    }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      {/* Minimalist Front Navbar */}
      <nav 
        className="hidden md:flex items-center gap-8 relative" 
        ref={dropdownRef}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Services - Minimal Front */}
        <div 
          className="relative"
          onMouseEnter={() => setActiveDropdown("services")}
        >
          <button className="group flex items-center gap-1 py-2">
            <span className="text-foreground/90 group-hover:text-foreground transition-colors text-sm">
              Services
            </span>
            <motion.div
              animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-3 w-3 text-foreground/70 group-hover:text-foreground transition-colors" />
            </motion.div>
          </button>

          {/* Rich Interactive Dropdown */}
          <AnimatePresence>
            {activeDropdown === "services" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-[800px] bg-background border border-border/50 rounded-xl shadow-2xl shadow-black/10 dark:shadow-white/5 backdrop-blur-sm z-50 overflow-hidden"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6 grid grid-cols-3 gap-6">
                  {serviceItems.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-4">
                      <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                        {category.category}
                      </h4>
                      <div className="space-y-3">
                        {category.items.map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                          >
                            <Link
                              href={item.href}
                              className="group block p-3 rounded-lg hover:bg-accent/5 dark:hover:bg-accent/10 transition-all border border-transparent hover:border-border/20"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-0.5 p-1.5 rounded-md bg-gradient-to-br from-gradient-from/10 to-gradient-to/10">
                                  <div className="text-gradient-from">
                                    {item.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-foreground group-hover:text-gradient-from transition-colors">
                                      {item.label}
                                    </span>
                                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-xs text-foreground/60 mb-2">
                                    {item.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1">
                                    {item.features?.map((feature, i) => (
                                      <span 
                                        key={i}
                                        className="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] rounded bg-gradient-from/5 text-foreground/70"
                                      >
                                        <CheckCircle className="h-2.5 w-2.5" />
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer with CTA */}
                <div className="border-t border-border/50 p-4 bg-gradient-to-r from-gradient-from/5 to-gradient-to/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Need a custom solution?</p>
                      <p className="text-xs text-foreground/60">We build exactly what you need</p>
                    </div>
                    <Link
                      href="/contact"
                      className="px-4 py-2 text-sm bg-gradient-to-r from-gradient-from to-gradient-to text-white rounded-lg hover:opacity-90 transition-opacity"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Work - Simple Link */}
        <Link
          href="/work"
          className="text-foreground/90 hover:text-foreground py-2 transition-colors text-sm relative group"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-from to-gradient-to group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Company - Minimal Front */}
        <div 
          className="relative"
          onMouseEnter={() => setActiveDropdown("company")}
        >
          <button className="group flex items-center gap-1 py-2">
            <span className="text-foreground/90 group-hover:text-foreground transition-colors text-sm">
              Company
            </span>
            <motion.div
              animate={{ rotate: activeDropdown === "company" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-3 w-3 text-foreground/70 group-hover:text-foreground transition-colors" />
            </motion.div>
          </button>

          {/* Interactive Company Dropdown */}
          <AnimatePresence>
            {activeDropdown === "company" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-[500px] bg-background border border-border/50 rounded-xl shadow-2xl shadow-black/10 dark:shadow-white/5 backdrop-blur-sm z-50"
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6 grid grid-cols-2 gap-6">
                  {companyItems.map((category, catIndex) => (
                    <div key={catIndex} className="space-y-4">
                      <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                        {category.category}
                      </h4>
                      <div className="space-y-3">
                        {category.items.map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                          >
                            <Link
                              href={item.href}
                              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-accent/5 dark:hover:bg-accent/10 transition-all"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="p-1.5 rounded-md bg-gradient-to-br from-gradient-from/10 to-gradient-to/10">
                                <div className="text-gradient-from">
                                  {item.icon}
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-foreground group-hover:text-gradient-from transition-colors">
                                    {item.label}
                                  </span>
                                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                                </div>
                                <p className="text-xs text-foreground/60 mt-0.5">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats Footer */}
                <div className="border-t border-border/50 p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                        50+
                      </div>
                      <div className="text-xs text-foreground/60">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                        100%
                      </div>
                      <div className="text-xs text-foreground/60">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                        6+
                      </div>
                      <div className="text-xs text-foreground/60">Countries</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Testimonials */}
        <Link
          href="/testimonials"
          className="text-foreground/90 hover:text-foreground py-2 transition-colors text-sm relative group"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Testimonials
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-from to-gradient-to group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Blog */}
        <Link
          href="/blog"
          className="text-foreground/90 hover:text-foreground py-2 transition-colors text-sm relative group"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Blog
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-from to-gradient-to group-hover:w-full transition-all duration-300"></span>
        </Link>
      </nav>

      {/* Right Actions - Minimal */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        
        <Link href='/contact'>
          <Button 
            className="bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white border-0 text-sm px-5 py-2.5 h-auto shadow-md hover:shadow-lg transition-all"
          >
            Contact
          </Button>
        </Link>
      </div>
    </>
  )
}