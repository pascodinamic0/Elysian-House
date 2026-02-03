import Image from "next/image";
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
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
      {/* Portrait */}
      <ScrollReveal className="shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <div className="w-48 h-60 md:w-56 md:h-72 relative overflow-hidden">
          <Image
            src="/images/The Host.jpg"
            alt={`Portrait of ${name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 224px"
          />
        </div>
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
