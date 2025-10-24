import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Proper metadata setup for favicon + SEO
export const metadata: Metadata = {
  title: "Belonge | Find Your People. Grow Your Career. Find Your Companion.",
  description:
    "Belonge helps you connect with people, grow your career, build your business, and discover genuine companionship — all in one community.",
  icons: {
    icon: "/favicon.png", // ✅ ensure your favicon.png is in the /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 Add a manual fallback <title> for mobile cache */}
        <title>Belonge | Find Your People. Grow Your Career. Find Your Companion.</title>
        <meta
          name="description"
          content="Belonge helps you connect with people, grow your career, build your business, and discover genuine companionship — all in one community."
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
