"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ModernCta() {
  return (
    <section className="py-16 pb-20 px-3 sm:px-0 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-gradient-from/20 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gradient-from to-gradient-to rounded-2xl blur-lg opacity-70"></div>
            <div className="relative bg-background/80 backdrop-blur-sm border border-border/10 rounded-xl p-5 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who are already using Tennissine's Space to streamline their operations and
                boost productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-border/20 text-foreground hover:bg-accent h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
                  Schedule Demo
                </Button>
              </div>

              <p className="mt-4 sm:mt-6 text-foreground/50 text-xs sm:text-sm">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
