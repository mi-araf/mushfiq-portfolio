"use client";

import { useRef } from "react";
import {
    Braces,
    Code2,
    Cpu,
    GraduationCap,
    Palette,
    Rocket,
    Shapes,
    Sparkles,
    TerminalSquare,
    TrendingUp
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

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
        title: "Growing through real projects",
        icon: Shapes,
        copy: "Started building more practical projects, improving my understanding of frontend development, backend fundamentals, databases, deployment, and complete web application flow."
    },
    {
        year: "Now",
        title: "Building premium web experiences",
        icon: Rocket,
        copy: "Focused on shipping modern interfaces that feel refined, fast, accessible, and visually alive across every screen size."
    },
    {
        year: "Next Level Plans",
        title: "Future Goals & Next Level Plans",
        icon: TrendingUp,
        copy: "Planning to build stronger full-stack projects, improve my problem-solving skills, explore real-world development workflows, and grow into a developer who can create useful, polished, and scalable digital products."
    }
];

const floatingDecor = [
    {
        icon: Code2,
        className: "left-[5%] top-[24%]",
        delay: 0
    },
    {
        icon: Palette,
        className: "right-[6%] top-[30%]",
        delay: 0.3
    },
    {
        icon: Braces,
        className: "left-[8%] bottom-[24%]",
        delay: 0.6
    },
    {
        icon: Cpu,
        className: "right-[8%] bottom-[22%]",
        delay: 0.9
    }
];

export default function Journey() {
    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    });

    const lineScale = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 24,
        mass: 0.4
    });

    return (
        <section id="journey" className="section-padding relative overflow-hidden">
            {/* Desktop-only background decor */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {floatingDecor.map(({ icon: Icon, className, delay }) => (
                    <motion.div
                        key={className}
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2.5, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.45, delay },
                            y: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay
                            },
                            rotate: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay
                            }
                        }}
                        className={`absolute ${className}`}
                    >
                        <div className="grid h-16 w-16 place-items-center rounded-[1.35rem] border border-white/10 bg-white/[0.035] text-sky-200/55 shadow-[0_18px_60px_rgba(56,189,248,0.08)] backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-white/70 [.light_&]:text-sky-600/55">
                            <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                    </motion.div>
                ))}

                <div className="absolute left-[2%] top-[45%] h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="absolute right-[2%] top-[48%] h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <div className="container relative">
                <SectionHeader
                    eyebrow="Journey"
                    title="A quiet timeline of becoming sharper, faster, and more intentional."
                    description="A minimal path through learning, building, experimenting, and refining the craft."
                />

                <div ref={timelineRef} className="relative mx-auto max-w-4xl">
                    {/* Static line */}
                    <div className="absolute left-5 top-0 h-full w-[2px] rounded-full bg-white/10 sm:left-1/2 sm:-translate-x-1/2 [.light_&]:bg-black/10" />

                    {/* Scroll animated line */}
                    <motion.div
                        style={{ scaleY: lineScale }}
                        className="absolute left-5 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-sky-300 via-violet-400 to-transparent shadow-[0_0_24px_rgba(56,189,248,0.28)] sm:left-1/2 sm:-translate-x-1/2"
                    />

                    {/* Moving glow object */}
                    <motion.div
                        style={{ scaleY: lineScale }}
                        className="pointer-events-none absolute left-5 top-0 h-full origin-top sm:left-1/2 sm:-translate-x-1/2"
                    >
                        <div className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_32px_rgba(56,189,248,0.95)]" />
                    </motion.div>

                    <div className="space-y-10">
                        {milestones.map(({ year, title, copy, icon: Icon }, index) => (
                            <div
                                key={title}
                                data-gsap-reveal
                                className={`relative grid gap-6 pl-14 sm:grid-cols-2 sm:pl-0 ${index % 2 === 0
                                    ? ""
                                    : "sm:[&>div:first-child]:col-start-2"
                                    }`}
                            >
                                <div
                                    className={
                                        index % 2 === 0
                                            ? "sm:pr-12 sm:text-right"
                                            : "sm:pl-12"
                                    }
                                >
                                    <div
                                        onMouseMove={(event) => {
                                            const card = event.currentTarget;
                                            const rect = card.getBoundingClientRect();

                                            card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
                                            card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
                                        }}
                                        className="group relative"
                                    >
                                        {/* Minimal glowing border */}
                                        <span className="pointer-events-none absolute -inset-[1px] rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(56,189,248,0.28),rgba(168,85,247,0.18),rgba(56,189,248,0.12))] opacity-0 blur-md transition duration-500 group-hover:opacity-55 [.light_&]:bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(124,58,237,0.12),rgba(14,165,233,0.10))]" />

                                        <div className="glass relative overflow-hidden rounded-[1.7rem] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-sky-300/25 group-hover:shadow-[0_18px_60px_rgba(56,189,248,0.08)]">
                                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.08),transparent_34%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                                            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(260px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.16),transparent_48%)] [.light_&]:bg-[radial-gradient(260px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.14),transparent_48%)]" />

                                            <div className="relative">
                                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                                                    <Sparkles
                                                        className="h-3.5 w-3.5"
                                                        aria-hidden="true"
                                                    />
                                                    {year}
                                                </span>

                                                <h3 className="mt-2 font-display text-xl font-semibold">
                                                    {title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                                    {copy}
                                                </p>
                                            </div>
                                        </div>
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