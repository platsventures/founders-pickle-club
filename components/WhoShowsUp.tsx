import FadeIn from "./FadeIn";

const members = [
  {
    index: "01",
    title: "Founders",
    body: "Building something from scratch, or on your second act. Trade war stories between serves and meet people who get the journey.",
  },
  {
    index: "02",
    title: "Operators",
    body: "Engineers, PMs, and leaders who keep the machine running. The ones who make the thing actually work, day in and day out.",
  },
  {
    index: "03",
    title: "Backers",
    body: "Angels, advisors, and investors who'd rather rally than take another Zoom. Real relationships, forged on court.",
  },
];

export default function WhoShowsUp() {
  return (
    <section
      id="who"
      className="bg-ink px-4 py-12 text-sand sm:px-[clamp(1rem,4vw,2rem)] sm:py-[clamp(3rem,8vw,6rem)]"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-gold sm:mb-[clamp(1rem,3vw,1.5rem)] sm:text-[11px] sm:tracking-[0.14em]">
            Who should join
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2
            className="max-w-[620px] font-sans font-black leading-[0.95] text-sand"
            style={{ fontSize: "clamp(26px, 6.5vw, 48px)" }}
          >
            Part of the builder community in Aotearoa? You&apos;re in.
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mt-5 max-w-[620px] text-base leading-relaxed text-tan sm:mt-6 sm:text-[clamp(0.9375rem,2vw,1rem)]">
            Some of the best ideas and connections happen off-screen. Pickleball
            is fast, fun, and genuinely social. The perfect way to break the
            ice and build real relationships with people in your world.
          </p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-[clamp(2rem,5vw,3.5rem)] sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:gap-[clamp(1rem,3vw,1.5rem)]">
          {members.map((member, i) => (
            <FadeIn key={member.index} delay={0.1 + i * 0.05}>
              <article className="h-full rounded-card border-[1.5px] border-[#5a4433] p-5 sm:p-[clamp(1.25rem,3vw,1.75rem)]">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-gold sm:text-[11px] sm:tracking-[0.14em]">
                  {member.index}
                </p>
                <h3 className="mb-3 font-sans text-xl font-bold text-sand sm:text-2xl">
                  {member.title}
                </h3>
                <p className="text-base leading-relaxed text-tan sm:text-[clamp(0.9375rem,2vw,1rem)]">
                  {member.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
