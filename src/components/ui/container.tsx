import { cn } from "@/lib/utils";

type ContainerWidth = "full" | "content" | "narrow";

interface ContainerProps {
  /** Width variant */
  width?: ContainerWidth;
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
export function Container({
  width = "full",
  className,
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-12",
        widthClasses[width],
        className
      )}
    >
      {children}
    </Tag>
  );
}
