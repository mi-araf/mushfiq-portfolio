"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Box,
    Code2,
    Layers,
    LayoutTemplate,
    MousePointer2,
    PenTool,
    ArrowUpRight,
    BadgeCheck,
    ServerCog,
    Fan
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const services = [
    {
        title: "Modern Web Interfaces",
        shortTitle: "Web Interfaces",
        icon: Code2,
        accent: "#38bdf8",
        tag: "Frontend Craft",
        copy: "Responsive, clean, and user-friendly websites built with modern frontend technologies and careful attention to detail.",
        points: ["Responsive layouts", "Clean component structure", "Polished visual details"]
    },
    {
        title: "Landing Page Builds",
        shortTitle: "Landing Pages",
        icon: LayoutTemplate,
        accent: "#8b5cf6",
        tag: "Launch Ready",
        copy: "Focused landing pages for portfolios, products, and personal brands with strong structure and polished presentation.",
        points: ["Hero sections", "Clear content flow", "Conversion-focused layout"]
    },
    {
        title: "React & Next.js Projects",
        shortTitle: "React / Next.js",
        icon: Layers,
        accent: "#06b6d4",
        tag: "Modern Stack",
        copy: "Practical component-based projects using React, Next.js, Tailwind CSS, and reusable frontend architecture.",
        points: ["Reusable components", "Next.js structure", "Tailwind-based styling"]
    },
    {
        title: "UI/UX-Focused Design",
        shortTitle: "UI/UX Design",
        icon: PenTool,
        accent: "#a855f7",
        tag: "Design Polish",
        copy: "Clean layouts, readable typography, smooth spacing, and interfaces designed to feel simple and easy to use.",
        points: ["Readable typography", "Balanced spacing", "User-friendly interfaces"]
    },
    {
        title: "API & Web App Practice",
        shortTitle: "Web Apps",
        icon: MousePointer2,
        accent: "#22c55e",
        tag: "Interactive Logic",
        copy: "Building interactive applications with API integration, state management, forms, and real-world web app features.",
        points: ["API integration", "Forms and state", "Interactive features"]
    },
    {
        title: "Full-Stack Growth",
        shortTitle: "Full-Stack",
        icon: Box,
        accent: "#f97316",
        tag: "Growing Backend",
        copy: "Learning backend fundamentals, MongoDB, Node.js, project structure, and complete application development workflows.",
        points: ["Node.js basics", "MongoDB practice", "Project architecture"]
    }
];

