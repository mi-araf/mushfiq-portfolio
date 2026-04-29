"use client";

import { useRef } from "react";
import { Github, Globe2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  function handleMove(event) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  }

  function handleLeave() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  }

  return (
    <Card
      ref={cardRef}
      data-gsap-reveal
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="perspective-card group relative h-full overflow-hidden transition duration-300 ease-out"
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(96,165,250,.18), transparent 42%)" }} />
      <div className="tilt-content relative p-5">
        <div className={`relative mb-6 aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${project.gradient} [.light_&]:border-black/10`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,.28),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.18),transparent_22%)]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Project Preview</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-sky-300">0{index + 1}</p>
            <h3 className="font-display text-2xl font-semibold tracking-tight">{project.title}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground [.light_&]:border-black/10">
            {project.type}
          </span>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-muted-foreground [.light_&]:bg-black/[0.04]">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          <a href={project.github} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/[0.07] [.light_&]:border-black/10 [.light_&]:hover:bg-black/[0.05]" aria-label={`${project.title} GitHub link`}>
            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
          <a href={project.demo} className="focus-ring inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:scale-[1.03]" aria-label={`${project.title} live demo link`}>
            <Globe2 className="h-4 w-4" aria-hidden="true" /> Live Demo
          </a>
        </div>
      </div>
    </Card>
  );
}
