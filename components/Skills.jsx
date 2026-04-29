"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Braces, Brush, Cpu, Database, GitBranch, Orbit, PenTool, Sparkles, Wand2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Frontend",
    icon: Braces,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Motion",
    icon: Wand2,
    skills: ["GSAP", "Framer Motion", "ScrollTrigger", "Lenis"]
  },
  {
    title: "Creative Tech",
    icon: Orbit,
    skills: ["Three.js", "React Three Fiber", "Shaders", "3D UI"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    title: "Design",
    icon: PenTool,
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"]
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Vercel", "Performance"]
  }
];

const orbitSkills = ["React", "Next", "GSAP", "R3F", "Figma", "Node", "Mongo", "UX"];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="A compact stack for elegant, animated, production-minded builds."
          description="Frontend craft, backend fundamentals, interface design, and creative web technology braided into one workflow."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-gsap-reveal className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl [.light_&]:border-black/10 [.light_&]:bg-white/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.22),transparent_34%)]" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/20" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/15" />
            <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-slate-950/80 shadow-glow backdrop-blur-xl [.light_&]:bg-white/90">
              <Cpu className="h-9 w-9 text-sky-300" aria-hidden="true" />
              <span className="absolute -bottom-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">Core</span>
            </div>

            {orbitSkills.map((skill, index) => {
              const angle = (index / orbitSkills.length) * Math.PI * 2;
              const radius = index % 2 === 0 ? 156 : 112;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                  className="absolute left-1/2 top-1/2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-semibold shadow-card backdrop-blur-xl [.light_&]:border-black/10 [.light_&]:bg-white"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  {skill}
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map(({ title, skills, icon: Icon }, index) => (
              <motion.div
                key={title}
                data-gsap-reveal
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <Card className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-glow">
                  <CardContent className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-sky-200 transition group-hover:scale-110 [.light_&]:bg-slate-950 [.light_&]:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <Sparkles className="h-4 w-4 text-violet-300 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span key={skill} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-muted-foreground [.light_&]:border-black/10 [.light_&]:bg-black/[0.03]">
                          <BadgeCheck className="h-3 w-3 text-sky-300" aria-hidden="true" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
