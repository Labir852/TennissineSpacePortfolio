"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function TestimonialsPageClient() {
  const testimonials = [
    {
      quote: "Tennissine's Space built our complete ERP system — integrating HR, accounts & inventory into one platform. As well they have delivered us with their excellent POS software to run our battalion store. Their execution speed and attention to detail were outstanding.",
      name: "Major Mamun",
      role: "Project Director",
      company: "Bangladesh Army",
      image: "/clients/clients photo/mamun.jpg",
      rating: 5,
    },
    {
      quote: "Our eCommerce platform, developed by Tennissine's Space, has been running flawlessly. Their technical capability and post-deployment support exceeded expectations.",
      name: "Shahina Akter Shoshi",
      role: "Founder",
      company: "Mixora Trading Ltd.",
      image: "/clients/clients photo/shahina.jpg",
      rating: 5,
    },
    {
      quote: "They designed and implemented our institutional website & ERP integrating University Management System, Online admission and online payments automated with a clean, modern interface and a powerful admin dashboard. The process was smooth from start to finish.",
      name: "Tariful Islam Akash",
      role: "Head of IT",
      company: "Primeasia University",
      image: "/clients/clients photo/akash.jpg",
      rating: 5,
    },
    {
      quote: "Our digital marketing website and Our POS system went live in multiple retail locations with zero downtime. Tennissine's Space's technical team handled everything — from deployment to training — flawlessly.",
      name: "Mr. Pranta Paul",
      role: "Founder",
      company: "DevHome Digital",
      image: "/clients/clients photo/pranta.jpg",
      rating: 5,
    },
    {
      quote: "Tennissine's Space developed our Claim Settlement portal and helped automate several manual workflows. The system has improved our reporting efficiency dramatically.",
      name: "Mr. Md. Abdul Halim",
      role: "Assistant Director",
      company: "Capital Market Stabilization Fund",
      image: "/clients/clients photo/halim.jpg",
      rating: 5,
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
            Client Success Stories
          </motion.h1>
          <p className="text-lg md:text-xl text-foreground/70">
            Don't just take our word for it. Here's what our partners have to say about working with Tennissine's Space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-surface/5 border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-8 h-12 w-12 text-gradient-from/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gradient-from">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-foreground/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
