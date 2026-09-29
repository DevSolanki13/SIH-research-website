import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Mukta } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B5E20",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Bhaav — Field Visit Report, Vasai–Virar",
    template: "%s · Bhaav",
  },
  description:
    "Bhaav field visit to scrap dealers in Vasai West (29 Sep 2026): ground findings, GPS-stamped photos, recyclers checked against the MPCB register, and references.",
  keywords: [
    "Bhaav",
    "SIH 2026",
    "e-waste",
    "Vasai-Virar",
    "field research",
    "traceability",
    "informal recycling",
    "formal recycling",
    "signed receipt",
    "rate lock",
    "CPCB guidelines",
    "MPCB",
  ],
  authors: [{ name: "Team Error 200" }],
  openGraph: {
    title: "Bhaav — Field Visit Report, Vasai–Virar",
    description:
      "Understanding how e-waste moves in Vasai–Virar: field observations, local desk research, design mappings, and product evidence.",
    url: "https://bhaav-research.vercel.app",
    siteName: "Bhaav Research Portal",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaav — Field Visit Report, Vasai–Virar",
    description:
      "Understanding how e-waste moves in Vasai–Virar: field observations, local desk research, design mappings, and product evidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${mukta.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
