# Navlogo — Web Scraping Integration Tool

A Next.js web application that lets users connect real estate platforms (origins) to database destinations and scrape arbitrary URLs. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Features

- **Integration Selector** — Choose an origin (Zillow, Redfin, Trulia, Realtor) and a destination (Amazon S3, MySQL, MongoDB, PostgreSQL) with an interactive two-column card layout connected by an animated SVG connector line.
- **Saved Combinations** — Persist selected origin/destination pairs and manage them with add/remove actions.
- **URL Scraper** — Enter any URL to scrape via a styled input with a gradient border CTA section.
- **Responsive Design** — Fully responsive layout with a navbar, footer, and mobile-friendly components.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4 |
| Fonts | Inter, Space Grotesk (via `next/font`) |
| Icons | react-icons, inline SVGs |
| Language | TypeScript 5 |
| Linting | ESLint 9 with eslint-config-next |

## Project Structure

```
app/
├── layout.tsx              # Root layout with fonts & metadata
├── page.tsx                # Home page (client component)
├── globals.css             # Tailwind config & custom utilities
├── types.ts                # Integration & SavedCombination types
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── IntegrationSelector.tsx  # Origin/destination picker with connector line
│   ├── IntegrationCard.tsx  # Selectable integration card
│   ├── IntegrationIcon.tsx  # Icon resolver for integrations
│   ├── ConnectorLine.tsx    # SVG Bézier connector between selections
│   ├── SavedCombinations.tsx # List of saved origin+destination pairs
│   ├── ScraperSection.tsx   # URL scraper CTA section
│   └── Footer.tsx           # Site footer with socials & ratings
└── data/
    └── integrations.ts      # Origins & destinations data
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
