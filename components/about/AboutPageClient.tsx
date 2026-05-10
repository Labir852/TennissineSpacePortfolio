"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket, Shield, Cpu, Globe, Zap, Code } from "lucide-react";
import Image from "next/image";

export default function AboutPageClient() {
  const stats = [
    { label: "Projects Completed", value: "50+", icon: <Rocket className="h-5 w-5" /> },
    { label: "Happy Clients", value: "40+", icon: <Users className="h-5 w-5" /> },
    { label: "Years Experience", value: "5+", icon: <Zap className="h-5 w-5" /> },
    { label: "Countries Served", value: "6+", icon: <Globe className="h-5 w-5" /> },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We don't just write code; we build robust, scalable systems that stand the test of time.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve, utilizing the latest technologies to give you a competitive edge.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Client-Centric",
      description: "Your success is our success. We work as partners, not just vendors.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Expertise",
      description: "Our team consists of senior developers who are experts in their respective fields.",
      icon: <Code className="h-6 w-6" />,
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-background pt-[100px] pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent"
          >
            Empowering Businesses Through Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-foreground/70 leading-relaxed"
          >
            At Tennissine's Space, we believe that software should be a driver of growth, not a bottleneck. 
            We are a team of passionate engineers and designers dedicated to building custom solutions 
            that solve real-world problems.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-surface/5 border border-border/50 backdrop-blur-sm text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 text-gradient-from mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/60 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Story / Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Founded on the principles of excellence and innovation, Tennissine's Space started with a simple 
                mission: to provide high-quality software services that help businesses scale efficiently.
              </p>
              <p>
                Over the years, we've grown into a full-service software consultancy, working with clients 
                from around the globe across various industries—from retail and logistics to fintech and healthcare.
              </p>
              <p>
                Our expertise spans the entire software development lifecycle, ensuring that every project 
                is handled with the same level of care and professional rigor.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden border border-border shadow-2xl shadow-black/20"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
              alt="Team working together"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do and how we work with our partners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-surface/5 border border-border/50 hover:bg-surface/10 transition-colors"
              >
                <div className="mb-6 p-4 inline-block rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 border border-border/50 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to start your journey with us?</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build the software solutions your business needs to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-gradient-from to-gradient-to text-white font-bold rounded-xl hover:shadow-xl transition-all"
            >
              Contact Us Today
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
