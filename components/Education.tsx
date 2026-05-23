import { EDUCATION } from "@/lib/data";
import { Icon, SectionHeader } from "./Icons";

export default function Education() {
  const ed = EDUCATION[0];
  return (
    <section data-screen-label="02 Education" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader num="02" kicker="Academic orbit" title="Education" icon={Icon.cap} />

        <div className="reveal glass relative overflow-hidden rounded-3xl p-8 md:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-2xl"
            style={{ background: "radial-gradient(circle at 30% 30%, #f472b6, #7c3aed 70%)" }}
          />

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 font-display text-2xl font-bold text-white">
              {ed.short}
            </div>

            <div className="flex-1">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300/80">
                {ed.period}
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {ed.school}
              </h3>
              <p className="mt-1 text-white/70">{ed.faculty}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                <Stat label="Degree" value={ed.degree} />
                <Stat label="Major" value={ed.major} />
                <Stat label="GPA" value={ed.gpa} accent />
                <Stat label="Honor" value={ed.honor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        accent ? "border-fuchsia-400/40 bg-fuchsia-500/10" : "border-white/10 bg-white/5"
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/80">{label}</div>
      <div className={`mt-1 font-display text-base font-semibold ${accent ? "text-fuchsia-100" : "text-white"}`}>
        {value}
      </div>
    </div>
  );
}
