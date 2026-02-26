import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Obey-Agent-Economy",
  assetPrefix: "/Obey-Agent-Economy/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
