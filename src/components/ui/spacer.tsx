import { cn } from "@/lib/utils";

type SpacerSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface SpacerProps {
  /** Size variant */
  size?: SpacerSize;
  /** Additional classes */
  className?: string;
}

const sizeClasses: Record<SpacerSize, string> = {
  sm: "h-8 md:h-12",    // 32px / 48px
  md: "h-12 md:h-20",   // 48px / 80px
  lg: "h-20 md:h-32",   // 80px / 128px
  xl: "h-28 md:h-40",   // 112px / 160px
  "2xl": "h-40 md:h-56", // 160px / 224px
};

/**
 * Spacer — Intentional vertical space
 * 
 * Usage:
 * <Spacer size="lg" />
 */
export function Spacer({ size = "md", className }: SpacerProps) {
  return (
    <div
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
    />
  );
}
