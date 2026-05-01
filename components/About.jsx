"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    Code2,
    Layers3,
    Palette,
    Webhook,
    Github,
    Instagram,
    Facebook,
    MessageCircle,
    Rocket,
    BriefcaseBusiness,
    Heart,
    Brain,
    UserRound,
    Linkedin,
    TrendingUp
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import araf from "../public/assets/araf.png";

const aboutTabs = [
    {
        id: "journey",
        label: "My Beginning",
        fullLabel: "My Beginning",
        icon: Rocket,
        title: "How my programming journey began",
        content:
            "I’m Mushfiq Iqbal Araf, a student developer with a strong passion for building clean, modern, and interactive web experiences. My journey into programming started with curiosity. I wanted to understand how websites worked, how interfaces were created, and how code could turn an idea into something real, useful, and visually meaningful. That curiosity slowly grew into a deeper interest in web development, UI design, and full-stack projects."
    },
    {
        id: "work",
        label: "What I Love Building",
        fullLabel: "What I Love Building",
        icon: BriefcaseBusiness,
        title: "The type of work I Love",
        content:
            "I enjoy creating responsive websites, smooth user interfaces, landing pages, portfolio websites, and practical web applications that combine design, performance, and usability. I like working with technologies such as React, Next.js, JavaScript, Tailwind CSS, Node.js, MongoDB, Framer Motion, and GSAP because they allow me to bring together logic, creativity, animation, and visual design in one workflow. To me, development is more than writing code. It is about shaping digital experiences that feel polished, purposeful, and easy to use."
    },
    {
        id: "growth",
        label: "Always Improving",
        fullLabel: "Always Improving",
        icon: Brain,
        title: "Still Learning, still Growing, still Improving",
        content:
            "As a student, I am still learning and improving every day, but I see that as one of my biggest strengths. I enjoy experimenting with new tools, building real projects, solving practical problems, and learning from every challenge. Each project gives me the opportunity to improve my code quality, design decisions, performance, accessibility, and understanding of how users interact with a product."
    },
    {
        id: "personality",
        label: "How I Think",
        fullLabel: "How I Think",
        icon: UserRound,
        title: "Curious, consistent, and creative",
        content:
            "I would describe myself as curious, consistent, and creative. I care about small details, clean layouts, smooth interactions, and writing code that is understandable and maintainable. My goal is to continue growing as a developer, build meaningful digital products, and create work that is both technically solid and visually impressive."
    },
    {
        id: "outside",
        label: "Beyond Code",
        fullLabel: "Beyond Code",
        icon: Heart,
        title: "Outside of programming",
        content:
            "Outside of programming, I enjoy exploring design inspiration, learning about new technologies, watching creative content, and focusing on personal growth. I believe creativity and consistency go hand in hand, and I try to bring that mindset into everything I build."
    },
    {
        id: "nextChapter",
        label: "Next Chapter",
        fullLabel: "Next Chapter",
        icon: TrendingUp,
        title: "What should I do next?",
        content:
            "My goal is to keep growing as a developer, build stronger full-stack projects, improve my design and animation skills, and create digital products that feel useful, beautiful, and professional."
    }
];

const highlights = [
    {
        icon: Layers3,
        label: "Full-Stack Mindset",
        value: "Exploring backend logic, databases, and deployment"
    },
    {
        icon: Palette,
        label: "Modern UI Builder",
        value: "Designing clean, responsive interfaces with thoughtful details"
    },
    {
        icon: Code2,
        label: "Clean Engineering",
        value: "Building practical projects while sharpening my craft"
    }
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/mi-araf",
        icon: Github
    },
    {
        label: "Instagram",
        href: "https://instagram.com/tde_araf",
        icon: Instagram
    },
    {
        label: "Facebook",
        href: "https://facebook.com/mushfiq.araf.2024",
        icon: Facebook
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/8801552350991",
        icon: MessageCircle
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mi-araf",
        icon: Linkedin
    }
];

