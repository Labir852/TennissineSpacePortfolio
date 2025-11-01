"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavDropdown from "./NavDropdown"
import ThemeToggle from "@/components/ThemeToggle"

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const productItems = ["Analytics", "Automation", "Collaboration", "Security"]
  const solutionItems = ["For Startups", "For Enterprise", "For Teams", "For Developers"]

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
          id="products"
          label="Services" 
          items={productItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />
        
        <Link 
          href="#pricing" 
          className="text-foreground/80 hover:text-foreground transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/70 text-sm lg:text-base"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          Work
        </Link>
        <NavDropdown 
          id="solutions"
          label="Company" 
          items={solutionItems}
          activeDropdown={activeDropdown}
          setActiveDropdown={handleActiveDropdown}
        />

        <Link 
          href="#testimonials" 
          className="text-foreground/80 hover:text-foreground transition-colors py-2 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/70 text-sm lg:text-base"
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
        <Button 
          variant="ghost" 
          className="text-foreground hover:bg-accent focus-visible:ring-2 focus-visible:ring-brand-accent/70 text-sm lg:text-base"
        >
          Log in
        </Button>
        <Button 
          className="bg-gradient-to-r from-gradient-from to-gradient-to hover:opacity-90 text-foreground border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow text-sm lg:text-base px-3 lg:px-4"
          //  h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base
        >
          Get Started
        </Button>
      </div>
    </>
  )
}