function updateMouseGlow(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
        "--mouse-x",
        `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
        "--mouse-y",
        `${event.clientY - rect.top}px`
    );
}

function ServiceDetailCard({ service }) {
    const Icon = service.icon || Code2;

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, scale: 0.98, filter: "blur(8px)" }}
                transition={{ duration: 0.38, ease: "easeOut" }}
                className="group/detail relative"
            >
                <span
                    className="pointer-events-none absolute -inset-[2px] rounded-[2rem] opacity-0 blur-2xl transition duration-700 group-hover/detail:opacity-80"
                    style={{
                        background: `conic-gradient(from 180deg at 50% 50%, ${service.accent}66, rgba(168,85,247,0.35), rgba(56,189,248,0.36), ${service.accent}66)`
                    }}
                />

                <motion.div
                    whileHover={{
                        y: -8,
                        scale: 1.01
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        mass: 0.7
                    }}
                >
                    <Card
                        onMouseMove={updateMouseGlow}
                        className="relative min-h-[420px] cursor-default select-none overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_22px_70px_rgba(15,23,42,0.16)] transition-all duration-500 group-hover/detail:border-sky-300/45 group-hover/detail:bg-sky-400/[0.055] group-hover/detail:shadow-[0_28px_90px_rgba(56,189,248,0.17)] [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(248,250,252,0.76),rgba(245,243,255,0.52))] [.light_&]:shadow-[0_24px_70px_rgba(30,41,59,0.10)] [.light_&]:backdrop-blur-2xl [.light_&]:group-hover/detail:border-sky-300/70 [.light_&]:group-hover/detail:shadow-[0_30px_85px_rgba(14,165,233,0.16)] sm:min-h-[500px]"
                    >
                        {/* mouse-following glow */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/detail:opacity-100"
                            style={{
                                background: `radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.accent}30, transparent 42%)`
                            }}
                        />

                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 opacity-90"
                            style={{
                                background: `radial-gradient(circle at 18% 15%, ${service.accent}24, transparent 34%), radial-gradient(circle at 88% 92%, rgba(168,85,247,0.16), transparent 38%)`
                            }}
                        />

                        <span className="pointer-events-none absolute -left-28 top-0 h-full w-24 rotate-12 bg-white/10 blur-md transition-transform duration-1000 group-hover/detail:translate-x-[780px] [.light_&]:bg-white/80" />

                        <CardContent className="relative z-10 flex min-h-[420px] flex-col p-5 sm:min-h-[500px] sm:p-8">
                            <div>
                                <div className="mb-8 flex items-start justify-between gap-4">
                                    <div className="relative">
                                        <motion.span
                                            aria-hidden="true"
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 18,
                                                ease: "linear"
                                            }}
                                            className="absolute -inset-3 rounded-full border border-sky-300/20 [.light_&]:border-sky-300/35"
                                        />

                                        <motion.div
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 3.2,
                                                ease: "easeInOut"
                                            }}
                                            className="grid h-20 w-20 place-items-center rounded-3xl border border-white/10 bg-slate-950/75 text-sky-300 shadow-[0_18px_45px_rgba(56,189,248,0.13)] backdrop-blur-xl transition duration-500 group-hover/detail:scale-105 group-hover/detail:rotate-3 [.light_&]:border-sky-200/80 [.light_&]:bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(245,243,255,0.9))] [.light_&]:shadow-[0_16px_38px_rgba(14,165,233,0.12)]"
                                            style={{ color: service.accent }}
                                        >
                                            <Icon className="h-9 w-9" aria-hidden="true" />
                                        </motion.div>

                                        <ServerCog
                                            className="absolute -right-2 -top-2 h-5 w-5 text-violet-300 opacity-80 transition duration-500 group-hover/detail:rotate-12 group-hover/detail:scale-110 [.light_&]:text-violet-500"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-right backdrop-blur-xl [.light_&]:border-slate-200/90 [.light_&]:bg-white/75">
                                        <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 [.light_&]:text-slate-500">
                                            Services
                                        </span>

                                        <span
                                            className="mt-1 block h-2.5 w-16 rounded-full"
                                            style={{ backgroundColor: service.accent }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-sky-700 [.light_&]:backdrop-blur-xl">
                                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                                    {service.tag}
                                </div>

                                <h3 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl [.light_&]:text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
                                    {service.copy}
                                </p>

                                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                    {service.points.map((point) => (
                                        <div
                                            key={point}
                                            className="group/point flex min-h-[64px] cursor-default select-none items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3 text-sm font-medium leading-5 text-slate-300 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-400/[0.06] sm:min-h-[112px] sm:flex-col sm:items-start sm:p-4 sm:leading-6 [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-slate-600 [.light_&]:hover:border-sky-300/70 [.light_&]:hover:bg-sky-50/80"
                                        >
                                            <div
                                                className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300 transition duration-300 group-hover/point:scale-110 group-hover/point:rotate-3 [.light_&]:border-sky-200/80 [.light_&]:bg-white/80 [.light_&]:text-sky-700"
                                                style={{ color: service.accent }}
                                            >
                                                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                                            </div>

                                            <span className="min-w-0">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

function ServiceMenuButton({ service, isActive, onClick }) {
    const Icon = service.icon || Code2;

    return (
        <motion.button
            type="button"
            onClick={onClick}
            onMouseMove={updateMouseGlow}
            whileHover={{ x: 6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group/service-btn relative w-full text-left"
        >
            <span
                className={`pointer-events-none absolute -inset-[1px] rounded-[1.6rem] blur-xl transition duration-500 ${isActive
                        ? "opacity-90"
                        : "opacity-0 group-hover/service-btn:opacity-70"
                    }`}
                style={{
                    background: `radial-gradient(circle at 20% 20%, ${service.accent}45, transparent 70%)`
                }}
            />

            <span
                className={`relative flex items-center gap-4 overflow-hidden rounded-[1.6rem] border p-4 transition duration-300 ${isActive
                        ? "border-sky-300/60 bg-sky-400/[0.10] text-white shadow-[0_18px_45px_rgba(56,189,248,0.13)] [.light_&]:border-sky-300/80 [.light_&]:bg-[linear-gradient(135deg,rgba(240,249,255,0.9),rgba(245,243,255,0.82))] [.light_&]:text-slate-900 [.light_&]:shadow-[0_16px_42px_rgba(14,165,233,0.13)]"
                        : "border-white/10 bg-white/[0.035] text-slate-300 hover:border-sky-300/40 hover:bg-sky-400/[0.06] hover:text-white [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-slate-600 [.light_&]:shadow-[0_8px_22px_rgba(30,41,59,0.05)] [.light_&]:hover:border-sky-300/70 [.light_&]:hover:bg-sky-50/80 [.light_&]:hover:text-slate-900"
                    }`}
            >
                {/* mouse-following glow */}
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/service-btn:opacity-100"
                    style={{
                        background: `radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.accent}28, transparent 45%)`
                    }}
                />

                <span
                    className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] transition duration-300 group-hover/service-btn:rotate-3 group-hover/service-btn:scale-105 [.light_&]:border-sky-200/80 [.light_&]:bg-white/80"
                    style={{ color: service.accent }}
                >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <span className="relative min-w-0 flex-1">
                    <span className="block font-display text-base font-semibold leading-tight sm:text-lg">
                        {service.title}
                    </span>
                    <span className="mt-1 block text-xs font-medium text-slate-400 [.light_&]:text-slate-500">
                        {service.tag}
                    </span>
                </span>

                <ArrowUpRight
                    className={`relative h-4 w-4 shrink-0 transition duration-300 ${isActive
                            ? "translate-x-0 text-sky-300 [.light_&]:text-sky-600"
                            : "text-slate-500 group-hover/service-btn:-translate-y-0.5 group-hover/service-btn:translate-x-0.5 group-hover/service-btn:text-sky-300 [.light_&]:group-hover/service-btn:text-sky-600"
                        }`}
                    aria-hidden="true"
                />
            </span>
        </motion.button>
    );
}

export default function Services() {
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);

    const activeService = services[activeServiceIndex] || services[0];

    return (
        <section id="services" className="section-padding relative overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl [.light_&]:bg-sky-200/30"
            />
            <div
                aria-hidden="true"
                className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl [.light_&]:bg-violet-300/20"
            />

            <div className="container">
                <SectionHeader
                    eyebrow="What can I Help Build"
                    title="Digital craft for brands, products, and ideas that deserve better pixels."
                    description="From launch pages to animated product experiences, each service is tuned for clarity, speed, and visual memorability."
                />

                <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                    {/* Left detail card */}
                    <div data-gsap-reveal className="min-w-0">
                        <ServiceDetailCard service={activeService} />
                    </div>

                    {/* Right service labels */}
                    <div data-gsap-reveal className="min-w-0 lg:sticky lg:top-24">
                        <Card className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(248,250,252,0.78),rgba(245,243,255,0.58))] [.light_&]:shadow-[0_24px_70px_rgba(30,41,59,0.10)] [.light_&]:backdrop-blur-2xl">
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_90%_88%,rgba(168,85,247,0.10),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.24),transparent)]" />

                            <CardContent className="relative p-4 sm:p-5">
                                <div className="mb-5 flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 [.light_&]:text-sky-700">
                                            Services
                                        </p>
                                        
                                    </div>

                                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sky-300 [.light_&]:border-sky-200/80 [.light_&]:bg-white/75 [.light_&]:text-sky-700">
                                        <Fan className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                </div>

                                <div className="grid gap-3">
                                    {services.map((service, index) => (
                                        <ServiceMenuButton
                                            key={service.title}
                                            service={service}
                                            isActive={activeServiceIndex === index}
                                            onClick={() => setActiveServiceIndex(index)}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}