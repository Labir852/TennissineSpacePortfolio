"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    number: 1,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your goals, challenges, and vision. Through technical discovery and research, we identify opportunities to align innovation with measurable business outcomes.",
  },
  {
    number: 2,
    title: "Design & Prototyping",
    description:
      "Ideas take form through clean, user-centered design and interactive prototypes. Every detail is refined through iteration, ensuring clarity and seamless usability before development begins.",
  },
  {
    number: 3,
    title: "Development & Testing",
    description:
      "We build secure, scalable, and high-performance solutions using modern frameworks. Rigorous testing ensures functionality, reliability, and perfection in execution.",
  },
  {
    number: 4,
    title: "Deployment & Integration",
    description:
      "With CI/CD pipelines and efficient deployment strategies, we ensure smooth integration into your ecosystem. Every launch is optimized for performance, stability, and minimal disruption.",
  },
  {
    number: 5,
    title: "Support & Evolution",
    description:
      "After deployment, we continuously monitor, optimize, and evolve your product — ensuring adaptability, performance, and long-term growth.",
  },
];

export default function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="process"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/30 to-gradient-to/30 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Section - Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Our Process – How We Work
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
              Every project we build follows a structured, transparent process
              designed for precision, creativity, and measurable results.
            </p>
          </motion.div>

          {/* Right Section - Timeline */}
          <div className="relative">
            {/* Connecting Gradient Line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gradient-from to-gradient-to opacity-60"></div>

            <ol className="relative flex flex-col gap-10 pl-12">
              {processSteps.map((step, index) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.15, duration: 0.5 },
                    },
                  }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -left-[3.1rem] top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-gradient-from bg-background text-gradient-from font-semibold transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-gradient-from group-hover:to-gradient-to group-hover:text-white">
                    {step.number}
                  </div>

                  {/* Step Card */}
                  <div className="p-6 rounded-xl bg-surface/10 backdrop-blur-sm border border-border/50 hover:bg-surface/20 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/10">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector animation glow */}
                  <div className="absolute -left-[2.1rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gradient-from to-gradient-to opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
