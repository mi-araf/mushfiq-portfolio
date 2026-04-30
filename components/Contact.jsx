"use client";

import { useEffect, useRef, useState } from "react";
import {
    AlertCircle,
    CheckCircle2,
    Linkedin,
    Loader2,
    Mail,
    Mails,
    MailsIcon,
    PhoneCallIcon,
    ReceiptText,
    Send
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import SectionHeader from "@/components/SectionHeader";
import MagneticButton from "@/components/MagneticButton";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
    { label: "LinkedIn", href: "https://linkedin.com/in/mi-araf", icon: Linkedin },
    { label: "WhatsApp", href: "https://wa.me/8801552350991", icon: FaWhatsapp },
    { label: "Email", href: "mailto:arafmushfiq@gmail.com", icon: Mail }
];

function handleMouseMove(event) {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

export default function Contact() {
    const [status, setStatus] = useState("idle");
    const [feedback, setFeedback] = useState(null);
    const [toast, setToast] = useState(null);

    const toastTimerRef = useRef(null);
    const feedbackTimerRef = useRef(null);
    const statusTimerRef = useRef(null);

    function showToast(type, message) {
        if (toastTimerRef.current) {
            clearTimeout(toastTimerRef.current);
        }

        setToast({ type, message });

        toastTimerRef.current = setTimeout(() => {
            setToast(null);
        }, 1800);
    }

    function showFeedback(type, message) {
        if (feedbackTimerRef.current) {
            clearTimeout(feedbackTimerRef.current);
        }

        setFeedback({ type, message });

        feedbackTimerRef.current = setTimeout(() => {
            setFeedback(null);
        }, 14000);
    }

    useEffect(() => {
        return () => {
            if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
            if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
            if (statusTimerRef.current) clearTimeout(statusTimerRef.current);
        };
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        const formElement = event.currentTarget;
        const form = new FormData(formElement);

        const payload = {
            name: form.get("name"),
            email: form.get("email"),
            message: form.get("message")
        };

        if (statusTimerRef.current) {
            clearTimeout(statusTimerRef.current);
        }

        setStatus("loading");
        setFeedback(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            formElement.reset();

            setStatus("success");
            showFeedback("success", "Message sent successfully. I’ll get back to you soon.");
            showToast("success", "Message sent");

            statusTimerRef.current = setTimeout(() => {
                setStatus("idle");
            }, 2600);
        } catch (error) {
            const errorMessage = error.message || "Message failed. Please try again.";

            setStatus("error");
            showFeedback("error", errorMessage);
            showToast("error", "Message failed");

            statusTimerRef.current = setTimeout(() => {
                setStatus("idle");
            }, 2600);
        }
    }

    return (
        <section
            id="contact"
            className="section-padding relative cursor-default overflow-hidden"
        >
            <div className="pointer-events-none fixed right-4 top-5 z-[9999] flex justify-end">
                <div
                    className={`pointer-events-auto flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold shadow-[0_18px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-300 ${toast
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-3 opacity-0"
                        } ${toast?.type === "success"
                            ? "border-emerald-300/25 bg-emerald-400/15 text-emerald-100 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700"
                            : "border-red-300/25 bg-red-400/15 text-red-100 [.light_&]:bg-red-50 [.light_&]:text-red-700"
                        }`}
                >
                    {toast?.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    ) : (
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    )}

                    <span>{toast?.message || "Notification"}</span>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
            />

            <div className="container relative">
                <SectionHeader
                    eyebrow="Contact"
                    title="Let's build something beautiful."
                    description="Have a project, idea, collaboration, or tiny spark looking for a launchpad? Send a message and let's shape it into something sharp."
                />

                <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <a
                        href="tel:+8801552350991"
                        className="group/contact-pill relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-300 shadow-[0_12px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-sky-400/[0.08] hover:text-sky-100 hover:shadow-[0_18px_45px_rgba(56,189,248,0.16)] sm:w-auto [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-slate-700 [.light_&]:shadow-[0_12px_30px_rgba(30,41,59,0.08)] [.light_&]:hover:border-sky-300/80 [.light_&]:hover:bg-sky-50/90 [.light_&]:hover:text-sky-700 [.light_&]:hover:shadow-[0_18px_42px_rgba(14,165,233,0.14)]"
                    >
                        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(168,85,247,0.12),transparent_36%)] opacity-0 transition duration-500 group-hover/contact-pill:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.14),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(124,58,237,0.10),transparent_36%)]" />

                        <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-sky-400/10 text-sky-300 transition duration-300 group-hover/contact-pill:rotate-6 group-hover/contact-pill:scale-110 [.light_&]:border-sky-200/80 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                            <PhoneCallIcon className="h-4 w-4" aria-hidden="true" />
                        </span>

                        <span className="relative whitespace-nowrap">+880 1552350991</span>
                    </a>

                    <a
                        href="mailto:arafmushfiq@gmail.com"
                        className="group/contact-pill relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-slate-300 shadow-[0_12px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-400/[0.08] hover:text-violet-100 hover:shadow-[0_18px_45px_rgba(168,85,247,0.16)] sm:w-auto [.light_&]:border-slate-200/90 [.light_&]:bg-white/75 [.light_&]:text-slate-700 [.light_&]:shadow-[0_12px_30px_rgba(30,41,59,0.08)] [.light_&]:hover:border-violet-300/80 [.light_&]:hover:bg-violet-50/90 [.light_&]:hover:text-violet-700 [.light_&]:hover:shadow-[0_18px_42px_rgba(124,58,237,0.13)]"
                    >
                        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.18),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.12),transparent_36%)] opacity-0 transition duration-500 group-hover/contact-pill:opacity-100 [.light_&]:bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.13),transparent_34%),radial-gradient(circle_at_90%_90%,rgba(14,165,233,0.10),transparent_36%)]" />

                        <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-violet-400/10 text-violet-300 transition duration-300 group-hover/contact-pill:rotate-6 group-hover/contact-pill:scale-110 [.light_&]:border-violet-200/80 [.light_&]:bg-violet-50 [.light_&]:text-violet-700">
                            <MailsIcon className="h-4 w-4" aria-hidden="true" />
                        </span>

                        <span className="relative break-all sm:break-normal">
                            arafmushfiq@gmail.com
                        </span>
                    </a>
                </div>
                <br /><br />

                <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
                    <Card
                        data-gsap-reveal
                        onMouseMove={handleMouseMove}
                        className="group relative cursor-default overflow-hidden rounded-[1.75rem] border-white/10 bg-white/[0.045] [.light_&]:border-slate-200 [.light_&]:bg-white"
                    >
                        <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(420px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.14),transparent_44%)] [.light_&]:bg-[radial-gradient(420px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.12),transparent_44%)]" />

                        <CardContent className="relative cursor-default p-5 sm:p-7 lg:p-8">
                            <p className="cursor-default text-xs font-semibold uppercase tracking-[0.28em] text-sky-300 sm:text-sm">
                                Available for
                            </p>

                            <h3 className="mt-4 cursor-default font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                                Freelance, collaborations, and standout frontend builds.
                            </h3>

                            <p className="mt-5 cursor-default text-sm leading-7 text-muted-foreground">
                                I enjoy working on modern interfaces, landing pages,
                                interactive sections, and creative web experiences that
                                need a careful balance of taste, motion, and performance.
                            </p>

                            <div className="mt-8 grid gap-3">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        onMouseMove={handleMouseMove}
                                        className="focus-ring group/link relative flex cursor-pointer items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-white/[0.065] [.light_&]:border-black/10 [.light_&]:bg-black/[0.03] [.light_&]:hover:bg-black/[0.05]"
                                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                                    >
                                        <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover/link:opacity-100 bg-[radial-gradient(220px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.18),transparent_46%)] [.light_&]:bg-[radial-gradient(220px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.14),transparent_46%)]" />

                                        <span className="relative flex items-center gap-3">
                                            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300 transition duration-300 group-hover/link:scale-105 group-hover/link:border-sky-300/30 group-hover/link:bg-sky-400/10 [.light_&]:border-slate-200 [.light_&]:bg-white">
                                                <Icon className="h-4 w-4" aria-hidden="true" />
                                            </span>

                                            <span className="font-medium">{label}</span>
                                        </span>

                                        <span className="relative text-muted-foreground transition duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5 group-hover/link:text-sky-300">
                                            ↗
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        data-gsap-reveal
                        onMouseMove={handleMouseMove}
                        className="group relative cursor-default overflow-hidden rounded-[1.75rem] border-white/10 bg-white/[0.045] [.light_&]:border-slate-200 [.light_&]:bg-white"
                    >
                        <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.13),transparent_45%)] [.light_&]:bg-[radial-gradient(520px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.11),transparent_45%)]" />

                        <CardContent className="relative cursor-default p-5 sm:p-7 lg:p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="flex cursor-default flex-wrap items-center gap-3">
                                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sky-300 [.light_&]:border-slate-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                                        <ReceiptText className="h-5 w-5" />
                                    </div>

                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-semibold text-transparent dark:from-blue-400 dark:to-purple-400">
                                        Get in Touch
                                    </span>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block cursor-default text-sm font-medium text-foreground"
                                        >
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            autoComplete="name"
                                            required
                                            className="min-h-12 cursor-text"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block cursor-default text-sm font-medium text-foreground"
                                        >
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            autoComplete="email"
                                            required
                                            className="min-h-12 cursor-text"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block cursor-default text-sm font-medium text-foreground"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about the thing we are building..."
                                        required
                                        className="min-h-40 cursor-text resize-none"
                                    />
                                </div>

                                {feedback && (
                                    <div
                                        className={`rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${feedback.type === "success"
                                            ? "border-emerald-300/25 bg-emerald-400/[0.08] text-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700"
                                            : "border-red-300/25 bg-red-400/[0.08] text-red-200 [.light_&]:bg-red-50 [.light_&]:text-red-700"
                                            }`}
                                    >
                                        {feedback.message}
                                    </div>
                                )}

                                <MagneticButton>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="focus-ring group/button relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_50px_rgba(56,189,248,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                                    >
                                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />
                                        <span className="absolute inset-0 opacity-0 transition duration-300 group-hover/button:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.45),transparent_42%)]" />

                                        <span className="relative inline-flex items-center gap-2">
                                            {status === "loading" ? (
                                                <>
                                                    Sending
                                                    <Loader2
                                                        className="h-4 w-4 animate-spin"
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            ) : status === "success" ? (
                                                <>
                                                    Sent
                                                    <CheckCircle2
                                                        className="h-4 w-4"
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send
                                                        className="h-4 w-4 transition duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-0.5"
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </MagneticButton>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}