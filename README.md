# CARX — Custom Web Experiences

A premium landing page built with React, TypeScript, Three.js, and shadcn/ui — featuring 3D scene animations, scroll-driven camera flythroughs, and a refined monospace design system.

## Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite** for dev/build
- **@react-three/fiber** + **@react-three/drei** — 3D scene rendering
- **GSAP** + **ScrollTrigger** — scroll-driven camera timeline
- **Motion** (motion/react v12) — UI entry animations
- **shadcn/ui** (Radix primitives, Tabler Icons, Tailwind v4)
- **JetBrains Mono** — primary typeface

## Features

- **Hero** — 4 floating GLB models with auto-rotate and parallax
- **Shared 3D Scene** — single `scene.glb` driven by a 6-phase GSAP camera flythrough, animating both camera position and look-target on scroll
- **6 Scroll Sections** — alternating left/right text panels overlaid on the sticky 3D scene
- **Photo Marquee** — CSS-animated marquee row with hover pause
- **Awards Section** — staggered card grid with `whileInView` reveals
- **Footer** — brand, link columns, social icons, back-to-top
- **Dark/Light Theme** — toggles via `d` key (class-based, CSS variables)
- **Responsive** — mobile/desktop breakpoints, isMobile detection

## Getting Started

```bash
pnpm install
pnpm dev
```

## Building

```bash
pnpm build
```

## Custom Sites

This project demonstrates the kind of bespoke, high-fidelity web experiences I build. From 3D storytelling to polished UI systems — every site is crafted to fit the brand, not a template.

If you'd like a custom site like this for your brand or product, [get in touch](https://anshkaushal.in).
