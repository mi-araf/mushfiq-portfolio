import { Box, Code2, Layers, LayoutTemplate, MousePointer2, PenTool } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    icon: Code2,
    copy: "Modern responsive websites built with clean components, strong performance, and maintainable structure."
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    copy: "Interfaces designed with clear hierarchy, premium spacing, smooth flows, and practical product thinking."
  },
  {
    title: "Landing Pages",
    icon: LayoutTemplate,
    copy: "High-impact pages for products, creators, startups, and personal brands that need to feel instantly credible."
  },
  {
    title: "3D Interactive Websites",
    icon: Box,
    copy: "Lightweight WebGL moments, animated objects, and immersive visuals that stay elegant instead of noisy."
  },
  {
    title: "Frontend Animation",
    icon: MousePointer2,
    copy: "GSAP, Framer Motion, Lenis, micro-interactions, scroll reveals, and polished motion systems."
  },
  {
    title: "Design Systems",
    icon: Layers,
    copy: "Reusable UI building blocks, tokens, patterns, and components for faster, more consistent shipping."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Digital craft for brands, products, and ideas that deserve better pixels."
          description="From launch pages to animated product experiences, each service is tuned for clarity, speed, and visual memorability."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, copy, icon: Icon }, index) => (
            <Card key={title} data-gsap-reveal className="group overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-glow">
              <CardContent className="relative p-6">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-gradient-to-br from-sky-400/15 to-violet-500/10 transition group-hover:scale-125" />
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-sky-200 transition group-hover:rotate-3 group-hover:scale-110 [.light_&]:bg-slate-950 [.light_&]:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
