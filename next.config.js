module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    CHAIN_ID: process.env.CHAIN_ID,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};
