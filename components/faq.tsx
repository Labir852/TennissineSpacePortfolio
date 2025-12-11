"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, MessageSquare, Zap, Sparkles, HelpCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
    {
      id: 1,
      question: "What type of software do you build?",
      answer: "We build custom software including ERP systems, POS solutions, e-commerce platforms, websites, and SaaS applications tailored to your business needs.",
      category: "Services",
      icon: <Zap className="h-4 w-4" />
    },
    {
      id: 2,
      question: "How long does a project take?",
      answer: "Simple websites: 2-4 weeks, E-commerce stores: 4-8 weeks, Custom software/ERP: 8-16 weeks. We provide exact timelines after understanding your requirements.",
      category: "Timeline",
      icon: <Sparkles className="h-4 w-4" />
    },
    {
      id: 3,
      question: "What's your development process?",
      answer: "We follow 5 simple steps: 1) Plan & Discover 2) Design & Prototype 3) Build & Test 4) Launch & Deploy 5) Support & Improve.",
      category: "Process",
      icon: <HelpCircle className="h-4 w-4" />
    },
    {
      id: 4,
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer 24/7 support packages, regular updates, bug fixes, and performance monitoring. Most clients choose our ongoing support plan.",
      category: "Support",
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      id: 5,
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems, APIs, and third-party services. We ensure seamless data flow between all your platforms.",
      category: "Integration",
      icon: <Zap className="h-4 w-4" />
    },
    {
      id: 6,
      question: "How much does custom software cost?",
      answer: "Costs vary based on complexity. We offer transparent pricing: Small projects start at $5K, Medium projects $15K-$50K, Enterprise solutions $50K+. Get a free quote.",
      category: "Pricing",
      icon: <Sparkles className="h-4 w-4" />
    },
    {
      id: 7,
      question: "What technologies do you use?",
      answer: "Modern technologies including React, Next.js, Node.js, .NET, Python, PostgreSQL, MongoDB, and cloud platforms like AWS and Azure.",
      category: "Technology",
      icon: <HelpCircle className="h-4 w-4" />
    },
    {
      id: 8,
      question: "Do you provide training?",
      answer: "Yes! We provide complete training for your team, detailed documentation, and ongoing support to ensure your team feels confident using the software.",
      category: "Support",
      icon: <MessageSquare className="h-4 w-4" />
    }
  ]

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)

  

  const categories = ["All", "Services", "Timeline", "Process", "Support", "Integration", "Pricing", "Technology"]

  // Filter FAQs based on search and category
  useEffect(() => {
    let filtered = faqs
    
    if (searchQuery) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    setFilteredFaqs(filtered)
  }, [searchQuery])

  const toggleFaq = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <section id="faq" className="py-16 sm:py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gradient-from/5 via-background to-gradient-to/5"></div>
      {/* Minimal Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-4 w-4 text-gradient-from" />
            <span className="text-sm font-medium">Common Questions</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Quick answers to common questions about our software services
          </p>
        </motion.div>

        {/* Interactive Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 bg-surface/5 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-from/30"
            />
          </div>
          
          {/* Search results indicator */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-foreground/60"
            >
              Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'answer' : 'answers'} for "{searchQuery}"
            </motion.div>
          )}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div
                onClick={() => toggleFaq(faq.id)}
                className="group cursor-pointer bg-surface/5 backdrop-blur-sm border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gradient-from/50"
              >
                {/* Question */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-surface/10">
                      {faq.icon}
                    </div>
                    <h3 className="font-medium text-sm sm:text-base">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: activeFaq === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-foreground/50 group-hover:text-foreground"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {activeFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0">
                        <div className="pt-4 border-t border-border/30">
                          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          
                          {/* Category tag */}
                          <div className="mt-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded bg-surface/20 text-foreground/60">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {searchQuery && filteredFaqs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HelpCircle className="h-12 w-12 text-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No matching answers found</h3>
            <p className="text-foreground/70 mb-4">
              Try different keywords or ask us directly
            </p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white">
                Ask Your Question
              </Button>
            </Link>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-surface/5 backdrop-blur-sm border border-border rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
            <p className="text-foreground/70 mb-4 text-sm">
              We're here to help. Get in touch with our team for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Contact Support
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Button>
              </Link>
              
              <Link href="/process" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-border hover:bg-accent">
                  View Our Process
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-foreground/70">
            Quick links:{" "}
            <Link href="/services" className="text-gradient-from hover:underline">
              Services
            </Link>
            {" • "}
            <Link href="/process" className="text-gradient-from hover:underline">
              Process
            </Link>
            {" • "}
            <Link href="/contact" className="text-gradient-from hover:underline">
              Contact
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}