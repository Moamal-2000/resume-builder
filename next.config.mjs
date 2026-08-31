const nextConfig = {
  devIndicators: false,
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "https://resume-builder-moamal.vercel.app" },
        ],
        destination: "https://resume-builder.moamalalaa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
