import { PROJECTS } from "@/lib/data";
import { Icon, SectionHeader } from "./Icons";

export default function Projects() {
  return (
    <section data-screen-label="04 Projects" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader num="04" kicker="Launches" title="Projects" icon={Icon.folder} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={i} className="reveal glass group overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      i === 0
                        ? "radial-gradient(circle at 30% 30%, #a855f7 0%, #1e1b4b 60%, #02010a 100%)"
                        : i === 1
                        ? "radial-gradient(circle at 70% 40%, #ec4899 0%, #4c1d95 50%, #02010a 100%)"
                        : "radial-gradient(circle at 50% 60%, #06b6d4 0%, #1e3a8a 50%, #02010a 100%)",
                  }}
                />
                <MiniStars />
                <div className="absolute top-3 left-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute inset-0">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>
                
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-white/40">
          ◌ More projects coming soon — slots reserved for upcoming launches.
        </p>
      </div>
    </section>
  );
}

function MiniStars() {
  // Deterministic positions so SSR + CSR match.
  const stars = Array.from({ length: 20 }, (_, i) => ({
    top: (i * 53) % 100,
    left: (i * 37 + 7) % 100,
    op: 0.4 + ((i * 31) % 60) / 100,
  }));
  return (
    <div className="absolute inset-0">
      {stars.map((s, k) => (
        <div
          key={k}
          className="absolute h-px w-px rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            boxShadow: "0 0 4px #fff",
            opacity: s.op,
          }}
        />
      ))}
    </div>
  );
}
