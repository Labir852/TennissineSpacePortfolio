"use client";

import { motion } from "framer-motion";
import { Code, Database, ShoppingBag, CreditCard, Cloud, Globe, Zap, Cpu, Users, ChevronRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesPageClient() {
  const services = [
    {
      category: "Business Solutions",
      items: [
        { 
          label: "Custom Software", 
          href: "/services/software",
          icon: <Code className="h-8 w-8" />,
          description: "Tailored software solutions built specifically for your unique business needs and challenges.",
          features: ["Scalable architecture", "Enterprise-grade security", "Comprehensive documentation"]
        },
        { 
          label: "ERP Systems", 
          href: "/services/erp",
          icon: <Database className="h-8 w-8" />,
          description: "Complete business management systems to streamline operations across your entire organization.",
          features: ["Inventory management", "Accounting & Finance", "Human Resources"]
        },
        { 
          label: "E-commerce", 
          href: "/services/ecommerce",
          icon: <ShoppingBag className="h-8 w-8" />,
          description: "High-converting online stores built on modern platforms with seamless payment and logistics integration.",
          features: ["Payment gateway integration", "Inventory tracking", "Customer analytics"]
        },
      ]
    },
    {
      category: "Technical Services",
      items: [
        { 
          label: "POS Solutions", 
          href: "/services/pos",
          icon: <CreditCard className="h-8 w-8" />,
          description: "Robust point-of-sale systems for retail and restaurant operations with real-time reporting.",
          features: ["Offline functionality", "Multi-store support", "Staff management"]
        },
        { 
          label: "SaaS Platforms", 
          href: "/services/saas",
          icon: <Cloud className="h-8 w-8" />,
          description: "Scalable cloud-based software as a service platforms designed for high availability and multi-tenancy.",
          features: ["Subscription billing", "User management", "API infrastructure"]
        },
        { 
          label: "Web Development", 
          href: "/services/web",
          icon: <Globe className="h-8 w-8" />,
          description: "Fast, responsive, and SEO-optimized websites that provide a premium user experience on all devices.",
          features: ["Modern frameworks", "Performance optimization", "CMS integration"]
        },
      ]
    },
    {
      category: "Specialized Services",
      items: [
        { 
          label: "Automation", 
          href: "/services/automation",
          icon: <Zap className="h-8 w-8" />,
          description: "Intelligent workflow automation using AI and bots to eliminate repetitive tasks and errors.",
          features: ["Business logic automation", "AI-driven insights", "Data processing"]
        },
        { 
          label: "System Integration", 
          href: "/services/integration",
          icon: <Cpu className="h-8 w-8" />,
          description: "Seamlessly connect your disparate systems to ensure data flow and operational efficiency.",
          features: ["Custom API development", "Webhook integration", "Legacy system modernization"]
        },
        { 
          label: "Technical Consulting", 
          href: "/services/consulting",
          icon: <Users className="h-8 w-8" />,
          description: "Expert guidance on technology strategy, architecture, and digital transformation initiatives.",
          features: ["Technology audit", "Scalability planning", "Security assessment"]
        },
      ]
    }
  ];

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent"
          >
            Our Expertise & Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70"
          >
            We provide a comprehensive suite of software services designed to help 
            modern businesses grow, scale, and innovate in a digital-first world.
          </motion.p>
        </div>

        {/* Services Categories */}
        <div className="space-y-24">
          {services.map((category, catIndex) => (
            <div key={category.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="h-px flex-1 bg-border/50"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 px-4 whitespace-nowrap">
                  {category.category}
                </h2>
                <div className="h-px flex-1 bg-border/50"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col h-full p-8 rounded-3xl bg-surface/5 border border-border/50 hover:bg-surface/10 hover:border-gradient-from/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="mb-6 p-4 inline-block rounded-2xl bg-gradient-to-br from-gradient-from to-gradient-to text-white shadow-lg shadow-gradient-from/20">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient-from transition-colors">
                      {service.label}
                    </h3>
                    
                    <p className="text-foreground/70 mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle className="h-4 w-4 text-gradient-from" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/contact"
                      className="mt-auto flex items-center gap-2 text-sm font-bold text-gradient-from hover:gap-3 transition-all"
                    >
                      Learn More / Request Quote
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-surface/10 to-surface/5 border border-border/50 overflow-hidden relative"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-gradient-from/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't see what you're looking for?</h2>
              <p className="text-lg text-foreground/70">
                We specialize in custom challenges. Reach out to discuss your unique project requirements and how we can bring it to life.
              </p>
            </div>
            <Link 
              href="/contact"
              className="px-10 py-5 bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-gradient-from/20 transition-all scale-100 hover:scale-105 active:scale-95"
            >
              Get Custom Proposal
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
