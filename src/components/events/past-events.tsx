"use client";

import Image from "next/image";
import { Container, Heading, Text } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/home/scroll-reveal";
import { eventsPage } from "@/content/copy";

/**
 * PastEvents — Showcases previous gatherings for credibility
 */
export function PastEvents() {
  const { past } = eventsPage;

  if (past.events.length === 0) return null;

  return (
    <section className="py-24 md:py-36 bg-[var(--color-fog)] transition-base">
      <Container width="content">
        <ScrollReveal>
          <Heading level={2} size="section" className="text-center">
            {past.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 flex flex-col gap-16">
          {past.events.map((event, index) => (
            <ScrollRevealItem key={index}>
              <article className="rounded-2xl bg-[var(--color-linen)] p-8 md:p-12 flex flex-col gap-8 shadow-sm transition-base">
                <div className="flex flex-col gap-2">
                  <Heading level={3} size="subsection">
                    {event.title}
                  </Heading>
                  <Text size="small" color="secondary">
                    {event.date}
                  </Text>
                </div>

                <Text size="base" className="max-w-[60ch]">
                  {event.summary}
                </Text>

                {event.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {event.images.map((src, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={src}
                          alt={`${event.title} - Photo ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {event.testimonial && (
                  <blockquote className="border-l-2 border-[var(--color-clay)] pl-6 py-2">
                    <Text size="base" color="secondary" className="italic">
                      {event.testimonial}
                    </Text>
                  </blockquote>
                )}
              </article>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
