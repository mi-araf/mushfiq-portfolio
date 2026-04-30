"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUp,
    Clock3,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    MapPin,
    MessageCircle
} from "lucide-react";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/mi-araf",
        icon: Github
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/mi-araf",
        icon: Linkedin
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
    }
];

function getOrdinal(day) {
    if (day > 3 && day < 21) return "th";

    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day}${getOrdinal(day)} ${month}, ${year}`;
}

function formatTime(date) {
    return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}

function getLocationFromTimezone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const knownLocations = {
        "Asia/Dhaka": "Dhaka, Bangladesh"
    };

    if (knownLocations[timeZone]) {
        return knownLocations[timeZone];
    }

    const city = timeZone?.split("/").pop()?.replaceAll("_", " ");

    return city || "Your location";
}

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

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(null);
    const [location, setLocation] = useState("Detecting location");

    useEffect(() => {
        const updateDateTime = () => {
            setCurrentDate(new Date());
        };

        updateDateTime();
        setLocation(getLocationFromTimezone());

        const timer = window.setInterval(updateDateTime, 1000);

        return () => {
            window.clearInterval(timer);
        };
    }, []);

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/10 py-8 [.light_&]:border-slate-200/90">
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/50 to-transparent"
            />

            <div
                aria-hidden="true"
                className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl [.light_&]:bg-sky-200/30"
            />

            <div
                aria-hidden="true"
                className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl [.light_&]:bg-violet-200/30"
            />

            <div className="container relative">
                <motion.div
                    onMouseMove={updateMouseGlow}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="group/footer relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition duration-500 hover:border-sky-300/35 hover:shadow-[0_24px_80px_rgba(56,189,248,0.12)] [.light_&]:border-slate-200/90 [.light_&]:bg-white/70 [.light_&]:shadow-[0_18px_50px_rgba(30,41,59,0.08)] [.light_&]:hover:border-sky-300/70 [.light_&]:hover:shadow-[0_24px_70px_rgba(14,165,233,0.12)]"
                >
                    {/* Mouse-following glow */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover/footer:opacity-100"
                        style={{
                            background:
                                "radial-gradient(520px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.16), rgba(168,85,247,0.10), transparent 44%)"
                        }}
                    />

                    {/* Soft inner wash */}
                    <span className="pointer-events-none absolute inset-0 z-[0] bg-[radial-gradient(circle_at_16%_12%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.08),transparent_36%)] [.light_&]:bg-[radial-gradient(circle_at_16%_12%,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.08),transparent_36%)]" />

                    <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="text-center lg:text-left">
                            <p className="font-display text-lg font-semibold text-white [.light_&]:text-slate-900">
                                Mushfiq Iqbal Araf
                            </p>

                            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 [.light_&]:text-slate-600">
                                &copy; {new Date().getFullYear()} MI_ARAF <br />
                                All Rights Reserved
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-end">
                            <div className="flex flex-wrap justify-center gap-3">
                                {socialLinks.map(({ label, href, icon: Icon }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        onMouseMove={updateMouseGlow}
                                        whileHover={{ y: -4, scale: 1.06 }}
                                        whileTap={{ scale: 0.94 }}
                                        className="focus-ring group/social relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition duration-300 hover:border-sky-300/50 hover:bg-sky-400/[0.10] hover:text-sky-100 hover:shadow-[0_14px_35px_rgba(56,189,248,0.14)] [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-slate-600 [.light_&]:hover:border-sky-300/80 [.light_&]:hover:bg-sky-50 [.light_&]:hover:text-sky-700 [.light_&]:hover:shadow-[0_14px_35px_rgba(14,165,233,0.12)]"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/social:opacity-100"
                                            style={{
                                                background:
                                                    "radial-gradient(95px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.30), rgba(168,85,247,0.14), transparent 58%)"
                                            }}
                                        />

                                        <Icon
                                            className="relative h-4 w-4 transition duration-300 group-hover/social:rotate-6 group-hover/social:scale-110"
                                            aria-hidden="true"
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            <motion.button
                                type="button"
                                onClick={handleBackToTop}
                                onMouseMove={updateMouseGlow}
                                whileHover={{ y: -4, scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                className="focus-ring group/top relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-sky-300 transition duration-300 hover:border-sky-300/50 hover:bg-sky-400/[0.10] hover:text-sky-100 hover:shadow-[0_14px_35px_rgba(56,189,248,0.14)] [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-sky-700 [.light_&]:hover:border-violet-300/80 [.light_&]:hover:bg-violet-50 [.light_&]:hover:text-violet-700 [.light_&]:hover:shadow-[0_14px_35px_rgba(124,58,237,0.12)]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/top:opacity-100"
                                    style={{
                                        background:
                                            "radial-gradient(180px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168,85,247,0.24), rgba(56,189,248,0.12), transparent 58%)"
                                    }}
                                />

                                <span className="relative">Back to top</span>

                                <ArrowUp
                                    className="relative h-4 w-4 transition duration-300 group-hover/top:-translate-y-0.5"
                                    aria-hidden="true"
                                />
                            </motion.button>
                        </div>
                    </div>

                    <div className="relative z-10 mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2 [.light_&]:border-slate-200/90">
                        <div
                            onMouseMove={updateMouseGlow}
                            className="group/info relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-400 transition duration-300 hover:border-sky-300/40 hover:bg-sky-400/[0.06] [.light_&]:border-slate-200/90 [.light_&]:bg-white/65 [.light_&]:text-slate-600 [.light_&]:hover:border-sky-300/70 [.light_&]:hover:bg-sky-50/80 sm:justify-start"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/info:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56,189,248,0.18), transparent 55%)"
                                }}
                            />

                            <Clock3
                                className="relative h-4 w-4 text-sky-300 [.light_&]:text-sky-600"
                                aria-hidden="true"
                            />

                            <span className="relative">
                                {currentDate
                                    ? `${formatDate(currentDate)} • ${formatTime(currentDate)}`
                                    : "Loading date and time"}
                            </span>
                        </div>

                        <div
                            onMouseMove={updateMouseGlow}
                            className="group/info relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-400 transition duration-300 hover:border-violet-300/40 hover:bg-violet-400/[0.06] [.light_&]:border-slate-200/90 [.light_&]:bg-white/65 [.light_&]:text-slate-600 [.light_&]:hover:border-violet-300/70 [.light_&]:hover:bg-violet-50/80 sm:justify-end"
                        >
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/info:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168,85,247,0.18), transparent 55%)"
                                }}
                            />

                            <MapPin
                                className="relative h-4 w-4 text-violet-300 [.light_&]:text-violet-600"
                                aria-hidden="true"
                            />

                            <span className="relative">{location}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}