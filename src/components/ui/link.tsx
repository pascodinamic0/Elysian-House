import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps {
  /** URL to link to */
  href: string;
  /** External link (opens in new tab) */
  external?: boolean;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

/**
 * Link — Styled link component
 * 
 * Usage:
 * <Link href="/about">Learn more</Link>
 * <Link href="https://instagram.com" external>Follow us</Link>
 */
export function Link({
  href,
  external,
  className,
  children,
}: LinkProps) {
  const baseClasses = cn(
    "text-[var(--color-stone)]",
    "underline decoration-[var(--color-dusk)]/30 underline-offset-4",
    "hover:text-[var(--color-dusk)] hover:decoration-[var(--color-dusk)]/60",
    "transition-base",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-linen)]",
    "active:text-[var(--color-stone)]",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={baseClasses}>
      {children}
    </NextLink>
  );
}

/**
 * NavLink — Navigation-specific link
 */
export function NavLink({
  href,
  active,
  className,
  children,
}: LinkProps & { active?: boolean }) {
  return (
    <NextLink
      href={href}
      className={cn(
        "text-[var(--color-stone)] font-sans text-[0.9375rem] font-medium",
        "transition-base",
        "hover:text-[var(--color-dusk)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-linen)]",
        "active:text-[var(--color-stone)]",
        active && "text-[var(--color-dusk)]",
        className
      )}
    >
      {children}
    </NextLink>
  );
}
