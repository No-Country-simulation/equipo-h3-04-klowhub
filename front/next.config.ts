import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/assets4klowhub_bucket/**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
