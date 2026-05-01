import { Manrope, Sora } from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ClientEffects from "@/components/ClientEffects";
import CustomCursor from "@/components/CustomCursor";
import GSAPScrollEffects from "@/components/GSAPScrollEffects";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

export const metadata = {
    title: "Mushfiq Iqbal Araf || Creative Web Developer",
    description:
        "Premium animated portfolio for Mushfiq Iqbal Araf, creative web developer, frontend developer, full-stack developer, and student developer.",
    keywords: [
        "Mushfiq Iqbal Araf",
        "Creative Web Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "Portfolio",
    ],
    icons: {
        icon: "/araf.png",
        shortcut: "/araf.png",
        apple: "/araf.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${manrope.variable} ${sora.variable} font-sans bg-background text-foreground antialiased`}
            >
                <CustomCursor />
                <ThemeProvider>
                    <ClientEffects />
                    <GSAPScrollEffects />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}