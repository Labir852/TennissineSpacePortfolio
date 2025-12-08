"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronDown,
  ChevronRight,
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

type MobileNavProps = {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Service categories with icons and descriptions (same as desktop)
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

  // Company items with descriptions (same as desktop)
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

  const toggleDropdown = (dropdownId: string) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null)
      setActiveCategory(null)
    } else {
      setActiveDropdown(dropdownId)
      setActiveCategory(null)
    }
  }

  const toggleCategory = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null)
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[70px] bg-background/95 backdrop-blur-xl border-t border-border/50 transition-all duration-300 ease-in-out overflow-auto z-50",
        isOpen ? "max-h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}
      style={{
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
        {/* Services Dropdown */}
        <div className="border-b border-border/30">
          <button
            onClick={() => toggleDropdown("services")}
            className="flex items-center justify-between w-full py-3 px-2 text-foreground/90 hover:text-foreground transition-colors"
          >
            <span className="font-medium text-base">Services</span>
            <motion.div
              animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {activeDropdown === "services" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-3 pl-4">
                  {serviceItems.map((category) => (
                    <div key={category.category} className="mb-3">
                      <button
                        onClick={() => toggleCategory(category.category)}
                        className="flex items-center justify-between w-full py-2 px-2 text-foreground/80 hover:text-foreground"
                      >
                        <span className="text-sm font-medium">{category.category}</span>
                        <motion.div
                          animate={{ rotate: activeCategory === category.category ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-3 w-3" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeCategory === category.category && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-2"
                          >
                            {category.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-start gap-3 py-2.5 px-2 rounded-lg hover:bg-accent/10 transition-all"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="mt-0.5 p-1.5 rounded-md bg-gradient-to-br from-gradient-from/10 to-gradient-to/10">
                                  <div className="text-gradient-from">
                                    {item.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="font-medium text-foreground">
                                      {item.label}
                                    </span>
                                    <ArrowRight className="h-3 w-3 opacity-70" />
                                  </div>
                                  <p className="text-xs text-foreground/60 mb-1">
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
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Services CTA */}
                  <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-gradient-from/5 to-gradient-to/5">
                    <div className="text-sm font-medium text-foreground mb-1">
                      Need a custom solution?
                    </div>
                    <p className="text-xs text-foreground/60 mb-3">
                      We build exactly what you need
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-2 text-sm text-center bg-gradient-to-r from-gradient-from to-gradient-to text-white rounded-lg hover:opacity-90 transition-opacity"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Get Free Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Work Link */}
        <Link
          href="/work"
          className="flex items-center justify-between py-3 px-2 border-b border-border/30 text-foreground/90 hover:text-foreground transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          <span className="font-medium text-base">Work</span>
          <ArrowRight className="h-4 w-4 opacity-70" />
        </Link>

        {/* Company Dropdown */}
        <div className="border-b border-border/30">
          <button
            onClick={() => toggleDropdown("company")}
            className="flex items-center justify-between w-full py-3 px-2 text-foreground/90 hover:text-foreground transition-colors"
          >
            <span className="font-medium text-base">Company</span>
            <motion.div
              animate={{ rotate: activeDropdown === "company" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>

          <AnimatePresence>
            {activeDropdown === "company" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-3 pl-4">
                  {companyItems.map((category) => (
                    <div key={category.category} className="mb-3">
                      <div className="text-xs font-semibold text-foreground/70 uppercase tracking-wider py-2 px-2">
                        {category.category}
                      </div>
                      <div className="space-y-1 pl-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-accent/10 transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="p-1.5 rounded-md bg-gradient-to-br from-gradient-from/10 to-gradient-to/10">
                              <div className="text-gradient-from">
                                {item.icon}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-foreground">
                                  {item.label}
                                </span>
                                <ArrowRight className="h-3 w-3 opacity-70" />
                              </div>
                              <p className="text-xs text-foreground/60 mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Mobile Company Stats */}
                  <div className="mt-4 p-3 rounded-lg border border-border/30">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                          50+
                        </div>
                        <div className="text-xs text-foreground/60">Projects</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                          100%
                        </div>
                        <div className="text-xs text-foreground/60">Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                          6+
                        </div>
                        <div className="text-xs text-foreground/60">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Testimonials Link */}
        <Link
          href="/testimonials"
          className="flex items-center justify-between py-3 px-2 border-b border-border/30 text-foreground/90 hover:text-foreground transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          <span className="font-medium text-base">Testimonials</span>
          <ArrowRight className="h-4 w-4 opacity-70" />
        </Link>

        {/* Blog Link */}
        <Link
          href="/blog"
          className="flex items-center justify-between py-3 px-2 border-b border-border/30 text-foreground/90 hover:text-foreground transition-colors"
          onClick={() => setActiveDropdown(null)}
        >
          <span className="font-medium text-base">Blog</span>
          <Sparkles className="h-4 w-4 text-gradient-to" />
        </Link>

        {/* Divider */}
        <div className="h-px bg-border/30 my-3" />

        {/* Contact CTA */}
        <div className="p-3 rounded-lg bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 mb-3">
          <div className="text-sm font-medium text-foreground mb-1">
            Ready to start your project?
          </div>
          <p className="text-xs text-foreground/60 mb-3">
            Schedule a free 30-minute consultation
          </p>
          <Link href="/contact" className="block">
            <Button className="w-full bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white border-0 text-sm font-medium">
              Book Free Consultation
            </Button>
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 pb-4">
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="text-xs text-foreground/60">Toggle theme</div>
          </div>
          
          <div className="text-xs text-foreground/60">
            Available 24/7
          </div>
        </div>
      </div>
    </div>
  )
}