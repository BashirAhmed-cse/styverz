/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // Performance optimizations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Performance optimizations
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
  
  // Experimental optimizations for static export
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Remove source maps in production for smaller bundle
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig