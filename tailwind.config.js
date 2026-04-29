/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./lib/**/*.{js,jsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1180px"
            }
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
                display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                muted: "hsl(var(--muted))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                card: "hsl(var(--card))",
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))"
            },
            boxShadow: {
                glow: "0 0 60px rgba(79, 140, 255, 0.28)",
                card: "0 24px 80px rgba(0, 0, 0, 0.28)"
            },
            backgroundImage: {
                "radial-grid": "radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)",
                "hero-glow": "radial-gradient(circle at 30% 20%, rgba(99,102,241,.28), transparent 34%), radial-gradient(circle at 80% 0%, rgba(14,165,233,.22), transparent 28%), radial-gradient(circle at 50% 80%, rgba(168,85,247,.18), transparent 34%)"
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translate3d(0, 0, 0)" },
                    "50%": { transform: "translate3d(0, -18px, 0)" }
                },
                shimmer: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" }
                }
            },
            animation: {
                float: "float 7s ease-in-out infinite",
                shimmer: "shimmer 10s ease infinite"
            }
        }
    },
    plugins: []
};
