/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "i.pravatar.cc",
    ],
  },
};

module.exports = nextConfig;