"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React from "react"

/**
 * A subtle global parallax background using theme colors.
 * Place once in the layout so it affects every page visually.
 */
export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -80])
  const y2 = useTransform(scrollY, [0, 1000], [0, -140])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* gradient layer 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-30"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gradient-from to-gradient-to" />
      </motion.div>

      {/* gradient layer 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-gradient-to to-gradient-from" />
      </motion.div>

      {/* subtle grid overlay using theme foreground at low opacity */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ maskImage: "linear-gradient(#000, transparent)" }}>
        <div className="w-full h-full  bg-repeat" />
      </div>
    </div>
  )
}


