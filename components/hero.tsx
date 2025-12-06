"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, X, Play, Pause, Volume2, VolumeX, MessageSquare, ChevronRight, MousePointerClick, CheckCircle, Code, ShoppingCart, Globe, BarChart, Cpu, Database } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function ModernHero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
   const { theme } = useTheme();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState<{x: number, y: number} | null>(null);
  const [typingText, setTypingText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = [
    "ERP systems",
    "E-commerce platforms", 
    "POS software",
    "Custom Softwares",
    "SaaS Solutions",
    "Websites",
    "Management Systems",
    "Mobile Applications",
  ];

  const flags = [
    { name: "Bangladesh", logo: "https://flagcdn.com/48x36/bd.png" },
    { name: "USA", logo: "https://flagcdn.com/48x36/us.png" },
    { name: "Canada", logo: "https://flagcdn.com/48x36/ca.png" },
    { name: "UK", logo: "https://flagcdn.com/48x36/gb.png" },
    { name: "Germany", logo: "https://flagcdn.com/48x36/de.png" },
    { name: "Australia", logo: "https://flagcdn.com/48x36/au.png" },
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

  
  // Typing effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
      if (typingText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
        setTypingSpeed(50);
      } else {
        const timer = setTimeout(() => {
          setTypingText(currentWord.substring(0, typingText.length + 1));
          setTypingSpeed(100);
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    } else {
      if (typingText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(100);
      } else {
        const timer = setTimeout(() => {
          setTypingText(currentWord.substring(0, typingText.length - 1));
          setTypingSpeed(50);
        }, typingSpeed);
        return () => clearTimeout(timer);
      }
    }
  }, [typingText, isDeleting, currentWordIndex]);

  // Interactive mouse trail
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Parallax effect for desktop
      if (window.innerWidth >= 768) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) / 50;
        const moveY = (clientY - innerHeight / 2) / 50;
        
        parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleClick = (e: MouseEvent) => {
      setClickEffect({ x: e.clientX, y: e.clientY });
      setTimeout(() => setClickEffect(null), 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    
    // Auto-rotate services
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    // Auto-hide welcome message
    const welcomeTimer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      clearInterval(serviceInterval);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center  pt-16 sm:pt-20 overflow-hidden bg-background">
      
      {/* Interactive mouse trail */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 backdrop-blur-sm"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 100,
            damping: 15
          }}
        />
        {clickEffect && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            className="absolute w-4 h-4 rounded-full bg-gradient-from/30"
            style={{ left: clickEffect.x - 8, top: clickEffect.y - 8 }}
          />
        )}
      </div>

       {/* Responsive background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile-optimized gradients */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] opacity-70"></div>
        
        {/* Grid pattern - responsive opacity */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right,  '#ffffff'  1px, transparent 1px),
                              linear-gradient(to bottom, '#ffffff'  1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Responsive particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] sm:w-[2px] sm:h-[2px] rounded-full bg-gradient-from/40"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `-${Math.random() * 50}px`, `-${Math.random() * 100}px`],
              x: [null, `${Math.random() * 30 - 15}px`, `${Math.random() * 30 - 15}px`],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-from/30"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `-${Math.random() * 100}px`, `-${Math.random() * 200}px`],
              x: [null, `${Math.random() * 50 - 25}px`, `${Math.random() * 50 - 25}px`],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Interactive gradient orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gradient-from/20 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-gradient-to/20 blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Welcome Interactive Message */}
      {/* <AnimatePresence>
        {showWelcomeMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-4 right-4 left-4 sm:left-auto sm:w-80 z-50"
          >
            <div className="bg-surface/80 backdrop-blur-lg border border-border rounded-xl p-4 shadow-2xl shadow-black/20">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-gradient-from" />
                  <h3 className="font-semibold">Welcome to Tennissine!</h3>
                </div>
                <button
                  onClick={() => setShowWelcomeMessage(false)}
                  className="p-1 hover:bg-accent rounded-full transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                We build custom software solutions for your business. <br />
                <span className="text-xs text-foreground/60">Click to explore our services!</span>
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gradient-from to-gradient-to"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5 }}
                  />
                </div>
                <span className="text-xs text-foreground/60">5s</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-0">
          
          {/* Hero content with interactive services */}
          <div className="flex-1 text-center lg:text-left">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm border border-border/70 cursor-pointer"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-brand-accent" />
              <span className="font-medium text-foreground">Professional Software Services</span>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 sm:mt-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block">Custom Software</span>
                <motion.span
                  className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent inline-block"
                  animate={{
                    backgroundPosition: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                >
                  Solutions for Your Business
                </motion.span>
              </h1>
            </motion.div>

            {/* Clear Value Proposition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              {/* <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-4 max-w-xl mx-auto lg:mx-0">
                We build <span className="font-semibold text-gradient-from">ERP systems</span>,{" "}
                <span className="font-semibold text-gradient-to">E-commerce platforms</span>,{" "}
                <span className="font-semibold text-gradient-from">POS software</span>, and{" "}
                <span className="font-semibold text-gradient-to">custom business applications</span> that actually work.
              </p> */}
              
                 {/* Google-style Typing Animation */}
            
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-2 sm:mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We build{" "}
                <span className="font-semibold text-gradient-from inline-flex min-h-[1.5em] items-center">
                  <span className="relative">
                    {typingText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="absolute right-[-2px] top-0 h-full w-[2px] bg-gradient-from"
                    />
                  </span>
                </span>{" "}
                that actually work.
              </p>
              <div className="flex flex-wrap gap-3 mb-4 justify-center lg:justify-start">
                {[
                  // "No Complicated Jargon",
                  "Fixed Project Timelines",
                  "Ongoing Support",
                  "Scalable Solutions"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href='/contact'>
                  <Button className="group relative overflow-hidden bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-black/10">
                    <span className="relative z-10 flex items-center">
                      Get Free Consultation
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </motion.div>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gradient-to to-gradient-from opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-border text-foreground hover:bg-accent h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base group"
                  onClick={() => {
                    const demoSection = document.getElementById('features');
                    if (demoSection) {
                      demoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    View Our Work
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>


            {/* Client Success Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 bg-surface/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-border/70 shadow-lg">
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <Globe className="h-4 w-4 text-gradient-from" />
                    <span className="text-xs sm:text-sm text-foreground/70">Serving Businesses Worldwide</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                          50+
                        </span>
                        <span className="text-xs text-foreground/70">Projects Delivered</span>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-6 bg-border"></div>
                    
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                          100%
                        </span>
                        <span className="text-xs text-foreground/70">Client Satisfaction</span>
                      </div>
                    </div>
                    
                    <div className="hidden sm:block w-px h-6 bg-border"></div>
                    
                    <div className="flex items-center">
                      <div className="text-xs sm:text-sm mr-3">
                        <span className="text-foreground/70">Across</span>
                        <br />
                        <span className="font-bold">6 Countries</span>
                      </div>
                      <div className="flex -space-x-2">
                        {flags.slice(0, 4).map((flag, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="w-8 h-8 rounded-full overflow-hidden border-2 border-background"
                          >
                            <Image
                              src={flag.logo}
                              alt={flag.name}
                              width={32}
                              height={32}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Services Showcase */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 sm:mb-8"
            >
              <div className="text-sm text-foreground/70 mb-3">What We Build:</div>
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
            </motion.div> */}


          </div>

          {/* Interactive Demo Showcase */}
          <div className="flex-1 relative items-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-full mx-auto mt-6" >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative group">
                {/* Interactive video controls */}
                {/* <div className="absolute top-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleVideoPlayback}
                    className="bg-surface/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-surface"
                  >
                    {isVideoPlaying ? (
                      <Pause className="h-3.5 w-3.5" />
                    ) : (
                      <Play className="h-3.5 w-3.5" />
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="bg-surface/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-surface"
                  >
                    {isMuted ? (
                      <VolumeX className="h-3.5 w-3.5" />
                    ) : (
                      <Volume2 className="h-3.5 w-3.5" />
                    )}
                  </motion.button>
                </div> */}

                <div
                  ref={parallaxRef}
                  className="relative bg-surface/20 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl"
                >
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full rounded-xl cursor-pointer"
                    // onClick={toggleVideoPlayback}
                  >
                    <source src="/videos/motionTennissine2.webm" type="video/webm" />
                  </video>
                  
                  {/* Interactive overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  {/* Live Demo Indicator */}
                  {/* <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md rounded-xl p-3 shadow-lg cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 rounded-full bg-green-500"
                      />
                      <span className="text-sm font-medium">Live Demo</span>
                    </div>
                  </motion.div> */}

                  {/* Click hint */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-4 right-4 bg-surface/50 backdrop-blur-sm rounded-full p-2"
                  >
                    <MousePointerClick className="h-4 w-4" />
                  </motion.div>

                  {/* Project Info */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute bottom-4 left-4 bg-background/20 backdrop-blur-md rounded-xl p-3 shadow-lg max-w-[60%]"
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        <p className="text-xs text-foreground/20">Recent Project</p>
                        <p className="text-sm font-medium">POS Software</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                              initial={{ width: "0%" }}
                              animate={{ width: "85%" }}
                              transition={{ duration: 2, delay: 1 }}
                            />
                          </div>
                          <span className="text-xs text-foreground/70">95%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating service badges */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-5 -right-5 w-10 h-10 sm:w-20 sm:h-20 border border-gradient-from/50 rounded-full backdrop-blur-sm hidden sm:flex items-center justify-center"
              >
                <Database className="h-4 w-4 sm:h-6 sm:w-6 text-gradient-from" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute -bottom-3 -left-3 w-6 h-6 sm:w-12 sm:h-12 border border-gradient-to/50 rounded-full backdrop-blur-sm hidden sm:flex items-center justify-center"
              >
                <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 text-gradient-to" />
              </motion.div>
            </motion.div>

            {/* Quick Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-2 mt-6"
            >
              {[
                { label: "Fast Delivery", value: "2-8 Weeks" },
                { label: "Support", value: "24/7" },
                { label: "Cost Effective", value: "✓" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-surface/20 backdrop-blur-sm rounded-lg p-3 text-center border border-border/30"
                >
                  <div className="text-xs text-foreground/70 mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-gradient-from">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
            
          </div>
        </div>
      </div>

      

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block" 
      >
        <div className="flex flex-col items-center ">
          {/* <span className="text-xs text-foreground/60 mb-2">See our work below</span> */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-gradient-from rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}