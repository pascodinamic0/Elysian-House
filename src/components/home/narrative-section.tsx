import { Container, Text, Spacer } from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * NarrativeSection — The emotional journey beats
 */
export function NarrativeSection() {
  const { narrative } = homePage;

  return (
    <section id="after-hero" className="py-20 md:py-32">
      <Container width="narrow" className="text-center">
        {/* Beat 1: The Naming */}
        <ScrollReveal>
          <Text size="large" className="mx-auto text-balance">
            {narrative.beat1.text}
          </Text>
        </ScrollReveal>

        <Spacer size="xl" />

        {/* Beat 2: The Permission */}
        <ScrollReveal delay={0.1}>
          <Text size="large" className="mx-auto text-balance font-serif italic">
            {narrative.beat2.text}
          </Text>
        </ScrollReveal>

        <Spacer size="xl" />

        {/* Beat 3: The Invitation */}
        <ScrollReveal delay={0.1}>
          <Text
            size="large"
            className="mx-auto text-balance text-[1.5rem] md:text-[1.75rem]"
          >
            {narrative.beat3.text}
          </Text>
        </ScrollReveal>
      </Container>
    </section>
  );
}
