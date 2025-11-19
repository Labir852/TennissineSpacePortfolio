"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import NavDropdown from "./NavDropdown"
import ThemeToggle from "@/components/ThemeToggle"

type MobileNavProps = {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const serviceItems = [
    { label: "Product Engineering", href: "/#features" },
    { label: "Automation & Integrations", href: "/#integrations-heading" },
    { label: "Process Playbook", href: "/#process" },
    { label: "Engagement Models", href: "/#workmodels" },
    { label: "Support & SLAs", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ]

  const companyItems = [
    { label: "About Tennissine Space", href: "/#process" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Insights", href: "/#blog-heading" },
    { label: "Careers", href: "/contact" },
    { label: "Get in touch", href: "/contact" },
  ]

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[90px] bg-background/95 backdrop-blur-xl border-t border-border/50 transition-all duration-500 ease-in-out overflow-hidden shadow-lg shadow-black/5 z-50",
        isOpen ? "max-h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 py-5 flex flex-col gap-2 transition-all duration-500 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        )}
      >
        {/* Services */}
        <NavDropdown
          id="services"
          label="Services"
          items={serviceItems}
          isMobile
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          className="text-foreground/90 hover:text-foreground transition-all text-base font-medium"
        />

        {/* Work */}
        <Link
          href="/#workmodels"
          onClick={() => setActiveDropdown(null)}
          className="py-2 px-2 border-b border-border/40 hover:bg-accent/30 rounded-md transition-colors text-foreground/80 hover:text-foreground relative after:absolute after:left-0 after:-bottom-[1px] after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
        >
          Work
        </Link>

        {/* Company */}
        <NavDropdown
          id="company"
          label="Company"
          items={companyItems}
          isMobile
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          className="text-foreground/90 hover:text-foreground transition-all text-base font-medium"
        />

        {/* Testimonials */}
        <Link
          href="/#testimonials"
          onClick={() => setActiveDropdown(null)}
          className="py-2 px-2 border-b border-border/40 hover:bg-accent/30 rounded-md transition-colors text-foreground/80 hover:text-foreground relative after:absolute after:left-0 after:-bottom-[1px] after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
        >
          Testimonials
        </Link>

        {/* Divider */}
        <div className="h-px bg-border/30 my-3" />

        {/* Footer Buttons */}
        <div className="flex items-center justify-between pt-2">
          <ThemeToggle />

          <Link href="/contact" className="flex-1 ml-3">
            <Button
              className="w-full bg-gradient-to-r from-gradient-from to-gradient-to text-white border-0 hover:opacity-90 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 text-sm font-medium"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
