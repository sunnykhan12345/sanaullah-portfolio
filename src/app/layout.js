import "./globals.css";

export const metadata = {
  title: "Abdul Aziz | Front-End Developer",
  description:
    "Welcome to the portfolio of Abdul Aziz, a skilled front-end developer specializing in building responsive, high-performance websites with Next.js, Tailwind CSS, and JavaScript. With a focus on clean code, seamless functionality, and a user-centered design approach,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
