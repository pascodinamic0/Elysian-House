import { Container, Text, Link } from "@/components/ui";
import { footer, siteConfig } from "@/content/copy";

/**
 * Footer — Site footer
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-fog)] py-16 md:py-20 transition-colors duration-300">
      <Container>
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Wordmark and tagline */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-[1.125rem] tracking-[0.05em] uppercase text-[var(--color-stone)] transition-colors duration-300">
              {siteConfig.name}
            </span>
            <Text size="small" color="secondary" className="max-w-[40ch]">
              {footer.tagline}
            </Text>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                external={link.external}
                className="text-[0.9375rem] text-[var(--color-dusk)] hover:text-[var(--color-stone)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-[var(--color-dusk)]/10">
            <Text size="small" color="secondary" as="span">
              {footer.copyright}
            </Text>
            <Link
              href={footer.privacyLink.href}
              className="text-[0.875rem] text-[var(--color-dusk)] hover:text-[var(--color-stone)] transition-colors duration-200"
            >
              {footer.privacyLink.label}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
