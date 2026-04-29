"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";

const Scene = dynamic(() => import("@/components/Scene"), {
    ssr: false,
    loading: () => (
        <div className="h-[300px] w-full sm:h-[440px] lg:h-[500px]" />
    )
});

const introItems = [
    {
        label: "Dragon News",
        detail: "News platform project"
    },
    {
        label: "KeenKeeper",
        detail: "Next.js project"
    },
    {
        label: "DigiTools",
        detail: "Next.js project based on eCommerce"
    },
    {
        label: "AI Shop Cart",
        detail: "Ecommerce project with React"
    },
    {
        label: "Todo App",
        detail: "Vanilla JS project"
    },
    {
        label: "Job Tracker",
        detail: "Dashboard logic with React"
    },
    {
        label: "API Projects",
        detail: "Dynamic and Static data based projects"
    },
    {
        label: "Cool Layouts",
        detail: "Responsive layouts with CSS"
    }
];

const swapPairs = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [1, 5],
    [3, 7],
    [0, 4],
    [2, 6]
];

const typingRoles = [
    "Creative Full-Stack Developer",
    "React & Next.js Developer",
    "Frontend-Focused Builder",
    "Learning by Building"
];

function TypingRole() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [visibleText, setVisibleText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const longestRole = "Creative Full-Stack Developer";

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
            setVisibleText(typingRoles[0]);
            return undefined;
        }

        const currentRole = typingRoles[roleIndex];
        let timeout;

        if (!isDeleting && visibleText === currentRole) {
            timeout = window.setTimeout(() => {
                setIsDeleting(true);
            }, 950);
        } else if (isDeleting && visibleText === "") {
            timeout = window.setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((currentIndex) => (currentIndex + 1) % typingRoles.length);
            }, 260);
        } else {
            timeout = window.setTimeout(
                () => {
                    setVisibleText((currentText) =>
                        isDeleting
                            ? currentRole.slice(0, currentText.length - 1)
                            : currentRole.slice(0, currentText.length + 1)
                    );
                },
                isDeleting ? 34 : 62
            );
        }

        return () => window.clearTimeout(timeout);
    }, [visibleText, isDeleting, roleIndex]);

    return (
        <span className="relative inline-flex h-4 min-w-[14.5rem] items-center leading-none sm:min-w-[17rem]">
            <span className="invisible pointer-events-none select-none">
                {longestRole}
            </span>

            <span className="absolute left-0 top-1/2 inline-flex -translate-y-1/2 items-center whitespace-nowrap">
                <span>{visibleText || "\u00A0"}</span>

                <motion.span
                    aria-hidden="true"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="ml-1 h-3.5 w-px rounded-full bg-sky-300 [.light_&]:bg-sky-600"
                />
            </span>
        </span>
    );
}

