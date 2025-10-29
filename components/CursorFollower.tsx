"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Global cursor follower: a transparent ring that follows the pointer.
 * - Enlarges and tightens on interactive elements (links, buttons, inputs, [role="button"]).
 * - Hidden on touch devices / when pointer is not available.
 */
export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    // Disable on coarse pointers (touch)
    const isCoarse = window.matchMedia("(pointer: coarse)").matches
    if (isCoarse) {
      setEnabled(false)
      return
    }

    let raf: number | null = null
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let lastMoveTs = performance.now()

    // Animation loop keeps the ring easing until it aligns with the pointer
    const tick = () => {
      const now = performance.now()
      const idleMs = now - lastMoveTs
      // Base easing
      let k = 0.18
      // If idle for a moment, speed up convergence so ring catches up
      if (idleMs > 120) k = 0.35
      if (idleMs > 240) k = 0.55

      rx += (x - rx) * k
      ry += (y - ry) * k

      // Snap when very close so they overlap perfectly at rest
      if (Math.abs(rx - x) < 0.1) rx = x
      if (Math.abs(ry - y) < 0.1) ry = y

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top = `${ry}px`
      }

      raf = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      lastMoveTs = performance.now()
      if (dotRef.current) {
        // Use left/top so the CSS translate(-50%, -50%) keeps it perfectly centered
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top = `${y}px`
      }
    }

    const setHover = (hovering: boolean) => {
      const el = ringRef.current
      if (!el) return
      if (hovering) el.classList.add("cursor-outline--hover")
      else el.classList.remove("cursor-outline--hover")
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      )
      setHover(Boolean(interactive))
    }

    // Initialize positions
    if (dotRef.current) {
      dotRef.current.style.left = `${x}px`
      dotRef.current.style.top = `${y}px`
    }
    if (ringRef.current) {
      ringRef.current.style.left = `${rx}px`
      ringRef.current.style.top = `${ry}px`
    }

    // Start animation loop
    raf = requestAnimationFrame(tick)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    return () => {
      if (raf != null) cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-outline" />
    </>
  )
}


