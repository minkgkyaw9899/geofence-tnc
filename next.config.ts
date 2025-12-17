import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "geofence/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
