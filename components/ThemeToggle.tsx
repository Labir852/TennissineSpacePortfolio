"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex items-center justify-center rounded-md border border-border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors opacity-0"
      >
        <span className="h-4 w-4" />
        <span className="ml-2 hidden lg:inline">Dark</span>
      </button>
    )
  }

  const currentTheme = theme ?? resolvedTheme ?? "light"
  const isDark = currentTheme === "dark"

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border border-border px-2.5 py-1.5 text-sm hover:bg-accent transition-colors"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="ml-2 hidden lg:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  )
}
