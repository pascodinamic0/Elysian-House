import { Container, Section, Heading, Text, Stack } from "@/components/ui";
import {
  ScrollReveal,
  ScrollRevealGroup,
  ScrollRevealItem,
} from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * Essence — What happens at the gathering
 */
export function Essence() {
  const { essence } = homePage;

  return (
    <Section spacing="large">
      <Container width="narrow" className="text-center">
        <Stack gap="xl" align="center">
          <ScrollReveal>
            <Heading level={2} size="section">
              {essence.headline}
            </Heading>
          </ScrollReveal>

          <ScrollRevealGroup
            className="flex flex-col gap-8 md:gap-10"
            staggerDelay={0.12}
          >
            {essence.items.map((item, index) => (
              <ScrollRevealItem key={index}>
                <Text
                  size="large"
                  className="mx-auto text-balance"
                >
                  {item}
                </Text>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGroup>
        </Stack>
      </Container>
    </Section>
  );
}
