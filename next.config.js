/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'lh3.googleusercontent.com', 
          'res.cloudinary.com', 
          'task.com',
          "liem-nextjs-ecommerce.s3.amazonaws.com",
          "https://liem-nextjs-ecommerce.s3.amazonaws.com",
          "localhost"
        ],
        remotePatterns: [
          {
              protocol: "https",
              hostname: 
                "avatars.githubusercontent.com"
          },
        ],
    },
}

module.exports = nextConfig
