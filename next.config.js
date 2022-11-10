const isProd = process.env.NODE_ENV === "production";
// solves issue #2
const repoName = isProd
  ? process.env.GITHUB_REPOSITORY
    ? Array.from(process.env.GITHUB_REPOSITORY.matchAll(/(.*)\/(.*)/g))[0][2]
    : undefined
  : undefined;
const prefixedPath = isProd ? `/${repoName}` : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ".",
  },
  basePath: isProd ? prefixedPath : undefined,
  assetPrefix: isProd ? prefixedPath : undefined,
};

module.exports = nextConfig;
