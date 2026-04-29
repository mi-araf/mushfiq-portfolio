import { cn } from "@/lib/cn";

const variants = {
  default:
    "bg-primary text-primary-foreground shadow-glow hover:bg-primary/90",
  ghost:
    "bg-white/[0.06] text-foreground hover:bg-white/[0.11] border border-white/10 [.light_&]:bg-black/[0.04] [.light_&]:hover:bg-black/[0.07] [.light_&]:border-black/10",
  outline:
    "border border-white/15 bg-transparent text-foreground hover:bg-white/[0.07] [.light_&]:border-black/15 [.light_&]:hover:bg-black/[0.05]"
};

export function Button({ className, variant = "default", asChild = false, children, ...props }) {
  const Comp = asChild ? "span" : "button";

  return (
    <Comp
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
