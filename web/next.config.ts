import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  // Static export optional later for Hostinger static; keep Node for now
};

export default nextConfig;
