import { Heading, Text, Stack } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";

interface HostBioProps {
  /** Section heading */
  headline: string;
  /** Host name */
  name: string;
  /** Bio text */
  bio: string;
}

/**
 * HostBio — Minimal founder introduction
 */
export function HostBio({ headline, name, bio }: HostBioProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
      {/* Portrait Placeholder */}
      <ScrollReveal className="shrink-0">
        <div 
          className="w-32 h-40 md:w-40 md:h-52 bg-[var(--color-fog)] transition-colors duration-300"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundBlendMode: "overlay",
          }}
          aria-label={`Portrait of ${name}`}
          role="img"
        />
      </ScrollReveal>

      {/* Content */}
      <Stack gap="md" className="flex-1">
        <ScrollReveal delay={0.1}>
          <Heading level={3} size="subsection">
            {headline}
          </Heading>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Text size="base" className="text-balance">
            {bio}
          </Text>
        </ScrollReveal>
      </Stack>
    </div>
  );
}
