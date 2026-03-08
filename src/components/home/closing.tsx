import {
  Section,
  Heading,
  Text,
  Button,
} from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * Closing — Final invitation and CTA
 */
export function Closing() {
  const { closing } = homePage;

  return (
    <Section spacing="large" background="secondary">
      <div className="mx-auto w-full px-6 md:px-12 max-w-[45rem] text-center flex flex-col gap-12 items-center">
        <ScrollReveal>
          <Heading level={2} size="section">
            {closing.headline}
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Text size="large" color="secondary" className="mx-auto text-balance">
            {closing.text}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="pt-6">
            <Button href="/events" size="large">
              {closing.cta}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
