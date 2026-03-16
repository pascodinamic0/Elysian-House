import { Heading, Text, Caption } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { cn } from "@/lib/utils";

type HeadlineSize = "subsection" | "section";

interface DetailBlockProps {
  /** Optional overline / kicker above the headline */
  kicker?: string;
  /** Section heading */
  headline: string;
  /** Visual size of the headline */
  headlineSize?: HeadlineSize;
  /** Main content text */
  text: string;
  /** Optional secondary text (e.g., "not for" note) */
  note?: string;
}

/**
 * DetailBlock — Structured information block
 */
export function DetailBlock({
  kicker,
  headline,
  headlineSize = "subsection",
  text,
  note,
}: DetailBlockProps) {
  const isSectionHeading = headlineSize === "section";

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Heading Card */}
      <ScrollReveal>
        <div
          className={cn(
            "p-6 md:p-8 bg-[var(--color-linen)] border border-[var(--color-clay)]/15 rounded-xl shadow-sm",
            isSectionHeading &&
              "border-l-4 border-l-[var(--color-clay)] pl-5 md:pl-7"
          )}
        >
          <div className="flex flex-col gap-2">
            {kicker && (
              <Caption className="font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-[var(--color-clay)]">
                {kicker}
              </Caption>
            )}
            <Heading
              level={2}
              size={headlineSize}
              className="text-[var(--color-stone)] tracking-tight mt-0"
            >
              {headline}
            </Heading>
          </div>
        </div>
      </ScrollReveal>
      
      {/* Main Content Card */}
      <ScrollReveal delay={0.1}>
        <div className="p-8 md:p-10 bg-[var(--color-linen)] border border-[var(--color-clay)]/15 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--color-clay)]/25">
          <Text size="base" className="text-balance leading-[1.75] max-w-[65ch]">
            {text}
          </Text>
        </div>
      </ScrollReveal>
      
      {/* Note Card */}
      {note && (
        <ScrollReveal delay={0.15}>
          <div className="p-8 md:p-10 bg-[var(--color-fog)]/40 border border-[var(--color-clay)]/15 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--color-clay)]/25">
            <Text size="small" color="secondary" className="text-balance italic leading-[1.7] max-w-[60ch]">
              {note}
            </Text>
          </div>
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
