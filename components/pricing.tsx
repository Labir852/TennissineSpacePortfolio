"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ModernPricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      price: annual ? 29 : 39,
      features: [
        "5 Team Members",
        "10GB Storage",
        "Basic Analytics",
        "Email Support",
        "2 Projects",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: annual ? 79 : 99,
      features: [
        "15 Team Members",
        "50GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Integrations",
        "Unlimited Projects",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: annual ? 149 : 199,
      features: [
        "Unlimited Team Members",
        "500GB Storage",
        "Enterprise Analytics",
        "24/7 Dedicated Support",
        "Advanced Security",
        "Custom Development",
        "Onboarding Assistance",
        "SLA Guarantee",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden border-t border-border/50"
      aria-labelledby="pricing-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include
            our core features.
          </p>

          <div className="relative flex items-center justify-center mt-6 sm:mt-8">
            <fieldset className="bg-surface/5 backdrop-blur-sm border border-border p-1 rounded-full">
              <legend className="sr-only">Billing Frequency</legend>
              <div className="relative flex">
                <button
                  onClick={() => setAnnual(true)}
                  className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors  focus:outline-none focus:ring-2 focus:ring-primary ${
                    annual ? "text-foreground bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90" : "text-foreground/70"
                  }`}
                  aria-pressed={annual}
                  aria-label="Annual billing"
                >
                  Annual
                </button>
                <button
                  onClick={() => setAnnual(false)}
                  className={`relative z-10 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    !annual ? "text-foreground bg-gradient-to-r from-gradient-from to-gradient-to " : "text-foreground/70"
                  }`}
                  aria-pressed={!annual}
                  aria-label="Monthly billing"
                >
                  Monthly
                </button>
                <div
                  className={`absolute top-1 left-1 ${
                    annual ? "w-[calc(50%-12px)]" : "w-[calc(50%-3px)]"
                  } h-[calc(100%-8px)] bg-gradient-to-r from-gradient-from to-gradient-to rounded-full transition-transform duration-300 ${
                    annual
                      ? "transform translate-x-0"
                      : "transform translate-x-full"
                  }`}
                  aria-hidden="true"
                ></div>
              </div>
            </fieldset>

            {annual && (
              <div className="absolute sm:relative -bottom-8 sm:bottom-auto ml-3 bg-gradient-to-r from-gradient-from to-gradient-to text-foreground text-xs font-bold px-2 py-1 rounded-full">
                Save 20%
              </div>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
              role="listitem"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-gradient-from to-gradient-to text-foreground text-xs font-bold px-3 py-1 rounded-full z-50">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-surface/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-transform ${
                  plan.popular ? "border-blue-500" : "border-border"
                }`}
              >
                <div className="p-5 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-5 sm:mb-6">
                    {plan.description}
                  </p>

                  <div
                    className="flex items-baseline mb-5 sm:mb-6"
                    aria-label={`${plan.price} dollars per ${
                      annual ? "year" : "month"
                    }`}
                  >
                    <span className="text-2xl sm:text-4xl font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-foreground/70 ml-2 text-sm">
                      /{annual ? "year" : "month"}
                    </span>
                  </div>

                  <Button
                    className={`w-full mb-6 sm:mb-8 py-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:outline-none ${
                      plan.popular
                        ? "bg-gradient-to-r from-gradient-from to-gradient-to hover:from-blue-600 hover:to-purple-600 text-foreground border-0"
                        : "bg-white/10 hover:bg-white/20 text-foreground"
                    }`}
                    aria-label={`${plan.cta} with the ${plan.name} plan`}
                  >
                    {plan.cta}
                  </Button>

                  <ul
                    className="space-y-3 sm:space-y-4"
                    aria-label={`${plan.name} plan features`}
                  >
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div
                          className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-foreground" />
                        </div>
                        <span className="text-foreground/80 text-sm sm:text-base">
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
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
