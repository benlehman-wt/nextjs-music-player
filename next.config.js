/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    JWT_SECRET:
      '1883ffd3-b091-4aa5-b5b2-13fc6b38a6bf-788c10ee-e603-4424-9686-dfd2c35f2726-1c7fc108-3b3a-471c-b206-ba5795431159',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
