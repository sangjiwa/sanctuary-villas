// Sanctuary Villas Brand Colors
// Extracted from Figma design

export const COLORS = {
  // Primary colors
  primary: {
    DEFAULT: "#643c15", // Main brown for buttons and primary elements
    dark: "#2e1b12",    // Dark brown for headings
    light: "#8b6630",   // Light brown/gold for accents
  },

  // Surface colors
  surface: {
    DEFAULT: "#eae7d9", // Beige background
    white: "#ffffff",   // White surface
  },

  // Text colors (for reference)
  text: {
    heading: "#2e1b12",   // Main headings
    body: "#643c15",      // Body text
    muted: "#8b6630",     // Muted/secondary text
  },
} as const;

export type ColorPalette = typeof COLORS;
