"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer:
        "Our free trial gives you full access to all features for 14 days with no credit card required. You can upgrade to a paid plan at any time during or after your trial.",
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer:
        "Yes, we offer special pricing for startups, non-profit organizations, and educational institutions. Please contact our sales team for more information.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade, downgrade, or change your plan at any time. Changes to your subscription will be prorated for the remainder of your billing cycle.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all customers, with priority support and dedicated account managers for Enterprise plans. Our support team is available 24/7 to assist with any questions or issues.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use industry-standard encryption, regular security audits, and strict access controls to ensure your data is always protected. All data is stored in SOC 2 compliant data centers.",
    },
    {
      question: "Can I export my data?",
      answer:
        "Yes, you can export your data at any time in various formats including CSV, JSON, and PDF. We believe your data belongs to you and make it easy to take it with you if needed.",
    },
  ]

  return (
    <section className="py-4 sm:py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Have questions? We're here to help. If you don't see your question here, feel free to contact us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-medium hover:no-underline hover:bg-white/5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-sm sm:text-base text-white/70">
            Still have questions? {" "}
            <a href="#contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
