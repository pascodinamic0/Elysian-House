import { Inter, Cormorant_Garamond } from "next/font/google";

/**
 * Inter — Clean sans-serif for body text
 * Used for: Body copy, navigation, buttons, form elements
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Cormorant Garamond — Editorial serif for headlines
 * Used for: Display text, headings, wordmark
 * 
 * Chosen for its elegant, editorial quality that evokes
 * The Gentlewoman and Kinfolk aesthetic without being
 * overly decorative.
 */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
});

/**
 * Font class names to apply to the document
 */
export const fontVariables = `${inter.variable} ${cormorant.variable}`;
