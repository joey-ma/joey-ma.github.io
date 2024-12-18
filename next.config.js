/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: process.env.NEXT_PUBLIC_POSTHOG_HOST + "/:path*",
      },
      {
        source: "/ingest/decide",
        destination: process.env.NEXT_PUBLIC_POSTHOG_HOST + "/decide",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
