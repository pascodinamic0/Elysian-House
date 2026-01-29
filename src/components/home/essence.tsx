"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { homePage, eventConfig } from "@/content/copy";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Essence — What happens at the gathering
 * 
 * Scroll-pinned section using CSS sticky positioning.
 * Content stays fixed while user scrolls through a tall container.
 * Each paragraph fades in smoothly as scroll progresses.
 */
export function Essence() {
  const { essence } = homePage;
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const totalItems = essence.items.length;
  
  // Track scroll progress through the tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Convert scroll progress to active item index (0-4)
  const [activeIndex, setActiveIndex] = useState(0);
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Smooth mapping of scroll to items
    // 0-0.15 = entering, no items
    // 0.15-0.35 = item 1
    // 0.35-0.55 = item 2  
    // 0.55-0.75 = item 3
    // 0.75-0.95 = item 4
    // 0.95-1 = all shown, exiting
    
    if (latest < 0.15) {
      setActiveIndex(0);
    } else if (latest < 0.35) {
      setActiveIndex(1);
    } else if (latest < 0.55) {
      setActiveIndex(2);
    } else if (latest < 0.75) {
      setActiveIndex(3);
    } else {
      setActiveIndex(4);
    }
  });

  // Reduced motion version - show all items immediately
  if (prefersReducedMotion) {
    return (
      <section className="py-32 md:py-48 bg-[var(--color-linen)] transition-base">
        <Container width="narrow" className="text-center flex flex-col items-center gap-20">
          <div>
            <Heading level={2} size="section">
              {essence.headline}
            </Heading>
            <p className="mt-2 text-[var(--color-dusk)] font-sans text-[1rem] md:text-[1.125rem]">
              On {eventConfig.date}
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {essence.items.map((item, index) => (
              <p
                key={index}
                className="font-sans max-w-[58ch] text-[1.25rem] leading-[1.7] md:text-[1.375rem] md:leading-[1.75] text-[var(--color-stone)] text-balance"
              >
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative bg-[var(--color-linen)] transition-base">
      {/* Tall scrollable container - creates the scroll distance */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${(totalItems + 0.5) * 50}vh` }}
      >
        {/* Sticky content pinned to viewport - merged Container and Stack classes */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center pt-32 md:pt-48 pb-32 md:pb-48 mx-auto w-full px-6 md:px-12 max-w-[45rem] text-center gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <Heading level={2} size="section">
              {essence.headline}
            </Heading>
            <p className="mt-2 text-[var(--color-dusk)] font-sans text-[1rem] md:text-[1.125rem]">
              On {eventConfig.date}
            </p>
          </motion.div>
          
          {/* Paragraphs - stacked vertically with proper flow */}
          <div className="flex flex-col items-center gap-5 md:gap-6 min-h-[260px] md:min-h-[240px]">
            {essence.items.map((item, index) => (
              <motion.p
                key={index}
                className="font-sans max-w-[58ch] text-[1.25rem] leading-[1.65] md:text-[1.375rem] md:leading-[1.7] text-[var(--color-stone)] text-balance"
                initial={false}
                animate={{
                  opacity: index < activeIndex ? 1 : 0,
                  y: index < activeIndex ? 0 : 12,
                  filter: index < activeIndex ? "blur(0px)" : "blur(6px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
