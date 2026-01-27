/**
 * SkipLink — Accessibility skip navigation link
 * 
 * Allows keyboard users to skip directly to main content.
 * Visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[100]
        px-4 py-2
        bg-[var(--color-stone)] text-[var(--color-linen)]
        font-sans text-sm font-medium
        focus:outline-none focus:ring-2 focus:ring-[var(--color-clay)] focus:ring-offset-2
        transition-all
      "
    >
      Skip to content
    </a>
  );
}
