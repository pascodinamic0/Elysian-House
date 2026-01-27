import {
  Container,
  Section,
  Heading,
  Text,
  Button,
  Stack,
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
      <Container width="narrow" className="text-center">
        <Stack gap="lg" align="center">
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
        </Stack>
      </Container>
    </Section>
  );
}
