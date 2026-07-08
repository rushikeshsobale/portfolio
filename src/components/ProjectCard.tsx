import Image from "next/image";
import type { Project } from "@/data/content";
import { ExternalLinkIcon, GithubIcon } from "./icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="mb-7 overflow-hidden rounded-lg border border-line transition-all hover:border-[#d8d7d2] hover:shadow-[0_6px_24px_-8px_rgba(28,28,30,0.08)]">
      <div className="flex flex-col gap-5 px-7 pt-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-[21px] font-semibold">{project.title}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.25 py-0.75 font-mono text-[11px] text-accent">
              <span className="h-1.25 w-1.25 rounded-full bg-accent" />
              {project.status}
            </span>
          </div>
          <div className="mt-1.5 text-[14.5px] text-slate">{project.tagline}</div>
        </div>
        <div className="flex flex-none gap-2.5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className="flex h-8.5 w-8.5 items-center justify-center rounded-md border border-line transition-colors hover:border-ink hover:bg-bg-raised"
            >
              {link.type === "github" ? (
                <GithubIcon className="h-3.75 w-3.75" />
              ) : (
                <ExternalLinkIcon className="h-3.75 w-3.75" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="px-7 pt-5 pb-7">
        <p className="mb-4 max-w-170 text-[15px] text-ink-soft">{project.description}</p>
        <ul className="mb-4.5 grid grid-cols-1 gap-x-5 gap-y-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="relative pl-4 text-sm text-ink-soft">
              <span className="absolute left-0 top-2 h-px w-1.25 bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.75">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-bg-raised px-2.25 py-1 font-mono text-[11.5px] text-slate"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.images && project.images.length > 0 ? (
        <div className="flex aspect-[16/8] gap-px overflow-hidden border-t border-line bg-line">
          {project.images.map((src) => (
            <div key={src} className="relative min-w-0 flex-1 bg-bg-raised">
              <Image
                src={src}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, 800px"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex aspect-[16/8] items-center justify-center border-t border-line bg-bg-raised font-mono text-[12.5px] text-slate">
          project screenshot — swap me
        </div>
      )}
    </div>
  );
}
