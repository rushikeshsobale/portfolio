import { stackGroups } from "@/data/content";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <Reveal>
      <section id="stack" className="mx-auto max-w-260 border-t border-line px-[7vw] py-17.5">
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          02 — Toolkit
        </span>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(26px,3.4vw,34px)] font-semibold tracking-[-0.01em]">
            Technical stack
          </h2>
          <span className="whitespace-nowrap font-mono text-[13px] text-slate">
            // what I build with
          </span>
        </div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 border-b border-line pb-2.5 font-mono text-[12.5px] uppercase tracking-[0.06em] text-slate">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-bg px-3 py-1.75 font-mono text-[13px] text-ink-soft transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
