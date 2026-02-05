"use client";

import { useState, useEffect, useRef, type ReactElement } from "react";
import { motion } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const staticPrefix: string = "A quiet room for women who are ready to";
const rotatingWords: readonly string[] = ["start..", "scale..", "conquer.."];
const typewriterSpeed: number = 80; // ms per letter
const pauseAfterWord: number = 1500; // ms before typing next word

/**
 * Hero — Opening section with primary statement
 * Features subtle floating animation and breathing rhythm
 * Ending words type letter by letter: start.. → scale.. → conquer.. (loop)
 * When in view: scroll locked until user clicks arrow or scrolls past; overlay "Click to scroll down".
 */
export function Hero(): ReactElement {
  const heroRef = useRef<HTMLElement>(null);
  const { isLocked, scrollToNext, prefersReducedMotion } = useScrollLock(heroRef, {
    targetId: "after-hero",
  });
  
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [visibleLength, setVisibleLength] = useState<number>(0);

  const currentWord: string = rotatingWords[wordIndex];
  const isTypingComplete: boolean = visibleLength >= currentWord.length;
  const displayedText: string = prefersReducedMotion
    ? currentWord
    : currentWord.slice(0, visibleLength);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (visibleLength < currentWord.length) {
      const id = setTimeout(() => {
        setVisibleLength((prev) => prev + 1);
      }, typewriterSpeed);
      return () => clearTimeout(id);
    }

    // Word complete: pause then move to next word
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
      setVisibleLength(0);
    }, pauseAfterWord);
    return () => clearTimeout(id);
  }, [prefersReducedMotion, currentWord, visibleLength]);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-start overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />
      {/* Background image overlay */}
      <div 
        className="hero-background-image absolute inset-0 opacity-[0.45] dark:opacity-[0.5]"
        style={{
          backgroundImage: "url('/images/Black and white .jpg')",
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

      {/* Subtle floating orb - decorative ambient element */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)",
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
        >
          {/* Subtle breathing animation on the headline */}
          <motion.div
            animate={prefersReducedMotion ? {} : {
              scale: [1, 1.005, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heading
              level={1}
              size="display"
              className="max-w-[18ch]"
            >
              <span>{staticPrefix} </span>
              <span className="inline-block min-w-[9ch] text-left">
                {displayedText}
                {!prefersReducedMotion && !isTypingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    |
                  </motion.span>
                )}
              </span>
            </Heading>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator + overlay when locked */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
        {!prefersReducedMotion && isLocked && (
          <motion.span
            className="text-[var(--color-stone)] text-xs sm:text-sm font-sans tracking-wide opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            Click to scroll down
          </motion.span>
        )}
        <motion.button
          type="button"
          onClick={scrollToNext}
          className="p-2 sm:p-3 rounded-full transition-base hover:bg-[var(--color-fog)]/50 dark:hover:bg-[var(--color-fog)]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-linen)]"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 1.5 }}
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
        </motion.button>
      </div>
    </section>
  );
}
