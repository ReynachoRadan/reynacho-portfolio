import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Import komponen global
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor"; // ⬅️ Tambahkan ini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reynacho Portfolio",
  description: "Personal portfolio of Reynacho Azarel Radan",
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
        {/* ✅ Global Components */}
        <CustomCursor /> {/* ⬅️ Tambahkan di sini */}
        <Navbar />

        {/* ✅ Halaman utama */}
        {children}
      </body>
    </html>
  );
}
