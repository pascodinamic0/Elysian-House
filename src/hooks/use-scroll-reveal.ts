"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

interface UseScrollRevealOptions {
  /** Threshold for intersection (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for intersection observer. Default: "0px 0px -50px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default: true */
  triggerOnce?: boolean;
}

interface UseScrollRevealReturn {
  /** Ref to attach to the element */
  ref: React.RefObject<HTMLDivElement | null>;
  /** Whether the element is in view */
  isInView: boolean;
  /** Whether animation has been triggered */
  hasAnimated: boolean;
}

/**
 * Hook for scroll-triggered reveal animations
 * Respects user's reduced motion preference
 * 
 * Usage:
 * const { ref, isInView } = useScrollReveal();
 * 
 * return (
 *   <div 
 *     ref={ref}
 *     style={{ 
 *       opacity: isInView ? 1 : 0,
 *       transform: isInView ? 'none' : 'translateY(20px)'
 *     }}
 *   >
 *     Content
 *   </div>
 * );
 */
export function useScrollReveal(
  options: UseScrollRevealOptions = {}
): UseScrollRevealReturn {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, show content immediately
    if (prefersReducedMotion) {
      setIsInView(true);
      setHasAnimated(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        if (inView) {
          setIsInView(true);
          setHasAnimated(true);
          
          // Disconnect if only triggering once
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, prefersReducedMotion]);

  return { ref, isInView, hasAnimated };
}
