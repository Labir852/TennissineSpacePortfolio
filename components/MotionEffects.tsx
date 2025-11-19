"use client";

import { useEffect, useState } from "react";
import ParallaxBackground from "@/components/ParallaxBackground";
import CursorFollower from "@/components/CursorFollower";

export default function MotionEffects() {
  const [showMotion, setShowMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      const prefersMotion = !motionQuery.matches;
      const isDesktop = window.innerWidth >= 640;
      setShowMotion(prefersMotion && isDesktop);
    };

    updatePreference();

    const handleResize = () => updatePreference();
    motionQuery.addEventListener("change", updatePreference);
    window.addEventListener("resize", handleResize);

    return () => {
      motionQuery.removeEventListener("change", updatePreference);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!showMotion) {
    return null;
  }

  return (
    <>
      <ParallaxBackground />
      <CursorFollower />
    </>
  );
}

