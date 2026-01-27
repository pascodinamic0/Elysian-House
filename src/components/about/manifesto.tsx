import { Heading, Text, Stack } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";

interface ManifestoProps {
  /** Section heading */
  headline: string;
  /** Array of paragraphs */
  paragraphs: string[];
}

/**
 * Manifesto — Brand philosophy statement
 */
export function Manifesto({ headline, paragraphs }: ManifestoProps) {
  return (
    <Stack gap="lg">
      <ScrollReveal>
        <Heading level={2} size="section">
          {headline}
        </Heading>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        {paragraphs.map((paragraph, index) => (
          <ScrollReveal key={index} delay={0.1 + index * 0.05}>
            <Text size="large" className="text-balance">
              {paragraph}
            </Text>
          </ScrollReveal>
        ))}
      </div>
    </Stack>
  );
}
