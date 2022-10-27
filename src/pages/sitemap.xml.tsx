import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: process.env.NEXT_PUBLIC_WEB_DOMAIN
      ? `https://${process.env.NEXT_PUBLIC_WEB_DOMAIN}`
      : 'https://taxisanbaypro.vn',
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: 'src/pages',
        production: '.next/server/pages',
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return (
        ![
          'index.tsx',
          'api',
          '_app.tsx',
          '_document.tsx',
          '_error.tsx',
          'sitemap.xml.tsx',
        ].includes(staticPage) &&
        !staticPage.includes('.js') &&
        !staticPage.includes('.json') &&
        !staticPage.includes('404') &&
        !staticPage.includes('500') &&
        !staticPage.includes('index') &&
        staticPage.includes('.html')
      );
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace('.html', '')}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>hourly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
