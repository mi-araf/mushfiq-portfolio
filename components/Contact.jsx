"use client";

import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MagneticButton from "@/components/MagneticButton";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com/", icon: Twitter },
  { label: "Email", href: "mailto:mushfiq@example.com", icon: Mail }
];

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:mushfiq@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div aria-hidden="true" className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something beautiful."
          description="Have a project, idea, collaboration, or tiny spark looking for a launchpad? Send a message and let's shape it into something sharp."
        />

        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Card data-gsap-reveal className="overflow-hidden">
            <CardContent className="p-7 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Available for</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">Freelance, collaborations, and standout frontend builds.</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                I enjoy working on modern interfaces, landing pages, interactive sections, and creative web experiences that need a careful balance of taste, motion, and performance.
              </p>

              <div className="mt-8 grid gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="focus-ring group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm transition hover:border-sky-300/40 hover:bg-white/[0.08] [.light_&]:border-black/10 [.light_&]:bg-black/[0.03] [.light_&]:hover:bg-black/[0.05]"
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-sky-300" aria-hidden="true" />
                      {label}
                    </span>
                    <span className="text-muted-foreground transition group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card data-gsap-reveal className="overflow-hidden">
            <CardContent className="p-7 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell me about the thing we are building..." required />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:scale-[1.02]"
                  >
                    Send Message <Send className="h-4 w-4" aria-hidden="true" />
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
