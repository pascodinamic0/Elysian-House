import { cn } from "@/lib/utils";

type TextSize = "large" | "base" | "small";
type TextColor = "primary" | "secondary" | "tertiary";
type TextAs = "p" | "span" | "div";

interface TextProps {
  /** Visual size variant */
  size?: TextSize;
  /** Color variant */
  color?: TextColor;
  /** HTML element to render */
  as?: TextAs;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** Enable text balancing */
  balance?: boolean;
}

const sizeClasses: Record<TextSize, string> = {
  large: "text-[1.375rem] leading-[1.7] md:text-[1.5rem] md:leading-[1.75]",
  base: "text-[1.125rem] leading-[1.75]",
  small: "text-[1rem] leading-[1.7]",
};

const colorClasses: Record<TextColor, string> = {
  primary: "text-[var(--color-stone)]",
  secondary: "text-[var(--color-dusk)]",
  tertiary: "text-[var(--color-mist)]",
};

/**
 * Text — Body copy with variants
 * 
 * Usage:
 * <Text size="large">Introductory paragraph</Text>
 * <Text color="secondary" size="small">Caption text</Text>
 */
export function Text({
  size = "base",
  color = "primary",
  as: Tag = "p",
  className,
  children,
  balance = false,
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans max-w-[65ch] transition-colors duration-300",
        sizeClasses[size],
        colorClasses[color],
        balance && "text-balance",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Caption — Small supporting text
 */
export function Caption({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "font-sans text-[0.875rem] leading-[1.5] text-[var(--color-dusk)] transition-colors duration-300",
        className
      )}
    >
      {children}
    </span>
  );
}
