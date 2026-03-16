import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { UpcomingEvents, PastEvents } from "@/components/events";

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
        <UpcomingEvents />
        <PastEvents />
      </main>
      <Footer />
    </>
  );
}
