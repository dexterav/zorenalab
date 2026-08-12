# Zorena Lab

A modern web development studio website built for Zorena Lab, an independent web development studio focused on creating responsive, conversion-focused websites for local businesses.

## Live Website

https://zorenalab.vercel.app/

## About

Zorena Lab is a self-built digital studio concept focused on modern websites for local businesses such as plumbers, electricians, HVAC companies, dental clinics, salons, roofing companies, and other service-based businesses.

The website was designed to demonstrate a premium agency-style experience while showcasing practical frontend development, responsive design, deployment, and conversion-focused UI.

## Features

- Responsive, mobile-first design
- Modern premium agency-style UI
- Reusable React components
- Responsive navigation
- Portfolio showcase
- Services section
- Process section
- Pricing section
- FAQ accordion
- Contact and enquiry CTAs
- WhatsApp integration
- Email contact integration
- LinkedIn integration
- SEO-friendly page structure
- Performance-focused frontend
- Smooth reveal and hover animations
- Production deployment with Vercel

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- TanStack Router
- Git
- GitHub
- Vercel

## Project Structure

```
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images used across the site
│   ├── components/
│   │   ├── site/           # Navigation, reveal, and page sections
│   │   └── ui/             # Reusable UI primitives
│   ├── hooks/              # Shared React hooks
│   ├── lib/                # Utility helpers and error handling
│   ├── routes/             # App routes and root layout
│   ├── router.tsx          # Router configuration
│   ├── routeTree.gen.ts    # Generated route tree
│   ├── styles.css          # Global styles
│   └── start.ts            # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone <repository-url>
cd <repository-name>
npm install
```

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

