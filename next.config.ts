import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p77-sign-va.tiktokcdn.com',
      }
    ]
  }
};

export default nextConfig;
