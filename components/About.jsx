import { ArrowUpRight, Code2, Layers3, Palette, Sparkles, Webhook } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import arafBG from "../public/assets/arafBg.png";
import araf from "../public/assets/araf.png";
import arafNo from "../public/assets/arafNo.png";


const highlights = [
    { icon: Layers3, label: "Full-Stack Mindset", value: "Exploring backend logic, databases, and deployment" },
    { icon: Palette, label: "Modern UI Builder", value: "Designing clean, responsive interfaces with thoughtful details" },
    { icon: Code2, label: "Clean Engineering", value: "Building practical projects while sharpening my craft" },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A developer with a designer's eye and a product builder's pulse."
                    description="I shape interfaces that feel calm, fast, and alive. My work blends frontend craft, motion design, and practical full-stack thinking so ideas can move from sketch to shipped experience."
                />

                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div data-gsap-reveal className="relative mx-auto w-full max-w-md">
                        <div data-parallax="36" className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
                        <Card className="relative overflow-hidden rounded-[2.25rem]">
                            <CardContent className="p-5">
                                <div className="relative aspect-[5/7] overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 [.light_&]:from-slate-100 [.light_&]:via-white [.light_&]:to-blue-100">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(56,189,248,.30),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(167,139,250,.28),transparent_28%)]" />

                                    {/* Image in the hollow space */}
                                    <div className="absolute left-1/2 top-[36%] z-10 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(56,189,248,0.22)] sm:h-[320px] sm:w-[260px]">
                                        <Image
                                            src={araf}
                                            alt="Mushfiq Iqbal Araf"
                                            fill
                                            priority
                                            sizes="260px"
                                            className="object-contain object-center"
                                        />
                                    </div>

                                    <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs text-white/80 backdrop-blur-xl [.light_&]:text-slate-700">
                                        Student Developer
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 backdrop-blur-2xl [.light_&]:bg-white/60">
                                        <div className="mb-4 flex items-center gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950">
                                                <Webhook className="h-5 w-5" aria-hidden="true" />
                                            </div>

                                            <h3 className="font-display text-2xl font-semibold leading-tight text-white [.light_&]:text-slate-950">
                                                Mushfiq Iqbal Araf
                                            </h3>
                                        </div>

                                        <p className="mt-2 text-sm leading-6 text-white/65 [.light_&]:text-slate-600">
                                            Creative Web Developer crafting premium digital interfaces with motion, clarity, and quiet spectacle.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div data-gsap-reveal className="space-y-5">
                        <p className="text-lg leading-8 text-muted-foreground">
                            I like building the kind of web experiences where the typography breathes, buttons feel tactile, animations know when to whisper, and every section has a reason to exist. My main focus is modern frontend development with Next.js, React, Tailwind CSS, GSAP, Framer Motion, and a growing appetite for interactive 3D besides backend works.
                        </p>
                        <p className="text-lg leading-8 text-muted-foreground">
                            As a student developer, I am constantly learning, prototyping, and refining. I care about performance, accessibility, maintainable code, and visual systems that make a product feel premium without turning the browser into a disco ball.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-3">
                            {highlights.map(({ icon: Icon, label, value }) => (
                                <Card key={label} className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-glow">
                                    <CardContent className="p-5">
                                        <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.07] text-sky-200 transition group-hover:scale-110 [.light_&]:bg-slate-950 [.light_&]:text-white">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <h3 className="font-display text-base font-semibold">{label}</h3>
                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <a href="#contact" className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-semibold text-sky-300 transition hover:text-sky-200">
                            Let's build something memorable <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
