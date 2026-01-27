"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
  Stack,
} from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { RegistrationForm, Confirmation } from "@/components/register";
import { registerPage } from "@/content/copy";

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { hero } = registerPage;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section spacing="large">
          <Container width="narrow">
            {isSubmitted ? (
              <Confirmation />
            ) : (
              <Stack gap="xl">
                {/* Header */}
                <Stack gap="md" align="center" className="text-center">
                  <ScrollReveal>
                    <Heading level={1} size="section">
                      {hero.headline}
                    </Heading>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <Text
                      size="base"
                      color="secondary"
                      className="max-w-[50ch] mx-auto"
                    >
                      {hero.subtitle}
                    </Text>
                  </ScrollReveal>
                </Stack>

                {/* Form */}
                <ScrollReveal delay={0.15} className="w-full">
                  <div className="w-full max-w-xl mx-auto">
                    <RegistrationForm onSuccess={() => setIsSubmitted(true)} />
                  </div>
                </ScrollReveal>
              </Stack>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
