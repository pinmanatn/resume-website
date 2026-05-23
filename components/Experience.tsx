import { EXPERIENCE } from "@/lib/data";
import { Icon, SectionHeader } from "./Icons";

export default function Experience({ layout = "timeline" }: { layout?: "timeline" | "cards" }) {
  return (
    <section data-screen-label="03 Experience" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader num="03" kicker="Mission log" title="Experience" icon={Icon.briefcase} />
        {layout === "timeline" ? <Timeline /> : <CardsLayout />}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-fuchsia-400/30 to-transparent md:left-6" />
      <div className="space-y-10">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="reveal relative pl-14 md:pl-20">
            <div
              className={`absolute left-1.5 top-2 h-5 w-5 rounded-full border-2 border-violet-300 bg-[#02010a] md:left-3.5 ${
                exp.current ? "pulse-dot" : ""
              }`}
            >
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
            </div>

            <div className="glass rounded-2xl p-6 md:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-display text-xl font-semibold text-white md:text-2xl">{exp.role}</div>
                  <div className="mt-1 text-violet-200">{exp.company}</div>
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">
                  {exp.period}
                  {exp.current && (
                    <span className="ml-2 inline-block rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-200">
                      CURRENT
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-white/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-300" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardsLayout() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {EXPERIENCE.map((exp, i) => (
        <div key={i} className="reveal glass relative overflow-hidden rounded-3xl p-7">
          <div
            className="absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full opacity-40 blur-2xl"
            style={{ background: i === 0 ? "#a855f7" : "#06b6d4" }}
          />
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-white/60">{exp.period}</div>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">{exp.role}</h3>
          <div className="mt-0.5 text-violet-200">{exp.company}</div>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-white/75">
            {exp.bullets.slice(0, 5).map((b, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-300" />
                <span>{b}</span>
              </li>
            ))}
            {exp.bullets.length > 5 && (
              <li className="pl-3 text-xs text-white/50">+ {exp.bullets.length - 5} more</li>
            )}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
