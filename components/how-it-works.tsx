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
      number: "001",
      title: "10+ Years of Experience",
      description:
        "Our team brings over 10 years of experience, with senior experts leading every project. Hence, you get unmatched expertise, strategic insight, and results aligned with your goals.",
      image: "/images/HowItWorks/step1.webp",
    },
    {
      number: "002",
      title: "Agile Development",
      description:
        "Our agile development process fosters flexibility and collaboration, allowing us to adapt quickly to your changing needs. We deliver high-quality results with consistent progress, keeping you informed.",
      image: "/images/HowItWorks/step2.webp",
    },
    {
      number: "003",
      title: "Security & Compliance",
      description:
        "We develop solutions that are not only secure but also compliant, ensuring your business meets industry standards today and tomorrow. We also protect what matters most to you.",
      image: "/images/HowItWorks/step3.webp",
    },
    {
      number: "004",
      title: "Custom-Built Solutions",
      description:
        "We build custom solutions designed to scale with your business, ensuring lasting success. Our work stands the test of time, with systems that continue to perform seamlessly for years",
      image: "/images/HowItWorks/step4.webp",
    },
    {
      number: "005",
      title: "Support & Maintenance",
      description:
        "We don’t just build and walk away. Our proactive support and maintenance ensure your systems run smoothly, issues are caught early, and updates keep your business ahead of the curve.",
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
//     <section className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden border-t border-border/50">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
//         <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-5"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-8 sm:mb-16"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
//            Our Working Process
//           </h2>
//           <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
//             Simple six-step process
//           </p>
//         </motion.div>

//         {/* Desktop view - single row (6 items) with center-out reveal animation */}
//         {/* <div className="hidden lg:grid lg:grid-cols-6 sm:px-[5%] gap-4 sm:gap-6">
//           {steps.map((step, index) => {
//             const center = (steps.length - 1) / 2 // 2.5 for 6 items
//             const dir = index - center // negative=left, positive=right
//             const spread = Math.abs(dir) * 60 // px shift amount per distance from center
//             const initialX = dir === 0 ? 0 : (dir > 0 ? -spread : spread) // start stacked at center
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: initialX, scale: 0.98 }}
//                 whileInView={{ opacity: 1, x: 0, scale: 1 }}
//                 viewport={{ once: true, amount: 0.4 }}
//                 transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1], delay: Math.abs(dir) * 0.08 }}



//                 className="group relative h-full"
//               >
//               <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-full flex flex-col">
//                 <div className="relative h-40 sm:h-48 overflow-hidden">
//                   <Image
//                     src={step.image}
//                     alt={step.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                     priority={index < 2}
//                   />
//                   <div className="absolute inset-0 bg-background/50"></div>
//                   <div className="absolute top-4 left-4 bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 text-foreground rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold">
//                     {step.number}
//                   </div>
//                 </div>

//                 <div className="p-4 sm:p-6 flex-grow flex flex-col">
//                   <h3 className="text-lg sm:text-xl font-bold mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm sm:text-base text-foreground/70 mb-4 flex-grow">
//                     {step.description}
//                   </p>

//                   {index < steps.length - 1 && (
//                     <div className="hidden lg:flex items-center justify-end text-foreground mt-auto">
//                       <ArrowRight className="w-5 h-5" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//               </motion.div>
//             )
//           })}
//         </div> */}
//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-[5%] max-w-7xl mx-auto">
//   {steps.map((step, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 30, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{
//         duration: 0.8,
//         ease: [0.25, 1, 0.5, 1],
//         delay: index * 0.1,
//       }}
//       className="relative group bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 ease-[0.22,1,0.36,1]"
//     >
//       {/* Large number */}
//       <h1 className="text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gradient-from to-gradient-to mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
//         {step.number}
//       </h1>

//       {/* Divider */}
//       <div className="h-[2px] w-12 bg-gradient-to-r from-gradient-from to-gradient-to mb-4"></div>

