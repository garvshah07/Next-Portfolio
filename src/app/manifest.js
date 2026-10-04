export default function manifest() {
  return {
    name: 'Garv Shah — MERN Stack & Frontend Developer',
    short_name: 'Garv Shah',
    description:
      'Portfolio of Garv Shah — MERN Stack & Frontend Developer specializing in React.js, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090a0f',
    theme_color: '#090a0f',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
