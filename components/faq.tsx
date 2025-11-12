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
      question: "What industries do you provide software solutions for?",
      answer:
        "We work with a wide range of industries — including government organizations, educational institutions, retail, manufacturing, and fintech. Our ERP, POS, and custom SaaS platforms are fully adaptable to your business model.",
    },
    {
      question: "Can Tennissine Space develop a custom solution tailored to our workflow?",
      answer:
        "Yes. Every project we deliver is customized based on your specific requirements. Whether you need a full-scale ERP, a custom POS, or an eCommerce backend, our team architects each module to fit your exact business processes.",
    },
    {
      question: "What technologies and stacks do you use?",
      answer:
        "We primarily work with modern stacks — including Next.js, React, ASP.NET Core, Node.js, MSSQL, PostgreSQL, and cloud platforms like AWS and Google Cloud. Our architecture emphasizes scalability, speed, and long-term maintainability.",
    },
    {
      question: "Do you provide post-deployment support and maintenance?",
      answer:
        "Absolutely. We provide ongoing maintenance, updates, and technical support after project delivery. Depending on your SLA, this can include feature upgrades, bug fixes, performance tuning, and continuous monitoring.",
    },
    {
      question: "Can your systems integrate with our existing software or APIs?",
      answer:
        "Yes, integration is one of our core strengths. We can connect your ERP, POS, or website with third-party systems — such as payment gateways, accounting software, or internal APIs — ensuring seamless data flow across platforms.",
    },
    {
      question: "How do you ensure data security and compliance?",
      answer:
        "We implement industry-standard encryption, secure authentication, and strict access controls. All data is hosted on compliant, secure cloud infrastructure with regular audits, ensuring reliability and regulatory adherence.",
    },
    {
      question: "What’s your typical project timeline?",
      answer:
        "Timelines vary by project size. A standard POS or website might take 3–5 weeks, while a full ERP or SaaS platform may take 8–16 weeks. We follow an agile development model with weekly progress updates.",
    },
    {
      question: "Do you offer on-site installation or staff training?",
      answer:
        "Yes. For enterprise and institutional clients, we offer on-site system setup and user training. Our goal is to make your team fully operational and confident using the new system from day one.",
    },
    {
      question: "Can I request updates or feature changes later?",
      answer:
        "Definitely. We maintain long-term relationships with our clients. Any new module, feature, or workflow update can be scoped, developed, and integrated into your existing system with minimal disruption.",
    },
  ]
  

  return (
    <section className="py-4 sm:py-20 md:py-24 bg-background relative overflow-hidden border-t border-border/50">
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
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
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
                  className="bg-surface/5 backdrop-blur-sm border border-border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-lg font-medium hover:no-underline hover:bg-surface/5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-foreground/70">
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
          <p className="text-sm sm:text-base text-foreground/70">
            Still have questions? {" "}
            <a href="#contact" className="text-primary hover:text-primary/80 underline underline-offset-2">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
