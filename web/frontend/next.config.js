/** @type {import("next").NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
