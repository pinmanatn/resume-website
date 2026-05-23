"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  dur: number;
  delay: number;
  opacity: number;
  layer: number;
};

export default function StarField() {
  const layerARef = useRef<HTMLDivElement | null>(null);
  const layerBRef = useRef<HTMLDivElement | null>(null);

  const stars: Star[] = useMemo(() => {
    const arr: Star[] = [];
    for (let i = 0; i < 180; i++) {
      arr.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        dur: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        opacity: 0.4 + Math.random() * 0.6,
        layer: i % 3,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (layerARef.current) layerARef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
      if (layerBRef.current) layerBRef.current.style.transform = `translate3d(0, ${y * -0.18}px, 0)`;
    };
    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  const styleVar = (s: Star): CSSProperties =>
    ({ "--dur": `${s.dur}s`, "--delay": `${s.delay}s` } as CSSProperties);

  return (
    <>
      <div ref={layerARef} className="stars-layer">
        {stars.filter((s) => s.layer < 2).map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${s.top}%`, left: `${s.left}%`,
              width: s.size, height: s.size,
              opacity: s.opacity,
              ...styleVar(s),
            }}
          />
        ))}
      </div>
      <div ref={layerBRef} className="stars-layer">
        {stars.filter((s) => s.layer === 2).map((s, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${s.top}%`, left: `${s.left}%`,
              width: s.size * 1.4, height: s.size * 1.4,
              opacity: s.opacity,
              ...styleVar(s),
            }}
          />
        ))}
        <div className="shooting-star" style={{ top: "12%", "--delay": "0s" } as CSSProperties} />
        <div className="shooting-star" style={{ top: "38%", "--delay": "3s" } as CSSProperties} />
        <div className="shooting-star" style={{ top: "68%", "--delay": "5.5s" } as CSSProperties} />
      </div>
    </>
  );
}
