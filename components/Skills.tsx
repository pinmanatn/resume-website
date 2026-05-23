"use client";

import { useEffect, useRef, useState } from "react";
import { SKILLS } from "@/lib/data";
import { Icon, SectionHeader } from "./Icons";

export default function Skills() {
  return (
    <section data-screen-label="05 Skills" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader num="05" kicker="Equipment loadout" title="Skills" icon={Icon.rocket} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILLS.map((g, i) => (
            <div key={i} className="reveal glass rounded-3xl p-7">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-white">{g.group}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300/80">
                  {g.items.length} {g.items.length === 1 ? "skill" : "skills"}
                </span>
              </div>

              <div className="space-y-4">
                {g.items.map((s) => (
                  <SkillBar key={s.name} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; level: number } }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const check = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        setW(skill.level);
        window.removeEventListener("scroll", check);
      }
    };
    const t = setTimeout(check, 80);
    window.addEventListener("scroll", check, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", check);
    };
  }, [skill.level]);

  const tier =
    skill.level >= 85 ? "Expert" :
    skill.level >= 70 ? "Advanced" :
    skill.level >= 55 ? "Intermediate" : "Basic";

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm text-white/90">{skill.name}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/80">
          {tier} · {skill.level}%
        </span>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="skill-fill relative h-full rounded-full"
          style={{
            width: `${w}%`,
            background: "linear-gradient(90deg, #a78bfa, #f472b6, #67e8f9)",
            boxShadow: "0 0 12px rgba(244,114,182,0.45)",
            transition: "width 1.4s cubic-bezier(.2,.7,.3,1)",
          }}
        />
      </div>
    </div>
  );
}
