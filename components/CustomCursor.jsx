"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 5;

export default function CustomCursor() {
    const layerRef = useRef(null);
    const ringRef = useRef(null);
    const coreRef = useRef(null);
    const trailWrapRef = useRef(null);
    const trailRefs = useRef([]);

    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const trails = useRef(
        Array.from({ length: TRAIL_COUNT }, () => ({
            x: 0,
            y: 0
        }))
    );

    const animationRef = useRef(null);

    useEffect(() => {
        const canUseCustomCursor =
            window.matchMedia("(pointer: fine)").matches &&
            window.matchMedia("(hover: hover)").matches;

        if (!canUseCustomCursor) return;

        let isVisible = false;
        let isPointer = false;
        let isTextField = false;
        let isPressed = false;
        let hasStarted = false;
        let lastMode = "";
        let lastTarget = null;

        function getMode() {
            if (isPressed) return "pressed";
            if (isTextField) return "text";
            if (isPointer) return "pointer";
            return "default";
        }

        function applyMode() {
            const mode = getMode();

            if (mode === lastMode) return;
            lastMode = mode;

            const ringElement = ringRef.current;
            const coreElement = coreRef.current;
            const trailWrap = trailWrapRef.current;

            if (!ringElement || !coreElement) return;

            const sizes = {
                default: {
                    ring: 50,
                    core: 6,
                    opacity: "0.95",
                    border: "rgba(125, 211, 252, 0.55)",
                    background: "rgba(56, 189, 248, 0.055)",
                    shadow: "0 0 34px rgba(56, 189, 248, 0.30)"
                },
                pointer: {
                    ring: 70,
                    core: 7,
                    opacity: "1",
                    border: "rgba(186, 230, 253, 0.75)",
                    background: "rgba(56, 189, 248, 0.10)",
                    shadow: "0 0 48px rgba(56, 189, 248, 0.42)"
                },
                text: {
                    ring: 34,
                    core: 4,
                    opacity: "0.55",
                    border: "rgba(125, 211, 252, 0.35)",
                    background: "rgba(56, 189, 248, 0.035)",
                    shadow: "0 0 22px rgba(56, 189, 248, 0.18)"
                },
                pressed: {
                    ring: 40,
                    core: 4,
                    opacity: "0.95",
                    border: "rgba(216, 180, 254, 0.75)",
                    background: "rgba(168, 85, 247, 0.10)",
                    shadow: "0 0 38px rgba(168, 85, 247, 0.36)"
                }
            };

            const current = sizes[mode];

            ringElement.style.width = `${current.ring}px`;
            ringElement.style.height = `${current.ring}px`;
            ringElement.style.borderColor = current.border;
            ringElement.style.backgroundColor = current.background;
            ringElement.style.boxShadow = current.shadow;
            ringElement.style.opacity = current.opacity;

            coreElement.style.width = `${current.core}px`;
            coreElement.style.height = `${current.core}px`;
            coreElement.style.opacity = mode === "text" ? "0.35" : "0.85";

            if (trailWrap) {
                trailWrap.style.opacity = mode === "text" ? "0.18" : "0.52";
            }
        }

        function checkTarget(target) {
            if (target === lastTarget) return;

            lastTarget = target;

            const element = target instanceof Element ? target : null;

            if (!element) return;

            isPointer = Boolean(
                element.closest(
                    [
                        "a",
                        "button",
                        "[role='button']",
                        "input[type='submit']",
                        "input[type='button']",
                        ".cursor-pointer",
                        "[data-cursor='pointer']"
                    ].join(", ")
                )
            );

            isTextField = Boolean(
                element.closest(
                    [
                        "input",
                        "textarea",
                        "select",
                        "[contenteditable='true']"
                    ].join(", ")
                )
            );

            applyMode();
        }

        function handleMouseMove(event) {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;

            if (!hasStarted) {
                hasStarted = true;

                ring.current.x = event.clientX;
                ring.current.y = event.clientY;

                trails.current.forEach((trail) => {
                    trail.x = event.clientX;
                    trail.y = event.clientY;
                });
            }

            if (!isVisible) {
                isVisible = true;

                if (layerRef.current) {
                    layerRef.current.style.opacity = "1";
                }
            }

            checkTarget(event.target);

            if (coreRef.current) {
                coreRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
            }
        }

        function handleMouseLeave() {
            isVisible = false;

            if (layerRef.current) {
                layerRef.current.style.opacity = "0";
            }
        }

        function handleMouseEnter() {
            isVisible = true;

            if (layerRef.current) {
                layerRef.current.style.opacity = "1";
            }
        }

        function handleMouseDown() {
            isPressed = true;
            applyMode();
        }

        function handleMouseUp() {
            isPressed = false;
            applyMode();
        }

        function animateCursor() {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.22;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.22;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
            }

            trails.current.forEach((trail, index) => {
                const target = index === 0 ? mouse.current : trails.current[index - 1];
                const speed = 0.24 - index * 0.03;

                trail.x += (target.x - trail.x) * speed;
                trail.y += (target.y - trail.y) * speed;

                const trailElement = trailRefs.current[index];

                if (trailElement) {
                    trailElement.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`;
                }
            });

            animationRef.current = requestAnimationFrame(animateCursor);
        }

        applyMode();

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        animationRef.current = requestAnimationFrame(animateCursor);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={layerRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[99999] hidden opacity-0 transition-opacity duration-150 md:block"
        >
            {/* Lightweight soft trail */}
            <div
                ref={trailWrapRef}
                className="absolute inset-0 opacity-50 transition-opacity duration-200"
            >
                {Array.from({ length: TRAIL_COUNT }).map((_, index) => {
                    const size = Math.max(5, 13 - index * 1.6);
                    const opacity = Math.max(0.08, 0.28 - index * 0.04);

                    return (
                        <div
                            key={index}
                            ref={(element) => {
                                trailRefs.current[index] = element;
                            }}
                            className="absolute left-0 top-0 rounded-full bg-sky-300/70 shadow-[0_0_14px_rgba(56,189,248,0.38)] will-change-transform"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                opacity
                            }}
                        />
                    );
                })}
            </div>

            {/* Bigger magnetic ring */}
            <div
                ref={ringRef}
                className="absolute left-0 top-0 h-[50px] w-[50px] rounded-full border border-sky-300/55 bg-sky-400/[0.055] shadow-[0_0_34px_rgba(56,189,248,0.30)] backdrop-blur-[1px] transition-[width,height,border-color,background-color,box-shadow,opacity] duration-200 will-change-transform"
            />

            {/* Small glow center, native cursor remains visible */}
            <div
                ref={coreRef}
                className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-sky-200/80 shadow-[0_0_16px_rgba(125,211,252,0.75)] transition-[width,height,opacity] duration-150 will-change-transform"
            />
        </div>
    );
}