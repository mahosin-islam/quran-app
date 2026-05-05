import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    unoptimized: true, // Disable image optimization for better compatibility
  },

  // Enable Turbopack support for Next.js 16
  turbopack: {},

  // Environment variables
  env: {
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE || "https://api.alquran.cloud/v1",
  },
};

export default nextConfig;

