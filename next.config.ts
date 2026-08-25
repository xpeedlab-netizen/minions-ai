import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/the-3000-voicemail-why-dfw-hvac-shops-bleed-revenue-during-heat-waves",
        destination: "/blog/houston-hvac-emergency-revenue-is-lost-in-the-90-second-humidity-window",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

