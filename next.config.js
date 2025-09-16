/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose'
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
        port: '',
        pathname: '/**',
      },
    ],
  },
   basePath: process.env.NODE_ENV === 'production' ? '/uad-client' : '',  // Comment this out temporarily
   assetPrefix: process.env.NODE_ENV === 'production' ? '/uad-client' : '',  // Comment this out temporarily
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }];
    return config;
  },
};

module.exports = nextConfig;