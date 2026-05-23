import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icon = {
  github: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0 1 12 7.1c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  line: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M19.36 10.4c0-3.74-3.75-6.79-8.36-6.79S2.64 6.66 2.64 10.4c0 3.36 2.97 6.17 6.99 6.7.27.06.64.18.74.41.09.21.06.54.03.75 0 0-.1.59-.12.71-.04.21-.16.83.73.45.89-.37 4.81-2.83 6.56-4.85 1.21-1.32 1.79-2.66 1.79-4.17ZM8.16 12.6H6.5c-.24 0-.43-.19-.43-.43V8.91c0-.24.19-.43.43-.43.24 0 .43.19.43.43v2.83h1.23c.24 0 .43.19.43.43 0 .24-.19.43-.43.43Zm1.84-.43c0 .24-.19.43-.43.43-.24 0-.43-.19-.43-.43V8.91c0-.24.19-.43.43-.43.24 0 .43.19.43.43v3.26Zm3.94 0c0 .19-.12.35-.3.41-.04.01-.08.02-.13.02-.14 0-.27-.06-.35-.18l-1.7-2.32v2.07c0 .24-.19.43-.43.43-.24 0-.43-.19-.43-.43V8.91c0-.19.12-.35.3-.41.04-.01.08-.02.13-.02.14 0 .27.06.35.17l1.7 2.33V8.91c0-.24.19-.43.43-.43.24 0 .43.19.43.43v3.26Zm2.78-2.04c.24 0 .43.19.43.43 0 .24-.19.43-.43.43H15.5v.78h1.22c.24 0 .43.19.43.43 0 .24-.19.43-.43.43H15.07c-.24 0-.43-.19-.43-.43V8.91c0-.24.19-.43.43-.43h1.65c.24 0 .43.19.43.43 0 .24-.19.43-.43.43H15.5v.78h1.22Z" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  rocket: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  cap: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M22 10 12 4 2 10l10 6 10-6z" />
      <path d="M6 12v5a8 8 0 0 0 12 0v-5" />
    </svg>
  ),
  briefcase: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  folder: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 5a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
    </svg>
  ),
  spark: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
    </svg>
  ),
  arrowDown: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  ),
};

export function SectionHeader({
  kicker,
  title,
  num,
  icon: IconComp,
}: {
  kicker: string;
  title: string;
  num: string;
  icon?: (p: IconProps) => JSX.Element;
}) {
  return (
    <div className="reveal mb-12 flex items-center gap-5">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass">
        {IconComp ? <IconComp className="h-6 w-6 text-violet-200" /> : null}
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300/80">
          {num} · {kicker}
        </div>
        <h2 className="mt-1 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          <span className="grad-text">{title}</span>
        </h2>
      </div>
    </div>
  );
}
