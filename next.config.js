/** @type {import('next').NextConfig} */

const BASE_API_URL = process.env.BASE_API_URL || 'http://google.com';

const path = require('path')

const nextConfig = {
  reactStrictMode: false,
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      const originalEntry = config.entry
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, './wdyr.ts')
        const entries = await originalEntry()

        if (entries['main.js'] && !entries['main.js'].includes(wdrPath)) {
          entries['main.js'].push(wdrPath)
        }
        return entries
      }
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/strapi/:path*',
        destination: `${BASE_API_URL}/:path*`
      }
    ];
  },
  images: {
    domains: ['localhost']
  }
};

module.exports = nextConfig;
