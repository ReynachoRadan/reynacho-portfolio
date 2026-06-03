import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Mengabaikan error TypeScript saat build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Mengabaikan semua komplain ESLint saat build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
