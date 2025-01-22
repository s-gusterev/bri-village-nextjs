import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  /* config options here */
  basePath: '/bri-village-nextjs',
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
