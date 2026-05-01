"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import GSAPScrollEffects from "@/components/GSAPScrollEffects";
import useLowPowerMode from "@/components/useLowPowerMode";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
    ssr: false,
});

export default function ClientEffects() {
    const { ready, isLowPower } = useLowPowerMode();

    if (!ready || isLowPower) {
        return null;
    }

    return (
        <>
            <SmoothScroll />
            <GSAPScrollEffects />
            <CustomCursor />
        </>
    );
}