import { cn } from "@/lib/utils";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

interface StackProps {
  /** Gap size */
  gap?: StackGap;
  /** Horizontal alignment */
  align?: "start" | "center" | "end" | "stretch";
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",   // 8px
  sm: "gap-4",   // 16px
  md: "gap-6",   // 24px
  lg: "gap-12",  // 48px
  xl: "gap-20",  // 80px
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

/**
 * Stack — Vertical spacing utility
 * 
 * Usage:
 * <Stack gap="md">
 *   <Heading>Title</Heading>
 *   <Text>Description</Text>
 * </Stack>
 */
export function Stack({
  gap = "md",
  align = "start",
  className,
  children,
}: StackProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        gapClasses[gap],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
}
