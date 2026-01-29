import {
  Section,
  Heading,
  Text,
  Button,
  Caption,
} from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * EventIntro — The gathering introduction block
 */
export function EventIntro() {
  const { eventIntro, cta } = homePage;

  return (
    <Section background="secondary" spacing="large">
      <div className="mx-auto w-full px-6 md:px-12 max-w-[60rem] text-center flex flex-col gap-12 items-center">
        <ScrollReveal>
          <Caption className="uppercase tracking-[0.15em]">
            {eventIntro.date}
          </Caption>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Heading level={2} size="display" className="max-w-[16ch] mx-auto">
            {eventIntro.headline}
          </Heading>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Text
            size="small"
            color="secondary"
            className="uppercase tracking-[0.1em] font-medium"
          >
            {eventIntro.subtitle}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Text size="large" className="max-w-[55ch] mx-auto text-balance">
            {eventIntro.description}
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="pt-4">
            <Button href="/register" size="large">
              {cta.primary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
