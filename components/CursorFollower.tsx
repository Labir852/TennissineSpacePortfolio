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

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (raf != null) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        // smooth follow for the ring
        rx += (x - rx) * 0.18
        ry += (y - ry) * 0.18
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`
        }
      })
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


