// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikitide.net',
        pathname: '/projectsekaiwiki/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**'
      }
    ],
    formats: ['image/avif', 'image/webp'], // ✅ 合法配置
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 3600 * 24 * 7,
    unoptimized: process.env.NODE_ENV === 'production'
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(svg|png|jpe?g|gif|avif|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[hash][ext][query]'
      }
    })
    return config
  }
}

export default nextConfig