"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const MotionLink = motion(Link);

const navItems = [
    { label: "Home", target: "#home" },
    { label: "About", target: "#about" },
    { label: "Skills", target: "#skills" },
    { label: "Projects", target: "#projects" },
    { label: "Services", target: "#services" },
    { label: "Contact", target: "#contact" },
];

const activePillTransition = {
    type: "spring",
    stiffness: 180,
    damping: 30,
    mass: 0.9,
};

const hoverTransition = {
    type: "spring",
    stiffness: 300,
    damping: 22,
    mass: 0.7,
};

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

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHref, setActiveHref] = useState("#home");

    const isProgrammaticScrollRef = useRef(false);
    const animationFrameRef = useRef(null);

    const smoothScrollTo = useCallback((targetTop, target) => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        const startTop = window.scrollY;
        const distance = targetTop - startTop;
        const duration = Math.min(Math.max(Math.abs(distance) * 0.55, 520), 1050);
        const startTime = performance.now();

        isProgrammaticScrollRef.current = true;

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startTop + distance * easedProgress);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animateScroll);
                return;
            }

            setActiveHref(target);

            window.setTimeout(() => {
                isProgrammaticScrollRef.current = false;
            }, 120);
        };

        animationFrameRef.current = requestAnimationFrame(animateScroll);
    }, []);

    const scrollToSection = useCallback(
        (target) => {
            const section = document.querySelector(target);

            if (!section) return false;

            const navbarOffset = 92;
            const top =
                section.getBoundingClientRect().top + window.scrollY - navbarOffset;

            setActiveHref(target);
            setOpen(false);
            smoothScrollTo(top, target);

            return true;
        },
        [smoothScrollTo]
    );

    const handleNavClick = (event, target) => {
        event.preventDefault();

        setActiveHref(target);
        setOpen(false);

        if (pathname !== "/") {
            window.sessionStorage.setItem("portfolio-scroll-target", target);
            router.push("/");
            return;
        }

        scrollToSection(target);
    };

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);

            if (isProgrammaticScrollRef.current) return;

            const scrollPosition = window.scrollY + 160;
            let currentSection = "#home";

            navItems.forEach((item) => {
                const section = document.querySelector(item.target);

                if (!section) return;

                if (section.offsetTop <= scrollPosition) {
                    currentSection = item.target;
                }
            });

            setActiveHref(currentSection);
        };

        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    useEffect(() => {
        if (pathname !== "/") return;

        const target = window.sessionStorage.getItem("portfolio-scroll-target");

        if (!target) return;

        window.sessionStorage.removeItem("portfolio-scroll-target");

        window.setTimeout(() => {
            scrollToSection(target);
        }, 120);
    }, [pathname, scrollToSection]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
                }`}
        >
            <motion.nav
                onMouseMove={updateMouseGlow}
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`container group/nav relative flex items-center justify-between overflow-hidden rounded-full border px-4 py-3 transition-all duration-500 ${scrolled
                        ? "border-white/10 bg-background/68 shadow-card backdrop-blur-2xl [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:shadow-[0_16px_45px_rgba(30,41,59,0.08)]"
                        : "border-transparent bg-transparent"
                    }`}
                aria-label="Main navigation"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/nav:opacity-100"
                    style={{
                        background:
                            "radial-gradient(420px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.12), rgba(168,85,247,0.08), transparent 46%)",
                    }}
                />

                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition duration-500 group-hover/nav:opacity-100 [.light_&]:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)]" />

                <Link
                    href="/"
                    className="focus-ring group/logo relative z-10 flex items-center gap-3 rounded-full"
                >
                    <motion.span
                        whileHover={{ y: -2, scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={hoverTransition}
                        className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.07] shadow-[0_10px_30px_rgba(56,189,248,0.08)] transition duration-300 group-hover/logo:border-sky-300/45 [.light_&]:border-slate-200/90 [.light_&]:bg-white"
                    >
                        <motion.span
                            aria-hidden="true"
                            animate={{ rotate: 360 }}
                            transition={{
                                repeat: Infinity,
                                duration: 12,
                                ease: "linear",
                            }}
                            className="absolute inset-[-40%] bg-[conic-gradient(from_180deg,rgba(56,189,248,0.55),rgba(168,85,247,0.42),transparent,rgba(56,189,248,0.55))]"
                        />

                        <span className="absolute inset-[2px] rounded-full bg-slate-950/80 backdrop-blur-xl [.light_&]:bg-white/85" />

                        <span className="relative font-display text-sm font-bold text-white [.light_&]:text-slate-900">
                            MI
                        </span>
                    </motion.span>

                    <motion.span
                        whileHover={{ x: 2 }}
                        transition={hoverTransition}
                        className="block text-lg font-bold tracking-wide text-white transition duration-300 group-hover/logo:text-sky-200 sm:text-lg [.light_&]:text-slate-900 [.light_&]:group-hover/logo:text-sky-700"
                    >
                        Araf
                    </motion.span>
                </Link>

                <div className="relative z-10 hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => {
                        const isActive = activeHref === item.target;

                        return (
                            <MotionLink
                                key={item.target}
                                href="/"
                                scroll={false}
                                onClick={(event) => handleNavClick(event, item.target)}
                                onMouseMove={updateMouseGlow}
                                whileHover={{
                                    y: -3,
                                    scale: 1.035,
                                }}
                                whileTap={{ scale: 0.96 }}
                                transition={hoverTransition}
                                className={`focus-ring group/link relative overflow-hidden rounded-full px-4 py-2 text-sm transition-colors duration-300 ${isActive
                                        ? "text-white [.light_&]:text-sky-700"
                                        : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="desktop-active-nav"
                                        className="absolute inset-0 rounded-full border border-sky-300/40 bg-sky-400/[0.13] shadow-[0_0_26px_rgba(56,189,248,0.14)] [.light_&]:border-sky-300/80 [.light_&]:bg-sky-50/90 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.10)]"
                                        transition={activePillTransition}
                                    />
                                )}

                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/link:opacity-100"
                                    style={{
                                        background:
                                            "radial-gradient(130px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.18), rgba(168,85,247,0.08), transparent 58%)",
                                    }}
                                />

                                <span className="absolute inset-0 rounded-full bg-white/[0.06] opacity-0 transition duration-300 group-hover/link:opacity-100 [.light_&]:bg-sky-50/80" />

                                <motion.span
                                    className="relative inline-block"
                                    animate={{
                                        y: isActive ? -0.5 : 0,
                                    }}
                                    transition={activePillTransition}
                                >
                                    {item.label}
                                </motion.span>
                            </MotionLink>
                        );
                    })}
                </div>

                <div className="relative z-10 flex items-center gap-2">
                    <ThemeToggle />

                    <MotionLink
                        href="/"
                        scroll={false}
                        onClick={(event) => handleNavClick(event, "#contact")}
                        whileHover={{ y: -3, scale: 1.035 }}
                        whileTap={{ scale: 0.96 }}
                        transition={hoverTransition}
                        className="focus-ring group/talk hidden items-center gap-2 overflow-hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition sm:inline-flex [.light_&]:bg-slate-950 [.light_&]:text-white"
                    >
                        <span className="relative">Let&apos;s Talk</span>

                        <ArrowUpRight
                            className="h-4 w-4 transition duration-300 group-hover/talk:-translate-y-0.5 group-hover/talk:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </MotionLink>

                    <motion.button
                        type="button"
                        whileHover={{ y: -2, scale: 1.06 }}
                        whileTap={{ scale: 0.92 }}
                        transition={hoverTransition}
                        className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:border-sky-300/45 hover:bg-sky-400/[0.10] lg:hidden [.light_&]:border-slate-200/90 [.light_&]:bg-white/80 [.light_&]:hover:border-sky-300/80 [.light_&]:hover:bg-sky-50"
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        onClick={() => setOpen((value) => !value)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {open ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                >
                                    <X className="h-5 w-5" />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
                                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                >
                                    <Menu className="h-5 w-5" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="container pt-3 lg:hidden"
                    >
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-background/78 p-3 shadow-card backdrop-blur-2xl [.light_&]:border-slate-200/90 [.light_&]:bg-white/85 [.light_&]:shadow-[0_16px_45px_rgba(30,41,59,0.08)]">
                            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.10),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.09),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.08),transparent_36%)]" />

                            <div className="relative grid gap-1">
                                {navItems.map((item, index) => {
                                    const isActive = activeHref === item.target;

                                    return (
                                        <MotionLink
                                            key={item.target}
                                            href="/"
                                            scroll={false}
                                            onClick={(event) => handleNavClick(event, item.target)}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.24,
                                                delay: index * 0.03,
                                                ease: "easeOut",
                                            }}
                                            whileHover={{ x: 5, scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`focus-ring group/mobile-link relative overflow-hidden rounded-2xl px-4 py-3 text-sm transition-colors duration-300 ${isActive
                                                    ? "text-white [.light_&]:text-sky-700"
                                                    : "text-muted-foreground hover:text-foreground"
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.span
                                                    layoutId="mobile-active-nav"
                                                    className="absolute inset-0 rounded-2xl border border-sky-300/40 bg-sky-400/[0.13] shadow-[0_0_24px_rgba(56,189,248,0.12)] [.light_&]:border-sky-300/80 [.light_&]:bg-sky-50/90 [.light_&]:shadow-[0_10px_24px_rgba(14,165,233,0.10)]"
                                                    transition={activePillTransition}
                                                />
                                            )}

                                            <span className="absolute inset-0 rounded-2xl bg-white/[0.07] opacity-0 transition duration-300 group-hover/mobile-link:opacity-100 [.light_&]:bg-sky-50/80" />

                                            <span className="relative flex items-center justify-between">
                                                {item.label}

                                                {isActive && (
                                                    <motion.span
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={activePillTransition}
                                                        className="h-2 w-2 rounded-full bg-sky-300 [.light_&]:bg-sky-600"
                                                    />
                                                )}
                                            </span>
                                        </MotionLink>
                                    );
                                })}

                                <MotionLink
                                    href="/"
                                    scroll={false}
                                    onClick={(event) => handleNavClick(event, "#contact")}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.24,
                                        delay: navItems.length * 0.03,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{ x: 5, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-background [.light_&]:bg-slate-950 [.light_&]:text-white"
                                >
                                    Let&apos;s Talk
                                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </MotionLink>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}