function HighlightCard({ icon: Icon, label, value, index }) {
    return (
        <motion.div
            initial={false}
            whileHover={{
                y: -10,
                scaleX: 0.985,
                scaleY: 1.035,
                rotate: index % 2 === 0 ? -0.45 : 0.45
            }}
            whileTap={{
                scale: 0.965
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                mass: 0.65
            }}
            className="group relative h-full"
        >
            {/* Outer glow */}
            <span className="pointer-events-none absolute -inset-[1px] rounded-[1.25rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.55),rgba(168,85,247,0.38),rgba(14,165,233,0.45),rgba(56,189,248,0.55))] opacity-0 blur-xl transition duration-500 group-hover:opacity-80 sm:rounded-[1.85rem] [.light_&]:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.42),rgba(124,58,237,0.32),rgba(59,130,246,0.36),rgba(14,165,233,0.42))] [.light_&]:group-hover:opacity-80" />

            <Card className="relative h-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.045] shadow-[0_18px_55px_rgba(15,23,42,0.12)] transition-all duration-500 hover:border-sky-300/45 hover:bg-sky-400/[0.065] hover:shadow-[0_28px_80px_rgba(56,189,248,0.18)] sm:rounded-[2rem] [.light_&]:border-slate-200/90 [.light_&]:bg-white/95 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.08)] [.light_&]:hover:border-sky-400/70 [.light_&]:hover:bg-[linear-gradient(135deg,rgba(240,249,255,0.98),rgba(245,243,255,0.96))] [.light_&]:hover:shadow-[0_24px_70px_rgba(14,165,233,0.22)]">
                {/* Inner glow */}
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_15%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_85%_90%,rgba(168,85,247,0.16),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_35%_15%,rgba(14,165,233,0.20),transparent_36%),radial-gradient(circle_at_85%_90%,rgba(124,58,237,0.16),transparent_38%)]" />

                {/* Moving shine */}
                <span className="pointer-events-none absolute -left-24 top-0 h-full w-20 rotate-12 bg-white/10 blur-md transition-transform duration-700 group-hover:translate-x-[360px] [.light_&]:bg-white/80" />

                <CardContent className="relative flex items-start gap-3 p-3 sm:block sm:p-6">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.08] text-sky-200 shadow-[0_10px_30px_rgba(56,189,248,0.08)] transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-sky-300/40 group-hover:bg-sky-400/15 group-hover:text-sky-100 sm:mb-5 sm:h-12 sm:w-12 sm:rounded-2xl [.light_&]:border-sky-200/80 [.light_&]:bg-[linear-gradient(135deg,rgba(224,242,254,0.95),rgba(237,233,254,0.92))] [.light_&]:text-sky-700 [.light_&]:shadow-[0_12px_30px_rgba(14,165,233,0.16)] [.light_&]:group-hover:border-violet-300/80 [.light_&]:group-hover:bg-[linear-gradient(135deg,rgba(219,234,254,1),rgba(237,233,254,1))] [.light_&]:group-hover:text-violet-700 [.light_&]:group-hover:shadow-[0_16px_38px_rgba(124,58,237,0.20)]">
                        <Icon
                            className="h-4 w-4 text-current drop-shadow-[0_0_10px_rgba(56,189,248,0.45)] transition duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-5 sm:w-5 [.light_&]:drop-shadow-[0_0_8px_rgba(14,165,233,0.35)]"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <h3 className="font-display text-sm font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-sky-50 sm:text-xl [.light_&]:text-slate-950 [.light_&]:group-hover:text-sky-800">
                            {label}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-300 transition-colors duration-300 group-hover:text-slate-200 sm:mt-3 sm:text-base sm:leading-7 [.light_&]:text-slate-600 [.light_&]:group-hover:text-slate-700">
                            {value}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}


