"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { themes } from "@/lib/theme";

type ThemeKey = keyof typeof themes;

const ThemeContext = createContext({
  theme: "light" as ThemeKey,
  setTheme: (t: ThemeKey) => {}
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey>("light");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as ThemeKey | null;
    if (saved && themes[saved]) setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const values = themes[theme];
    // Apply CSS variables for the active theme
    Object.entries(values).forEach(([k, v]) => root.style.setProperty(k, v as string));
    // Reflect theme for class-based dark mode utilities and data attributes
    root.classList.toggle("dark", theme === "dark");
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);

