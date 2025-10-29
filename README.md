# Sanctuary Villas - Luxury Villas in Ubud, Bali

Modern landing page for premium villas built with Next.js 15 and latest web technologies.

## Tech Stack

- **Next.js 15** (App Router) - React framework with SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client for API requests
- **TanStack Query (React Query)** - Server state management
- **Swiper** - Modern carousel/slider
- **Framer Motion** - Animations
- **React Day Picker** - Date selection for bookings

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Add your Boom API credentials to `.env.local`:

```env
BOOM_CLIENT_ID=your_client_id
BOOM_CLIENT_SECRET=your_client_secret
BOOM_API_BASE_URL=https://app.boomnow.com/open_api/v1
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel with custom domain setup.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy

## Features

- SEO optimized with structured data, sitemap, and meta tags
- Integration with Boom Booking API
- Fully responsive design for all devices
- Optimized images (WebP + JPEG fallbacks)
- Smooth animations and transitions
- Contact forms and booking system
- Testimonials carousel

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

MIT
