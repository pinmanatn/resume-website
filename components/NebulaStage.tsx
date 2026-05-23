"use client";

import { VIBES } from "@/lib/data";

export default function NebulaStage() {
  const v = VIBES.nebula;
  return (
    <div className="nebula-stage" style={{ background: v.bg }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 60%)," +
            "radial-gradient(ellipse at 0% 100%, rgba(236,72,153,0.12) 0%, transparent 55%)," +
            "radial-gradient(ellipse at 100% 50%, rgba(34,211,238,0.10) 0%, transparent 50%)",
        }}
      />
      <div
        className="nebula-blob"
        style={{
          background: v.blobs[0],
          width: 720, height: 720,
          top: "-180px", left: "-120px",
          animation: "drift-1 38s ease-in-out infinite",
        }}
      />
      <div
        className="nebula-blob"
        style={{
          background: v.blobs[1],
          width: 600, height: 600,
          top: "40%", right: "-150px",
          animation: "drift-2 46s ease-in-out infinite",
        }}
      />
      <div
        className="nebula-blob"
        style={{
          background: v.blobs[2],
          width: 540, height: 540,
          bottom: "-160px", left: "30%",
          animation: "drift-3 52s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute", left: 0, right: 0, top: "55%",
          height: 220, opacity: 0.18,
          background: "linear-gradient(180deg, transparent, #fff, transparent)",
          filter: "blur(40px)",
          transform: "rotate(-6deg)",
        }}
      />
    </div>
  );
}
