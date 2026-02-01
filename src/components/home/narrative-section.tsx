"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container, Text, Spacer } from "@/components/ui";
import { ScrollReveal } from "./scroll-reveal";
import { homePage } from "@/content/copy";

/**
 * NarrativeSection — The emotional journey beats
 */
export function NarrativeSection() {
  const { narrative } = homePage;
  const lastParagraphRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: lastParagraphRef,
    offset: ["start 0.8", "center center"],
  });

  // Scale from 1 to 1.8 with smooth easing as you scroll down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0em", "0.02em"]);

  return (
    <section id="after-hero" className="py-20 md:py-32">
      <Container width="narrow" className="text-center">
        {/* Beat 1: The Naming */}
        <ScrollReveal>
          <Text size="large" className="mx-auto text-balance">
            {narrative.beat1.text}
          </Text>
        </ScrollReveal>

        <Spacer size="md" />

        {/* Beat 2: The Permission */}
        <ScrollReveal delay={0.1}>
          <Text size="large" className="mx-auto text-balance font-serif italic">
            {narrative.beat2.text}
          </Text>
        </ScrollReveal>

        <Spacer size="md" />

        {/* Beat 3: The Invitation */}
        <ScrollReveal delay={0.1}>
          <motion.div 
            ref={lastParagraphRef} 
            style={{ scale, opacity, letterSpacing }}
            className="origin-center will-change-transform"
          >
            <Text
              size="large"
              className="mx-auto text-balance text-[1.5rem] md:text-[1.75rem] font-medium"
            >
              {narrative.beat3.text}
            </Text>
          </motion.div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
