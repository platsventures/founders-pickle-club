import "server-only";

import { saasco } from "./saasco";

export type ApplicationInput = {
  name: string;
  email: string;
  company: string;
  reason: string;
};

export async function captureLead(input: ApplicationInput): Promise<void> {
  try {
    const identifyResult = await saasco.identify(input.email, {
      email: input.email,
      name: input.name,
      company: input.company,
      reason: input.reason,
      source: "founders-pickle-club",
    });

    if (!identifyResult.success) {
      throw new Error(identifyResult.message);
    }

    const trackResult = await saasco.track({
      event: "Application Submitted",
      userId: input.email,
      properties: {
        company: input.company,
        reason: input.reason,
        name: input.name,
      },
    });

    if (!trackResult.success) {
      throw new Error(trackResult.message);
    }
  } catch (error) {
    console.error("[captureLead] SaaSco CRM sync failed:", error);
    throw error;
  }
}
