import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Button,
  Stack,
  Spacer,
  Caption,
} from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import {
  DetailBlock,
  DetailBlockWithItems,
  Logistics,
} from "@/components/gathering";
import { gatheringPage, homePage } from "@/content/copy";

export const metadata: Metadata = {
  title: "The Gathering",
  description: gatheringPage.whatItIs.text,
};

export default function GatheringPage() {
  const { hero, whatItIs, whatHappens, whoItsFor } = gatheringPage;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        {/* Hero */}
        <Section spacing="large">
          <Container width="narrow" className="text-center">
            <Stack gap="md" align="center">
              <ScrollReveal>
                <Caption className="uppercase tracking-[0.15em]">
                  {hero.subtitle}
                </Caption>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Heading level={1} size="display">
                  {hero.headline}
                </Heading>
              </ScrollReveal>
            </Stack>
          </Container>
        </Section>

        {/* What It Is */}
        <Section background="secondary">
          <Container width="narrow">
            <DetailBlock
              headline={whatItIs.headline}
              text={whatItIs.text}
            />
          </Container>
        </Section>

        {/* What Happens */}
        <Section>
          <Container width="narrow">
            <DetailBlockWithItems
              headline={whatHappens.headline}
              items={whatHappens.items}
            />
          </Container>
        </Section>

        {/* Who It's For */}
        <Section background="secondary">
          <Container width="narrow">
            <DetailBlock
              headline={whoItsFor.headline}
              text={whoItsFor.text}
              note={whoItsFor.notFor}
            />
          </Container>
        </Section>

        {/* Logistics */}
        <Section>
          <Container width="narrow">
            <Logistics />
          </Container>
        </Section>

        {/* CTA */}
        <Section spacing="large">
          <Container width="narrow" className="text-center">
            <ScrollReveal>
              <Button href="/register" size="large">
                {homePage.cta.primary}
              </Button>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
