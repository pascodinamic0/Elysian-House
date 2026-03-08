"use client";

import { Container, Heading, Text } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * CoreThemes — Three conversation pillars
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

        <ScrollRevealGroup className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {coreThemes.pillars.map((pillar) => (
            <ScrollRevealItem key={pillar.title}>
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[var(--color-linen)] shadow-sm transition-base hover:shadow-md">
                <Heading level={3} size="subsection" className="text-center">
                  {pillar.title}
                </Heading>
                <Text
                  size="base"
                  color="secondary"
                  className="text-center mx-auto"
                >
                  {pillar.description}
                </Text>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
