/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable optimization for static files from the public folder
    // No need to add domain since images are served locally (from /public)
    unoptimized: false, // set to true ONLY if you want to skip next/image optimization
    // Optionally, you can specify image sizes for responsive layout
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    domains: ["webbywolf-frontend.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webbywolf-frontend.vercel.app",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
