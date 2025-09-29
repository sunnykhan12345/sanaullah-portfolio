// app/layout.js or layout.tsx
import "./globals.css";

export const metadata = {
  title: "Sana Ullah| Front-End Developer",
  description:
    "Welcome to the portfolio of Sana Ullah, a skilled front-end developer specializing in responsive, high-performance websites using Next.js, Tailwind CSS, and JavaScript. Clean code, seamless UX, and user-centered design.",
  keywords: [
    " Sana Ullah",
    "Front-End Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "JavaScript Developer",
    "Portfolio Website",
    "React Developer",
    "Web Developer Pakistan",
    "Responsive Web Design",
  ],
  authors: [{ name: " Sana Ullah", url: "" }],
  creator: " Sana Ullah",
  openGraph: {
    title: " Sana Ullah  | Front-End Developer",
    description:
      "Explore  Sana Ullah &#39;s front-end development portfolio featuring Next.js, Tailwind CSS, and modern responsive websites.",
    url: "https://new-porfolio-phi.vercel.app",
    siteName: " Sana Ullah  Portfolio",
    images: [
      {
        url: "https://new-porfolio-phi.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: " Sana Ullah  Portfolio Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#050414]">{children}</body>
    </html>
  );
}
