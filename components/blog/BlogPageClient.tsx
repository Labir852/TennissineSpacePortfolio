"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient() {
  const posts = [
    {
      title: "Integrating AI Agents into Legacy ERP Systems",
      excerpt: "A breakdown of how we help enterprises modernize outdated ERP architectures using autonomous AI-driven automation layers.",
      image: "https://images.unsplash.com/photo-1760931969401-9bd6ee902798?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
      date: "May 10, 2026",
      readTime: "6 min read",
      category: "AI & Automation",
    },
    {
      title: "Designing Edge-Ready Secure POS Systems",
      excerpt: "Behind the scenes of how we build cloud-native POS systems with enterprise-grade security and real-time performance for 2026 retail standards.",
      image: "https://images.unsplash.com/photo-1728044849280-10a1a75cff83?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      date: "Apr 28, 2026",
      readTime: "5 min read",
      category: "Engineering",
    },
    {
      title: "The Future of SaaS: Hyper-Personalized UX",
      excerpt: "Exploring the intersection of design minimalism, speed, and functional clarity for the next generation of business software in the AI era.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000",
      date: "Mar 15, 2026",
      readTime: "4 min read",
      category: "UX & Product Design",
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent"
          >
            Blog & Insights
          </motion.h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Expert advice, technical deep-dives, and industry insights from the team at Tennissine's Space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full rounded-3xl bg-surface/5 border border-border/50 overflow-hidden hover:border-gradient-from/30 transition-all"
            >
              <div className="relative h-48 sm:h-56">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-gradient-from transition-colors line-clamp-2">{post.title}</h2>
                <p className="text-foreground/70 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                <Link href="#" className="mt-auto flex items-center gap-2 text-sm font-bold text-gradient-from group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
