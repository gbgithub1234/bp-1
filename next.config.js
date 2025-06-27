// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensures App Router is explicitly enabled
  },
}

module.exports = nextConfig
