export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.garvshah.dev';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'Applebot-Extended'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
