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
    Object.entries(values).forEach(([k, v]) => root.style.setProperty(k, v as string));
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);

