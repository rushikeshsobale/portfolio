import Image from "next/image";
import { about, profile } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="about" className="mx-auto max-w-260 border-t border-line px-[7vw] py-17.5">
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          01 — About
        </span>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_280px] md:gap-15">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4.5 max-w-150 text-[16.5px] text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-9">
              {about.facts.map((fact) => (
                <div key={fact.label} className="font-mono">
                  <span className="block text-[26px] font-medium text-ink">{fact.num}</span>
                  <span className="mt-1 block text-[12.5px] text-slate">{fact.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[1/1.1] max-w-55 overflow-hidden rounded-md border border-line bg-bg-raised md:max-w-none">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
