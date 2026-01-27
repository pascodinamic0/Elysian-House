"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Field label */
  label: string;
  /** Error message */
  error?: string;
  /** Helper text */
  hint?: string;
}

/**
 * Textarea — Multi-line text input
 * 
 * Usage:
 * <Textarea
 *   label="What brings you to this gathering?"
 *   name="message"
 *   rows={4}
 *   placeholder="Share as much or as little as you'd like..."
 * />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, id, rows = 4, ...props }, ref) => {
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
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={cn(
            "w-full px-4 py-3",
            "bg-transparent",
            "border border-[var(--color-dusk)]/30",
            "font-sans text-[1rem] text-[var(--color-stone)]",
            "placeholder:text-[var(--color-dusk)]/50",
            "transition-colors duration-200",
            "focus:border-[var(--color-clay)] focus:outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "resize-y min-h-[120px]",
            error && "border-[var(--color-error)] focus:border-[var(--color-error)]",
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

Textarea.displayName = "Textarea";
