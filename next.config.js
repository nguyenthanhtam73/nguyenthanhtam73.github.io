/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
