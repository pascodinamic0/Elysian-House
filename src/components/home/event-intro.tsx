"use client";

import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Button,
} from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * EventIntro — The gathering introduction block
 */
export function EventIntro() {
  const { eventIntro, cta } = homePage;
  const prefersReducedMotion = typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches 
    : false;

  return (
    <section
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
            <span className="text-base text-[var(--color-dusk)] tracking-wide font-medium">
              {eventIntro.date}
            </span>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-1">
          <motion.div
            className="p-3"
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            aria-hidden="true"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
