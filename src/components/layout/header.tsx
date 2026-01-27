"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container, Button, NavLink, ThemeToggle } from "@/components/ui";
import { navigation, siteConfig } from "@/content/copy";

/**
 * Header — Site header with navigation
 * Features scroll-triggered background enhancement
 */
export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[var(--color-linen)]/98 backdrop-blur-md shadow-sm" 
          : "bg-[var(--color-linen)]/80 backdrop-blur-sm"
      )}
      style={{
        boxShadow: isScrolled ? "0 1px 0 var(--color-dusk)" : "none",
        opacity: isScrolled ? 1 : undefined,
      }}
    >
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-[1.125rem] md:text-[1.25rem] tracking-[0.05em] uppercase text-[var(--color-stone)] hover:text-[var(--color-dusk)] transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <Button href={navigation.cta.href} size="default">
              {navigation.cta.label}
            </Button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 -mr-2 text-[var(--color-stone)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            mobileMenuOpen ? "max-h-80 pb-8" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-6 pt-4 border-t border-[var(--color-dusk)]/10">
            {navigation.links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
                className="text-lg"
              >
                {link.label}
              </NavLink>
            ))}
            <Button href={navigation.cta.href} className="mt-2">
              {navigation.cta.label}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
