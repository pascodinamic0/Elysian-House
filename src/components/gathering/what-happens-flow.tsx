"use client";

import { Heading, Text } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/home/scroll-reveal";

export interface WhatHappensItem {
  title: string;
  text: string;
}

interface WhatHappensFlowProps {
  headline: string;
  subline?: string;
  items: WhatHappensItem[];
}

/**
 * WhatHappensFlow — "What happens" as one continuous journey
 *
 * Single narrative flow: headline + phases with a subtle timeline.
 * No cards or list UI — editorial, breathing layout.
 */
export function WhatHappensFlow({ headline, subline, items }: WhatHappensFlowProps) {
  return (
    <div className="relative">
      <ScrollReveal className="text-center mb-16 md:mb-20">
        <Heading level={2} size="section" className="text-[var(--color-stone)]">
          {headline}
        </Heading>
        {subline && (
          <p className="mt-3 font-serif text-[1rem] md:text-[1.125rem] text-[var(--color-dusk)] max-w-[32rem] mx-auto leading-relaxed">
            {subline}
          </p>
        )}
      </ScrollReveal>

      {/* Flowing timeline: line + steps */}
      <div className="relative max-w-[38rem] mx-auto">
        {/* Vertical line — subtle, only between steps */}
        <div
          className="absolute left-[0.6875rem] md:left-4 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-[var(--color-dusk)]/15 to-transparent"
          aria-hidden
        />

        <ScrollRevealGroup className="flex flex-col gap-0" staggerDelay={0.08}>
          {items.map((item, index) => (
            <ScrollRevealItem key={index}>
              <div className="relative flex gap-6 md:gap-8 pl-10 md:pl-14 pb-14 md:pb-20 last:pb-0">
                {/* Step marker on the line */}
                <div
                  className="absolute left-0 top-[0.35rem] w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-[var(--color-dusk)]/25 bg-[var(--color-linen)] flex items-center justify-center flex-shrink-0"
                  aria-hidden
                >
                  <span className="text-[0.625rem] md:text-[0.6875rem] font-sans font-medium text-[var(--color-dusk)]/70 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex-1 min-w-0 pt-0.5">
                  <Heading
                    level={3}
                    size="subsection"
                    className="font-serif text-[1.25rem] md:text-[1.5rem] text-[var(--color-stone)] tracking-tight mb-2"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    size="base"
                    color="secondary"
                    className="text-balance leading-[1.75] max-w-[36ch]"
                  >
                    {item.text}
                  </Text>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </div>
    </div>
  );
}
