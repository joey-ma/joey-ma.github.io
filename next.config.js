/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  exportPathMap: async function (defaultPathMap) {
    // Exclude API routes from the static export
    const filteredPathMap = Object.keys(defaultPathMap).reduce((acc, path) => {
      if (!path.startsWith('/api')) {
        acc[path] = defaultPathMap[path];
      }
      return acc;
    }, {});

    return filteredPathMap;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
