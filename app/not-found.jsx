import Link from "next/link";
import { ArrowLeft, Home, SearchX, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "404 | Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <>
            <Navbar />

            <main className="relative min-h-screen overflow-hidden bg-background px-4 pt-24 text-foreground sm:px-6 md:pt-28">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute left-1/2 top-20 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[90px] dark:bg-cyan-400/15" />
                    <div className="absolute bottom-24 right-4 h-56 w-56 rounded-full bg-violet-500/20 blur-[100px] dark:bg-violet-500/15" />
                    <div className="absolute left-4 top-1/2 h-44 w-44 rounded-full bg-blue-500/10 blur-[90px]" />
                </div>

                {/* Grid texture */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:opacity-20" />

                <section className="mx-auto flex min-h-[68vh] max-w-4xl flex-col items-center justify-center text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-300 sm:text-xs">
                        <Sparkles size={13} />
                        Lost in the interface
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />

                        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white/70 shadow-xl shadow-cyan-500/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:h-24 sm:w-24">
                            <SearchX className="h-9 w-9 text-cyan-600 dark:text-cyan-300 sm:h-10 sm:w-10" />
                        </div>
                    </div>

                    <h1 className="mt-7 font-display text-6xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-7xl md:text-8xl">
                        404
                    </h1>

                    <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl md:text-4xl">
                        This page drifted into the digital void.
                    </h2>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/60 sm:text-base">
                        The route you’re trying to visit does not exist, may have been moved,
                        or is still waiting to be built. Let’s get you back somewhere useful.
                    </p>

                    <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                        <Link
                            href="/"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-background dark:bg-white dark:text-black dark:hover:bg-cyan-200 sm:w-auto"
                        >
                            <Home size={17} />
                            Back to Home
                        </Link>

                        <Link
                            href="/#projects"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 backdrop-blur-xl transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-background dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10 dark:hover:text-cyan-200 sm:w-auto"
                        >
                            <ArrowLeft
                                size={17}
                                className="transition duration-300 group-hover:-translate-x-1"
                            />
                            View Projects
                        </Link>
                    </div>

                    <div className="mt-12 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
                        {[
                            {
                                title: "Home",
                                copy: "Return to the main portfolio.",
                                href: "/",
                            },
                            {
                                title: "Projects",
                                copy: "Explore my selected work.",
                                href: "/#projects",
                            },
                            {
                                title: "Contact",
                                copy: "Let’s connect.",
                                href: "/#contact",
                            },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-left shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:border-cyan-300/40 dark:hover:bg-white/[0.07]"
                            >
                                <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-white/55">
                                    {item.copy}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>

            <br /><br />

            <Footer />
        </>
    );
}