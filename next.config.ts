import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* In order to disable type check when building:
    Dangerously allow production builds to successfully complete even if
    your project has type errors.

    */
   eslint: {
     ignoreDuringBuilds: true,
   }
};

export default nextConfig;