export default function Hero() {
    const headlineRef = useRef(null);
    const swapStepRef = useRef(0);

    const [floatingItems, setFloatingItems] = useState(introItems);
    const [activeIntroIndex, setActiveIntroIndex] = useState(0);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !headlineRef.current) return undefined;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-word",
                { yPercent: 110, opacity: 0, rotateX: -35 },
                {
                    yPercent: 0,
                    opacity: 1,
                    rotateX: 0,
                    duration: 1.1,
                    stagger: 0.08,
                    ease: "expo.out"
                }
            );
        }, headlineRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return undefined;

        const interval = window.setInterval(() => {
            setActiveIntroIndex((currentIndex) => (currentIndex + 1) % introItems.length);

            setFloatingItems((items) => {
                const nextItems = [...items];
                const [firstIndex, secondIndex] =
                    swapPairs[swapStepRef.current % swapPairs.length];

                [nextItems[firstIndex], nextItems[secondIndex]] = [
                    nextItems[secondIndex],
                    nextItems[firstIndex]
                ];

                swapStepRef.current += 1;

                return nextItems;
            });
        }, 1200);

        return () => window.clearInterval(interval);
    }, []);

    const activeIntroItem = introItems[activeIntroIndex];

    return (
        <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl [.light_&]:bg-sky-400/10"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl [.light_&]:bg-violet-400/10"
            />

            <div
                aria-hidden="true"
                className="absolute right-10 top-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl [.light_&]:bg-cyan-400/10"
            />

            <div className="container grid min-h-[calc(100vh-8rem)] items-center gap-x-10 gap-y-8 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative z-10 pb-2 lg:pb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="eyebrow mb-6 min-h-9"
                    >
                        <Sparkles
                            className="h-3.5 w-3.5 animate-pulse text-sky-300 [.light_&]:text-sky-600"
                            aria-hidden="true"
                        />
                        <TypingRole />
                    </motion.div>

                    <h1
                        ref={headlineRef}
                        className="font-display max-w-[680px] text-[clamp(2.65rem,12vw,5.9rem)] font-bold leading-[0.98] tracking-[-0.05em] sm:text-[clamp(3.6rem,7vw,5.9rem)]"
                    >
                        <span className="block overflow-hidden pb-2">
                            <span className="hero-word inline-block">Hi, I&apos;m</span>
                        </span>

                        <span className="block overflow-hidden pb-2">
                            <span className="hero-word inline-block text-gradient">Mushfiq</span>
                        </span>

                        <span className="block overflow-hidden pb-2">
                            <span className="hero-word inline-block text-gradient">
                                Iqbal Araf
                            </span>
                        </span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                        className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 [.light_&]:text-slate-600"
                    >
                        A full-stack developer focused on building modern, responsive, and
                        interactive web experiences while continuously learning, improving, and
                        turning ideas into real digital products.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.72, ease: "easeOut" }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <MagneticButton>
                            <Button asChild className="h-12 rounded-full px-6 sm:px-7">
                                <a
                                    href="#projects"
                                    className="focus-ring inline-flex items-center gap-2 whitespace-nowrap rounded-full"
                                >
                                    View Projects
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </a>
                            </Button>
                        </MagneticButton>

                        <MagneticButton>
                            <Button
                                asChild
                                variant="ghost"
                                className="group h-11 rounded-full border border-white/10 bg-white/[0.05] px-5 text-sm font-medium text-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white hover:shadow-[0_18px_45px_rgba(56,189,248,0.16)] sm:h-12 sm:px-6 [.light_&]:border-slate-200 [.light_&]:bg-white/85 [.light_&]:text-slate-900 [.light_&]:shadow-[0_10px_30px_rgba(15,23,42,0.08)] [.light_&]:hover:border-sky-400/50 [.light_&]:hover:bg-sky-50"
                            >
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="focus-ring inline-flex items-center gap-2 whitespace-nowrap rounded-full"
                                    aria-label="View CV or resume"
                                >
                                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-400/15 text-sky-300 transition duration-300 group-hover:bg-sky-400/25 group-hover:text-sky-200 [.light_&]:bg-sky-500/10 [.light_&]:text-sky-700">
                                        <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                    </span>

                                    <span className="hidden xs:inline">View Resume</span>
                                    <span className="xs:hidden">Resume</span>

                                    <ArrowUpRight
                                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                    className="relative order-2 -mx-4 flex justify-center lg:order-none lg:mx-0"
                >
                    <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/18 blur-3xl [.light_&]:bg-violet-400/12" />

                    <div className="relative isolate mx-auto h-[280px] w-full max-w-[360px] sm:h-[420px] sm:max-w-[500px] lg:h-[500px] lg:max-w-[560px] xl:h-[540px] xl:max-w-[600px] [&>*]:!h-full [&>*]:!w-full">
                        <Scene />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="order-3 -mt-2 mb-2 sm:hidden"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeIntroItem.label}
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{
                                opacity: { duration: 0.18 },
                                y: { duration: 0.18 },
                                scale: { duration: 0.18 }
                            }}
                            whileDrag={{ scale: 1.04, rotate: 1.2 }}
                            drag
                            dragMomentum={false}
                            dragElastic={0.24}
                            dragConstraints={{
                                top: -18,
                                bottom: 18,
                                left: -22,
                                right: 22
                            }}
                            className="group relative mx-auto max-w-[310px] cursor-grab rounded-[1.25rem] bg-gradient-to-br from-sky-400/30 via-white/20 to-violet-500/25 p-[1px] shadow-[0_12px_34px_rgba(15,23,42,0.10)] active:cursor-grabbing [.light_&]:from-sky-500/20 [.light_&]:via-slate-200/80 [.light_&]:to-violet-500/20"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -3, 0],
                                    x: [0, 2, 0],
                                    rotate: [0, 0.35, 0]
                                }}
                                transition={{
                                    y: {
                                        duration: 1.25,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    x: {
                                        duration: 1.4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotate: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                className="relative overflow-hidden rounded-[1.18rem] bg-slate-900/70 px-4 py-3 text-left backdrop-blur-xl [.light_&]:bg-white/92"
                            >
                                <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-violet-400/8 to-transparent [.light_&]:from-sky-500/8 [.light_&]:via-violet-500/8" />

                                <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-sky-400/10 blur-2xl [.light_&]:bg-sky-500/10" />

                                <h3 className="relative text-sm font-semibold text-white [.light_&]:text-slate-900">
                                    {activeIntroItem.label}
                                </h3>

                                <p className="relative mt-1 text-xs leading-5 text-slate-300 [.light_&]:text-slate-600">
                                    {activeIntroItem.detail}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
                    className="relative z-10 mt-3 mb-4 hidden sm:block lg:col-span-2"
                >
                    <motion.div
                        layout
                        className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
                    >
                        {floatingItems.map((item, index) => (
                            <motion.div
                                layout
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y:
                                        index % 2 === 0
                                            ? [0, -5, 0, 4, 0]
                                            : [0, 4, 0, -5, 0],
                                    x:
                                        index % 3 === 0
                                            ? [0, 4, 0, -3, 0]
                                            : [0, -3, 0, 4, 0],
                                    rotate:
                                        index % 2 === 0
                                            ? [0, 0.7, 0, -0.7, 0]
                                            : [0, -0.7, 0, 0.7, 0]
                                }}
                                transition={{
                                    layout: {
                                        type: "spring",
                                        stiffness: 190,
                                        damping: 20,
                                        mass: 0.72
                                    },
                                    opacity: { duration: 0.25 },
                                    scale: { duration: 0.25 },
                                    y: {
                                        duration: 2.1 + index * 0.08,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    x: {
                                        duration: 2.3 + index * 0.08,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    rotate: {
                                        duration: 2.6 + index * 0.08,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.035,
                                    rotate: index % 2 === 0 ? 1.5 : -1.5,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 18
                                    }
                                }}
                                whileDrag={{
                                    scale: 1.05,
                                    rotate: index % 2 === 0 ? 2 : -2,
                                    zIndex: 50
                                }}
                                whileTap={{ scale: 0.98 }}
                                drag
                                dragMomentum={false}
                                dragElastic={0.28}
                                dragConstraints={{
                                    top: -24,
                                    bottom: 24,
                                    left: -28,
                                    right: 28
                                }}
                                className="group relative cursor-grab rounded-[1.35rem] bg-gradient-to-br from-sky-400/25 via-white/15 to-violet-500/20 p-[1px] shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(56,189,248,0.12)] active:cursor-grabbing [.light_&]:from-sky-500/18 [.light_&]:via-slate-200/80 [.light_&]:to-violet-500/18"
                            >
                                <div className="relative overflow-hidden rounded-[1.28rem] bg-slate-900/70 px-4 py-3 text-left backdrop-blur-xl transition-colors duration-300 group-hover:bg-slate-900/78 [.light_&]:bg-white/92 [.light_&]:group-hover:bg-white">
                                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/8 via-violet-400/8 to-transparent opacity-80 [.light_&]:from-sky-500/8 [.light_&]:via-violet-500/8" />

                                    <span className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-sky-400/10 blur-2xl transition duration-300 group-hover:bg-violet-400/18 [.light_&]:bg-sky-500/10" />

                                    <span className="pointer-events-none absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-sky-300/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 [.light_&]:via-sky-500/35" />

                                    <h3 className="relative text-sm font-semibold text-white [.light_&]:text-slate-900">
                                        {item.label}
                                    </h3>

                                    <p className="relative mt-1 text-xs leading-5 text-slate-300 [.light_&]:text-slate-600">
                                        {item.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}