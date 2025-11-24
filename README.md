# Resume Application

A professional single-page resume application built with Next.js, featuring server-side PDF generation with preserved links.

## Features

- **Professional Resume Display**: Clean, modern resume layout with subtle blue accent colors
- **PDF Download**: Server-side PDF generation using Puppeteer with all links preserved
- **Responsive Design**: Optimized for both web viewing and PDF output
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **PDF Generation**: Puppeteer
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm` or `corepack enable`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## PDF Generation

The PDF download feature uses Puppeteer to generate a PDF from the rendered resume page. All links (GitHub, email, phone) are preserved in the PDF output.

To use the PDF feature:
1. Click the "Download Resume" button in the top-right corner
2. The PDF will be generated server-side and downloaded automatically

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── pdf/
│   │       └── route.ts      # PDF generation API endpoint
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── Resume.tsx           # Main resume component
│   └── DownloadButton.tsx  # PDF download button
├── data/
│   └── resume.ts            # Resume data and TypeScript interfaces
└── styles/
    └── globals.css          # Global styles and print styles
```

## Customization

To update your resume information, edit `src/data/resume.ts`. All resume data is structured with TypeScript interfaces for type safety.

## License

Private project
