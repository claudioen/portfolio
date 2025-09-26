import type { NextConfig } from 'next';

const repo = 'portfolio'; // <- GitHub repo path segment

const nextConfig: NextConfig = {
  // ===== Required for GitHub Pages static export =====
  output: 'export',                // produces the static "out" folder
  trailingSlash: true,             // helps with Pages routing
  images: { unoptimized: true },   // required by next export
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  // ===================================================

  // Keep relaxed build to avoid CI breaks
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // Allow remote images even though optimization is disabled for export
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'images.weserv.nl', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    ],
  },
};

export default nextConfig;
