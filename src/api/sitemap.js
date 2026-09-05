// src/api/sitemap.js
const { generateSitemapXML } = require('../utils/sitemapGenerator');

module.exports = async (req, res) => {
  // Set CORS headers
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://neovam.com',
    'https://www.neovam.com',
    'https://neovam-website-master.vercel.app',
    'http://localhost:3000'
  ];
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  
  try {
    const xml = await generateSitemapXML();
    res.status(200).send(xml);
  } catch (error) {
    console.error('Sitemap error:', error);
    res.status(500).send(`<?xml version="1.0" encoding="UTF-8"?>
<error>Failed to generate sitemap</error>`);
  }
};