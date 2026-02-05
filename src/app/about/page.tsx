import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
  Stack,
} from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { Manifesto, HostBio } from "@/components/about";
import { aboutPage, siteConfig } from "@/content/copy";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.philosophy.paragraphs[0],
};

export default function AboutPage() {
  const { hero, philosophy, host, vision } = aboutPage;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        {/* Hero */}
        <Section spacing="large">
          <Container width="narrow" className="text-center">
            <ScrollReveal>
              <Heading level={1} size="display">
                {hero.headline}
              </Heading>
            </ScrollReveal>
          </Container>
        </Section>

        {/* Philosophy */}
        <Section background="secondary">
          <Container width="narrow">
            <Manifesto
              headline={philosophy.headline}
              paragraphs={philosophy.paragraphs}
            />
          </Container>
        </Section>

        {/* Host */}
        <Section>
          <Container width="narrow">
            <HostBio
              headline={host.headline}
              name={host.name}
              bio={host.bio}
            />
          </Container>
        </Section>

        {/* Vision */}
        <Section background="secondary">
          <Container width="narrow">
            <Stack gap="md" className="items-center md:items-start text-center md:text-left">
              <ScrollReveal>
                <Heading level={2} size="subsection">
                  {vision.headline}
                </Heading>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Text size="base" className="text-balance">
                  {vision.text}
                </Text>
              </ScrollReveal>
            </Stack>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
