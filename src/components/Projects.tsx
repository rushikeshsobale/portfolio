import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section id="projects" className="mx-auto max-w-260 border-t border-line px-[7vw] py-17.5">
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          05 — Selected work
        </span>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(26px,3.4vw,34px)] font-semibold tracking-[-0.01em]">
            Projects
          </h2>
          <span className="whitespace-nowrap font-mono text-[13px] text-slate">
            // web, mobile & IoT
          </span>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </Reveal>
  );
}
