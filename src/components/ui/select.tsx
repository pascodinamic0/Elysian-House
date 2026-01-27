"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label */
  label: string;
  /** Options to display */
  options: SelectOption[];
  /** Error message */
  error?: string;
  /** Helper text */
  hint?: string;
}

/**
 * Select — Dropdown select field
 * 
 * Usage:
 * <Select
 *   label="How did you hear about us?"
 *   name="source"
 *   options={[
 *     { value: "", label: "Select an option" },
 *     { value: "instagram", label: "Instagram" },
 *   ]}
 * />
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, hint, className, id, ...props }, ref) => {
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
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              "w-full px-4 py-3 pr-10",
              "bg-transparent",
              "border border-[var(--color-dusk)]/30",
              "font-sans text-[1rem] text-[var(--color-stone)]",
              "transition-colors duration-200",
              "focus:border-[var(--color-clay)] focus:outline-none",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "appearance-none cursor-pointer",
              error && "border-[var(--color-error)] focus:border-[var(--color-error)]",
              className
            )}
            aria-invalid={error ? "true" : undefined}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <svg
              className="h-4 w-4 text-[var(--color-dusk)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
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

Select.displayName = "Select";
