"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  submitApplication,
  type ApplicationFormState,
} from "@/app/actions/submit-application";
import { saasco } from "@/lib/saasco";
import FadeIn from "./FadeIn";

const initialState: ApplicationFormState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brick px-6 py-3.5 font-sans text-base font-extrabold text-sand transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-0 sm:text-[clamp(0.9375rem,2vw,1rem)]"
    >
      {pending ? "Submitting…" : "Submit application"}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-brick"
    >
      {message}
    </p>
  );
}

export default function ApplyForm() {
  const [state, formAction] = useFormState(submitApplication, initialState);
  const [showSuccess, setShowSuccess] = useState(false);
  const startedTracked = useRef(false);
  const submittedTracked = useRef(false);

  useEffect(() => {
    if (state.ok && !submittedTracked.current) {
      setShowSuccess(true);
      submittedTracked.current = true;
    }
  }, [state.ok]);

  const handleFieldInteraction = () => {
    if (!startedTracked.current) {
      saasco.track("Application Started");
      startedTracked.current = true;
    }
  };

  const handleSubmitAnother = () => {
    saasco.track("Submit Another Clicked");
    setShowSuccess(false);
    submittedTracked.current = false;
  };

  return (
    <section
      id="apply"
      className="bg-rust px-4 py-12 text-sand sm:px-[clamp(1rem,4vw,2rem)] sm:py-[clamp(3rem,8vw,6rem)]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[minmax(280px,1fr)_minmax(280px,1fr)] lg:gap-[clamp(2rem,5vw,3.5rem)]">
        <FadeIn>
          <div>
            <p className="mb-[clamp(1rem,3vw,1.5rem)] font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
              The application
            </p>
            <h2
              className="font-sans font-black leading-[0.92] text-sand"
              style={{ fontSize: "clamp(26px, 6.5vw, 48px)" }}
            >
              Apply to
              <br />
              join the club.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[#fbeeda] sm:mt-[clamp(1.25rem,3vw,2rem)] sm:text-[clamp(0.9375rem,2vw,1rem)]">
              No pickleball experience required. Just bring your energy and
              curiosity. Tell us a little about you and we&apos;ll reach out
              about your nearest court.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="rounded-[4px] bg-sand p-5 sm:p-[clamp(1.25rem,3vw,2rem)]">
            {showSuccess ? (
              <div className="py-4">
                <h3 className="font-sans text-[clamp(1.5rem,3vw,2rem)] font-black leading-tight text-ink">
                  You&apos;re in the queue!
                </h3>
                <p className="mt-4 text-[clamp(0.9375rem,2vw,1rem)] leading-relaxed text-clay">
                  Application received. We&apos;ll be in touch about your
                  nearest court within a few days. See you on the court.
                </p>
                <button
                  type="button"
                  onClick={handleSubmitAnother}
                  className="mt-6 inline-flex min-h-11 items-center rounded-full border-[1.5px] border-ink bg-transparent px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:text-[11px] sm:tracking-[0.12em]"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form action={formAction} noValidate={false}>
                {state.errors?._form && (
                  <p
                    className="mb-4 rounded-card border-[1.5px] border-brick bg-white/60 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-brick"
                    role="alert"
                  >
                    {state.errors._form}
                  </p>
                )}

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Plats Loukoianov"
                      onFocus={handleFieldInteraction}
                      aria-invalid={!!state.errors?.name}
                      aria-describedby={state.errors?.name ? "name-error" : undefined}
                      className="min-h-12 w-full rounded-card border-[1.5px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-stone/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:min-h-0 sm:text-[15px]"
                    />
                    <FieldError id="name-error" message={state.errors?.name} />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@startup.co.nz"
                      onFocus={handleFieldInteraction}
                      aria-invalid={!!state.errors?.email}
                      aria-describedby={state.errors?.email ? "email-error" : undefined}
                      className="min-h-12 w-full rounded-card border-[1.5px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-stone/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:min-h-0 sm:text-[15px]"
                    />
                    <FieldError id="email-error" message={state.errors?.email} />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                    >
                      Company / role
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Co-founder @ saasco.com"
                      onFocus={handleFieldInteraction}
                      aria-invalid={!!state.errors?.company}
                      aria-describedby={state.errors?.company ? "company-error" : undefined}
                      className="min-h-12 w-full rounded-card border-[1.5px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-stone/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:min-h-0 sm:text-[15px]"
                    />
                    <FieldError id="company-error" message={state.errors?.company} />
                  </div>

                  <div>
                    <label
                      htmlFor="reason"
                      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                    >
                      Why you want in
                    </label>
                    <textarea
                      id="reason"
                      name="reason"
                      required
                      rows={3}
                      placeholder="Keen to meet builders, learn the game, and bring good energy."
                      onFocus={handleFieldInteraction}
                      aria-invalid={!!state.errors?.reason}
                      aria-describedby={state.errors?.reason ? "reason-error" : undefined}
                      className="min-h-[7.5rem] w-full resize-y rounded-card border-[1.5px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-stone/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:min-h-0 sm:text-[15px]"
                    />
                    <FieldError id="reason-error" message={state.errors?.reason} />
                  </div>

                  <div
                    className="absolute -left-[9999px] h-px w-px overflow-hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <SubmitButton />
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
