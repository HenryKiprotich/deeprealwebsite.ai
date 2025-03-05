import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "developer.nvidia.com",
      "coral.ai",
      "store.arduino.cc",
      "www.raspberrypi.com",
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
