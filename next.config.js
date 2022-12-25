/** @type {import('next').NextConfig} */

const BASE_API_URL = process.env.BASE_API_URL || 'http://google.com';

const nextConfig = {
  reactStrictMode: false,
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
