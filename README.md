# World Cup 2026 Tool Hub (statshubs.net)

A comprehensive, compliance-focused English-language World Cup 2026 tool website with timezone converter, bracket maker, live standings, and more.

## Features

- **6 Core Tools**: Timezone converter, bracket maker, standings tracker, schedule generator, team database, downloads
- **News & Analysis**: Match previews, team analysis, tournament guides
- **SEO Optimized**: Full meta tags, sitemap, robots.txt, structured data
- **Monetization Ready**: Adsterra/Monetag integration, Amazon Associates affiliate links
- **Mobile Responsive**: Works on all devices
- **Fast Performance**: Next.js 14 with App Router

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- date-fns (date handling)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env file (if not exists)
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                 # Homepage
├── schedule/               # Match schedule
├── news/                  # News articles
├── downloads/             # Free downloads
├── tools/                 # Core tools
│   ├── timezone-converter/
│   ├── bracket-maker/
│   ├── standings/
│   ├── schedule-generator/
│   └── teams/
├── faq/                   # FAQ page
├── about/                 # About page
├── contact/               # Contact form
├── privacy-policy/        # Privacy policy
├── terms/                 # Terms of service
└── disclaimer/             # Disclaimer

components/
├── ads/                   # Ad components
└── affiliate/             # Affiliate components

lib/
├── data.ts                # Mock data
├── utils.ts               # Utility functions
└── api.ts                 # API integration
```

## API Integration

This project uses Football-data.org API for live data.

1. Register at https://www.football-data.org/
2. Get your free API key
3. Add to `.env` file:

```
FOOTBALL_API_KEY=your_api_key_here
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
docker build -t statshubs .
docker run -p 3000:3000 statshubs
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| FOOTBALL_API_KEY | Football-data.org API key | Yes (for live data) |

## SEO

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Structured data included

## License

Copyright © 2026 StatsHubs. All rights reserved.

## Disclaimer

This site is not affiliated with FIFA. All World Cup related trademarks are property of FIFA.
