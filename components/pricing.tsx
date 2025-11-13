"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function EngagementModels() {
  const plans = [
    {
      name: "Project-Based",
      description:
        "Best for clients needing a complete software solution — from discovery to deployment.",
      details: "Fixed-cost projects with defined milestones and deliverables.",
      features: [
        "Full-cycle design & development",
        "Dedicated project manager",
        "Milestone-based billing",
        "Quality assurance & UAT support",
        "Post-launch maintenance option",
      ],
      cta: "Request a Quote",
      highlight: false,
    },
    {
      name: "Dedicated Team",
      description:
        "Ideal for companies looking to scale fast with on-demand technical expertise.",
      details:
        "Hire a full or partial remote team of developers, designers, and QA engineers under your control.",
      features: [
        "Flexible team composition",
        "Direct communication & daily syncs",
        "Long-term engagement discounts",
        "Seamless integration with your workflows",
        "Enterprise-grade security & compliance",
      ],
      cta: "Hire a Team",
      highlight: true,
    },
    {
      name: "Consultation & Support",
      description:
        "Perfect for organizations needing technical guidance, architecture planning, or system audits.",
      details:
        "Expert-led consultation to optimize systems, boost performance, and ensure scalability.",
      features: [
        "Technology stack consultation",
        "System architecture review",
        "Scalability & performance audit",
        "Migration & modernization strategy",
        "Ongoing support retainer available",
      ],
      cta: "Book a Consultation",
      highlight: false,
    },
  ]

  return (
    <section
      id="workmodels"
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden border-t border-border/50"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Engagement Models
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            We adapt to your business needs — from fixed projects to dedicated
            engineering teams. Choose the approach that fits your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                plan.highlight ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-gradient-from to-gradient-to text-foreground text-xs font-bold px-3 py-1 rounded-full z-50">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-surface/5 backdrop-blur-sm border rounded-2xl overflow-hidden ${
                  plan.highlight ? "border-blue-500" : "border-border"
                }`}
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-3">
                    {plan.description}
                  </p>
                  <p className="text-foreground/60 text-sm mb-5 italic">
                    {plan.details}
                  </p>
                <Link href='/contact'>
                  <Button
                    className={`w-full mb-6 py-2 ${
                      plan.highlight
                        ? "bg-gradient-to-r from-gradient-from to-gradient-to text-foreground border-0"
                        : "bg-foreground/10 hover:bg-white/20 text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to flex items-center justify-center">
                          <Check className="h-2.5 w-2.5 text-foreground" />
                        </div>
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-foreground/70 text-sm sm:text-base">
            Need a custom engagement plan?{" "}
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 underline underline-offset-2"
            >
              Talk to our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
