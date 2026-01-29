/** @type {import('next').NextConfig} */
const production = process.env.NODE_ENV === "production";

const repo = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "";

const basePath = production && repo ? `/${repo}` : "";

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
};