export default function About() {
    const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
    const [aboutCardGlow, setAboutCardGlow] = useState({
        x: 50,
        y: 50,
    });

    const activeContent =
        aboutTabs.find((tab) => tab.id === activeTab) || aboutTabs[0];

    const ActiveIcon = activeContent.icon;

    const handleAboutCardMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setAboutCardGlow({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
        });
    };

    const resetAboutCardGlow = () => {
        setAboutCardGlow({
            x: 50,
            y: 50,
        });
    };

    return (
        <section id="about" className="section-padding relative">
            <div className="container">
                <SectionHeader
                    eyebrow="About Me"
                    title="A developer with a designer's eye and a product builder's pulse."
                    description="I shape interfaces that feel calm, fast, and alive. My work blends frontend craft, motion design, and practical full-stack thinking so ideas can move from sketch to shipped experience."
                />

                <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
                    {/* Left profile card */}
                    <div
                        data-gsap-reveal
                        className="relative mx-auto w-full max-w-[335px] sm:max-w-md lg:sticky lg:top-24"
                    >
                        <div
                            data-parallax="36"
                            className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl"
                        />

                        <Card className="relative w-full overflow-hidden rounded-[1.6rem] sm:rounded-[2.25rem]">
                            <CardContent className="p-3 sm:p-5">
                                <div className="relative min-h-[500px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 sm:min-h-[660px] sm:rounded-[1.7rem] [.light_&]:from-slate-100 [.light_&]:via-white [.light_&]:to-blue-100">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(56,189,248,.30),transparent_28%),radial-gradient(circle_at_75%_70%,rgba(167,139,250,.28),transparent_28%)]" />

                                    <div className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] text-white/80 backdrop-blur-xl sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs [.light_&]:text-slate-700">
                                        Student Developer
                                    </div>

                                    {/* Image in the hollow space */}
                                    <div className="absolute left-1/2 top-[31%] z-10 h-[210px] w-[180px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/10 shadow-[0_20px_80px_rgba(56,189,248,0.22)] sm:top-[31%] sm:h-[330px] sm:w-[260px] sm:rounded-[1.5rem]">
                                        <Image
                                            src={araf}
                                            alt="Mushfiq Iqbal Araf"
                                            fill
                                            priority
                                            sizes="(max-width: 640px) 180px, 260px"
                                            className="object-contain object-center"
                                        />
                                    </div>

                                    <motion.div
                                        initial={false}
                                        whileHover={{
                                            y: -8,
                                            scaleX: 0.985,
                                            scaleY: 1.035,
                                            rotate: -0.35
                                        }}
                                        whileTap={{
                                            scale: 0.965
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 18,
                                            mass: 0.65
                                        }}
                                        className="group/profile absolute bottom-3 left-3 right-3 z-20 sm:bottom-6 sm:left-6 sm:right-6"
                                    >
                                        {/* Outer glow */}
                                        <span className="pointer-events-none absolute -inset-[1px] rounded-[1.2rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.55),rgba(168,85,247,0.38),rgba(14,165,233,0.45),rgba(56,189,248,0.55))] opacity-0 blur-xl transition duration-500 group-hover/profile:opacity-80 sm:rounded-[1.55rem] [.light_&]:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.42),rgba(124,58,237,0.32),rgba(59,130,246,0.36),rgba(14,165,233,0.42))] [.light_&]:group-hover/profile:opacity-80" />

                                        <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-black/30 p-3 shadow-[0_18px_55px_rgba(15,23,42,0.20)] backdrop-blur-2xl transition-all duration-500 group-hover/profile:border-sky-300/45 group-hover/profile:bg-sky-400/[0.08] group-hover/profile:shadow-[0_28px_80px_rgba(56,189,248,0.18)] sm:rounded-[1.5rem] sm:p-5 [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.08)] [.light_&]:group-hover/profile:border-sky-400/70 [.light_&]:group-hover/profile:bg-[linear-gradient(135deg,rgba(240,249,255,0.96),rgba(245,243,255,0.92))] [.light_&]:group-hover/profile:shadow-[0_24px_70px_rgba(14,165,233,0.20)]">
                                            {/* Inner glow */}
                                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.16),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover/profile:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.18),transparent_36%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.14),transparent_38%)]" />

                                            {/* Moving shine */}
                                            <span className="pointer-events-none absolute -left-24 top-0 h-full w-20 rotate-12 bg-white/10 blur-md transition-transform duration-700 group-hover/profile:translate-x-[360px] [.light_&]:bg-white/80" />

                                            <div className="relative">
                                                <div className="mb-3 flex min-w-0 items-center gap-2.5 sm:mb-4 sm:gap-4">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-slate-950 shadow-[0_10px_28px_rgba(56,189,248,0.12)] transition duration-500 group-hover/profile:scale-110 group-hover/profile:rotate-3 group-hover/profile:bg-sky-100 group-hover/profile:text-sky-700 sm:h-10 sm:w-10 [.light_&]:bg-[linear-gradient(135deg,rgba(224,242,254,0.95),rgba(237,233,254,0.92))] [.light_&]:text-sky-700 [.light_&]:group-hover/profile:text-violet-700">
                                                        <Webhook
                                                            className="h-4 w-4 transition duration-500 group-hover/profile:scale-110 sm:h-5 sm:w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </div>

                                                    <h3 className="min-w-0 break-words font-display text-lg font-semibold leading-tight text-white transition-colors duration-300 group-hover/profile:text-sky-50 sm:text-2xl [.light_&]:text-slate-950 [.light_&]:group-hover/profile:text-sky-800">
                                                        Mushfiq Iqbal Araf
                                                    </h3>
                                                </div>

                                                <p className="text-xs leading-5 text-white/65 transition-colors duration-300 group-hover/profile:text-slate-200 sm:text-sm sm:leading-6 [.light_&]:text-slate-600 [.light_&]:group-hover/profile:text-slate-700">
                                                    Creative Web Developer crafting premium digital
                                                    interfaces with motion, clarity, and quiet spectacle.
                                                </p>

                                                <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                                                    {socialLinks.map(({ label, href, icon: Icon }) => (
                                                        <a
                                                            key={label}
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={label}
                                                            className="focus-ring group/social grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/75 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-sky-400/15 hover:text-sky-200 sm:h-10 sm:w-10 [.light_&]:border-sky-100 [.light_&]:bg-white/85 [.light_&]:text-sky-700 [.light_&]:shadow-[0_8px_22px_rgba(14,165,233,0.08)] [.light_&]:hover:border-violet-300 [.light_&]:hover:bg-violet-50 [.light_&]:hover:text-violet-700"
                                                        >
                                                            <Icon
                                                                className="h-3.5 w-3.5 transition duration-300 group-hover/social:scale-110 group-hover/social:rotate-6 sm:h-4 sm:w-4"
                                                                aria-hidden="true"
                                                            />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right about menu */}
                    <div data-gsap-reveal className="w-full min-w-0 space-y-6">
                        <div className="-mx-1 flex flex-wrap gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                            {aboutTabs.map(({ id, label, fullLabel, icon: Icon }) => {
                                const isActive = activeTab === id;

                                return (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setActiveTab(id)}
                                        className={`focus-ring group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-300 ${isActive
                                            ? "border-sky-300/70 bg-sky-400/15 text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.18)] [.light_&]:text-sky-700"
                                            : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white/70 [.light_&]:text-slate-700 [.light_&]:hover:text-sky-700"
                                            }`}
                                    >
                                        <Icon
                                            className={`h-4 w-4 transition duration-300 ${isActive
                                                ? "text-sky-300"
                                                : "text-slate-400 group-hover:text-sky-300"
                                                }`}
                                            aria-hidden="true"
                                        />

                                        <span className="sm:hidden">{label}</span>
                                        <span className="hidden sm:inline">{fullLabel}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <Card className="relative overflow-hidden rounded-[1.6rem] border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(15,23,42,0.16)] sm:rounded-[2rem]">
                            <CardContent className="relative min-h-[390px] p-5 sm:min-h-[360px] sm:p-7">
                                <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
                                <span className="pointer-events-none absolute -bottom-16 left-12 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

                                <AnimatePresence mode="wait">
                                    {/* <motion.div
                                        key={activeContent.id}
                                        initial={{
                                            opacity: 0,
                                            y: 14,
                                            filter: "blur(6px)"
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)"
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -14,
                                            filter: "blur(6px)"
                                        }}
                                        transition={{
                                            duration: 0.32,
                                            ease: "easeOut"
                                        }}
                                        className="relative"
                                    >
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-xs [.light_&]:border-slate-200 [.light_&]:bg-white/75 [.light_&]:text-sky-700">
                                            <ActiveIcon
                                                className="h-3.5 w-3.5"
                                                aria-hidden="true"
                                            />
                                            {activeContent.fullLabel}
                                        </div>

                                        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl [.light_&]:text-slate-950">
                                            {activeContent.title}
                                        </h3>

                                        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                                            {activeContent.content}
                                        </p>
                                    </motion.div> */}
                                    <motion.div
                                        initial={false}
                                        whileHover={{
                                            y: -5,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 240,
                                            damping: 24,
                                            mass: 0.7,
                                        }}
                                        onMouseMove={handleAboutCardMouseMove}
                                        onMouseLeave={resetAboutCardGlow}
                                        className="group/about-card relative"
                                    >
                                        <Card className="cursor-default">
                                            {/* Cursor-only glow */}
                                            <span
                                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/about-card:opacity-100"
                                                style={{
                                                    background: `radial-gradient(420px circle at ${aboutCardGlow.x}% ${aboutCardGlow.y}%, rgba(56, 189, 248, 0.16), rgba(168, 85, 247, 0.07), transparent 45%)`,
                                                }}
                                            />

                                            {/* Optional subtle grid texture */}
                                            <span className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:34px_34px] [.light_&]:opacity-[0.10]" />

                                            <CardContent className="relative min-h-[390px] p-5 sm:min-h-[360px] sm:p-7">
                                                <AnimatePresence mode="wait">
                                                    <motion.div
                                                        key={activeContent.id}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 12,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            y: -12,
                                                        }}
                                                        transition={{
                                                            duration: 0.24,
                                                            ease: "easeOut",
                                                        }}
                                                        className="relative"
                                                    >
                                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200 sm:text-xs [.light_&]:border-slate-200 [.light_&]:bg-white/75 [.light_&]:text-sky-700">
                                                            <ActiveIcon
                                                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover/about-card:rotate-6"
                                                                aria-hidden="true"
                                                            />

                                                            {activeContent.fullLabel}
                                                        </div>

                                                        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl [.light_&]:text-slate-950">
                                                            {activeContent.title}
                                                        </h3>

                                                        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                                                            {activeContent.content}
                                                        </p>
                                                    </motion.div>
                                                </AnimatePresence>
                                            </CardContent>
                                        </Card>
                                    </motion.div>


                                </AnimatePresence>
                            </CardContent>
                        </Card>

                        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                            {highlights.map((item, index) => (
                                <HighlightCard
                                    key={item.label}
                                    index={index}
                                    icon={item.icon}
                                    label={item.label}
                                    value={item.value}
                                />
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className="focus-ring group inline-flex items-center gap-2 rounded-full text-sm font-semibold text-sky-300 transition duration-300 hover:text-sky-100 [.light_&]:text-sky-700 [.light_&]:hover:text-violet-700"
                        >
                            <span className="relative">
                                Let&apos;s build something memorable
                                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
                            </span>

                            <ArrowUpRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}