import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Container, Section, Heading, Text, Caption, Button } from "@/components/ui";
import { ScrollReveal } from "@/components/home/scroll-reveal";
import { articles, metadata as siteMetadata } from "@/content/copy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      siteName: siteMetadata.openGraph.siteName,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const paragraphs = article.content.trim().split(/\n\n+/);

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section spacing="large">
          <Container width="narrow">
            <ScrollReveal>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 font-sans text-[0.9375rem] text-[var(--color-dusk)] hover:text-[var(--color-stone)] transition-colors mb-8"
              >
                ← Back to Articles
              </Link>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              <ScrollReveal delay={0.05}>
                <Caption className="uppercase tracking-[0.12em] text-[var(--color-dusk)]">
                  {article.date}
                </Caption>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Heading level={1} size="display">
                  {article.title}
                </Heading>
              </ScrollReveal>
              {article.subtitle && (
                <ScrollReveal delay={0.15}>
                  <Text size="large" color="secondary">
                    {article.subtitle}
                  </Text>
                </ScrollReveal>
              )}
            </div>

            {article.image && (
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mt-10">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45rem"
                    priority
                  />
                </div>
              </ScrollReveal>
            )}

            <div className="mt-12 flex flex-col gap-8">
              {paragraphs.map((para, i) => (
                <ScrollReveal key={i} delay={0.25 + i * 0.05}>
                  <Text size="base" className="max-w-none">
                    {para}
                  </Text>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.5}>
              <div className="pt-12 border-t border-[var(--color-dusk)]/10">
                <Button href="/articles" variant="secondary" size="default">
                  Back to Articles
                </Button>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
