/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['static.wixstatic.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com'
        },
        {
          protocol: 'https',
          hostname: 'static.wixstatic.com',
          pathname: '/media/**',
        },
      ],
    },
  };
  
  export default nextConfig;