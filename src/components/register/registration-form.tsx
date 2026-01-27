"use client";

import { useState } from "react";
import {
  Stack,
  Button,
  Input,
  Textarea,
  Select,
  Checkbox,
} from "@/components/ui";
import { registerPage } from "@/content/copy";

interface FormData {
  name: string;
  email: string;
  message: string;
  source: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
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
    message: "",
    source: "",
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

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <Stack gap="lg" align="stretch">
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

        <Textarea
          label={form.messageLabel}
          name="message"
          placeholder={form.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={500}
        />

        <Select
          label={form.sourceLabel}
          name="source"
          options={form.sourceOptions}
          value={formData.source}
          onChange={handleChange}
        />

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
      </Stack>
    </form>
  );
}
