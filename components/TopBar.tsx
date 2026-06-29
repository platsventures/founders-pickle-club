"use client";

import { saasco } from "@/lib/saasco";

export default function TopBar() {
  const handleJoinClick = () => {
    saasco.track("Apply CTA Clicked", { location: "nav" });
  };

  const navLinkClass =
    "inline-flex min-h-11 items-center font-mono text-[10px] uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick sm:text-[11px] sm:tracking-[0.12em]";

  return (
    <header className="border-b-[1.5px] border-ink bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-[clamp(1rem,4vw,2rem)] sm:py-4 md:flex-row md:items-center md:justify-between md:gap-4">
        <a
          href="#"
          className="font-sans text-[clamp(12px,3.5vw,15px)] font-black uppercase leading-tight tracking-[0.04em] text-ink"
        >
          FOUNDERS PICKLE CLUB
        </a>

        <nav className="flex w-full items-center justify-between gap-2 sm:justify-end sm:gap-[clamp(0.75rem,3vw,1.5rem)] md:w-auto">
          <a href="#who" className={navLinkClass}>
            Who it&apos;s for
          </a>
          <a href="#where" className={navLinkClass}>
            Where
          </a>
          <a
            href="#apply"
            onClick={handleJoinClick}
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-brick px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-sand transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:text-[11px] sm:tracking-[0.12em]"
          >
            Join the club
          </a>
        </nav>
      </div>
    </header>
  );
}
