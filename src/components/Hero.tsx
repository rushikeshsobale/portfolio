import { hero, profile, roleLine } from "@/data/content";
import PingBadge from "./PingBadge";

export default function Hero() {
  const [before, accent, after] = splitAccent(hero.heading, hero.accentWord);

  return (
    <section className="mx-auto max-w-260 px-[7vw] pt-22.5 pb-20">
      <div className="mb-9 inline-flex items-center gap-2.5 rounded-full border border-line bg-bg-raised px-3.5 py-1.75 font-mono text-[13px] text-slate">
        <span className="h-1.75 w-1.75 flex-none animate-[pulse-blip_2.2s_ease-in-out_infinite] rounded-full bg-good" />
        <span>build: stable</span>
        <span className="text-line">/</span>
        <span className="text-ink-soft">
          latency <PingBadge />ms
        </span>
        <span className="text-line">/</span>
        <span>{profile.location}</span>
      </div>

      <h1 className="max-w-195 font-display text-[clamp(36px,6vw,64px)] leading-[1.08] font-semibold tracking-[-0.01em]">
        {before}
        <span className="text-accent">{accent}</span>
        {after}
      </h1>

      <div className="mt-5.5 flex flex-wrap items-center gap-2 font-mono text-[15px] text-slate">
        {roleLine.map((role, i) => (
          <span key={role} className="flex items-center gap-2">
            {i > 0 && <span className="text-line">·</span>}
            {role}
          </span>
        ))}
      </div>

      <p className="mt-6.5 max-w-145 text-lg leading-relaxed text-ink-soft">
        {hero.lede}
      </p>

      <div className="mt-9.5 flex flex-wrap gap-3.5">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded bg-ink px-6 py-3.25 text-[14.5px] font-medium text-bg transition-all hover:-translate-y-px hover:bg-accent"
        >
          View projects →
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded border border-line px-6 py-3.25 text-[14.5px] font-medium text-ink transition-all hover:-translate-y-px hover:border-ink"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function splitAccent(heading: string, accentWord: string): [string, string, string] {
  const idx = heading.indexOf(accentWord);
  if (idx === -1) return [heading, "", ""];
  return [
    heading.slice(0, idx),
    heading.slice(idx, idx + accentWord.length),
    heading.slice(idx + accentWord.length),
  ];
}
