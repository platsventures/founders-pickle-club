"use server";

import { z } from "zod";
import { captureLead } from "@/lib/submit-application";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company / role must be at least 2 characters"),
  reason: z.string().min(10, "Tell us a bit more (at least 10 characters)"),
  website: z.string().max(0, "Invalid submission"),
});

export type ApplicationFormState = {
  ok: boolean;
  errors?: Record<string, string>;
};

const initialErrors = {} as Record<string, string>;

export async function submitApplication(
  _prevState: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    reason: formData.get("reason"),
    website: formData.get("website") ?? "",
  };

  const parsed = applicationSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: Record<string, string> = { ...initialErrors };
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !errors[field]) {
        errors[field] = issue.message;
      }
    }
    return { ok: false, errors };
  }

  if (parsed.data.website) {
    return { ok: false, errors: { _form: "Invalid submission" } };
  }

  try {
    await captureLead({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      reason: parsed.data.reason,
    });
    return { ok: true };
  } catch (error) {
    console.error("[submitApplication] Failed:", error);
    return {
      ok: false,
      errors: { _form: "Something went wrong. Try again." },
    };
  }
}
