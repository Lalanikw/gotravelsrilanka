/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const path = require('path');  // Add this line at the top

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Removed outdated posts: send old links to the blog instead of a 404.
      { source: '/blog/travel-update-middle-east-flight-disruptions-march-2026', destination: '/Blogpage', permanent: true },
    ];
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
}

module.exports = withVideos(nextConfig);