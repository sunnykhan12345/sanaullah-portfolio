// app/layout.js or layout.tsx
import "./globals.css";

export const metadata = {
  title: "Abdul Aziz | Front-End Developer",
  description:
    "Welcome to the portfolio of Abdul Aziz, a skilled front-end developer specializing in responsive, high-performance websites using Next.js, Tailwind CSS, and JavaScript. Clean code, seamless UX, and user-centered design.",
  keywords: [
    "Abdul Aziz",
    "Front-End Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Portfolio Website",
    "React Developer",
    "Web Developer Pakistan",
    "Responsive Web Design",
  ],
  authors: [{ name: "Abdul Aziz", url: "https://new-porfolio-phi.vercel.app" }],
  creator: "Abdul Aziz",
  openGraph: {
    title: "Abdul Aziz | Front-End Developer",
    description:
      "Explore Abdul Aziz&#39;s front-end development portfolio featuring Next.js, Tailwind CSS, and modern responsive websites.",
    url: "https://new-porfolio-phi.vercel.app",
    siteName: "Abdul Aziz Portfolio",
    images: [
      {
        url: "https://new-porfolio-phi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Aziz Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
