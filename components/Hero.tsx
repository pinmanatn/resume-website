import Image from "next/image";
import { PROFILE } from "@/lib/data";
import { Icon } from "./Icons";
import type { SVGProps } from "react";

export default function Hero() {
  return (
    <section
      data-screen-label="01 Hero"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-24 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[auto_1fr]">
        {/* Profile circle */}
        <div className="reveal relative mx-auto md:mx-0">
          <div className="profile-ring h-72 w-72 rounded-full p-[3px] md:h-80 md:w-80">
            <div className="h-full w-full rounded-full bg-[#02010a] p-2">
              <Image
                src="/profile2.jpg"
                alt="Pinmanat Nankat"
                width={320}
                height={320}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <div
              className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_#f472b6]"
              style={{ animation: "orbit 14s linear infinite" }}
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass px-4 py-1.5 text-xs font-medium text-emerald-200">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new orbits
          </div>
        </div>

        {/* Intro */}
        <div>
          <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-violet-200">
            <Icon.spark className="h-3.5 w-3.5 text-fuchsia-300" />
            Mission · /home/pinmanat
          </div>

          <h1 className="reveal font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
            Hi, I&apos;m <span className="grad-text">Pinmanat</span>
            <br />
            <span className="text-white/85">Full Stack Developer</span>
            <span className="ml-1 inline-block h-12 w-1 translate-y-1 animate-pulse bg-fuchsia-300 md:h-14"></span>
          </h1>

          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {PROFILE.intro}
          </p>

          <div className="reveal mt-7 flex flex-wrap gap-2">
            {[
              { k: "Age", v: PROFILE.age },
              { k: "Based", v: PROFILE.location }
            ].map((x) => (
              <div key={x.k} className="rounded-xl glass px-3 py-1.5 text-sm">
                <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-violet-300/80">
                  {x.k}
                </span>
                <span className="text-white/90">{x.v}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <SocialLink href={PROFILE.github} icon={Icon.github} label="GitHub" sub="Pinmanatn" />
            <SocialLink href={`mailto:${PROFILE.email}`} icon={Icon.mail} label="Email" sub={PROFILE.email} />
            <SocialLink href="#" icon={Icon.line} label="LINE" sub={`@${PROFILE.lineId}`} />
            <SocialLink href={`tel:${PROFILE.phone}`} icon={Icon.phone} label="Call" sub={PROFILE.phone} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <Icon.arrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: I,
  label,
  sub,
}: {
  href: string;
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  label: string;
  sub: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl glass px-4 py-2.5 transition hover:-translate-y-0.5 hover:bg-white/5"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 text-white">
        <I style={{ width: 18, height: 18 }} />
      </div>
      <div className="leading-tight">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-300/80">{label}</div>
        <div className="text-sm text-white/90 group-hover:text-white">{sub}</div>
      </div>
    </a>
  );
}
