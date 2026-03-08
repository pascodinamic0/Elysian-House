"use client";

import { Container, Heading, Text, Button } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/home/scroll-reveal";
import { eventsPage } from "@/content/copy";

/**
 * UpcomingEvents — Highlights the next upcoming event(s)
 */
export function UpcomingEvents() {
  const { upcoming } = eventsPage;

  return (
    <section className="py-24 md:py-36">
      <Container width="content">
        <ScrollReveal>
          <Heading level={2} size="section" className="text-center">
            {upcoming.headline}
          </Heading>
        </ScrollReveal>

        <ScrollRevealGroup className="mt-16 flex flex-col gap-10">
          {upcoming.events.map((event) => (
            <ScrollRevealItem key={event.title}>
              <div className="rounded-2xl border border-[var(--color-dusk)]/10 bg-[var(--color-fog)] p-8 md:p-12 flex flex-col gap-6 transition-base hover:shadow-lg">
                <div className="flex flex-col gap-2">
                  <Heading level={3} size="subsection">
                    {event.title}
                  </Heading>
                  <Text size="small" color="secondary" className="uppercase tracking-[0.08em] font-medium">
                    {event.subtitle}
                  </Text>
                </div>

                <div className="flex flex-wrap gap-x-8 gap-y-2 text-[var(--color-dusk)] font-sans text-[0.9375rem]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>

                <Text size="base" className="max-w-[60ch]">
                  {event.description}
                </Text>

                <div className="pt-2">
                  <Button href={event.ctaHref} size="large">
                    {event.ctaLabel}
                  </Button>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </Container>
    </section>
  );
}
