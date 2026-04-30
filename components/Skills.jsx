"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    BadgeCheck,
    BookOpen,
    Boxes,
    CalendarDays,
    CloudUpload,
    Code2,
    Component,
    Database,
    Globe2,
    GraduationCap,
    MapPin,
    MonitorSmartphone,
    Palette,
    PenTool,
    Route,
    ServerCog,
    Sparkles,
    Workflow
} from "lucide-react";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPython,
    SiOpenjdk,
    SiC,
    SiCplusplus,
    SiFramer,
    SiGreensock,
    SiThreedotjs,
    SiFigma,
    SiGit,
    SiGithub,
    SiVisualstudiocode,
    SiVercel,
    SiNetlify,
    SiRender
} from "react-icons/si";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
    {
        id: "frontend",
        title: "Frontend Development",
        shortTitle: "Frontend",
        description:
            "Building responsive, polished, and interactive user interfaces with a focus on clarity, motion, and usability.",
        icon: MonitorSmartphone,
        accent: "#38bdf8",
        skills: [
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss3, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            {
                name: "Next.js",
                icon: SiNextdotjs,
                color: "#ffffff",
                lightColor: "#111827"
            },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" }
        ]
    },
    {
        id: "backend",
        title: "Backend Foundations",
        shortTitle: "Backend",
        description:
            "Learning API structure, routing, server-side logic, and how full-stack systems connect behind the scenes.",
        icon: ServerCog,
        accent: "#22c55e",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
            {
                name: "Express.js",
                icon: SiExpress,
                color: "#e5e7eb",
                lightColor: "#111827"
            },
            { name: "REST APIs", icon: Route, color: "#0ea5e9" }
        ]
    },
    {
        id: "database",
        title: "Database & Data",
        shortTitle: "Database",
        description:
            "Structuring, connecting, and managing application data in practical, project-driven ways.",
        icon: Database,
        accent: "#10b981",
        skills: [{ name: "MongoDB", icon: SiMongodb, color: "#47A248" }]
    },
    {
        id: "languages",
        title: "Programming Languages",
        shortTitle: "Languages",
        description:
            "Strengthening logic, syntax, and problem-solving through multiple programming languages.",
        icon: Code2,
        accent: "#8b5cf6",
        skills: [
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: SiOpenjdk, color: "#f97316" },
            { name: "C", icon: SiC, color: "#2563eb" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" }
        ]
    },
    {
        id: "creative",
        title: "Motion & Creative Web",
        shortTitle: "Motion",
        description:
            "Bringing interfaces to life with motion, interactivity, and playful creative touches.",
        icon: Sparkles,
        accent: "#ec4899",
        skills: [
            {
                name: "Framer Motion",
                icon: SiFramer,
                color: "#ffffff",
                lightColor: "#111827"
            },
            { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
            {
                name: "Three.js",
                icon: SiThreedotjs,
                color: "#ffffff",
                lightColor: "#111827"
            }
        ]
    },
    {
        id: "design",
        title: "Design & UI Thinking",
        shortTitle: "Design",
        description:
            "Designing clean interfaces, visual systems, and user experiences that feel balanced and thoughtful.",
        icon: Palette,
        accent: "#a855f7",
        skills: [
            { name: "Figma", icon: SiFigma, color: "#F24E1E" },
            { name: "UI/UX Basics", icon: PenTool, color: "#0ea5e9" },
            { name: "Responsive Design", icon: Globe2, color: "#06b6d4" },
            { name: "Design Systems", icon: Component, color: "#8b5cf6" }
        ]
    },
    {
        id: "workflow",
        title: "Development Workflow",
        shortTitle: "Workflow",
        description:
            "Using modern development tools to write, manage, improve, and ship projects more effectively.",
        icon: Workflow,
        accent: "#3b82f6",
        skills: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            {
                name: "GitHub",
                icon: SiGithub,
                color: "#ffffff",
                lightColor: "#111827"
            },
            { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" }
        ]
    },
    {
        id: "deployment",
        title: "Deployment & Hosting",
        shortTitle: "Hosting",
        description:
            "Publishing projects online and learning how to take ideas from local development to real deployment.",
        icon: CloudUpload,
        accent: "#0ea5e9",
        skills: [
            {
                name: "Vercel",
                icon: SiVercel,
                color: "#ffffff",
                lightColor: "#111827"
            },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
            { name: "Render", icon: SiRender, color: "#46E3B7" }
        ]
    }
];

