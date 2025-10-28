"use client"

import { useEffect, useRef, useState } from "react"

type UseParallaxOptions = {
  /** Pixels per scroll pixel to translate the element (e.g. 0.1 = slower than scroll) */
  speed?: number
  /** Clamp max absolute translateY in px */
  maxOffset?: number
}

export function useParallax({ speed = 0.15, maxOffset = 200 }: UseParallaxOptions = {}) {
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    let lastY = 0
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      if (y === lastY) return
      lastY = y
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const next = Math.max(-maxOffset, Math.min(maxOffset, y * speed))
        setOffset(next)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("scroll", onScroll)
    }
  }, [speed, maxOffset])

  return { offset }
}

/**
 * Convenience hook that returns a style object for inline usage
 */
export function useParallaxStyle(options?: UseParallaxOptions) {
  const { offset } = useParallax(options)
  return { transform: `translate3d(0, ${offset}px, 0)` }
}


