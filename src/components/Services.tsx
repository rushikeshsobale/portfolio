import { services } from "@/data/content";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Reveal>
      <section id="services" className="mx-auto max-w-260 border-t border-line px-[7vw] py-17.5">
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          03 — Freelance
        </span>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(26px,3.4vw,34px)] font-semibold tracking-[-0.01em]">
            What I can build for you
          </h2>
          <span className="whitespace-nowrap font-mono text-[13px] text-slate">
            // available for contract work
          </span>
        </div>
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-lg border border-line p-5">
              <h3 className="text-[15px] font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
