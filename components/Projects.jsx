"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Atom,
    BarChart3,
    Code2,
    Database,
    ExternalLink,
    FileCode2,
    Github,
    Layers3,
    Palette,
    Package,
    Route,
    Sparkles,
    Wind
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

const techIcons = {
    "Next.js": Route,
    "React.js": Atom,
    React: Atom,
    "Tailwind CSS": Wind,
    DaisyUI: Palette,
    "Framer Motion": Sparkles,
    "Lucide React": Sparkles,
    "shadcn/ui": Package,
    Vite: Package,
    "React Icons": Code2,
    "React Toastify": Sparkles,
    Recharts: BarChart3,
    "Node.js": Database,
    MongoDB: Database,
    JavaScript: FileCode2
};

function TechBadge({ tech }) {
    const Icon = techIcons[tech] || Code2;

    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-sky-300/40 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-600 [.light_&]:hover:text-sky-700">
            <Icon
                className="h-3.5 w-3.5 text-sky-300 [.light_&]:text-sky-600"
                aria-hidden="true"
            />
            {tech}
        </span>
    );
}

function ProjectImageSlider({ images, name, slug }) {
    const [activeImage, setActiveImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const projectKey = `${slug || ""} ${name || ""}`.toLowerCase();

    const shouldCenterFullScreenshot =
        projectKey.includes("digitools") ||
        (projectKey.includes("github") && projectKey.includes("issue"));

    useEffect(() => {
        if (!isHovered || !images || images.length <= 1) return undefined;

        const interval = setInterval(() => {
            setActiveImage((current) => (current + 1) % images.length);
        }, 1800);

        return () => clearInterval(interval);
    }, [isHovered, images]);

    useEffect(() => {
        setImageLoaded(false);
    }, [activeImage]);

    if (!images || images.length === 0) {
        return null;
    }

    const currentImage = images[activeImage];

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setActiveImage(0);
            }}
            className={`group/image relative overflow-hidden rounded-[1.35rem] border border-white/10 [.light_&]:border-slate-200 ${shouldCenterFullScreenshot
                    ? "h-[250px] bg-slate-950/45 p-3 sm:h-[300px] sm:p-4 lg:h-[340px] [.light_&]:bg-slate-100"
                    : "h-64 bg-slate-950/70 sm:h-80 lg:h-full lg:min-h-[430px] [.light_&]:bg-slate-100"
                }`}
        >
            {shouldCenterFullScreenshot ? (
                <div className="relative h-full w-full overflow-hidden rounded-[1.1rem] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.10),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.10),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.08),transparent_30%)]">
                    <div className="absolute left-1/2 top-1/2 aspect-[16/9] w-[86%] max-w-[640px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1rem] border border-white/12 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.22)] transition duration-500 group-hover/image:scale-[1.015] [.light_&]:border-slate-200 [.light_&]:shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
                        {!imageLoaded && (
                            <div className="absolute inset-0 z-10 animate-pulse bg-slate-800/60 [.light_&]:bg-slate-200" />
                        )}

                        <Image
                            key={currentImage}
                            src={currentImage}
                            alt={`${name} preview ${activeImage + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            quality={65}
                            onLoad={() => setImageLoaded(true)}
                            className={`absolute inset-0 object-contain object-center transition-all duration-500 ease-out ${imageLoaded ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    </div>
                </div>
            ) : (
                <div className="relative h-full w-full overflow-hidden rounded-[1.05rem]">
                    {!imageLoaded && (
                        <div className="absolute inset-0 z-10 animate-pulse bg-slate-800/60 [.light_&]:bg-slate-200" />
                    )}

                    <Image
                        key={currentImage}
                        src={currentImage}
                        alt={`${name} preview ${activeImage + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={65}
                        onLoad={() => setImageLoaded(true)}
                        className={`absolute inset-0 object-cover object-top transition-all duration-500 ease-out group-hover/image:scale-[1.04] ${imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>
            )}

            <div
                className={`pointer-events-none absolute inset-0 transition duration-500 ${shouldCenterFullScreenshot
                        ? "bg-gradient-to-t from-slate-950/18 via-transparent to-transparent [.light_&]:from-white/10"
                        : "bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent group-hover/image:from-slate-950/50 [.light_&]:from-white/40"
                    }`}
            />

            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/image:opacity-100">
                <div className="absolute -left-24 top-0 h-full w-24 rotate-12 bg-white/12 blur-md transition-transform duration-1000 group-hover/image:translate-x-[650px] [.light_&]:bg-white/70" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-xl [.light_&]:border-slate-200 [.light_&]:bg-white/80 [.light_&]:text-slate-700">
                    <Sparkles className="h-3.5 w-3.5 text-sky-300 [.light_&]:text-sky-600" />
                    Hover preview
                </div>

                <div className="flex items-center gap-1.5">
                    {images.map((image, dotIndex) => (
                        <span
                            key={image}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === dotIndex
                                    ? "w-5 bg-sky-300 [.light_&]:bg-sky-600"
                                    : "w-1.5 bg-white/35 [.light_&]:bg-slate-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index }) {
    const isReversed = index % 2 === 1;

    function handleMouseMove(event) {
        const card = event.currentTarget;
        const rect = card.getBoundingClientRect();

        card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut"
            }}
            whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? -0.18 : 0.18
            }}
            onMouseMove={handleMouseMove}
            className="group relative"
        >
            <span className="pointer-events-none absolute -inset-[1px] rounded-[1.8rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.22),rgba(168,85,247,0.14),rgba(14,165,233,0.18),rgba(56,189,248,0.22))] opacity-0 blur-xl transition duration-500 group-hover:opacity-35 [.light_&]:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.18),rgba(124,58,237,0.10),rgba(59,130,246,0.14),rgba(14,165,233,0.18))] [.light_&]:group-hover:opacity-35" />

            <Card className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.045] shadow-[0_20px_70px_rgba(15,23,42,0.16)] transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.055] sm:rounded-[2rem] [.light_&]:border-slate-200/90 [.light_&]:bg-white/95 [.light_&]:shadow-[0_18px_50px_rgba(15,23,42,0.08)] [.light_&]:group-hover:border-slate-300 [.light_&]:group-hover:bg-white">
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.08),transparent_32%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.07),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

                <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(420px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.22),transparent_42%)] [.light_&]:bg-[radial-gradient(420px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(14,165,233,0.20),transparent_42%)]" />

                <CardContent className="relative grid gap-5 p-3 sm:p-4 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
                    <div className={isReversed ? "lg:order-2" : ""}>
                        <ProjectImageSlider
                            images={project.images}
                            name={project.name}
                            index={index}
                            slug={project.slug}
                        />
                    </div>

                    <div
                        className={`flex flex-col justify-center p-2 sm:p-5 lg:p-7 ${isReversed ? "lg:order-1" : ""
                            }`}
                    >
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200 [.light_&]:border-slate-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                                <Layers3 className="h-3.5 w-3.5" />
                                {project.category}
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-200 transition duration-300 group-hover:border-emerald-300/25 group-hover:bg-emerald-400/[0.09] [.light_&]:border-emerald-200 [.light_&]:bg-emerald-50 [.light_&]:text-emerald-700">
                                <Code2
                                    className="h-3.5 w-3.5"
                                    aria-hidden="true"
                                />
                                {project.type}
                            </span>
                        </div>

                        <h3 className="font-display text-3xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-sky-50 sm:text-4xl [.light_&]:text-slate-950 [.light_&]:group-hover:text-sky-800">
                            {project.name}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 transition-colors duration-300 group-hover:text-slate-200 sm:text-base sm:leading-8 [.light_&]:text-slate-600 [.light_&]:group-hover:text-slate-700">
                            {project.shortDescription}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.stack.slice(0, 6).map((tech) => (
                                <TechBadge key={tech} tech={tech} />
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href={`/projects/${project.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="focus-ring group/link inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-300"
                            >
                                View Details
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </Link>

                            <a
                                href={project.githubClient}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.name} GitHub repository`}
                                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-300/45 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:hover:text-sky-700"
                            >
                                <Github className="h-4 w-4" />
                                Code
                            </a>

                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.name} live project`}
                                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-300/45 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:hover:text-sky-700"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <span className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
            <span className="pointer-events-none absolute bottom-32 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="container relative">
                <SectionHeader
                    eyebrow="Projects"
                    title="Selected builds with real structure, clean interfaces, and practical thinking."
                    description="A showcase of my best projects, including live previews, source code, technology stacks, development challenges, and future improvement plans."
                />

                <div className="space-y-7 sm:space-y-9">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}