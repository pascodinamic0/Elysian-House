"use client";

import { useState, useEffect, useRef, useCallback, type ReactElement } from "react";
import { motion } from "framer-motion";
import { Container, Heading } from "@/components/ui";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

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
  const prefersReducedMotion: boolean = useReducedMotion();
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [visibleLength, setVisibleLength] = useState<number>(0);
  const heroRef = useRef<HTMLElement>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const isScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef<number>(0);

  const scrollToNext = useCallback(() => {
    document.getElementById("after-hero")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Lock scroll when hero is in view (unless reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let lastScrollY = window.scrollY;

    const checkLock = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY < lastScrollY ? "up" : "down";
      lastScrollY = currentScrollY;
      
      const rect = hero.getBoundingClientRect();
      const heroBottom = rect.bottom;
      // Consider "in hero" when hero still occupies most of the viewport (e.g. bottom above fold)
      const inHero = heroBottom > window.innerHeight * 0.5;
      
      // Clear any pending lock check
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      
      // If scrolling up and entering hero, delay lock to allow smooth scroll to complete
      if (scrollDirection === "up" && inHero) {
        // Immediately unlock to allow smooth scrolling
        setIsLocked(false);
        isScrollingRef.current = true;
        scrollTimeoutRef.current = setTimeout(() => {
          // Re-check if still in hero after delay
          const stillInHero = heroRef.current && 
            heroRef.current.getBoundingClientRect().bottom > window.innerHeight * 0.5;
          if (stillInHero) {
            setIsLocked(true);
          }
          isScrollingRef.current = false;
          scrollTimeoutRef.current = null;
        }, 600); // Delay to allow smooth scroll to complete
      } else if (scrollDirection === "down" || !inHero) {
        // Immediately unlock when scrolling down or leaving hero
        isScrollingRef.current = false;
        setIsLocked(false);
      } else if (inHero && !isScrollingRef.current) {
        // If already in hero and not scrolling, lock immediately
        setIsLocked(true);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledCheckLock = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkLock();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkLock();
    window.addEventListener("scroll", throttledCheckLock, { passive: true });
    window.addEventListener("resize", checkLock);
    
    return () => {
      window.removeEventListener("scroll", throttledCheckLock);
      window.removeEventListener("resize", checkLock);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, [prefersReducedMotion]);

  // When locked: prevent wheel/touch scroll on document
  useEffect(() => {
    if (prefersReducedMotion || !isLocked) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";

    const preventScroll = (e: WheelEvent | TouchEvent) => {
      // Allow scroll if we're in the middle of a smooth scroll operation
      if (isScrollingRef.current) {
        return;
      }
      e.preventDefault();
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [prefersReducedMotion, isLocked]);

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
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
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
            boxShadow: "0 0 100px rgba(196, 169, 140, 0.1)",
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
      
      <Container className="relative z-10 text-center">
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
              className="max-w-[18ch] mx-auto"
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
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
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
          className="p-3 rounded-full transition-base hover:bg-[var(--color-fog)]/50 dark:hover:bg-[var(--color-fog)]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-linen)]"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 0.6 }}
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
    </section>
  );
}
