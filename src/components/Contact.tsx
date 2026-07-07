import { profile } from "@/data/content";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";

export default function Contact() {
  return (
    <Reveal>
      <section
        id="contact"
        className="mx-auto max-w-260 border-t border-line px-[7vw] pt-17.5 pb-22.5 text-left"
      >
        <span className="mb-3.5 block font-mono text-[12.5px] uppercase tracking-[0.08em] text-accent">
          06 — Contact
        </span>
        <h2 className="max-w-150 font-display text-[clamp(30px,5vw,46px)] font-semibold leading-[1.15] tracking-[-0.01em]">
          Let&apos;s build something that runs in production.
        </h2>
        <p className="mt-4.5 max-w-125 text-[17px] text-ink-soft">
          Open to full-time engineering roles and freelance/contract projects. Reach out and
          I&apos;ll get back to you quickly.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href={`mailto:${profile.email}`}
            className="flex min-w-55 flex-1 items-center gap-3 rounded-md border border-line px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <MailIcon className="h-4.5 w-4.5 flex-none text-accent" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-slate">
                Email
              </div>
              <div className="mt-0.5 text-[14.5px] font-medium break-words text-ink">
                {profile.email}
              </div>
            </div>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="flex min-w-55 flex-1 items-center gap-3 rounded-md border border-line px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <PhoneIcon className="h-4.5 w-4.5 flex-none text-accent" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-slate">
                Phone
              </div>
              <div className="mt-0.5 text-[14.5px] font-medium break-words text-ink">
                {profile.phone}
              </div>
            </div>
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-55 flex-1 items-center gap-3 rounded-md border border-line px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <GithubIcon className="h-4.5 w-4.5 flex-none text-accent" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-slate">
                GitHub
              </div>
              <div className="mt-0.5 text-[14.5px] font-medium break-words text-ink">
                {profile.githubHandle}
              </div>
            </div>
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-55 flex-1 items-center gap-3 rounded-md border border-line px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent"
          >
            <LinkedinIcon className="h-4.5 w-4.5 flex-none text-accent" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.05em] text-slate">
                LinkedIn
              </div>
              <div className="mt-0.5 text-[14.5px] font-medium break-words text-ink">
                {profile.linkedinHandle}
              </div>
            </div>
          </a>
        </div>
      </section>
    </Reveal>
  );
}
