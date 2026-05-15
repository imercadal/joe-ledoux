import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/The-Four-Realms-of-Existence.html",
        destination: "/author/67c773e439d91c4c35170cb4",
        permanent: true,
      },
    ];
  },
  /* config options here */
  /* In order to disable type check when building:
    Dangerously allow production builds to successfully complete even if
    your project has type errors.

    eslint: {
      ignoreDuringBuilds: true,
    }
    */
};

export default nextConfig;
