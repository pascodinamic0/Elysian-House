"use client";

import { Container, Heading } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { SECTION_CARD_CLASS } from "./section-card";
import { homePage } from "@/content/copy";

const iconClass =
  "w-8 h-8 flex-shrink-0 text-[var(--color-clay)] dark:text-[var(--color-petal)] transition-colors duration-300";

function WhatIsIcon({ iconId }: { iconId: string }) {
  switch (iconId) {
    case "home":
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
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
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
          <path d="M8 12h8" />
          <path d="M12 8v8" />
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
    default:
      return null;
  }
}

/**
 * WhatIs — "What is Elysian House" section
 * Numbered cards with icons that define Elysian House.
 */
export function WhatIs() {
  const { whatIs } = homePage;
  const points = whatIs.points;

  return (
    <section className="py-24 md:py-36 bg-[var(--color-fog)] transition-base">
      <Container width="content" className="text-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {whatIs.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {points.map((point, index) => (
            <ScrollRevealItem key={point.title}>
              <article className={SECTION_CARD_CLASS}>
                <div className="flex flex-col items-center gap-4">
                  <span
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-clay)] dark:bg-[var(--color-petal)] text-[var(--color-linen)] text-xl font-semibold tabular-nums transition-colors duration-300 flex-shrink-0"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-fog)] dark:bg-[var(--color-fog)]/40 transition-colors duration-300 flex-shrink-0">
                    <WhatIsIcon iconId={point.iconId ?? "circle"} />
                  </div>
                  <Heading level={3} size="subsection" className="text-center mt-0 mb-0">
                    {point.title}
                  </Heading>
                  <p className="text-section-description text-balance">
                    {point.description}
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
