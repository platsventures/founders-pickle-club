"use client";

import { saasco } from "@/lib/saasco";
import FadeIn from "./FadeIn";

type City = {
  name: string;
  variant: "gold" | "peach" | "outline";
};

const cities: City[] = [{ name: "Auckland", variant: "gold" }];

const variantClasses: Record<City["variant"], string> = {
  gold: "bg-gold text-ink border-gold",
  peach: "bg-peach text-ink border-peach",
  outline: "bg-transparent text-ink border-ink",
};

export default function Courts() {
  const handleCityClick = (city: string) => {
    saasco.track("City Pill Clicked", { city });
  };

  return (
    <section
      id="where"
      className="bg-sand px-4 py-12 sm:px-[clamp(1rem,4vw,2rem)] sm:py-[clamp(3rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:gap-[clamp(1.5rem,4vw,2.5rem)] lg:flex-row lg:items-start lg:justify-between">
          <FadeIn>
            <h2
              className="font-sans font-black leading-[0.92] text-ink"
              style={{ fontSize: "clamp(26px, 6.5vw, 48px)" }}
            >
              Courts across
              <br />
              Aotearoa.
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="max-w-full font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-stone sm:max-w-[360px] sm:text-[11px] sm:tracking-[0.12em]">
              Weekly casual sessions, post-court hangouts, and the occasional
              clinic or round-robin. Auckland live now. More cities as
              members land.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-[clamp(2rem,5vw,3rem)] sm:gap-3">
            {cities.map((city) => (
              <button
                key={city.name}
                type="button"
                onClick={() => handleCityClick(city.name)}
                className={`inline-flex min-h-11 items-center justify-center rounded-full border-[1.5px] px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:min-h-0 sm:px-5 sm:text-[11px] sm:tracking-[0.12em] ${variantClasses[city.variant]}`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
