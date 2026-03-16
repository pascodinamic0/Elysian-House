"use client";

import { Container, Heading } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { SECTION_CARD_CLASS } from "./section-card";
import { homePage } from "@/content/copy";

const iconClass =
  "w-8 h-8 flex-shrink-0 text-[var(--color-clay)] dark:text-[var(--color-petal)] transition-colors duration-300";

function ThemeIcon({ iconId }: { iconId: string }) {
  switch (iconId) {
    case "heart":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "leaf":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "compass":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4M3 5h4M19 17v4M17 19h4" />
        </svg>
      );
    case "star":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m12 2 3 7h7l-5.5 4 2 6.5L12 15l-6.5 4.5 2-6.5L4 9h7l3-7z" />
        </svg>
      );
    case "circle":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * CoreThemes — Three conversation pillars with icons
 */
export function CoreThemes() {
  const { coreThemes } = homePage;

  return (
    <section className="py-24 md:py-36 bg-[var(--color-fog)] transition-base">
      <Container width="content" className="text-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {coreThemes.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {coreThemes.pillars.map((pillar) => (
            <ScrollRevealItem key={pillar.title}>
              <article className={SECTION_CARD_CLASS}>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-fog)] dark:bg-[var(--color-fog)]/40 transition-colors duration-300 flex-shrink-0">
                    <ThemeIcon iconId={pillar.iconId ?? "compass"} />
                  </div>
                  <Heading level={3} size="subsection" className="text-center mt-0 mb-0">
                    {pillar.title}
                  </Heading>
                  <p className="text-section-description text-balance">
                    {pillar.description}
                  </p>
                </div>
              </article>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
