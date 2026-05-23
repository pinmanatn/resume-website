"use client";

import { useEffect } from "react";
import NebulaStage from "@/components/NebulaStage";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Page() {
  // Scroll-triggered reveal
  useEffect(() => {
    const check = () => {
      const vh = window.innerHeight;
      document.querySelectorAll(".reveal:not(.is-on)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add("is-on");
        }
      });
    };
    const t = setTimeout(check, 50);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <>
      <NebulaStage />
      <StarField />

      <main className="content-root">
        <Hero />
        <Education />
        <Experience layout="timeline" />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
