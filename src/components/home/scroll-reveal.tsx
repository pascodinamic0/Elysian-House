"use client";

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
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/660c50a2-335d-4d85-98ac-6f635e5fd7bf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'scroll-reveal.tsx:35',message:'ScrollReveal render start',data:{delay,duration,y,hasChildren:!!children},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const prefersReducedMotion = useReducedMotion();

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
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

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
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
