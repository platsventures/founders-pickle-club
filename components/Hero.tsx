"use client";

import { motion, useReducedMotion } from "framer-motion";
import { saasco } from "@/lib/saasco";
import FadeIn from "./FadeIn";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleApplyClick = () => {
    saasco.track("Apply CTA Clicked", { location: "hero" });
  };

  return (
    <section className="relative overflow-hidden bg-sand px-4 pb-12 pt-10 sm:px-[clamp(1rem,4vw,2rem)] sm:pb-[clamp(3rem,8vw,6rem)] sm:pt-[clamp(2.5rem,6vw,4rem)]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-6 z-0 h-[min(150px,42vw)] w-[min(150px,42vw)] rounded-full opacity-90 sm:-right-[clamp(40px,8vw,80px)] sm:-top-[clamp(40px,8vw,80px)] sm:h-[clamp(200px,48vw,380px)] sm:w-[clamp(200px,48vw,380px)]"
        style={{
          background:
            "repeating-linear-gradient(#E6A338 0 13px, #D4622B 13px 26px)",
        }}
        initial={shouldReduceMotion ? false : { scale: 0.85, opacity: 0 }}
        animate={
          shouldReduceMotion
            ? undefined
            : { scale: 1, opacity: 0.9, rotate: 360 }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                scale: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 1.2 },
                rotate: { duration: 120, repeat: Infinity, ease: "linear" },
              }
        }
      />

      <div className="relative z-10 mx-auto max-w-6xl pr-4 sm:pr-0">
        <FadeIn>
          <p className="mb-4 max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-brick sm:mb-[clamp(1rem,3vw,1.5rem)] sm:max-w-none sm:text-[11px] sm:tracking-[0.14em]">
            Aotearoa&apos;s pickleball society for builders
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1
            className="max-w-[14ch] font-sans font-black leading-[0.92] tracking-[-0.02em] text-ink sm:max-w-4xl"
            style={{ fontSize: "clamp(36px, 10vw, 92px)" }}
          >
            PADDLES UP,
            <br />
            FOUNDERS.
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-5 max-w-[520px] text-base leading-relaxed text-clay sm:mt-[clamp(1.25rem,3vw,2rem)] sm:text-[clamp(1rem,2.2vw,1.125rem)]">
            The founders, operators and builders of New Zealand — swapping the
            boardroom for the baseline. Good rallies, better connections, zero
            pitch decks.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-[clamp(1.5rem,4vw,2.5rem)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[clamp(0.75rem,2vw,1.25rem)]">
            <a
              href="#apply"
              onClick={handleApplyClick}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brick px-6 py-3 text-center font-sans text-base font-extrabold text-sand transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:min-h-0 sm:w-auto sm:text-[clamp(0.875rem,2vw,1rem)]"
            >
              Apply to join →
            </a>
            <span className="text-center font-mono text-[10px] uppercase tracking-[0.12em] text-stone sm:text-left sm:text-[11px]">
              Members only · By application
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
