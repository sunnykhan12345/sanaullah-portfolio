// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable client-side cache to prevent ArrayBuffer allocation errors
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
