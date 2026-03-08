"use client";

import { type ReactElement } from "react";
import { motion } from "framer-motion";
import { Container, Heading, Button } from "@/components/ui";
import { homePage } from "@/content/copy";

/**
 * Hero — Opening section with brand statement and CTA
 */
export function Hero(): ReactElement {
  const { hero } = homePage;
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      {/* Background image overlay */}
      <div
        className="hero-background-image absolute inset-0 opacity-[0.35] dark:opacity-[0.4]"
        style={{
          backgroundImage: "url('/images/Black and white .jpg')",
          backgroundPosition: "center 20%",
        }}
        aria-hidden="true"
      />
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Floating orb */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)",
            filter: "blur(80px)",
            boxShadow: "0 0 100px rgba(232, 74, 95, 0.1)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      )}

      <Container className="relative z-10 text-left">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-6"
        >
          <Heading
            level={1}
            size="display"
            className="max-w-[18ch] drop-shadow-sm font-medium"
          >
            {hero.headline}
          </Heading>

          <p className="font-sans text-[1.25rem] md:text-[1.5rem] leading-[1.6] text-[var(--color-stone)] max-w-[40ch] text-balance">
            {hero.subline}
          </p>

          <p className="font-serif text-[1.125rem] md:text-[1.25rem] italic text-[var(--color-dusk)] max-w-[45ch]">
            {hero.description}
          </p>

          <div className="pt-4">
            <Button href="/events" size="large">
              {hero.cta}
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
        <motion.div
          className="p-2 sm:p-3"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 1.5 }}
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
              className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-stone)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
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
    </section>
  );
}
