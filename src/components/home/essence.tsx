"use client";

import { Heading } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { homePage, eventConfig } from "@/content/copy";

/**
 * Essence — What happens at the gathering
 *
 * Single flowing narrative: four poetic beats in one calm, editorial block.
 * No cards, no list UI — reads like a continuous reflection.
 */
export function Essence() {
  const { essence } = homePage;

  return (
    <section
      id="after-event-intro"
      className="relative py-24 md:py-36 bg-[var(--color-linen)] transition-base overflow-hidden"
    >
      {/* Soft gradient band for depth — not a hard line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px max-w-[1px] bg-gradient-to-b from-transparent via-[var(--color-dusk)]/12 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[42rem] px-6 md:px-12">
        <ScrollReveal className="text-center">
          <Heading level={2} size="section">
            {essence.headline}
          </Heading>
          <p className="mt-2 text-[var(--color-dusk)] font-sans text-[0.9375rem] md:text-[1rem] tracking-wide">
            On {eventConfig.date}
          </p>
        </ScrollReveal>

        {/* Four lines as one flowing sequence — generous space between beats */}
        <ScrollRevealGroup className="mt-16 md:mt-20 flex flex-col" staggerDelay={0.07}>
          {essence.items.map((line, index) => (
            <ScrollRevealItem key={index}>
              <p className="font-serif text-[1.25rem] md:text-[1.5rem] leading-[1.6] md:leading-[1.65] text-[var(--color-stone)] text-balance py-4 md:py-5">
                {line}
              </p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
