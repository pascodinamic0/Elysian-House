import { cn } from "@/lib/utils";

type SectionSpacing = "small" | "default" | "large";
type SectionBackground = "primary" | "secondary";

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
  small: "py-16 md:py-20",
  default: "py-20 md:py-32",
  large: "py-28 md:py-40",
};

const backgroundClasses: Record<SectionBackground, string> = {
  primary: "bg-[var(--color-linen)]",
  secondary: "bg-[var(--color-fog)]",
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
  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        "transition-colors duration-300",
        className
      )}
    >
      {children}
    </section>
  );
}
