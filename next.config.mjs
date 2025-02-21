/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: 'export',
  basePath: isProd ? "/nutthanitcha.github.io" : "",
  assetPrefix: isProd ? "/nutthanitcha.github.io" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
