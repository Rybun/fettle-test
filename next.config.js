/** @type {import('next').NextConfig} */
const production = process.env.NODE_ENV === "production";

// Si el repo NO es tu user.github.io, Pages sirve bajo /<repo>
// Ej: https://rybun.github.io/fettle-test/  => basePath "/fettle-test"
const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Para GitHub Pages (subpath)
  basePath: production && repo ? `/${repo}` : "",
  assetPrefix: production && repo ? `/${repo}/` : "",

  // Next 12 + next export: evitar Image Optimization API
  images: {
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
