# Mushfiq Iqbal Araf Portfolio

A premium, futuristic, animated single-page portfolio built with Next.js, React, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Three Fiber.

## Features

- Dark theme by default with light/dark toggle
- Sticky glassmorphism navbar
- Smooth scrolling with Lenis
- GSAP ScrollTrigger reveal and timeline animations
- Framer Motion entrance and stagger animations
- Lightweight React Three Fiber hero scene
- Magnetic buttons and 3D tilt project cards
- Responsive desktop, tablet, and mobile layouts
- Accessible labels, focus states, semantic sections, and reduced motion support
- Reusable component structure

## Tech Stack

- Next.js App Router
- React
- JavaScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Lenis
- Three.js + React Three Fiber + Drei
- shadcn-style local UI primitives
- Lucide React icons

## Folder Structure

```txt
mushfiq-portfolio/
├─ app/
│  ├─ globals.css
│  ├─ layout.js
│  └─ page.js
├─ components/
│  ├─ ui/
│  │  ├─ button.jsx
│  │  ├─ card.jsx
│  │  ├─ input.jsx
│  │  └─ textarea.jsx
│  ├─ About.jsx
│  ├─ Contact.jsx
│  ├─ Footer.jsx
│  ├─ GSAPScrollEffects.jsx
│  ├─ Hero.jsx
│  ├─ Journey.jsx
│  ├─ MagneticButton.jsx
│  ├─ Navbar.jsx
│  ├─ ProjectCard.jsx
│  ├─ Projects.jsx
│  ├─ Scene.jsx
│  ├─ SectionHeader.jsx
│  ├─ Services.jsx
│  ├─ Skills.jsx
│  ├─ SmoothScroll.jsx
│  ├─ Testimonials.jsx
│  ├─ ThemeProvider.jsx
│  └─ ThemeToggle.jsx
├─ lib/
│  └─ cn.js
├─ jsconfig.json
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.js
└─ README.md
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Customize

1. Update social links in `components/Contact.jsx`.
2. Replace placeholder projects in `components/Projects.jsx`.
3. Replace the mail address `mushfiq@example.com` in `components/Contact.jsx`.
4. Adjust theme colors in `app/globals.css`.
5. Tune the 3D object in `components/Scene.jsx`.

## Notes

The contact form opens the user's email client via `mailto:` so it works without a backend. For production, connect it to Formspree, Resend, EmailJS, or your own API route.
