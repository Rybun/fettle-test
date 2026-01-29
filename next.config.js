/** @type {import('next').NextConfig} */
const production = process.env.NODE_ENV === "production";

const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const basePath = production && repo ? `/${repo}` : "";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  // Para GitHub Pages: https://USER.github.io/<repo>/
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Necesario para `next export` en Next 12 si alguna vez aparece next/image:
  // (pero en nuestro index ya no lo usamos)
  images: {
    unoptimized: true,
  },
};
