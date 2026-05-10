"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

type ServiceInfo = {
  title: string;
  description: string;
  fullContent: string;
  benefits: string[];
};

const serviceData: Record<string, ServiceInfo> = {
  software: {
    title: "Custom Software Development",
    description: "Tailored solutions for your unique business needs and challenges.",
    fullContent: "We build bespoke software from the ground up, ensuring that every feature and function is perfectly aligned with your business processes. Our approach combines rigorous engineering standards with an agile mindset to deliver software that is scalable, secure, and maintainable.",
    benefits: ["Bespoke feature sets", "Scalable architecture", "Complete ownership", "Full-stack expertise"],
  },
  erp: {
    title: "Enterprise Resource Planning (ERP)",
    description: "Complete business management systems to streamline operations.",
    fullContent: "Our ERP solutions integrate all facets of your operation—including planning, manufacturing, sales, and marketing—into a single database. This eliminates data silos and provides real-time visibility into your business performance.",
    benefits: ["Inventory optimization", "Financial automation", "HR management", "Real-time analytics"],
  },
  ecommerce: {
    title: "E-commerce Solutions",
    description: "High-converting online stores that drive sales and growth.",
    fullContent: "We build high-performance e-commerce platforms designed to convert visitors into loyal customers. From headless commerce to custom shopfronts, we integrate the latest technologies to ensure a seamless shopping experience.",
    benefits: ["Mobile-first design", "Secure payments", "Multi-channel sales", "Customer loyalty tools"],
  },
  pos: {
    title: "POS Solutions",
    description: "Retail and restaurant systems built for speed and reliability.",
    fullContent: "Our Point of Sale systems are designed to keep your business running smoothly, even during peak hours. With features like offline mode, inventory syncing, and staff management, we provide a complete retail toolkit.",
    benefits: ["Offline capabilities", "Real-time syncing", "Staff performance tracking", "Robust reporting"],
  },
  saas: {
    title: "SaaS Platforms",
    description: "Scalable cloud-based software as a service platforms.",
    fullContent: "We help founders and enterprises build multi-tenant SaaS platforms that scale effortlessly. Our infrastructure-first approach ensures that your platform can handle thousands of concurrent users with ease.",
    benefits: ["Multi-tenancy architecture", "Subscription management", "High availability", "API-first design"],
  },
  web: {
    title: "Web Development",
    description: "Fast, responsive, and SEO-optimized premium websites.",
    fullContent: "We create digital experiences that leave a lasting impression. Using modern frameworks like Next.js, we deliver blazing-fast websites that rank well on search engines and provide an exceptional user experience on all devices.",
    benefits: ["Blazing performance", "SEO-optimized", "Responsive design", "Interactive elements"],
  },
  automation: {
    title: "Workflow Automation",
    description: "Intelligent automation to eliminate repetitive tasks.",
    fullContent: "Stop wasting time on manual data entry and repetitive workflows. We use AI, bots, and custom logic to automate your business processes, freeing up your team to focus on high-value work.",
    benefits: ["Error reduction", "Time savings", "Cost efficiency", "Scalable workflows"],
  },
  integration: {
    title: "System Integration",
    description: "Seamlessly connect your disparate systems and APIs.",
    fullContent: "A connected business is an efficient business. We specialize in building secure bridges between your software tools, ensuring that data flows smoothly across your entire technical stack.",
    benefits: ["Data synchronization", "Custom API development", "Webhook support", "Legacy modernization"],
  },
  consulting: {
    title: "Technical Consulting",
    description: "Expert guidance on technology strategy and architecture.",
    fullContent: "Making the right technical decisions early can save you years of pain. We provide senior-level consulting on everything from cloud architecture and security to digital transformation and roadmap planning.",
    benefits: ["Strategic planning", "Security audits", "Architecture reviews", "Scalability roadmap"],
  }
};

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = serviceData[slug] || {
    title: "Service Details",
    description: "Expert software solutions.",
    fullContent: "We provide high-quality software services tailored to your needs. Contact us to learn more about our specific offerings in this area.",
    benefits: ["High quality", "Expert team", "Agile process", "Support included"]
  };

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-foreground/50 mb-8">
          <Link href="/services" className="hover:text-foreground">Services</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              {service.fullContent}
            </p>
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Key Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-surface/5 border border-border/50">
                    <CheckCircle className="h-5 w-5 text-gradient-from shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold rounded-xl text-center hover:shadow-xl transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/process"
                className="px-8 py-4 bg-surface/10 border border-border/50 text-foreground font-bold rounded-xl text-center hover:bg-surface/20 transition-all"
              >
                Learn Our Process
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:sticky lg:top-[120px]"
          >
            <div className="p-8 rounded-3xl bg-surface/5 border border-border/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why work with us?</h3>
              <div className="space-y-6">
                {[
                  { title: "Senior Team", text: "Expert developers leading every project." },
                  { title: "Fast Delivery", text: "Agile iterations for quick launches." },
                  { title: "Transparent Pricing", text: "Clear estimates with no hidden fees." },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-bold text-gradient-from mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground/70">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-border/30">
                <p className="text-sm text-foreground/60 mb-4">Have questions about {service.title}?</p>
                <Link href="/contact" className="flex items-center gap-2 text-sm font-bold text-gradient-from hover:gap-3 transition-all">
                  Talk to an expert <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
