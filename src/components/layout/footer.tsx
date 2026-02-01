"use client";

import { motion } from "framer-motion";
import { Container, Text, Link } from "@/components/ui";
import { footer, siteConfig } from "@/content/copy";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/hooks/use-typewriter";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("currentColor", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}

const staticPrefix: string = "Are you a woman, living in Dubai and ready to";
const rotatingWords: readonly string[] = ["start..", "scale..", "conquer.."];

/**
 * Footer — Site footer
 */
export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const { displayedText, isTypingComplete } = useTypewriter({
    rotatingWords,
    typewriterSpeed: 80,
    pauseAfterWord: 1500,
  });

  return (
    <footer className="bg-[var(--color-fog)] border-t-2 border-[var(--color-dusk)]/30 py-16 md:py-20 transition-base mt-12 md:mt-16">
      <Container>
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Wordmark and tagline */}
          <div className="flex flex-col gap-4">
            <span className="wordmark flex items-center gap-2 transition-colors duration-300">
              <img
                src="/favicon.svg"
                alt="Elysian House Logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              {siteConfig.name}
            </span>
            <p className="font-sans transition-colors duration-300 text-[1rem] leading-[1.7] text-[var(--color-dusk)] max-w-[40ch]">
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
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                external={link.external}
                className="text-[0.9375rem] text-[var(--color-dusk)] hover:text-[var(--color-stone)] transition-base rounded px-2 py-1 -mx-2 -my-1 hover:bg-[var(--color-fog)]/30 dark:hover:bg-[var(--color-fog)]/20 inline-flex items-center gap-2"
              >
                {link.label === "Instagram" ? (
                  <>
                    <InstagramIcon className="w-4 h-4 shrink-0" />
                    {link.label}
                  </>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-[var(--color-dusk)]/10">
            <Text size="small" color="secondary" as="span">
              {footer.copyright}
            </Text>
            <Link
              href={footer.privacyLink.href}
              className="text-[0.875rem] text-[var(--color-dusk)] hover:text-[var(--color-stone)] transition-base rounded px-2 py-1 -mx-2 -my-1 hover:bg-[var(--color-fog)]/30 dark:hover:bg-[var(--color-fog)]/20"
            >
              {footer.privacyLink.label}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
