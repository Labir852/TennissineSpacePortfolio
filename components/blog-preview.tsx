"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPreview() {
  const articles = [
    {
      title: "Integrating AI into Legacy ERP Systems",
      excerpt: "A breakdown of how we help enterprises modernize outdated ERP architectures using AI-driven automation layers.",
      image: "https://images.unsplash.com/photo-1760931969401-9bd6ee902798?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
      date: "September 15, 2025",
      readTime: "6 min read",
      category: "AI & Automation",
    },
    {
      title: "Designing Secure and Scalable POS Systems",
      excerpt: "Behind the scenes of how we build cloud-native POS systems with enterprise-grade security and real-time performance.",
      image: "https://images.unsplash.com/photo-1728044849280-10a1a75cff83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      date: "August 22, 2025",
      readTime: "5 min read",
      category: "Engineering",
    },
    {
      title: "How Minimalist Design Improves SaaS Usability",
      excerpt: "Exploring the intersection of design minimalism, speed, and functional clarity for next-gen business software.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=2000",
      date: "July 10, 2025",
      readTime: "4 min read",
      category: "UX & Product Design",
    },
  ]
  

  return (
    <section className="py-5 sm:py-20 md:py-24 bg-background relative overflow-hidden" aria-labelledby="blog-heading">
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12"
        >
          <div>
            <h2 id="blog-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Latest Insights</h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
              Expert advice on productivity and technology
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button 
              variant="outline" 
              className="border-border text-foreground hover:bg-accent text-sm sm:text-base focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:outline-none"
              aria-label="View all blog articles"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-surface/5 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full flex flex-col hover:border-border transition-all">
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={`Featured image for article: ${article.title}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div 
                    className="absolute top-3 left-3 bg-background/60 backdrop-blur-md text-foreground text-xs font-medium px-2.5 py-1 rounded-full"
                    aria-label={`Category: ${article.category}`}
                  >
                    {article.category}
                  </div>
                </div>
                
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-foreground/60 text-xs sm:text-sm mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1" aria-label={`Published date: ${article.date}`}>
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1" aria-label={`Reading time: ${article.readTime}`}>
                      <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-foreground/70 text-sm sm:text-base mb-4 flex-1 line-clamp-3">{article.excerpt}</p>
                  
                  <Button 
                    variant="link" 
                    className="p-0 text-foreground hover:opacity-80 justify-start text-sm sm:text-base focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    aria-label={`Read more about ${article.title}`}
                  >
                    Read More
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
