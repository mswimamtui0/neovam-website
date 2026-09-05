// src/utils/sitemapGenerator.js
const { query } = require('../api/db');

const BASE_URL = process.env.SITE_URL || 'https://neovam.com';

async function generateSitemapXML() {
  try {
    // Fetch all published blog posts
    const result = await query(
      `SELECT slug, "updatedAt" 
       FROM blogs 
       WHERE published = true 
       ORDER BY "updatedAt" DESC`
    );

    // Start XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add homepage
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>1.0</priority>\n`;
    xml += `  </url>\n`;

    // Add static pages
    const staticPages = ['about', 'blog', 'careers', 'contact', 'services'];
    staticPages.forEach(page => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/${page}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });

    // Add blog posts
    result.rows.forEach(post => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/blog/${post.slug}</loc>\n`;
      xml += `    <lastmod>${new Date(post.updatedAt).toISOString()}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;
      xml += `  </url>\n`;
    });

    xml += '</urlset>';
    return xml;
  } catch (error) {
    console.error('Sitemap generation error:', error);
    throw error;
  }
}

module.exports = { generateSitemapXML };