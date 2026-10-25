import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alpin",
  assetPrefix: "/alpin",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
