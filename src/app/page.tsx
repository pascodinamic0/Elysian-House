import { Header, Footer } from "@/components/layout";
import {
  Hero,
  WhatIs,
  CoreThemes,
  HowWomenExperience,
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
        <Closing />
      </main>
      <Footer />
    </>
  );
}
