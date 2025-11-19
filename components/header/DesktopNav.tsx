"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"
import ThemeToggle from "@/components/ThemeToggle"

export default function DesktopNav() {
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
  


  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
      }
    }
    
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Enhanced dropdown management function
  const handleActiveDropdown = (id: string | null) => {
    setActiveDropdown(id)
  }

  return (
    <>
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        <NavDropdown 
          id="services"
          label="Services" 
          items={serviceItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
          className="relative text-foreground/80 hover:text-foreground py-2 px-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
        />
        
        <Link
          href="/#workmodels"
          className="relative text-foreground/80 hover:text-foreground py-2 px-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
        >
          Work
        </Link>

        <NavDropdown 
          id="company"
          label="Company" 
          items={companyItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
          className="relative text-foreground/80 hover:text-foreground py-2 px-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
        />

        <Link 
          href="/#testimonials" 
          className="relative text-foreground/80 hover:text-foreground py-2 px-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gradient-to-r from-gradient-from to-gradient-to hover:after:w-full after:transition-all after:duration-300"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Testimonials
        </Link>
      </nav>

      <div 
        className="hidden md:flex items-center gap-2 lg:gap-4"
        onMouseEnter={() => setActiveDropdown(null)}
      >
        <ThemeToggle />
        <Link href='/contact'>
        <Button 
          className="bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-white border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
        >
          Book a Consultation
        </Button>
        </Link>
      </div>
    </>
  )
}
