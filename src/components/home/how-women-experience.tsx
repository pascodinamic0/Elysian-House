"use client";

import { Container, Heading, Text } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * HowWomenExperience — Three ways women engage with Elysian House
 */
export function HowWomenExperience() {
  const { howWomenExperience } = homePage;

  return (
    <section className="py-24 md:py-36">
      <Container width="content" className="text-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {howWomenExperience.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {howWomenExperience.offerings.map((offering) => (
            <ScrollRevealItem key={offering.title}>
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[var(--color-dusk)]/10 transition-base hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Heading level={3} size="subsection" className="text-center">
                    {offering.title}
                  </Heading>
                  {offering.comingSoon && (
                    <span className="inline-block text-[0.75rem] font-sans font-medium uppercase tracking-[0.08em] text-[var(--color-clay)] bg-[var(--color-fog)] px-3 py-1 rounded-full whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>
                <Text
                  size="base"
                  color="secondary"
                  className="text-center mx-auto"
                >
                  {offering.description}
                </Text>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
