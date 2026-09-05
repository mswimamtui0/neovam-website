export const generateMetaTags = (pageData) => {
  const defaults = {
    title: 'NeoVam Technologies — AI for Humanity',
    description: 'NeoVam Technologies builds AI, Cloud and Fintech solutions to accelerate digital transformation across Africa.',
    keywords: 'AI, Artificial Intelligence, Cloud Computing, Fintech, Africa, Digital Transformation',
    image: 'https://neovam.com/og-image.jpg',
    url: 'https://neovam.com'
  };

  const data = { ...defaults, ...pageData };

  return {
    title: data.title,
    meta: [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:image', content: data.image },
      { property: 'og:url', content: data.url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: data.image },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'canonical', href: data.url }]
  };
};

export const generateSitemapXml = (blogs) => {
  const baseUrl = 'https://neovam.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/careers', priority: 0.7, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.9, changefreq: 'daily' },
  ];

  const blogUrls = blogs
    .filter(blog => blog.published)
    .map(blog => ({
      url: `/blog/${blog.slug}`,
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: blog.updatedAt || blog.createdAt
    }));

  const allUrls = [...pages, ...blogUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(({ url, priority, changefreq, lastmod }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  `).join('')}
</urlset>`;
};

export const generateRssFeed = (blogs) => {
  const baseUrl = 'https://neovam.com';
  const publishedBlogs = blogs.filter(blog => blog.published);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>NeoVam Technologies Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Latest insights on AI, Cloud Computing, and Fintech from NeoVam Technologies experts</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
  
  ${publishedBlogs.map(blog => `
  <item>
    <title><![CDATA[${blog.title}]]></title>
    <link>${baseUrl}/blog/${blog.slug}</link>
    <description><![CDATA[${blog.excerpt}]]></description>
    <pubDate>${new Date(blog.createdAt).toUTCString()}</pubDate>
    <guid isPermaLink="true">${baseUrl}/blog/${blog.slug}</guid>
    <category><![CDATA[${blog.category}]]></category>
    ${Array.isArray(blog.tags) ? blog.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('') : ''}
  </item>
  `).join('')}
</channel>
</rss>`;
};