/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,
  images: {
    domains: [
      // Add allowed image domains here
    ],
  },
  // Add other optimizations as needed
}

module.exports = nextConfig 