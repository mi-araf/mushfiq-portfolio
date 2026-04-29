"use client";

import { useRef } from "react";

export default function MagneticButton({ children, strength = 0.32, className = "" }) {
  const ref = useRef(null);

  function handleMove(event) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate3d(0, 0, 0)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
