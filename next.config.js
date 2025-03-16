const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikitide.net',
        port: '',
        pathname: '/projectsekaiwiki/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
      },
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      }
    ],
    // 临时禁用图片优化
    unoptimized: true
  },
  // 正确的 headers 配置位置 (Next.js v12+)
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Referer',
            value: process.env.NODE_ENV === 'development' 
              ? 'http://localhost:3000'
              : '' // 生产环境留空或填实际域名
          },
          {
            key: 'User-Agent',
            value: 'Next.js Image Optimization'
          }
        ],
      },
    ]
  },
};

export default nextConfig;