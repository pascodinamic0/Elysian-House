"use client";

import { Container, Heading, Text, Spacer } from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * WhatIs — "What is Elysian House" section
 */
export function WhatIs() {
  const { whatIs } = homePage;

  return (
    <section className="py-24 md:py-36">
      <Container width="narrow" className="text-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {whatIs.headline}
          </Heading>
        </ScrollReveal>

        <Spacer size="md" />

        {whatIs.paragraphs.map((paragraph, index) => (
          <ScrollReveal key={index} delay={0.1 * (index + 1)}>
            <Text
              size="large"
              className="mx-auto text-balance"
            >
              {paragraph}
            </Text>
            {index < whatIs.paragraphs.length - 1 && <Spacer size="sm" />}
          </ScrollReveal>
        ))}
      </Container>
    </section>
  );
}
