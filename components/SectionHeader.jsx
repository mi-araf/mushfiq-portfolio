"use client";

import { useEffect, useMemo, useState } from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
    const isCenter = align === "center";
    const eyebrowText = useMemo(() => String(eyebrow || "").toUpperCase(), [eyebrow]);

    return (
        <div
            data-gsap-reveal
            className={`mx-auto mb-14 max-w-3xl ${isCenter ? "text-center" : "text-left"}`}
        >
            <div className={`mb-5 flex ${isCenter ? "justify-center" : "justify-start"}`}>
                <AnimatedEyebrow text={eyebrowText} />
            </div>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description ? (
                <p
                    className={`mt-5 text-base leading-8 text-muted-foreground sm:text-lg ${isCenter ? "mx-auto" : ""
                        }`}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}

function AnimatedEyebrow({ text }) {
    const [visibleText, setVisibleText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reduceMotion) {
            setVisibleText(text);
            return undefined;
        }

        let timeout;

        if (!isDeleting && visibleText === text) {
            timeout = window.setTimeout(() => {
                setIsDeleting(true);
            }, 1100);
        } else if (isDeleting && visibleText === "") {
            timeout = window.setTimeout(() => {
                setIsDeleting(false);
            }, 360);
        } else {
            timeout = window.setTimeout(
                () => {
                    setVisibleText((currentText) =>
                        isDeleting
                            ? text.slice(0, currentText.length - 1)
                            : text.slice(0, currentText.length + 1)
                    );
                },
                isDeleting ? 38 : 72
            );
        }

        return () => window.clearTimeout(timeout);
    }, [visibleText, isDeleting, text]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative inline-flex rounded-full p-[1px]"
        >
            {/* Minimal animated glowing border */}
            <motion.span
                aria-hidden="true"
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(56,189,248,0.55),rgba(168,85,247,0.42),rgba(255,255,255,0.16),rgba(56,189,248,0.55))] bg-[length:220%_220%] opacity-70 blur-[0.5px] [.light_&]:opacity-80"
            />

            <div className="relative inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-sky-100 shadow-[0_0_24px_rgba(56,189,248,0.10)] backdrop-blur-xl [.light_&]:border-slate-200/80 [.light_&]:bg-white/85 [.light_&]:text-slate-800 [.light_&]:shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                <Info
                    className="h-3.5 w-3.5 shrink-0 animate-pulse text-sky-300 [.light_&]:text-sky-600"
                    aria-hidden="true"
                />

                <span className="relative inline-flex min-w-[6.8rem] items-center leading-none">
                    {/* Invisible text keeps width/height stable */}
                    <span className="pointer-events-none invisible select-none">
                        {text}
                    </span>

                    {/* Real typing text */}
                    <span className="absolute left-0 top-1/2 inline-flex -translate-y-1/2 items-center whitespace-nowrap">
                        <span>{visibleText || "\u00A0"}</span>

                        <motion.span
                            aria-hidden="true"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 0.75,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="ml-1 h-3.5 w-px rounded-full bg-sky-300 [.light_&]:bg-sky-600"
                        />
                    </span>
                </span>
            </div>
        </motion.div>
    );
}