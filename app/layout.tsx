import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bhaav — Field Research × Product Evidence",
  description:
    "Bhaav is an e-waste transaction and traceability platform designed around field research, fair transactions and formal recycling.",
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
    title: "Bhaav — Field Research × Product Evidence",
    description:
      "Understanding how e-waste moves in Vasai–Virar: field observations, local desk research, design mappings, and product evidence.",
    url: "https://bhaav-research.vercel.app",
    siteName: "Bhaav Research Portal",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhaav — Field Research × Product Evidence",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#16A34A]/15 selection:text-[#0F172A] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
