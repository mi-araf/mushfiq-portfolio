"use client";

import { useEffect, useState } from "react";

export default function useLowPowerMode() {
    const [state, setState] = useState({
        ready: false,
        isLowPower: true,
    });

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const smallScreen = window.matchMedia("(max-width: 768px)");
        const coarsePointer = window.matchMedia("(pointer: coarse)");

        function update() {
            const deviceMemory = navigator.deviceMemory || 8;

            setState({
                ready: true,
                isLowPower:
                    reducedMotion.matches ||
                    smallScreen.matches ||
                    coarsePointer.matches ||
                    deviceMemory <= 4,
            });
        }

        function addListener(mediaQuery) {
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener("change", update);
            } else {
                mediaQuery.addListener(update);
            }
        }

        function removeListener(mediaQuery) {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", update);
            } else {
                mediaQuery.removeListener(update);
            }
        }

        update();

        [reducedMotion, smallScreen, coarsePointer].forEach(addListener);

        return () => {
            [reducedMotion, smallScreen, coarsePointer].forEach(removeListener);
        };
    }, []);

    return state;
}