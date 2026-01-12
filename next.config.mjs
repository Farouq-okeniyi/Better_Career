/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
    
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
  buildActivity: false,
  buildActivityPosition: 'bottom-right',
  // or other deprecated fields like appIsrStatus
}
}

export default nextConfig
