import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Court Slam — Where the Court Meets the Mat',
  description: 'The ultimate crossover of wrestling and tennis. Athlete profiles, matchup breakdowns, training crossovers, and the culture where two fierce sports collide.',
  metadataBase: new URL('https://courtslam.com'),
  openGraph: {
    type: 'website',
    url: 'https://courtslam.com/',
    title: 'Court Slam — Where the Court Meets the Mat',
    description: 'Wrestling meets tennis. The ultimate sports crossover.',
    siteName: 'Court Slam',
  },
  twitter: {
    card: 'summary',
    title: 'Court Slam — Where the Court Meets the Mat',
    description: 'Wrestling meets tennis. The ultimate sports crossover.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://courtslam.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
