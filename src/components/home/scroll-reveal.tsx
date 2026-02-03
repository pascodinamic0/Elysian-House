"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  /** Content to reveal */
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Animation duration (in seconds) */
  duration?: number;
  /** Distance to translate from (in pixels) */
  y?: number;
}

/**
 * ScrollReveal — Wrapper for scroll-triggered animations
 * 
 * Usage:
 * <ScrollReveal>
 *   <Heading>Content that fades in</Heading>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Skip animation if: not mounted yet, reduced motion preferred, or preference unknown
  const shouldAnimate = hasMounted && prefersReducedMotion === false;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldAnimate ? duration : 0,
        delay: shouldAnimate ? delay : 0,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealGroup — Stagger children animations
 */
export function ScrollRevealGroup({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && prefersReducedMotion === false;

  return (
    <motion.div
      initial={shouldAnimate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldAnimate ? staggerDelay : 0,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealItem — Child of ScrollRevealGroup
 */
export function ScrollRevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
