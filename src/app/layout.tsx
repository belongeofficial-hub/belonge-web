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
    icon: "/favicon.png", // this points to your favicon file inside /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
