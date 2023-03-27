/** @type {import('next').NextConfig} */

const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production'
});

const nextConfig = {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_API_URL,
  },
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
  images: {
    domains: ['localhost']
  }
};

module.exports = withPWA(nextConfig);
