import { Header, Footer } from "@/components/layout";
import {
  Hero,
  WhatIs,
  CoreThemes,
  HowWomenExperience,
  Essence,
  ReadOurArticles,
  Closing,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Hero />
        <WhatIs />
        <CoreThemes />
        <HowWomenExperience />
        <Essence />
        <ReadOurArticles />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
