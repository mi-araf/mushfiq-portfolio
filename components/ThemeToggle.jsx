"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="focus-ring group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] text-foreground transition hover:bg-white/[0.12] [.light_&]:border-black/10 [.light_&]:bg-white/80 [.light_&]:hover:bg-white"
    >
      <Sun className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "translate-y-7 opacity-0" : "translate-y-0 opacity-100"}`} />
      <Moon className={`absolute h-4 w-4 transition-all duration-300 ${isDark ? "translate-y-0 opacity-100" : "-translate-y-7 opacity-0"}`} />
    </button>
  );
}
