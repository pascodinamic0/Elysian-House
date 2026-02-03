"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect user's reduced motion preference
 * Returns true if user prefers reduced motion, or null during SSR/hydration
 * 
 * Usage:
 * const prefersReducedMotion = useReducedMotion();
 * 
 * // Then conditionally disable animations
 * const variants = prefersReducedMotion ? {} : animationVariants;
 */
export function useReducedMotion(): boolean | null {
  // Start with null to indicate "not yet determined" during SSR
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}
