import { Heading, Text, Stack, Link } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { registerPage, siteConfig } from "@/content/copy";

/**
 * Confirmation — Post-submission state
 */
export function Confirmation() {
  const { confirmation } = registerPage;

  return (
    <div
      className="p-10 md:p-12 rounded-2xl shadow-md transition-base"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(var(--glass-blur))",
        border: "1px solid var(--glass-border)",
      }}
    >
      <Stack gap="xl" align="center" className="text-center">
        <ScrollReveal>
          <div className="w-20 h-20 rounded-full bg-[var(--color-success)]/10 flex items-center justify-center shadow-sm">
            <svg
              className="w-10 h-10 text-[var(--color-success)] transition-all duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Heading level={2} size="section">
          {confirmation.headline}
        </Heading>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Text size="large" className="max-w-[45ch] mx-auto text-balance">
          {confirmation.message}
        </Text>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Text size="base" color="secondary" className="max-w-[45ch] mx-auto">
          {confirmation.nextSteps}
        </Text>
      </ScrollReveal>

      <ScrollReveal delay={0.25}>
        <Link
          href={siteConfig.instagram}
          external
          className="text-[var(--color-stone)] underline underline-offset-4"
        >
          Follow on Instagram
        </Link>
      </ScrollReveal>
    </Stack>
    </div>
  );
}
