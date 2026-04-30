import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Hammer,
    Layers3,
    Rocket,
    Sparkles
} from "lucide-react";

import { projects } from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug
    }));
}

export function generateMetadata({ params }) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found"
        };
    }

    return {
        title: `${project.name} | Project Details`,
        description: project.shortDescription
    };
}

export default function ProjectDetailsPage({ params }) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white [.light_&]:bg-slate-50 [.light_&]:text-slate-950">
            <section className="section-padding relative overflow-hidden">
                <span className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
                <span className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="container relative">
                    <Link
                        href="/#projects"
                        className="focus-ring mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:border-sky-300/45 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:hover:text-sky-700"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>

                    <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-sky-700">
                                <Sparkles className="h-3.5 w-3.5" />
                                {project.category}
                            </div>

                            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                                {project.name}
                            </h1>

                            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg [.light_&]:text-slate-600">
                                {project.description}
                            </p>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-sky-300"
                                >
                                    Live Project
                                    <ExternalLink className="h-4 w-4" />
                                </a>

                                <a
                                    href={project.githubClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-300/45 hover:bg-sky-400/10 hover:text-sky-100 [.light_&]:border-slate-200 [.light_&]:bg-white [.light_&]:text-slate-700 [.light_&]:hover:text-sky-700"
                                >
                                    Client Repository
                                    <Github className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <Card className="overflow-hidden rounded-[1.75rem] border-white/10 bg-white/[0.045] [.light_&]:border-slate-200 [.light_&]:bg-white">
                            <CardContent className="p-3">
                                <div className="relative h-[320px] overflow-hidden rounded-[1.35rem] bg-slate-900 sm:h-[420px]">
                                    <Image
                                        src={project.images[0]}
                                        alt={`${project.name} main preview`}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        <InfoCard
                            icon={Layers3}
                            title="Main Technology Stack"
                            items={project.stack}
                        />

                        <InfoCard
                            icon={Hammer}
                            title="Challenges Faced"
                            items={project.challenges}
                        />

                        <InfoCard
                            icon={Rocket}
                            title="Future Improvements"
                            items={project.improvements}
                        />
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {project.images.map((image, index) => (
                            <div
                                key={image}
                                className="relative h-64 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] [.light_&]:border-slate-200 [.light_&]:bg-white"
                            >
                                <Image
                                    src={image}
                                    alt={`${project.name} screenshot ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover object-top"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function InfoCard({ icon: Icon, title, items }) {
    return (
        <Card className="h-full rounded-[1.5rem] border-white/10 bg-white/[0.045] [.light_&]:border-slate-200 [.light_&]:bg-white">
            <CardContent className="p-5 sm:p-6">
                <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.07] text-sky-200 [.light_&]:border-sky-200 [.light_&]:bg-sky-50 [.light_&]:text-sky-700">
                        <Icon className="h-5 w-5" />
                    </div>

                    <h2 className="font-display text-xl font-semibold text-white [.light_&]:text-slate-950">
                        {title}
                    </h2>
                </div>

                <ul className="space-y-3">
                    {items.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 text-sm leading-6 text-slate-300 [.light_&]:text-slate-600"
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300 [.light_&]:bg-sky-600" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}