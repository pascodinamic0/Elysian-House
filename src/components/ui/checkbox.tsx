"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Field label */
  label: string;
  /** Error message */
  error?: string;
}

/**
 * Checkbox — Checkbox input with label
 * 
 * Usage:
 * <Checkbox
 *   label="I'd like to receive updates about this gathering"
 *   name="consent"
 *   required
 * />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className={cn(
            "flex items-start gap-3 cursor-pointer",
            "font-sans text-[0.9375rem] text-[var(--color-stone)] leading-relaxed",
            className
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={cn(
              "mt-1 h-5 w-5 shrink-0",
              "border border-[var(--color-dusk)]/30",
              "bg-transparent",
              "transition-colors duration-200",
              "checked:bg-[var(--color-stone)] checked:border-[var(--color-stone)]",
              "focus:ring-2 focus:ring-[var(--color-clay)] focus:ring-offset-2 focus:ring-offset-[var(--color-linen)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-[var(--color-error)]"
            )}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          <span>
            {label}
            {props.required && (
              <span className="ml-1 text-[var(--color-dusk)]" aria-hidden="true">
                *
              </span>
            )}
          </span>
        </label>
        {error && (
          <span
            id={`${inputId}-error`}
            className="text-[0.875rem] text-[var(--color-error)]"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
