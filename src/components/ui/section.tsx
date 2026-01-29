import { cn } from "@/lib/utils";

type SectionSpacing = "small" | "default" | "large";
type SectionBackground = "primary" | "secondary" | "gradient" | "glass";

interface SectionProps {
  /** Vertical spacing variant */
  spacing?: SectionSpacing;
  /** Background color variant */
  background?: SectionBackground;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** HTML id for anchor linking */
  id?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  small: "py-20 md:py-24",
  default: "py-24 md:py-36",
  large: "py-32 md:py-48",
};

const backgroundClasses: Record<SectionBackground, string> = {
  primary: "bg-[var(--color-linen)]",
  secondary: "bg-[var(--color-fog)]",
  gradient: "bg-gradient-to-b from-[var(--color-linen)] via-[var(--color-fog)]/30 to-[var(--color-linen)]",
  glass: "bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)]",
};

/**
 * Section — Page section with consistent spacing
 * 
 * Usage:
 * <Section>Default section</Section>
 * <Section spacing="large" background="secondary">Featured section</Section>
 */
export function Section({
  spacing = "default",
  background = "primary",
  className,
  children,
  id,
}: SectionProps) {
  const hasRoundedCorners = background === "glass";
  const hasShadow = background === "glass" || background === "gradient";

  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        "transition-base",
        hasRoundedCorners && "rounded-2xl",
        hasShadow && "shadow-md",
        className
      )}
    >
      {children}
    </section>
  );
}
