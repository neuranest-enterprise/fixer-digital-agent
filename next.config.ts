import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/fixer-digital-agent' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fixer-digital-agent/' : '',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
