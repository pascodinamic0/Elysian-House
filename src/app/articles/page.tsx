import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Container, Section, Heading, Text, Caption } from "@/components/ui";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/home/scroll-reveal";
import { articlesPage, articles } from "@/content/copy";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Stories and reflections from past Elysian House gatherings — moments of connection, healing and intention.",
};

export default function ArticlesPage() {
  const { hero, list } = articlesPage;

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section spacing="large">
          <div className="mx-auto w-full px-6 md:px-12 max-w-[45rem] text-center flex flex-col gap-4 items-center">
            <ScrollReveal>
              <Caption className="uppercase tracking-[0.15em] text-[var(--color-dusk)]">
                {hero.subline}
              </Caption>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <Heading level={1} size="display">
                {hero.headline}
              </Heading>
            </ScrollReveal>
          </div>
        </Section>

        <Section background="secondary" spacing="default">
          <Container width="content">
            <ScrollReveal>
              <Heading level={2} size="section" className="text-center mb-12 md:mb-16">
                {list.headline}
              </Heading>
            </ScrollReveal>

            {articles.length === 0 ? (
              <ScrollReveal>
                <p className="text-center text-[var(--color-dusk)] font-sans text-[1.125rem] max-w-[45ch] mx-auto">
                  {list.empty}
                </p>
              </ScrollReveal>
            ) : (
              <ScrollRevealGroup className="flex flex-col gap-12 md:gap-16">
                {articles.map((article) => (
                  <ScrollRevealItem key={article.slug}>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="block rounded-2xl border border-[var(--color-dusk)]/10 bg-[var(--color-linen)] p-6 md:p-10 transition-base hover:shadow-lg hover:border-[var(--color-dusk)]/20 group"
                    >
                      <article className="flex flex-col gap-4">
                        {article.image && (
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden -mx-2 mt-2">
                            <Image
                              src={article.image}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              sizes="(max-width: 768px) 100vw, 60rem"
                            />
                          </div>
                        )}
                        <div className="flex flex-col gap-2">
                          <Caption className="text-[var(--color-dusk)]">
                            {article.date}
                          </Caption>
                          <Heading level={3} size="subsection" className="group-hover:text-[var(--color-dusk)] transition-colors">
                            {article.title}
                          </Heading>
                          {article.subtitle && (
                            <Text size="small" color="secondary">
                              {article.subtitle}
                            </Text>
                          )}
                        </div>
                        <Text size="base" color="secondary" className="line-clamp-2">
                          {article.excerpt}
                        </Text>
                        <span className="font-sans text-[0.9375rem] font-medium text-[var(--color-clay)] mt-2">
                          Read more →
                        </span>
                      </article>
                    </Link>
                  </ScrollRevealItem>
                ))}
              </ScrollRevealGroup>
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
