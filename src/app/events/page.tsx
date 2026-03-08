import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { UpcomingEvents, PastEvents } from "@/components/events";
import { Heading, Container } from "@/components/ui";
import { eventsPage } from "@/content/copy";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past Elysian House gatherings — curated events for women navigating identity, healing and intentional living.",
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-20 md:py-32 text-center">
          <Container width="narrow">
            <Heading level={1} size="display">
              {eventsPage.hero.headline}
            </Heading>
          </Container>
        </section>

        <UpcomingEvents />
        <PastEvents />
      </main>
      <Footer />
    </>
  );
}
