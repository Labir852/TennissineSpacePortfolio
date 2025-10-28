"use client"

import { useEffect, useRef } from "react"

type ParallaxProps = {
  speed?: number
  maxOffset?: number
  className?: string
  children: React.ReactNode
}

/**
 * Wrapper that applies translateY parallax to its children based on scroll.
 */
export default function Parallax({ speed = 0.15, maxOffset = 160, className, children }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number | null = null
    let lastY = -1
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      if (y === lastY) return
      lastY = y
      if (raf != null) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const dy = Math.max(-maxOffset, Math.min(maxOffset, y * speed))
        el.style.transform = `translate3d(0, ${dy}px, 0)`
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (raf != null) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [speed, maxOffset])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}


