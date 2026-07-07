import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-260 flex-wrap items-center justify-between gap-3 border-t border-line px-[7vw] py-7">
      <p className="font-mono text-[12.5px] text-slate">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-[12.5px] text-slate">
        Built with Next.js, Tailwind CSS &amp; TypeScript. Deployed on Vercel.
      </p>
    </footer>
  );
}
