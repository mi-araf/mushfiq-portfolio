"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollEffects() {
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return undefined;

        const ctx = gsap.context(() => {
            gsap.utils.toArray("[data-gsap-reveal]").forEach((element) => {
                gsap.fromTo(
                    element,
                    { autoAlpha: 0, y: 32 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 82%",
                            once: true
                        }
                    }
                );
            });

            gsap.utils.toArray("[data-parallax]").forEach((element) => {
                const speed = Number(element.dataset.parallax || 60);
                gsap.to(element, {
                    y: speed * -1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        scrub: true,
                        start: "top bottom",
                        end: "bottom top"
                    }
                });
            });

            gsap.fromTo(
                ".journey-line",
                { scaleY: 0, transformOrigin: "top" },
                {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#journey",
                        start: "top 70%",
                        end: "bottom 55%",
                        scrub: true
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return null;
}
