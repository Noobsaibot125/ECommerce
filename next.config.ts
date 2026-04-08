import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "161.97.128.98",
        port: "3200",
        pathname: "/api/v1/media/**",
      },
    ],
  },
};

export default nextConfig;
