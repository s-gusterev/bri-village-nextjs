import type { NextConfig } from 'next';

// В dev оставляем корень '/', а basePath включаем в prod или через переменную окружения
const isProd = process.env.NODE_ENV === 'production';
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath ?? (isProd ? '/bri-village-nextjs' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
