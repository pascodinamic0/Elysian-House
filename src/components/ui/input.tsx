"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text */
  hint?: string;
}

/**
 * Input — Text input field
 * 
 * Usage:
 * <Input
 *   label="Full name"
 *   name="name"
 *   placeholder="Your name"
 *   error={errors.name}
 * />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="font-sans text-[0.9375rem] font-medium text-[var(--color-stone)]"
        >
          {label}
          {props.required && (
            <span className="ml-1 text-[var(--color-dusk)]" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-4 py-3",
            "bg-[var(--color-fog)]/30 dark:bg-[var(--color-fog)]/20",
            "border border-[var(--color-dusk)]/30",
            "rounded-lg",
            "font-sans text-[1rem] text-[var(--color-stone)]",
            "placeholder:text-[var(--color-dusk)]/50",
            "transition-base",
            "focus:border-[var(--color-clay)] focus:outline-none focus:ring-2 focus:ring-[var(--color-clay)]/20 focus:bg-[var(--color-fog)]/40 dark:focus:bg-[var(--color-fog)]/30",
            "hover:border-[var(--color-dusk)]/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          {...props}
        />
        {hint && !error && (
          <span
            id={`${inputId}-hint`}
            className="text-[0.875rem] text-[var(--color-dusk)]"
          >
            {hint}
          </span>
        )}
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

Input.displayName = "Input";
