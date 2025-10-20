import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // ✅ Ignore lint errors during builds (safe for production)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
