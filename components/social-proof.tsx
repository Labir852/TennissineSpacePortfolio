"use client"

import Image from "next/image"
import { motion,easeOut  } from "framer-motion"
import { useState,useEffect } from "react";
import { Code, ShoppingCart, Globe, BarChart, Cpu, Database } from "lucide-react"
export default function SocialProof() {

  const [activeService, setActiveService] = useState(0);


  const companies = [
    { name: "Bangladesh Army", logo: "/clients/bangladesharmylogonobg.png" },
    { name: "Capital Market Stabilization Fund", logo: "/clients/cmsf.png" },
    { name: "Primeasia University", logo: "/clients/Primeasia.png" },
    { name: "Mixora Trading Ltd.", logo: "/clients/mixorabl.png" },
    { name: "DevHome Digital", logo: "/clients/devhome.png" },
  ];

  const stats = [
    { value: "25+", label: "Successful Deployments" },
    { value: "15+", label: "Global Clients" },
    { value: "10+", label: "Core Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];
  
  const services = [
    { 
      title: "Custom Software", 
      icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-blue-500 to-cyan-500",
      description: "Tailored software solutions built specifically for your business needs"
    },
    { 
      title: "ERP Systems", 
      icon: <Database className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-purple-500 to-pink-500",
      description: "Complete business management systems to streamline your operations"
    },
    { 
      title: "E-commerce", 
      icon: <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-green-500 to-emerald-500",
      description: "Online stores that convert visitors into customers and grow your sales"
    },
    { 
      title: "Website Development", 
      icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-orange-500 to-red-500",
      description: "Professional websites that work perfectly on all devices"
    },
    { 
      title: "POS Systems", 
      icon: <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-indigo-500 to-blue-500",
      description: "Point of Sale systems for smooth retail and restaurant operations"
    },
    { 
      title: "SaaS Platforms", 
      icon: <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />, 
      color: "from-rose-500 to-pink-500",
      description: "Cloud-based software accessible from anywhere, anytime"
    },
  ];
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  }


  // Interactive mouse trail
    useEffect(() => {
      
      // Auto-rotate services
      const serviceInterval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 4000);
  
  
      return () => {
        clearInterval(serviceInterval);
      };
    }, []);

  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-background"
      aria-labelledby="social-proof-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-100" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0  bg-repeat opacity-5"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg text-foreground font-medium mb-2">Trusted by industry leaders</p>
          <h2 id="social-proof-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Join the trusted network of our customers</h2>
        </motion.div>

        {/* Company logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-8 md:gap-x-12 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Companies using our platform"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="opacity-60 hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center "
              variants={itemVariants}
            >
              {/* Logo on top */}
              <div className="w-[30px] h-[30px] sm:w-[80px] sm:h-[80px] md:w-[60px] md:h-[60px] flex items-center justify-center ">
                <Image 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  width={60} 
                  height={60} 
                  className="object-contain"
                />
              </div>

              {/* Name below */}
              <p className="text-center font-medium text-sm sm:text-base text-foreground">{company.name}</p>
            </motion.div>
          ))}

        </motion.div>

        {/* Stats */}
        {/* <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Key platform statistics"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center h-full" variants={itemVariants}>
              <div className="relative group h-full">
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"
                  aria-hidden="true"
                ></div>
                <div 
                  className="relative bg-background/70 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-border h-full flex flex-col justify-center"
                  role="presentation"
                >
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to  bg-clip-text text-transparent mb-1 sm:mb-2 truncate"
                    aria-hidden="true"
                  >
                    {stat.value}
                  </div>
                  <p 
                    className="text-foreground/70 text-sm sm:text-base truncate"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
        
            {/* Interactive Services Showcase */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <div className="text-lg text-center text-bold text-foreground/70 mb-3">What We Build:</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveService(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      activeService === index
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                        : "bg-surface/10 backdrop-blur-sm text-foreground/70 border border-border/50"
                    }`}
                  >
                    <span>{service.icon}</span>
                    <span>{service.title}</span>
                  </motion.button>
                ))}
              </div>
              
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-surface/20 backdrop-blur-sm rounded-xl border border-border/30"
              >
                <p className="text-sm sm:text-base text-foreground/80">
                  {services[activeService].description}
                </p>
              </motion.div>
            </motion.div> 
      </div>
    </section>
  )
}
