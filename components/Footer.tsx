export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-[clamp(1rem,4vw,2rem)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span className="font-sans text-[clamp(12px,3.5vw,15px)] font-black uppercase tracking-[0.04em] text-sand">
          Founders Pickleball Club
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-tan sm:text-[11px] sm:tracking-[0.12em]">
          EST. 2026 · AOTEAROA NEW ZEALAND
        </span>
      </div>
    </footer>
  );
}
