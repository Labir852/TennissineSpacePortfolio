export const themes = {
  light: {
    // Core theme colors
    "--border": "220 14% 90%",
    "--input": "220 14% 90%",
    "--ring": "262 83% 58%",
    "--background": "0 0% 100%",
    "--foreground": "0% 0% 5%",
    "--primary": "262 83% 58%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 5% 96%",
    "--secondary-foreground": "240 6% 10%",
    "--muted": "240 5% 96%",
    "--muted-foreground": "240 4% 46%",
    "--accent": "240 5% 96%",
    "--accent-foreground": "240 6% 10%",
    "--card": "0 0% 100%",
    "--card-foreground": "0 0% 10%",
    "--popover": "0 0% 100%",
    "--popover-foreground": "0 0% 10%",
    "--destructive": "0 84% 60%",
    "--destructive-foreground": "0 0% 98%",
    
    // Custom brand colors for this site
    "--gradient-from": "220 91% 56%",
    "--gradient-to": "270 91% 65%",
    "--brand-accent": "45 100% 51%",  // amber-400
    "--surface": "0 0% 100%",
    "--surface-foreground": "0 0% 10%",
    
    // Border radius
    "--radius": "0.5rem"
  },
  dark: {
    // Core theme colors
    "--border": "240 5% 26%",
    "--input": "240 5% 26%",
    "--ring": "262 83% 58%",
    "--background": "0 0% 4%",
    "--foreground": "0 0% 98%",
    "--primary": "262 83% 58%",
    "--primary-foreground": "0 0% 98%",
    "--secondary": "240 4% 16%",
    "--secondary-foreground": "0 0% 98%",
    "--muted": "240 4% 16%",
    "--muted-foreground": "240 5% 65%",
    "--accent": "240 4% 16%",
    "--accent-foreground": "0 0% 98%",
    "--card": "0 0% 4%",
    "--card-foreground": "0 0% 98%",
    "--popover": "0 0% 4%",
    "--popover-foreground": "0 0% 98%",
    "--destructive": "0 63% 31%",
    "--destructive-foreground": "0 0% 98%",
    
    // Custom brand colors for this site
    "--gradient-from": "220 91% 56%",
    "--gradient-to": "270 91% 65%",
    "--brand-accent": "45 100% 51%",  // amber-400
    "--surface": "0 0% 4%",
    "--surface-foreground": "0 0% 98%",
    
    // Border radius
    "--radius": "0.5rem"
  }
} as const;
