"use client";

import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@/components/ui";
import { registerPage } from "@/content/copy";

interface FormData {
  name: string;
  email: string;
  phone: string;
  hoping: string;
  anything: string;
  contactMethods: string[];
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  consent?: string;
  form?: string;
}

interface RegistrationFormProps {
  onSuccess: () => void;
}

/**
 * RegistrationForm — The registration form
 */
export function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const { form, errors: errorMessages } = registerPage;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    hoping: "",
    anything: "",
    contactMethods: [],
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = errorMessages.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = errorMessages.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = errorMessages.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = errorMessages.phoneRequired;
    }

    if (!formData.consent) {
      newErrors.consent = errorMessages.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      onSuccess();
    } catch {
      setErrors({ form: errorMessages.generic });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleContactMethodChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      contactMethods: prev.contactMethods.includes(value)
        ? prev.contactMethods.filter((m) => m !== value)
        : [...prev.contactMethods, value],
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full p-8 md:p-12 rounded-2xl shadow-md transition-base flex flex-col gap-12"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(var(--glass-blur))",
        border: "1px solid var(--glass-border)",
      }}
    >
      <Input
        label={form.nameLabel}
        name="name"
        type="text"
        placeholder={form.namePlaceholder}
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        autoComplete="name"
      />

      <Input
        label={form.emailLabel}
        name="email"
        type="email"
        placeholder={form.emailPlaceholder}
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        autoComplete="email"
      />

      <Input
        label={form.phoneLabel}
        name="phone"
        type="tel"
        placeholder={form.phonePlaceholder}
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        required
        autoComplete="tel"
      />

      <Textarea
        label={form.hopingLabel}
        name="hoping"
        placeholder={form.hopingPlaceholder}
        value={formData.hoping}
        onChange={handleChange}
        rows={3}
        maxLength={500}
      />

      <Textarea
        label={form.anythingLabel}
        name="anything"
        placeholder={form.anythingPlaceholder}
        value={formData.anything}
        onChange={handleChange}
        rows={3}
        maxLength={500}
      />

      <div className="flex flex-col gap-3">
        <label className="text-[0.9375rem] font-medium text-[var(--color-text)]">
          {form.contactLabel}
        </label>
        <div className="flex flex-col gap-2">
          {form.contactOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.contactMethods.includes(option.value)}
                onChange={() => handleContactMethodChange(option.value)}
                className="w-5 h-5 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
              />
              <span className="text-[0.9375rem] text-[var(--color-text)]">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Checkbox
        label={form.consentLabel}
        name="consent"
        checked={formData.consent}
        onChange={handleChange}
        error={errors.consent}
        required
      />

      {errors.form && (
        <p className="text-[var(--color-error)] text-[0.9375rem]" role="alert">
          {errors.form}
        </p>
      )}

      <div className="pt-4 flex justify-center">
        <Button
          type="submit"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? form.submittingButton : form.submitButton}
        </Button>
      </div>
    </form>
  );
}
