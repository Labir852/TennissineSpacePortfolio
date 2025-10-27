# Centralized Theme Control Guide

## Overview

Your project now has a centralized theme system that allows you to change colors across the entire website from a single location. This makes it easy to maintain consistent branding and update the visual appearance.

## How to Change Theme Colors

### Primary Location: `lib/theme.ts`

All theme colors are defined in the `lib/theme.ts` file. This is the **only file** you need to edit to change the color scheme.

### Available Theme Variables

The theme supports two modes:
- `light` - Light theme configuration
- `dark` - Dark theme configuration (currently default)

### Custom Brand Colors

In `lib/theme.ts`, you'll find these custom brand color variables:

```typescript
// Custom brand colors for this site
"--gradient-from": "0 84% 60%",  // Red-500 for gradients
"--gradient-to": "43 96% 56%",    // Amber-500 for gradients
"--brand-accent": "45 100% 51%",  // Amber-400 for highlights
```

### Core Theme Variables

- `--background` - Main background color
- `--foreground` - Main text color
- `--primary` - Primary brand color
- `--secondary` - Secondary color
- `--muted` - Muted/disabled states
- `--accent` - Accent color
- `--border` - Border color
- `--surface` - Surface/card background

## How to Change Colors

1. Open `lib/theme.ts`
2. Find the theme you want to modify (light or dark)
3. Update the color values in HSL format (Hue Saturation% Lightness%)
4. Save the file
5. The changes will automatically reflect across your entire website

### Example: Changing the Brand Gradient

To change the red-to-amber gradient to a blue-to-purple gradient:

```typescript
"--gradient-from": "220 91% 56%",  // Blue
"--gradient-to": "270 91% 65%",    // Purple
```

### Example: Changing the Background

To change the dark background to a lighter gray:

```typescript
"--background": "0 0% 15%",  // Very dark gray
"--foreground": "0 0% 98%",  // Nearly white text
```

## HSL Color Format

All colors use HSL (Hue, Saturation, Lightness) format:

```
Hue: 0-360 (0=red, 120=green, 240=blue)
Saturation: 0-100% (0=gray, 100=full color)
Lightness: 0-100% (0=black, 50=normal, 100=white)
```

### Quick Color Reference

- **Red**: 0
- **Orange**: 30
- **Yellow**: 60
- **Green**: 120
- **Cyan**: 180
- **Blue**: 220
- **Purple**: 270
- **Pink**: 330

## Using Theme Colors in Components

In your components, use these Tailwind classes:

### Backgrounds
- `bg-background` - Main background
- `bg-surface` - Card/surface background
- `bg-card` - Card background
- `bg-primary` - Primary color
- `bg-secondary` - Secondary color
- `bg-accent` - Accent color

### Text
- `text-foreground` - Main text
- `text-muted-foreground` - Muted text
- `text-primary` - Primary colored text
- `text-brand-accent` - Brand accent color

### Borders
- `border-border` - Standard border
- `border-primary` - Primary border

### Gradients
- `from-gradient-from to-gradient-to` - Brand gradient

Example:
```tsx
<div className="bg-gradient-to-r from-gradient-from to-gradient-to">
  Content here
</div>
```

## Tailwind Configuration

The theme system is integrated with Tailwind CSS. Theme colors are automatically available as Tailwind utility classes defined in `tailwind.config.ts`.

## Testing Changes

1. Make changes in `lib/theme.ts`
2. Save the file
3. Check your development server (changes should appear immediately)
4. Verify the changes across different pages and components

## Benefits

✅ **Single Source of Truth** - Change colors in one place
✅ **Automatic Propagation** - Changes apply everywhere
✅ **Consistent Branding** - No color inconsistencies
✅ **Easy Maintenance** - Update the theme without touching components
✅ **Type Safety** - TypeScript ensures valid color values

## Need Help?

If you want to add more color variables:

1. Add the variable to `lib/theme.ts`
2. Add it to `tailwind.config.ts` in the colors section
3. Use the new color in your components

