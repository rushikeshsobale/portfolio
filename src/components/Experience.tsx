import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Reveal>
      <section id="experience" className="mx-auto max-w-260 border-t border-line px-[7vw] py-17.5">
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          04 — Experience
        </span>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(26px,3.4vw,34px)] font-semibold tracking-[-0.01em]">
            Where I&apos;ve worked
          </h2>
          <span className="whitespace-nowrap font-mono text-[13px] text-slate">
            // employment history
          </span>
        </div>
        {experience.map((job) => (
          <div
            key={job.company}
            className="grid grid-cols-1 gap-2.5 border-b border-line py-7 last:border-none sm:grid-cols-[200px_1fr] sm:gap-8"
          >
            <div className="font-mono text-[13px] text-slate">
              {job.period}
              <br />
              {job.duration}
              <span className="mt-2 inline-block rounded-sm bg-accent-soft px-2 py-0.75 text-[11px] text-accent">
                {job.badge}
              </span>
            </div>
            <div>
              <h3 className="mb-1 font-display text-[19px] font-semibold">{job.role}</h3>
              <div className="mb-4 text-[14.5px] text-slate">{job.company}</div>
              <ul className="flex flex-col gap-2.5">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-4.5 text-[15px] text-ink-soft">
                    <span className="absolute left-0 top-2.25 h-px w-1.5 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Reveal>
  );
}
