"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Mushfiq turned a rough idea into an interface that felt polished, fast, and genuinely premium.",
    name: "Ayesha Rahman",
    role: "Startup Founder"
  },
  {
    quote: "The motion details were subtle, smart, and exactly what the product needed to feel alive.",
    name: "Tanvir Hasan",
    role: "Product Designer"
  },
  {
    quote: "Clean code, strong taste, and a calm process from first concept to final handoff.",
    name: "Nadia Islam",
    role: "Creative Director"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-300/25 to-transparent" />
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="Placeholder praise today, real client fireworks tomorrow."
          description="Replace these cards with real feedback when your projects are live. The layout is ready for a future slider too."
        />

        <div className="flex snap-x gap-5 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              data-gsap-reveal
              className="min-w-[82%] snap-center sm:min-w-[48%] lg:min-w-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 hover:shadow-glow">
                <CardContent className="p-7">
                  <Quote className="mb-8 h-8 w-8 text-sky-300" aria-hidden="true" />
                  <p className="text-lg leading-8 text-foreground">“{item.quote}”</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-sky-300 to-violet-400 text-sm font-bold text-slate-950">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
