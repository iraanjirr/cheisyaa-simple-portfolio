/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'images.unsplash.com', 'picsum.photos', 'files.catbox.moe'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Mengaktifkan optimasi untuk produksi
  swcMinify: true,
  // Mengaktifkan kompresi
  compress: true,
  // Mengaktifkan optimasi font
  optimizeFonts: true,
  // Mengaktifkan optimasi gambar
  reactStrictMode: true,
  // Menghapus fitur eksperimental yang tidak stabil
  // experimental: {
  //   optimizeCss: true,
  //   scrollRestoration: true,
  // },
};

export default nextConfig;
