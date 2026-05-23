import { PROFILE } from "@/lib/data";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="reveal glass rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">
                Let&apos;s <span className="grad-text">launch</span> something together.
              </h3>
              <p className="mt-2 text-white/65">
                Reach out via email or LINE — usually responds within an Earth day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                <Icon.mail className="h-4 w-4" /> Send Email
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
              >
                <Icon.github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          © {new Date().getFullYear()} · Pinmanat Nankat · transmitted from earth
        </p>
      </div>
    </footer>
  );
}
