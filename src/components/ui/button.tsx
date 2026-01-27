import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "large";

interface ButtonBaseProps {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size variant */
  size?: ButtonSize;
  /** Additional classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

interface ButtonAsButton extends ButtonBaseProps {
  /** Render as button */
  href?: never;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: "button" | "submit";
  /** Loading state */
  loading?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  /** Render as link */
  href: string;
  /** External link */
  external?: boolean;
  onClick?: never;
  type?: never;
  loading?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-8 py-4 text-[1rem]",
  large: "px-10 py-5 text-[1.125rem]",
};

/**
 * Button — Primary call-to-action
 * 
 * Usage:
 * <Button href="/register">Request Invitation</Button>
 * <Button variant="secondary" onClick={handleClick}>Learn More</Button>
 * <Button type="submit" loading={isSubmitting}>Submit</Button>
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "default",
    className,
    children,
    disabled,
  } = props;

  const baseClasses = cn(
    "inline-flex items-center justify-center",
    "font-sans font-medium",
    "transition-all duration-200 ease-out",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    sizeClasses[size],
    // Variant-specific layout classes (not colors)
    variant === "ghost" && "underline underline-offset-4",
    variant === "secondary" && "border",
    className
  );

  // Get variant styles as inline styles for proper CSS variable support
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: "var(--color-stone)",
          color: "var(--color-linen)",
          borderColor: "transparent",
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: "var(--color-stone)",
          borderColor: "var(--color-stone)",
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          color: "var(--color-stone)",
        };
      default:
        return {};
    }
  };

  const variantStyles = getVariantStyles();

  // Render as link
  if ("href" in props && props.href) {
    const { href, external } = props;

    if (external) {
      return (
        <a
          href={href}
          className={baseClasses}
          style={variantStyles}
          data-variant={variant}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses} style={variantStyles} data-variant={variant}>
        {children}
      </Link>
    );
  }

  // Render as button
  const { onClick, type = "button", loading } = props as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
      style={variantStyles}
      data-variant={variant}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
