import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/fixer-simple-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/fixer-simple-web/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
