import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "display" | "section" | "subsection";

interface HeadingProps {
  /** Semantic heading level (h1, h2, h3, h4) */
  level?: HeadingLevel;
  /** Visual size variant */
  size?: HeadingSize;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** Enable text balancing for better line breaks */
  balance?: boolean;
}

const sizeClasses: Record<HeadingSize, string> = {
  display:
    "text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.1] tracking-[-0.02em]",
  section:
    "text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] tracking-[-0.015em]",
  subsection:
    "text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] tracking-[-0.01em]",
};

/**
 * Heading — Editorial serif headlines
 * 
 * Usage:
 * <Heading level={1} size="display">Main headline</Heading>
 * <Heading level={2} size="section">Section title</Heading>
 */
export function Heading({
  level = 1,
  size = "section",
  className,
  children,
  balance = true,
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "font-serif font-normal text-[var(--color-stone)] transition-colors duration-300 mb-0",
        sizeClasses[size],
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Tag>
  );
}
