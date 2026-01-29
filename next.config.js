/** @type {import('next').NextConfig} */
const production = process.env.NODE_ENV === "production";

const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const basePath = production && repo ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Next 12 + next export (evitar Image Optimization API)
  images: {
    loader: "imgix",
    path: "https://example.com", // cualquier URL válida, no se va a usar realmente
  },
};

module.exports = nextConfig;
