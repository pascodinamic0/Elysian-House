import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Button,
  Caption,
} from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import {
  DetailBlock,
  DetailBlockWithItems,
  Logistics,
} from "@/components/gathering";
import { ImageHeroBackground } from "@/components/gathering/video-hero-background";
import { gatheringPage, homePage } from "@/content/copy";

export const metadata: Metadata = {
  title: "The Gathering",
  description: gatheringPage.whatItIs.text,
};

export default function GatheringPage() {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/660c50a2-335d-4d85-98ac-6f635e5fd7bf',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:25',message:'GatheringPage render start',data:{hasHero:!!gatheringPage.hero,hasWhatItIs:!!gatheringPage.whatItIs,hasWhatHappens:!!gatheringPage.whatHappens,hasWhoItsFor:!!gatheringPage.whoItsFor,componentCount:4},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  const { hero, whatItIs, whatHappens, whoItsFor } = gatheringPage;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        {/* Hero with Image Background */}
        <section className="relative py-32 md:py-48 bg-[var(--color-linen)] transition-base overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-end">
          {/* Image Background */}
          <ImageHeroBackground />
          
          {/* Content - Positioned lower to avoid image subjects */}
          <div className="relative z-10 mx-auto w-full px-6 md:px-12 max-w-[45rem] text-center flex flex-col gap-6 items-center pb-20 md:pb-32 pt-32 md:pt-0">
            <ScrollReveal>
              <Caption className="uppercase tracking-[0.15em] text-[var(--color-stone)] drop-shadow-lg [text-shadow:0_2px_8px_rgba(0,0,0,0.15)]">
                {hero.subtitle}
              </Caption>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Heading level={1} size="display" className="text-[var(--color-stone)] drop-shadow-lg [text-shadow:0_2px_12px_rgba(0,0,0,0.2)]">
                {hero.headline}
              </Heading>
            </ScrollReveal>
          </div>
        </section>

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