//       {/* Title + Description */}
//       <div>
//         <h6 className="text-lg font-semibold mb-2">{step.title}</h6>
//         <p className="text-sm text-foreground/70 leading-relaxed">
//           {step.description}
//         </p>
//       </div>
//     </motion.div>
//   ))}
// </div>

         






//         {/* Mobile view - Using Embla Carousel - Simplified */}
//         <div className="sm:hidden">
//           {/* Remove overflow-hidden from container and apply to carousel only */}
//           <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
//             <div className="flex touch-pan-y">
//               {steps.map((step, index) => (
//                 <div
//                   key={index}
//                   className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4"
//                 >
//                   <div className="relative h-[320px]">
//                     <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl blur-sm opacity-70"></div>
//                     <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden h-full flex flex-col">
//                       <div className="relative h-32 overflow-hidden">
//                         <Image
//                           src={step.image}
//                           alt={step.title}
//                           fill
//                           sizes="(max-width: 639px) 80vw"
//                           className="object-cover"
//                           priority={index < 2}
//                         />
//                         <div className="absolute inset-0 bg-background/50"></div>
//                         <div className="absolute top-3 left-3 bg-gradient-to-r from-gradient-from to-gradient-to text-foreground rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">
//                           {step.number}
//                         </div>
//                       </div>

//                       <div className="p-3 flex-grow flex flex-col">
//                         <h3 className="text-base font-bold mb-1">
//                           {step.title}
//                         </h3>
//                         <p className="text-xs text-foreground/70">
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination indicators - Simplified */}
//           <div className="flex justify-center mt-8 sm:hidden">
//             {steps.map((_, index) => (
//               <button
//                 key={index}
//                 className={`h-1 rounded-full mx-1 ${
//                   selectedIndex === index
//                     ? "w-5 bg-gradient-to-r from-gradient-from to-gradient-to"
//                     : "w-2 bg-foreground/20"
//                 }`}
//                 onClick={() => scrollTo(index)}
//                 aria-label={`Go to step ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
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
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">
        Why Choose Us?
      </h1>
      {/* <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
        Simple six-step process
      </p> */}
    </motion.div>

    {/* Desktop / Tablet view */}
    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-[5%] max-w-7xl mx-auto ">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
            delay: index * 0.1,
          }}
          className="relative group bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col justify-between
             hover:-translate-y-2 hover:-translate-x-1 transition-transform duration-500 ease-[0.22,1,0.36,1]
             hover:shadow-xl hover:shadow-gray-400/20 "
        >
          <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-tr from-gradient-from/25 to-gradient-to/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <h1
            className="text-4xl font-extrabold relative group mb-4"
            style={{
              color: "rgba(0,0,0,0)",
              WebkitTextStroke: "0.8px #1c1c1c",
            }}
          >
            {step.number}
          </h1>

          


          <div className="h-[2px] w-12 bg-gradient-to-r from-gradient-from to-gradient-to mb-4 "></div>

          <div >
            <h6 className="text-lg font-semibold mb-2">{step.title}</h6>
            <p className="text-sm text-foreground/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Mobile view - Embla Carousel */}
    <div className="sm:hidden">
      <div className="overflow-visible -mx-4 px-4" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] min-w-0 ml-4 first:ml-4"
            >
              <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-5 h-[280px] flex flex-col justify-between">
                {/* Large Number */}
                <h1 className="text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gradient-from to-gradient-to mb-3">
                  {step.number}
                </h1>

                {/* Divider */}
                <div className="h-[2px] w-10 bg-gradient-to-r from-gradient-from to-gradient-to mb-3"></div>

                {/* Title + Description */}
                <div>
                  <h6 className="text-base font-semibold mb-2">
                    {step.title}
                  </h6>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination indicators */}
      <div className="flex justify-center mt-8 sm:hidden">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`h-1 rounded-full mx-1 ${
              selectedIndex === index
                ? "w-5 bg-gradient-to-r from-gradient-from to-gradient-to"
                : "w-2 bg-foreground/20"
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
