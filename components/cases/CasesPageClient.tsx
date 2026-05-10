"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CasesPageClient() {
  const cases = [
    {
      title: "OmniPOS: Next-Gen Retail Management",
      client: "Global Retail Solutions",
      description: "A comprehensive POS and inventory management system that works perfectly even in low-connectivity areas.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000",
      tags: ["Next.js", "PostgreSQL", "PWA"],
      results: "45% increase in checkout speed",
    },
    {
      title: "FlowState ERP: Logistics Optimization",
      client: "FastLane Logistics",
      description: "Custom ERP solution for real-time fleet tracking, automated invoicing, and multi-warehouse management.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000",
      tags: [".NET Core", "React", "AWS"],
      results: "30% reduction in operational costs",
    },
    {
      title: "HealthCore: Secure Patient Portal",
      client: "City Health Network",
      description: "HIPAA-compliant patient management system with encrypted messaging and real-time appointment booking.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000",
      tags: ["React Native", "Node.js", "Azure"],
      results: "98% patient satisfaction rate",
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
            Our Work in Action
          </motion.h1>
          <p className="text-lg md:text-xl text-foreground/70">
            A selection of projects where we've helped businesses achieve their digital transformation goals.
          </p>
        </div>

        <div className="space-y-20">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image src={project.image} alt={project.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gradient-from uppercase tracking-widest">{project.client}</p>
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-surface/10 border border-border/50 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 border border-gradient-from/20">
                  <p className="text-sm font-semibold mb-1 text-gradient-from uppercase">Key Result</p>
                  <p className="text-xl font-bold">{project.results}</p>
                </div>
                <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all text-foreground/80 hover:text-foreground">
                  View Full Case Study <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
