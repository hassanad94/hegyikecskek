/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://cdn.sanity.io', "cdn.sanity.io", "swiperjs.com"],
  },
}

module.exports = nextConfig
