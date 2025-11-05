"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import * as Tooltip from "@radix-ui/react-tooltip"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function Integrations() {
  // These would typically be actual logos in a real implementation
  const integrations = [
    { name: "HTML", category: "Language", logo: "/images/TechStacks/html.png" },
    { name: "CSS", category: "Language", logo: "/images/TechStacks/css.svg" },
    { name: "Javascript", category: "Language", logo: "/images/TechStacks/javascript.svg" },
    { name: "C#", category: "Language", logo: "/images/TechStacks/Csharp.png" },
    { name: "Python", category: "Language", logo: "/images/TechStacks/Python.svg" },
    { name: "PHP", category: "Language", logo: "/images/TechStacks/php.svg" },
    { name: "ReactJs", category: "Frontend", logo: "/images/TechStacks/react.svg" },
    { name: "NextJs", category: "Frontend", logo: "/images/TechStacks/next.png" },
    { name: "Material UI", category: "Frontend", logo: "/images/TechStacks/mui.png" },
    { name: "Tailwind CSS", category: "Frontend", logo: "/images/TechStacks/tailwind.png" },
    { name: "React Native", category: "Mobile Application", logo: "/images/TechStacks/react.svg" },
    { name: "ASP.NET", category: "Backend", logo: "/images/TechStacks/dotnet.png" },
    { name: "Node.Js", category: "Backend", logo: "/images/TechStacks/NodeJs.svg" },
    { name: "Express.Js", category: "Backend", logo: "/images/TechStacks/express.png" },
    { name: "Laravel", category: "Backend", logo: "/images/TechStacks/Laravel.svg" },
    { name: "Microsoft SQL Server", category: "Database", logo: "/images/TechStacks/mssql.png" },
    { name: "PostgreSQL", category: "Database", logo: "/images/TechStacks/postgresql.svg" },
    { name: "MySQL", category: "Database", logo: "/images/TechStacks/mysql.svg" },
    { name: "MongoDB", category: "Database", logo: "/images/TechStacks/mongodb.svg" },
    { name: "Redis", category: "Database", logo: "/images/TechStacks/redis.svg" },
    { name: "Docker", category: "DevOps", logo: "/images/TechStacks/docker.png" },
    { name: "Kubernetes", category: "DevOps", logo: "/images/TechStacks/kubernetes.png" },
    { name: "CI / CD", category: "DevOps", logo: "/images/TechStacks/cicd.png" },
    { name: "AWS", category: "DevOps", logo: "/images/TechStacks/aws.svg" },
    { name: "GCP", category: "DevOps", logo: "/images/TechStacks/gcp.png" },
    { name: "Azure", category: "DevOps", logo: "/images/TechStacks/azure.png" },
    { name: "Wordpress", category: "CMS", logo: "/images/TechStacks/wordpress.svg" },
  ];

  // Extract unique categories
  const categories = ["Language", "Frontend", "Backend", "Database", "DevOps", "CMS"] as const
  type CategoryType = typeof categories[number]

  // Filter integrations by category
  const getFilteredIntegrations = (category: CategoryType) => {
    
    if (category === "Frontend") {
      return integrations.filter(integration => 
        integration.category === "Frontend" || integration.category === "Mobile Application"
      )
    }
    return integrations.filter(integration => integration.category === category)
  }

  return (
    <section 
      className="py-12 sm:py-16 md:py-24 bg-background relative overflow-visible border-t border-border/50"
      aria-labelledby="integrations-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-gradient-from/50 to-gradient-to/50 hover:opacity-90 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-16"
        >
          <h2 id="integrations-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Technology Stacks</h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Connect with your favorite tools and services
          </p>
        </motion.div>

        {/* Tabs for category filtering */}
        <Tabs defaultValue="Language" className="w-full ">
          <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide">
            <TabsList className="bg-surface/5 backdrop-blur-sm border border-border p-1 rounded-xl flex-nowrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gradient-from data-[state=active]:to-gradient-to data-[state=active]:text-foreground rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap text-xs sm:text-sm "
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 justify-center"
                role="list"
                aria-label={`${category} integrations`}
              >
                {getFilteredIntegrations(category).map((integration, index) => (
            <Tooltip.Provider key={index} delayDuration={150}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group "
              role="listitem"
            >
              
              <div 
  className="bg-surface/5 hover:bg-accent backdrop-blur-md border border-border rounded-xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center h-full transition-transform transform hover:scale-105 focus-within:ring-2 focus-within:ring-primary "
  tabIndex={0}
>
  <img 
    src={integration.logo} 
    alt={integration.name}
    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
  />
  {/* <p className="hidden sm:block text-sm text-foreground/60 mt-1" aria-label={`${integration.category} integration`}>
    {integration.category}
  </p> */}
</div>

              
            </motion.div>
            </Tooltip.Trigger>

                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    sideOffset={5}
                    className=" z-[9999] rounded bg-foreground text-background px-2 py-1 text-xs shadow-sm"
                  >
                    {integration.name}
                    <Tooltip.Arrow className="fill-foreground" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-xs sm:text-sm text-foreground/70">
            Don't see what you need? {" "}
            <a 
              href="#contact" 
              className="text-primary hover:opacity-80 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label="Request a custom integration"
            >
              Request an integration
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
