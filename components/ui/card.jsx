import { forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Card = forwardRef(function Card({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={cn("glass rounded-[2rem]", className)} {...props}>
      {children}
    </div>
  );
});

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}
