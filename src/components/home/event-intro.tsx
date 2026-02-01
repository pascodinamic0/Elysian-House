"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Button,
  Caption,
} from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";
import { useScrollLock } from "@/hooks/use-scroll-lock";

/**
 * EventIntro — The gathering introduction block
 * Features scroll locking similar to Hero section
 */
export function EventIntro() {
  const { eventIntro, cta } = homePage;
  const sectionRef = useRef<HTMLElement>(null);
  const { isLocked, scrollToNext, prefersReducedMotion } = useScrollLock(sectionRef, {
    targetId: "after-event-intro",
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[var(--color-fog)] transition-base flex items-center justify-center"
    >
      <div className="mx-auto w-full px-6 md:px-12 max-w-[60rem] text-center flex flex-col gap-6 md:gap-8 items-center py-24 md:py-32">
        <ScrollReveal delay={0.1}>
          <Heading level={2} size="display" className="max-w-[16ch] mx-auto font-bold">
            {eventIntro.headline}
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Text
            size="small"
            color="secondary"
            className="uppercase tracking-[0.1em] font-bold"
          >
            {eventIntro.subtitle}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Text size="large" className="max-w-[55ch] mx-auto text-balance">
            {eventIntro.description}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="pt-4 flex flex-col items-center gap-4">
            <Button href="/register" size="large">
              {cta.primary}
            </Button>
            <span className="text-xs text-[var(--color-stone)] tracking-wide">
              {eventIntro.date}
            </span>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-1">
          {!prefersReducedMotion && isLocked && (
            <motion.span
              className="text-[var(--color-dusk)] text-sm font-sans tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Click to scroll down
            </motion.span>
          )}
          <motion.button
            type="button"
            onClick={scrollToNext}
            className="p-3 rounded-full transition-base hover:bg-[var(--color-linen)]/50 dark:hover:bg-[var(--color-linen)]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-fog)]"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            aria-label="Scroll to next section"
          >
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                className="w-8 h-8 text-[var(--color-dusk)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
