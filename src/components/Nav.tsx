"use client";

import { useState } from "react";
import { profile } from "@/data/content";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/86 backdrop-blur-md">
      <div className="mx-auto flex max-w-260 items-center justify-between px-[7vw] py-4.5">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium tracking-wide">
          <span className="h-1.75 w-1.75 rounded-full bg-accent shadow-[0_0_0_3px_var(--color-accent-soft)]" />
          {profile.handle}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="navLinks"
          className="rounded border border-line px-2.75 py-1.75 font-mono text-[13px] text-ink sm:hidden"
        >
          MENU
        </button>

        <nav
          id="navLinks"
          className={`fixed inset-x-0 top-16 flex flex-col gap-4.5 border-b border-line bg-bg px-[6vw] py-4.5 pb-6.5 transition-all duration-200 sm:static sm:flex sm:flex-row sm:gap-8 sm:border-none sm:bg-transparent sm:p-0 sm:opacity-100 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0 sm:pointer-events-auto sm:translate-y-0"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-sm border border-ink px-4 py-2 font-mono text-[13px] transition-colors hover:bg-ink hover:text-bg sm:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
