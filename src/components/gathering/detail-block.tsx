import { Heading, Text, Stack } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";

interface DetailBlockProps {
  /** Section heading */
  headline: string;
  /** Main content text */
  text: string;
  /** Optional secondary text (e.g., "not for" note) */
  note?: string;
}

/**
 * DetailBlock — Structured information block
 */
export function DetailBlock({ headline, text, note }: DetailBlockProps) {
  return (
    <Stack gap="md">
      <ScrollReveal>
        <Heading level={2} size="subsection">
          {headline}
        </Heading>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Text size="base" className="text-balance">
          {text}
        </Text>
      </ScrollReveal>
      {note && (
        <ScrollReveal delay={0.15}>
          <Text size="small" color="secondary" className="text-balance italic">
            {note}
          </Text>
        </ScrollReveal>
      )}
    </Stack>
  );
}

interface DetailBlockWithItemsProps {
  /** Section heading */
  headline: string;
  /** List of items with title and text */
  items: Array<{ title: string; text: string }>;
}

/**
 * DetailBlockWithItems — Structured block with list items
 */
export function DetailBlockWithItems({
  headline,
  items,
}: DetailBlockWithItemsProps) {
  return (
    <Stack gap="lg">
      <ScrollReveal>
        <Heading level={2} size="subsection">
          {headline}
        </Heading>
      </ScrollReveal>
      <div className="flex flex-col gap-8">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={0.1 + index * 0.05}>
            <Stack gap="xs">
              <Text
                size="base"
                as="span"
                className="font-medium"
              >
                {item.title}
              </Text>
              <Text size="small" color="secondary">
                {item.text}
              </Text>
            </Stack>
          </ScrollReveal>
        ))}
      </div>
    </Stack>
  );
}
