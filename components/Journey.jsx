import { GraduationCap, Rocket, Shapes, TerminalSquare } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const milestones = [
  {
    year: "2023",
    title: "Started building with intent",
    icon: GraduationCap,
    copy: "Began turning curiosity into real projects, learning the foundations of web development, UI structure, and product thinking."
  },
  {
    year: "2024",
    title: "Frontend craft became the focus",
    icon: TerminalSquare,
    copy: "Deepened skills in React, Next.js, Tailwind CSS, reusable components, responsive layouts, and clean interaction design."
  },
  {
    year: "2025",
    title: "Motion and creative tech entered the system",
    icon: Shapes,
    copy: "Added GSAP, Framer Motion, Lenis, and Three.js to create smoother, richer, more memorable digital experiences."
  },
  {
    year: "Now",
    title: "Building premium web experiences",
    icon: Rocket,
    copy: "Focused on shipping modern interfaces that feel refined, fast, accessible, and visually alive across every screen size."
  }
];

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="container">
        <SectionHeader
          eyebrow="Journey"
          title="A quiet timeline of becoming sharper, faster, and more intentional."
          description="A minimal path through learning, building, experimenting, and refining the craft."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2 [.light_&]:bg-black/10" />
          <div className="journey-line absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky-400 via-violet-400 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map(({ year, title, copy, icon: Icon }, index) => (
              <div
                key={title}
                data-gsap-reveal
                className={`relative grid gap-6 pl-14 sm:grid-cols-2 sm:pl-0 ${index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"}`}
              >
                <div className={`${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="glass relative rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-glow">
                    <span className="text-sm font-semibold text-sky-300">{year}</span>
                    <h3 className="mt-2 font-display text-xl font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
                  </div>
                </div>

                <div className="absolute left-0 top-7 grid h-10 w-10 place-items-center rounded-full border border-sky-300/40 bg-background text-sky-300 shadow-glow sm:left-1/2 sm:-translate-x-1/2">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
