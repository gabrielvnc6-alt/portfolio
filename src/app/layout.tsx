import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gabriel — Video Editor & Content Specialist",
  description:
    "Premium video editing for YouTube, TikTok, and Instagram Reels. Scroll-stopping content that gets watched.",
  openGraph: {
    title: "Gabriel — Video Editor & Content Specialist",
    description:
      "Premium video editing for YouTube, TikTok, and Instagram Reels.",
    type: "website",
    locale: "en_US",
    url: "https://gabrieledits.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel — Video Editor",
    description: "I edit videos that get watched.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
