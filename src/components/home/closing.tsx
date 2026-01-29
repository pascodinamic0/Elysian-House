import {
  Section,
  Heading,
  Text,
  Button,
} from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * Closing — Final CTA and brand continuity
 */
export function Closing() {
  const { closing, cta } = homePage;

  return (
    <Section spacing="large">
      <div className="mx-auto w-full px-6 md:px-12 max-w-[45rem] text-center flex flex-col gap-12 items-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {closing.headline}
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Text size="base" color="secondary" className="mx-auto text-balance">
            {closing.text}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center">
            <Button href="/register" size="large">
              {cta.primary}
            </Button>
            <Button href="/gathering" variant="ghost">
              {cta.secondary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
