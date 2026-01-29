import { cn } from "@/lib/utils";

type ContainerWidth = "full" | "content" | "narrow";
type ContainerVariant = "default" | "glass";

interface ContainerProps {
  /** Width variant */
  width?: ContainerWidth;
  /** Visual variant */
  variant?: ContainerVariant;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** HTML element to render */
  as?: "div" | "section" | "article" | "main";
}

const widthClasses: Record<ContainerWidth, string> = {
  full: "max-w-[75rem]",      // 1200px
  content: "max-w-[60rem]",   // 960px
  narrow: "max-w-[45rem]",    // 720px
};

/**
 * Container — Content width constraint
 * 
 * Usage:
 * <Container>Full-width content</Container>
 * <Container width="narrow">Text-optimized content</Container>
 */
const variantClasses: Record<ContainerVariant, string> = {
  default: "",
  glass: "bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)] rounded-2xl shadow-md p-8 md:p-12",
};

export function Container({
  width = "full",
  variant = "default",
  className,
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full",
        variant === "default" ? "px-6 md:px-12" : "",
        widthClasses[width],
        variantClasses[variant],
        "transition-base",
        className
      )}
    >
      {children}
    </Tag>
  );
}
