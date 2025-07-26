import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Komponen global
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reynacho A. Radan | UI/UX Enthusiast · Mobile Dev",
  description:
    "Personal portfolio of Reynacho A. Radan showcasing UI/UX projects, certifications, and mobile app development.",
  icons: {
    icon: "/favicon.png", // Pastikan favicon berada di public/favicon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
