"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowRight } from "lucide-react"

interface NavDropdownProps {
  id: string
  label: React.ReactNode
  items: Array<{
    label: string
    href: string
    icon?: React.ReactNode
    description?: string
  }>
  activeDropdown: string | null
  setActiveDropdown: (id: string | null) => void
  className?: string
  dropdownClassName?: string
  showIcons?: boolean
  showDescriptions?: boolean
}

export default function NavDropdown({
  id,
  label,
  items,
  activeDropdown,
  setActiveDropdown,
  className = "",
  dropdownClassName = "",
  showIcons = false,
  showDescriptions = false,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpen(activeDropdown === id)
  }, [activeDropdown, id])

  const handleMouseEnter = () => {
    setActiveDropdown(id)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    // Check if mouse is leaving to a non-dropdown area
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      setActiveDropdown(null)
    }
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1.5 font-medium transition-colors ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-16 z-40"
              onClick={() => setActiveDropdown(null)}
            />
            
            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`absolute left-0 top-full mt-2 z-50 bg-surface border border-border rounded-xl shadow-2xl shadow-black/10 dark:shadow-white/5 backdrop-blur-sm ${dropdownClassName}`}
            >
              <div className="space-y-1">
                {items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-all duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {showIcons && item.icon && (
                        <div className="mt-0.5 flex-shrink-0 text-gradient-from">
                          {item.icon}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-medium text-foreground group-hover:text-gradient-from transition-colors">
                            {item.label}
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                        </div>
                        {showDescriptions && item.description && (
                          <p className="text-xs text-foreground/60 mt-1 leading-tight">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Dropdown Footer */}
              <div className="mt-4 pt-4 border-t border-border">
                <Link
                  href={`/${id}`}
                  className="group flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gradient-from/5 to-gradient-to/5 hover:from-gradient-from/10 hover:to-gradient-to/10 transition-all"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div>
                    <div className="font-medium">View all {id}</div>
                    <div className="text-xs text-foreground/60">Explore complete offerings</div>
                  </div>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}