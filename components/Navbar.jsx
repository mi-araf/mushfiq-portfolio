"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`container flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-background/68 shadow-card backdrop-blur-2xl [.light_&]:border-black/10 [.light_&]:bg-white/70"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <a href="#home" className="focus-ring group flex items-center gap-3 rounded-full">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.07] [.light_&]:border-black/10 [.light_&]:bg-white">
            <span className="absolute inset-0 bg-gradient-to-br from-sky-400/40 via-violet-500/30 to-transparent" />
            <span className="relative font-display text-sm font-bold">MI</span>
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
            Mushfiq<span className="text-muted-foreground">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.07] hover:text-foreground [.light_&]:hover:bg-black/[0.05]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="focus-ring hidden rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:scale-[1.03] sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] lg:hidden [.light_&]:border-black/10 [.light_&]:bg-white/80"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`container overflow-hidden transition-all duration-500 lg:hidden ${open ? "max-h-96 pt-3" : "max-h-0"}`}
      >
        <div className="glass grid gap-1 rounded-3xl p-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-2xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-white/[0.07] hover:text-foreground [.light_&]:hover:bg-black/[0.05]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
