import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "NovaCommerce",
    type: "Web App",
    description: "A sleek commerce dashboard concept with analytics cards, fast product flows, and polished motion for premium brands.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "MongoDB"],
    gradient: "from-sky-500/50 via-blue-900 to-slate-950",
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "AstraLanding",
    type: "Landing Page",
    description: "A high-converting SaaS landing experience with scroll storytelling, glass sections, animated pricing, and clean CTAs.",
    stack: ["React", "GSAP", "Lenis", "Vercel"],
    gradient: "from-violet-500/50 via-fuchsia-900 to-slate-950",
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    title: "Orbitfolio",
    type: "3D Website",
    description: "An interactive portfolio prototype with lightweight WebGL visuals, cursor-reactive objects, and cinematic transitions.",
    stack: ["Three.js", "R3F", "Drei", "GSAP"],
    gradient: "from-cyan-400/50 via-indigo-900 to-slate-950",
    github: "https://github.com/",
    demo: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div aria-hidden="true" className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Project cards with enough depth to make the cursor feel expensive."
          description="Swap the placeholders with your real work, links, screenshots, and case study details when you are ready."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
