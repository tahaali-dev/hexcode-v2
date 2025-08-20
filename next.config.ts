import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['https://i.ibb.co', 'https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com'],
  // },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: [
            // "default-src 'self'",
            // "script-src 'self'",
            // "style-src 'self' https://fonts.googleapis.com",
            // "script-src 'self' https://www.clarity.ms 'unsafe-inline' 'unsafe-eval'",
            "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
            "connect-src 'self' https://*.clarity.ms",
            "img-src 'self' data: https://i.ibb.co https://images.unsplash.com https://*.clarity.ms https://c.bing.com",
            "object-src 'none'",
            "frame-ancestors 'self'",
            "base-uri 'self'",
            "form-action 'self'"
          ].join('; ')
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), geolocation=(), microphone=()'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
};

export default nextConfig;
