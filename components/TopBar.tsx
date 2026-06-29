"use client";

import { useEffect, useState } from "react";
import { saasco } from "@/lib/saasco";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleJoinClick = () => {
    saasco.track("Apply CTA Clicked", { location: "nav" });
    setMenuOpen(false);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navLinkClass =
    "inline-flex min-h-11 items-center font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick";

  const mobileNavLinkClass =
    "flex min-h-12 items-center border-b border-ink/15 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick last:border-b-0";

  return (
    <header className="border-b-[1.5px] border-ink bg-sand">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-[clamp(1rem,4vw,2rem)] sm:py-4">
        <a
          href="#"
          className="font-sans text-[clamp(12px,3.5vw,15px)] font-black uppercase leading-tight tracking-[0.04em] text-ink"
        >
          FOUNDERS PICKLE CLUB
        </a>

        <nav
          className="hidden items-center gap-[clamp(0.75rem,3vw,1.5rem)] md:flex"
          aria-label="Main navigation"
        >
          <a href="#who" className={navLinkClass}>
            Who it&apos;s for
          </a>
          <a href="#where" className={navLinkClass}>
            Where
          </a>
          <a
            href="#apply"
            onClick={handleJoinClick}
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-brick px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-sand transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Join the club
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brick md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-ink/15 bg-sand px-4 py-2 md:hidden"
          aria-label="Mobile navigation"
        >
          <a href="#who" className={mobileNavLinkClass} onClick={handleNavClick}>
            Who it&apos;s for
          </a>
          <a href="#where" className={mobileNavLinkClass} onClick={handleNavClick}>
            Where
          </a>
          <a
            href="#apply"
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brick px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-sand transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={handleJoinClick}
          >
            Join the club
          </a>
        </nav>
      )}
    </header>
  );
}
