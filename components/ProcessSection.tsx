"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    number: 1,
    title: "Discovery & Strategy",
    tagline: "Define the mission and metrics",
    description:
      "We begin every engagement with immersive strategy workshops, audience research, and competitor mapping to find the sharpest opportunities for impact.",
    highlights: [
      "Vision alignment workshops",
      "Technical audits & roadmaps",
      "Success metric blueprint",
    ],
  },
  {
    number: 2,
    title: "Design & Prototyping",
    tagline: "Craft purposeful experiences",
    description:
      "Evidence-backed UX, motion systems, and micro-interactions bring your concept to life. We validate flows quickly with interactive prototypes.",
    highlights: [
      "Journey mapping & wireframes",
      "High-fidelity UI systems",
      "Prototype validation loops",
    ],
  },
  {
    number: 3,
    title: "Development & Testing",
    tagline: "Engineer with confidence",
    description:
      "Full-stack squads ship performant, secure builds with modern frameworks, automation, and exhaustive testing at every checkpoint.",
    highlights: [
      "Scalable front & back-end",
      "Automation & QA pipelines",
      "Security & performance reviews",
    ],
  },
  {
    number: 4,
    title: "Deployment & Integration",
    tagline: "Launch without turbulence",
    description:
      "Orchestrated releases, CI/CD pipelines, and observability ensure flawless go-lives that plug seamlessly into your existing ecosystem.",
    highlights: [
      "CI/CD & infrastructure as code",
      "Progressive rollout strategy",
      "Real-time observability",
    ],
  },
  {
    number: 5,
    title: "Support & Evolution",
    tagline: "Scale and iterate intelligently",
    description:
      "Post-launch, we keep shipping improvements—monitoring health, optimizing experiences, and unlocking new revenue moments.",
    highlights: [
      "Growth experiments",
      "24/7 monitoring & SLAs",
      "Product evolution roadmap",
    ],
  },
];

export default function ProcessSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];
  const progress = ((activeIndex + 1) / processSteps.length) * 100;

  const goToStep = (direction: "prev" | "next") => {
    setActiveIndex((prev) => {
      if (direction === "prev") {
        return prev === 0 ? processSteps.length - 1 : prev - 1;
      }
      return prev === processSteps.length - 1 ? 0 : prev + 1;
    });
  };

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.08),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[380px_minmax(0,1fr)] items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gradient-from/40 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 px-4 py-1 text-sm font-medium text-gradient-from">
              Signature Framework · 5 Stages
            </span>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                Where precision meets bold delivery
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Tennissine's Space blends strategic insight, world-class design, and engineering rigor.
                Glide through every stage with the clarity of a proven operating model.
              </p>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5/20 px-6 py-6 backdrop-blur-md">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                    Current Stage
                  </p>
                  <p className="text-2xl font-semibold text-foreground mt-1">
                    {activeStep.title}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-foreground/60 mb-2">
                    <span>Progress</span>
                    <span>
                      {activeIndex + 1}/{processSteps.length}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-foreground/10 overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 120, damping: 20 }}
                      className="h-full rounded-full bg-gradient-to-r from-gradient-from to-gradient-to"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goToStep("prev")}
                    className="flex-1 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3 text-sm font-medium text-foreground hover:border-gradient-from/60 hover:text-gradient-from transition"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => goToStep("next")}
                    className="flex-1 rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-gradient-from/30"
                  >
                    Next stage
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="relative rounded-[32px] border border-white/5 bg-white/5/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-lg">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-r from-gradient-from/20 to-gradient-to/20 blur-3xl"></div>
            <div className="relative space-y-8">
              <div className="flex flex-wrap gap-4">
                {processSteps.map((step, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 ${
                        isActive
                          ? "border-transparent bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-lg shadow-gradient-from/30"
                          : "border-white/10 bg-white/5 text-foreground/70 hover:border-gradient-from/40"
                      }`}
                    >
                      <span className="text-xs font-semibold tracking-[0.3em] uppercase">
                        0{step.number}
                      </span>
                      <span className="font-medium">{step.title}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-[28px] border border-white/10 bg-background/40 p-8 shadow-xl"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.3em] text-foreground/50">
                    <span className="rounded-full border border-gradient-from/50 bg-gradient-to-r from-gradient-from/10 to-gradient-to/10 px-4 py-1 text-gradient-from">
                      Step 0{activeStep.number}
                    </span>
                    <span className="h-[1px] flex-1 bg-foreground/20"></span>
                    <span className="text-foreground/60">{activeStep.tagline}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-foreground">
                    {activeStep.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/70">
                    {activeStep.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeStep.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-gradient-from/30 bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 px-4 py-2 text-sm text-foreground/80"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
