import { Heading, Text } from "@/components/ui";
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
    <div
      className="p-8 md:p-10 rounded-2xl shadow-sm transition-base flex flex-col gap-6"
      style={{ background: "var(--gradient-overlay)" }}
    >
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
    </div>
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
    <div className="flex flex-col gap-12">
      <ScrollReveal>
        <Heading level={2} size="subsection">
          {headline}
        </Heading>
      </ScrollReveal>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <ScrollReveal key={index} delay={0.1 + index * 0.05}>
            <div
              className="p-6 rounded-xl shadow-sm transition-base hover:shadow-md flex flex-col gap-2"
              style={{ background: "var(--gradient-overlay)" }}
            >
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
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
