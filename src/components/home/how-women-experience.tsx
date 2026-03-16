"use client";

import { Container, Heading } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { SECTION_CARD_CLASS } from "./section-card";
import { homePage } from "@/content/copy";

const iconClass =
  "w-8 h-8 flex-shrink-0 text-[var(--color-clay)] dark:text-[var(--color-petal)] transition-colors duration-300";

function OfferingIcon({ iconId }: { iconId: string }) {
  switch (iconId) {
    case "calendar":
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
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "users":
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "user":
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "book-open":
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "sun":
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
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
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
        </svg>
      );
    default:
      return null;
  }
}

/**
 * HowWomenExperience — Ways women engage with Elysian House (events, circles, sessions, etc.)
 */
export function HowWomenExperience() {
  const { howWomenExperience } = homePage;

  return (
    <section className="py-24 md:py-36 bg-[var(--color-fog)] transition-base">
      <Container width="content" className="text-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {howWomenExperience.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {howWomenExperience.offerings.map((offering) => (
            <ScrollRevealItem key={offering.title}>
              <div className="relative">
                {offering.comingSoon && (
                  <span
                    className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 inline-block whitespace-nowrap rounded-full bg-[var(--color-linen)] border border-[var(--color-dusk)]/20 px-3 py-1 text-[0.75rem] font-sans font-medium uppercase tracking-[0.08em] text-[var(--color-clay)] shadow-sm"
                    aria-label="Coming soon"
                  >
                    Coming Soon
                  </span>
                )}
                <article className={SECTION_CARD_CLASS}>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-fog)] dark:bg-[var(--color-fog)]/40 transition-colors duration-300 flex-shrink-0">
                      <OfferingIcon iconId={offering.iconId ?? "sparkles"} />
                    </div>
                    <Heading
                      level={3}
                      size="subsection"
                      className="text-center mt-0 mb-0 md:whitespace-nowrap"
                    >
                      {offering.title}
                    </Heading>
                    <p className="text-section-description text-balance line-clamp-2">
                      {offering.description}
                    </p>
                  </div>
                </article>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