function SkillCard({ skill, index }) {
    const SkillIcon = skill.icon || BadgeCheck;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{
                duration: 0.35,
                delay: index * 0.04,
                ease: "easeOut"
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            className="group/skill relative h-full"
        >
            <span
                className="pointer-events-none absolute -inset-[1px] rounded-[1.45rem] opacity-0 blur-xl transition duration-500 group-hover/skill:opacity-100"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${skill.lightColor || skill.color || "#38bdf8"
                        }40, transparent 70%)`
                }}
            />

            <Card className="relative h-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] transition-all duration-500 group-hover/skill:border-sky-300/40 group-hover/skill:bg-sky-400/[0.06] group-hover/skill:shadow-[0_20px_60px_rgba(56,189,248,0.15)] [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,250,252,0.82))] [.light_&]:shadow-[0_18px_50px_rgba(30,41,59,0.08)] [.light_&]:backdrop-blur-2xl [.light_&]:group-hover/skill:border-sky-300/70 [.light_&]:group-hover/skill:bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(239,246,255,0.86),rgba(250,245,255,0.82))] [.light_&]:group-hover/skill:shadow-[0_24px_65px_rgba(59,130,246,0.16)]">
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.14),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.12),transparent_36%)] opacity-0 transition duration-500 group-hover/skill:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.10),transparent_32%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.10),transparent_36%)]" />

                <span className="pointer-events-none absolute -left-16 top-0 h-full w-16 rotate-12 bg-white/10 blur-md transition-transform duration-700 group-hover/skill:translate-x-[240px] [.light_&]:bg-white/80" />

                <CardContent className="relative flex min-h-[138px] flex-col justify-between p-4 sm:min-h-[150px] sm:p-5">
                    <div
                        className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-[0_10px_28px_rgba(56,189,248,0.08)] transition duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-3 [.light_&]:border-sky-200/80 [.light_&]:bg-[linear-gradient(135deg,rgba(240,249,255,0.95),rgba(245,243,255,0.9))] [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.10)] [.light_&]:group-hover/skill:border-violet-300/80 [.light_&]:group-hover/skill:bg-[linear-gradient(135deg,rgba(224,242,254,0.95),rgba(237,233,254,0.95))]"
                        style={{
                            "--icon-dark": skill.color || "#38bdf8",
                            "--icon-light":
                                skill.lightColor || skill.color || "#0ea5e9"
                        }}
                    >
                        <SkillIcon
                            className="h-6 w-6 text-[var(--icon-dark)] [.light_&]:text-[var(--icon-light)]"
                            aria-hidden="true"
                        />
                    </div>

                    <div>
                        <h3 className="mt-5 font-display text-base font-semibold text-white transition duration-300 group-hover/skill:text-sky-50 sm:text-lg [.light_&]:text-slate-800 [.light_&]:group-hover/skill:text-sky-700">
                            {skill.name}
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function CategoryButton({ group, isActive, onClick }) {
    const GroupIcon = group.icon || Boxes;

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group/category relative"
        >
            <span
                className={`pointer-events-none absolute -inset-[2px] rounded-full blur-lg transition duration-500 ${isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover/category:opacity-90"
                    }`}
                style={{
                    background: isActive
                        ? "radial-gradient(circle at center, rgba(56,189,248,0.28), rgba(168,85,247,0.18), transparent 72%)"
                        : "radial-gradient(circle at center, rgba(56,189,248,0.20), rgba(168,85,247,0.12), transparent 72%)"
                }}
            />

            <span
                className={`absolute inset-0 rounded-full transition duration-500 ${isActive
                    ? "border border-sky-400/70 shadow-[0_0_0_1px_rgba(56,189,248,0.16),0_0_30px_rgba(56,189,248,0.20)]"
                    : "border border-transparent"
                    }`}
            />

            <span
                className={`relative inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-300 ${isActive
                    ? "border-sky-300/70 bg-sky-400/15 text-sky-100 [.light_&]:border-sky-300/80 [.light_&]:bg-[linear-gradient(135deg,rgba(240,249,255,0.9),rgba(245,243,255,0.82))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_10px_28px_rgba(14,165,233,0.14)]"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-slate-600 [.light_&]:shadow-[0_6px_18px_rgba(30,41,59,0.05)] [.light_&]:backdrop-blur-xl [.light_&]:hover:border-sky-300/80 [.light_&]:hover:bg-sky-50/80 [.light_&]:hover:text-sky-700"
                    }`}
            >
                <GroupIcon
                    className={`h-4 w-4 transition duration-300 ${isActive
                        ? "text-sky-300 [.light_&]:text-sky-600"
                        : "text-slate-400 group-hover/category:text-sky-300 [.light_&]:text-slate-500 [.light_&]:group-hover/category:text-sky-700"
                        }`}
                    aria-hidden="true"
                />
                <span className="sm:hidden">{group.title}</span>
                <span className="hidden sm:inline">{group.title}</span>
            </span>
        </motion.button>
    );
}

function OrbitPreview({ activeGroup }) {
    const ActiveGroupIcon = activeGroup.icon || Boxes;
    const skills = activeGroup.skills.slice(0, 6);

    const getPreviewSlots = (count) => {
        if (count <= 1) {
            return [{ top: "22%", left: "50%" }];
        }

        if (count === 2) {
            return [
                { top: "24%", left: "34%" },
                { top: "68%", left: "72%" }
            ];
        }

        if (count === 3) {
            return [
                { top: "24%", left: "34%" },
                { top: "40%", left: "78%" },
                { top: "72%", left: "26%" }
            ];
        }

        if (count === 4) {
            return [
                { top: "22%", left: "34%" },
                { top: "26%", left: "72%" },
                { top: "72%", left: "70%" },
                { top: "72%", left: "28%" }
            ];
        }

        if (count === 5) {
            return [
                { top: "18%", left: "40%" },
                { top: "28%", left: "78%" },
                { top: "70%", left: "76%" },
                { top: "80%", left: "38%" },
                { top: "54%", left: "14%" }
            ];
        }

        return [
            { top: "18%", left: "42%" },
            { top: "26%", left: "78%" },
            { top: "52%", left: "84%" },
            { top: "78%", left: "62%" },
            { top: "80%", left: "28%" },
            { top: "52%", left: "14%" }
        ];
    };

    const previewSlots = getPreviewSlots(skills.length);

    return (
        <Card className="relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(240,249,255,0.58),rgba(250,245,255,0.62))] [.light_&]:shadow-[0_24px_70px_rgba(30,41,59,0.10)] [.light_&]:backdrop-blur-2xl">
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-90"
                style={{
                    background: `radial-gradient(circle at 50% 48%, ${activeGroup.accent}18, transparent 44%), radial-gradient(circle at 15% 20%, rgba(59,130,246,0.08), transparent 34%), radial-gradient(circle at 90% 85%, rgba(168,85,247,0.08), transparent 34%)`
                }}
            />

            <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                className="absolute left-1/2 top-1/2 rounded-full border border-sky-300/20 [.light_&]:border-sky-300/30"
                style={{
                    width: 220,
                    height: 220,
                    transform: "translate(-50%, -50%)"
                }}
            />

            <motion.div
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
                className="absolute left-1/2 top-1/2 rounded-full border border-violet-300/15 [.light_&]:border-violet-300/20"
                style={{
                    width: 300,
                    height: 300,
                    transform: "translate(-50%, -50%)"
                }}
            />

            <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 58, ease: "linear" }}
                className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/10 [.light_&]:border-cyan-300/15"
                style={{
                    width: 150,
                    height: 150,
                    transform: "translate(-50%, -50%)"
                }}
            />

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeGroup.id}
                    initial={{ opacity: 0, scale: 0.86, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.86, y: -14 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 z-10 grid h-[136px] w-[136px] place-items-center rounded-full border border-white/10 bg-slate-950/85 text-center shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.82))] [.light_&]:shadow-[0_18px_44px_rgba(30,41,59,0.10)]"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3.2,
                            ease: "easeInOut"
                        }}
                        className="grid place-items-center"
                    >
                        <ActiveGroupIcon
                            className="h-10 w-10 text-sky-300 [.light_&]:text-sky-600"
                            aria-hidden="true"
                        />
                    </motion.div>

                    <span className="absolute -bottom-10 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 [.light_&]:text-slate-500">
                        {activeGroup.shortTitle}
                    </span>
                </motion.div>
            </AnimatePresence>

            {skills.map((skill, index) => {
                const SkillIcon = skill.icon || BadgeCheck;
                const slot = previewSlots[index];

                return (
                    <motion.div
                        key={`${activeGroup.id}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0.72 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.72 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: "easeOut"
                        }}
                        className="absolute z-[5]"
                        style={{
                            top: slot.top,
                            left: slot.left,
                            transform: "translate(-50%, -50%)"
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2.6 + index * 0.2,
                                ease: "easeInOut"
                            }}
                            className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-[0_10px_28px_rgba(15,23,42,0.12)] backdrop-blur-xl [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:shadow-[0_12px_28px_rgba(30,41,59,0.08)] [.light_&]:backdrop-blur-xl"
                            style={{
                                "--orbit-icon-dark":
                                    skill.color || activeGroup.accent,
                                "--orbit-icon-light":
                                    skill.lightColor ||
                                    skill.color ||
                                    activeGroup.accent
                            }}
                            title={skill.name}
                        >
                            <SkillIcon
                                className="h-5 w-5 text-[var(--orbit-icon-dark)] [.light_&]:text-[var(--orbit-icon-light)]"
                                aria-hidden="true"
                            />
                        </motion.div>
                    </motion.div>
                );
            })}
        </Card>
    );
}

function EducationCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            whileHover={{
                y: -8,
                scale: 1.01
            }}
            className="group/education relative mx-auto mt-12 max-w-5xl"
        >
            {/* Outer glow */}
            <span className="pointer-events-none absolute -inset-[2px] rounded-[2rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.45),rgba(168,85,247,0.34),rgba(14,165,233,0.36),rgba(56,189,248,0.45))] opacity-0 blur-2xl transition duration-700 group-hover/education:opacity-80 [.light_&]:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.28),rgba(124,58,237,0.20),rgba(59,130,246,0.24),rgba(14,165,233,0.28))] [.light_&]:group-hover/education:opacity-75" />

            <Card className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_20px_70px_rgba(15,23,42,0.14)] transition-all duration-500 group-hover/education:border-sky-300/45 group-hover/education:bg-sky-400/[0.055] group-hover/education:shadow-[0_28px_90px_rgba(56,189,248,0.16)] [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(248,250,252,0.76),rgba(245,243,255,0.52))] [.light_&]:shadow-[0_24px_70px_rgba(30,41,59,0.10)] [.light_&]:backdrop-blur-2xl [.light_&]:group-hover/education:border-sky-300/70 [.light_&]:group-hover/education:shadow-[0_30px_85px_rgba(14,165,233,0.16)]">
                {/* Soft background */}
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_90%_88%,rgba(168,85,247,0.12),transparent_36%)] transition duration-500 [.light_&]:bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.11),transparent_32%),radial-gradient(circle_at_90%_88%,rgba(168,85,247,0.10),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent)]" />

                {/* Moving shine */}
                <span className="pointer-events-none absolute -left-28 top-0 h-full w-20 rotate-12 bg-white/10 blur-md transition-transform duration-1000 group-hover/education:translate-x-[780px] [.light_&]:bg-white/80" />

                <CardContent className="relative p-5 sm:p-7 lg:p-8">
                    <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                        {/* Animated icon badge */}
                        <div className="relative mx-auto md:mx-0">
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
                                    duration: 3,
                                    ease: "easeInOut"
                                }}
                                className="grid h-20 w-20 place-items-center rounded-3xl border border-white/10 bg-slate-950/70 text-sky-300 shadow-[0_18px_45px_rgba(56,189,248,0.12)] backdrop-blur-xl transition duration-500 group-hover/education:scale-105 group-hover/education:rotate-3 [.light_&]:border-sky-200/80 [.light_&]:bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(245,243,255,0.9))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_16px_38px_rgba(14,165,233,0.12)]"
                            >
                                <GraduationCap
                                    className="h-9 w-9"
                                    aria-hidden="true"
                                />
                            </motion.div>

                            <Sparkles
                                className="absolute -right-2 -top-2 h-5 w-5 text-violet-300 opacity-80 transition duration-500 group-hover/education:rotate-12 group-hover/education:scale-110 [.light_&]:text-violet-500"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Text */}
                        <div className="text-center md:text-left">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-sky-700 [.light_&]:backdrop-blur-xl">
                                <BookOpen
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                Education
                            </div>

                            <h2 className="font-display text-xl font-semibold text-white sm:text-2xl [.light_&]:text-slate-900">
                                My Education
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 [.light_&]:text-slate-600">
                                Currently doing my Bachelor of Science in Electrical
                                and Electronics Engineering from{" "}
                                <span className="font-semibold text-sky-200 [.light_&]:text-sky-700">
                                    North South University
                                </span>
                                , Dhaka.
                            </p>

                            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-300 [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-slate-600">
                                    <CalendarDays
                                        className="h-3.5 w-3.5 text-sky-300 [.light_&]:text-sky-600"
                                        aria-hidden="true"
                                    />
                                    2025 - Present
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-slate-300 [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-slate-600">
                                    <MapPin
                                        className="h-3.5 w-3.5 text-violet-300 [.light_&]:text-violet-600"
                                        aria-hidden="true"
                                    />
                                    Dhaka, Bangladesh
                                </span>
                            </div>
                        </div>

                        {/* Right status badge */}
                        <div className="mx-auto w-full max-w-[220px] rounded-3xl border border-white/10 bg-white/[0.05] p-4 text-center shadow-[0_12px_36px_rgba(15,23,42,0.10)] backdrop-blur-xl md:mx-0 [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:shadow-[0_14px_34px_rgba(30,41,59,0.08)]">
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 [.light_&]:text-slate-500">
                                Degree
                            </span>

                            <p className="mt-2 font-display text-lg font-semibold text-white [.light_&]:text-slate-900">
                                B.Sc. in EEE
                            </p>

                            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                                <BadgeCheck
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                Currently Studying
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}


export default function Skills() {
    const [activeGroupId, setActiveGroupId] = useState(skillGroups[0].id);
    const [isPaused, setIsPaused] = useState(false);

    const activeGroup = useMemo(() => {
        return (
            skillGroups.find((group) => group.id === activeGroupId) ||
            skillGroups[0]
        );
    }, [activeGroupId]);

    const ActiveBadgeIcon = activeGroup.icon || Boxes;

    useEffect(() => {
        if (isPaused) return undefined;

        const interval = window.setInterval(() => {
            setActiveGroupId((currentId) => {
                const currentIndex = skillGroups.findIndex(
                    (group) => group.id === currentId
                );
                const nextIndex = (currentIndex + 1) % skillGroups.length;
                return skillGroups[nextIndex].id;
            });
        }, 4200);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute right-0 top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl [.light_&]:bg-violet-300/10"
            />
            <div
                aria-hidden="true"
                className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl [.light_&]:bg-sky-200/20"
            />

            <div className="container">
                <SectionHeader
                    eyebrow="Skills"
                    title="Skills I'm Building With"
                    description="My skill set is built around modern web development, clean UI design, smooth motion, deployment, and practical full-stack learning."
                />

                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="space-y-7"
                >
                    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-2">
                        {skillGroups.map((group) => (
                            <CategoryButton
                                key={group.id}
                                group={group}
                                isActive={activeGroup.id === group.id}
                                onClick={() => setActiveGroupId(group.id)}
                            />
                        ))}
                    </div>

                    <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div data-gsap-reveal className="hidden lg:block">
                            <OrbitPreview activeGroup={activeGroup} />
                        </div>

                        <Card className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl [.light_&]:border-slate-200/90 [.light_&]:bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(248,250,252,0.78),rgba(245,243,255,0.58))] [.light_&]:shadow-[0_24px_70px_rgba(30,41,59,0.10)] [.light_&]:backdrop-blur-2xl">
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_18%_12%,rgba(14,165,233,0.10),transparent_30%),radial-gradient(circle_at_90%_88%,rgba(168,85,247,0.10),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.24),transparent)]" />

                            <CardContent className="relative p-4 sm:p-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeGroup.id}
                                        initial={{
                                            opacity: 0,
                                            y: 20,
                                            filter: "blur(6px)"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)"
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            filter: "blur(6px)"
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                                            <div>
                                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:text-sky-700 [.light_&]:backdrop-blur-xl">
                                                    <ActiveBadgeIcon
                                                        className="h-3.5 w-3.5"
                                                        aria-hidden="true"
                                                    />
                                                    {activeGroup.shortTitle}
                                                </div>

                                                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl [.light_&]:text-slate-900">
                                                    {activeGroup.title}
                                                </h3>

                                                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 [.light_&]:text-slate-600">
                                                    {activeGroup.description}
                                                </p>
                                            </div>

                                            <div className="inline-flex h-11 w-[116px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-400 shadow-[0_10px_24px_rgba(15,23,42,0.10)] [.light_&]:border-slate-200/90 [.light_&]:bg-white/80 [.light_&]:text-slate-600 [.light_&]:shadow-[0_12px_28px_rgba(30,41,59,0.07)] [.light_&]:backdrop-blur-xl">
                                                <Boxes
                                                    className="h-4 w-4 shrink-0 text-sky-300 [.light_&]:text-sky-600"
                                                    aria-hidden="true"
                                                />

                                                <span className="inline-flex items-center gap-1 leading-none">
                                                    <span className="font-semibold text-white [.light_&]:text-slate-800">
                                                        {activeGroup.skills.length}
                                                    </span>
                                                    <span>skills</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                                            {activeGroup.skills.map((skill, index) => (
                                                <SkillCard
                                                    key={`${activeGroup.id}-${skill.name}`}
                                                    skill={skill}
                                                    index={index}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <br />
                <EducationCard />

            </div>
        </section>
    );
}