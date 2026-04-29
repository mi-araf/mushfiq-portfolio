import { cn } from "@/lib/cn";

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "focus-ring w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-xl transition-colors focus:border-primary/60 [.light_&]:border-black/10 [.light_&]:bg-white/80",
        className
      )}
      {...props}
    />
  );
}
