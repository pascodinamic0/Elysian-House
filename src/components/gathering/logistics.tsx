import { Heading, Text, Stack, Caption } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { gatheringPage } from "@/content/copy";

/**
 * Logistics — Practical event details
 */
export function Logistics() {
  const { logistics } = gatheringPage;

  const details = [
    { label: "Date", value: logistics.date },
    { label: "Time", value: logistics.time },
    { label: "Location", value: logistics.location },
    { label: "Venue", value: logistics.venue },
    { label: "Duration", value: logistics.duration },
    { label: "Investment", value: logistics.price },
  ];

  return (
    <Stack gap="lg">
      <ScrollReveal>
        <Heading level={2} size="subsection">
          {logistics.headline}
        </Heading>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {details.map((detail, index) => (
          <ScrollReveal key={detail.label} delay={0.05 + index * 0.03}>
            <div className="flex flex-col sm:flex-row sm:gap-4 py-3 border-b border-[var(--color-dusk)]/10">
              <Caption className="w-32 shrink-0">{detail.label}</Caption>
              <Text size="small" as="span" className="text-[var(--color-stone)]">
                {detail.value}
              </Text>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {logistics.note && (
        <ScrollReveal delay={0.3}>
          <Text size="small" color="secondary" className="italic max-w-[50ch]">
            {logistics.note}
          </Text>
        </ScrollReveal>
      )}
    </Stack>
  );
}
