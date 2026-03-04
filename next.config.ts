import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://paintinnovators.com/locations/kansas-city/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
