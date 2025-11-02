"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in seconds. No credit card required for the free trial.",
      image: "/images/HowItWorks/step1.webp",
    },
    {
      number: "02",
      title: "Integrate",
      description:
        "Connect your existing tools and services with our one-click integrations.",
      image: "/images/HowItWorks/step2.webp",
    },
    {
      number: "03",
      title: "Customize",
      description:
        "Configure your workspace and workflows to match your unique business needs.",
      image: "/images/HowItWorks/step3.webp",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Go live with your optimized workflows and start seeing results immediately.",
      image: "/images/HowItWorks/step4.webp",
    },
  ];

  // Update selected index when the carousel scrolls
  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  // Initialize onSelect callback once emblaApi is available
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Navigation helper
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple four-step process
          </p>
        </motion.div>

        {/* Desktop view - Grid layout with equal height cards */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:px-[5%] lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-background/50"></div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 text-foreground rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold">
                    {step.number}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-4 flex-grow">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-end text-brand-accent mt-auto">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile view - Using Embla Carousel - Simplified */}
        <div className="sm:hidden">
          {/* Remove overflow-hidden from container and apply to carousel only */}
          <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4"
                >
                  <div className="relative h-[320px]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl blur-sm opacity-70"></div>
                    <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-full flex flex-col">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 639px) 80vw"
                          className="object-cover"
                          priority={index < 2}
                        />
                        <div className="absolute inset-0 bg-background/50"></div>
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-gradient-from to-gradient-to text-foreground rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {step.number}
                        </div>
                      </div>

                      <div className="p-3 flex-grow flex flex-col">
                        <h3 className="text-base font-bold mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs text-foreground/70">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination indicators - Simplified */}
          <div className="flex justify-center mt-8 sm:hidden">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`h-1 rounded-full mx-1 ${
                  selectedIndex === index
                    ? "w-5 bg-gradient-to-r from-gradient-from to-gradient-to"
                    : "w-2 bg-white/20"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
