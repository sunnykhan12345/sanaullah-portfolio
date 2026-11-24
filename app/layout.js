import { Mulish, Instrument_Sans, Spline_Sans_Mono } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-mulish',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
  display: 'swap',
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Sana Ullah — MERN Stack & Next.js Developer',
  description: 'Portfolio of Sana Ullah, MERN Stack, React.js & Next.js Developer with 2+ years of experience building modern web experiences, SaaS dashboards, and client web applications.',
  keywords: ['Sana Ullah', 'MERN Stack Developer', 'React.js Developer', 'Next.js Developer', 'Frontend Developer', 'Portfolio', 'Pakistan'],
  authors: [{ name: 'Sana Ullah' }],
  metadataBase: new URL('https://sanaullah-dev-portfolio.vercel.app'),
  openGraph: {
    title: 'Sana Ullah — MERN Stack & Next.js Developer',
    description: 'Fast, production-ready web applications and scalable SaaS interfaces with the MERN stack, React.js, Next.js, and modern AI integrations.',
    url: 'https://sanaullah-dev-portfolio.vercel.app',
    siteName: 'Sana Ullah Portfolio',
    images: [
      {
        url: '/images/sunny20.jpg',
        width: 1200,
        height: 630,
        alt: 'Sana Ullah — MERN Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/images/sana-profile.jpg?v=4', sizes: 'any' },
      { url: '/favicon.ico?v=4' },
    ],
    shortcut: '/images/sana-profile.jpg?v=4',
    apple: '/images/sana-profile.jpg?v=4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${mulish.variable} ${instrumentSans.variable} ${splineSansMono.variable}`}>
      <head>
        <link rel="icon" href="/images/sana-profile.jpg?v=4" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/sana-profile.jpg?v=4" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/sana-profile.jpg?v=4" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
        />
      </head>
      <body className="bg-light-background text-light-on-background font-body antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
