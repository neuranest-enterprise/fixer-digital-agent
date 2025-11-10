import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/fixer-digital-agent" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/fixer-digital-agent/" : "",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow warnings for placeholder implementations
  },
};

export default nextConfig;
