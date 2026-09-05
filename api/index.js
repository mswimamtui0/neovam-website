const app = require('../src/api/server');

module.exports = async (req, res) => {
  try {
    // Forward all requests to Express app
    await app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    
    // Fallback error response
    const origin = req.headers.origin;
    const allowedOrigins = [
      'https://neovam.com',
      'https://www.neovam.com',
      'http://localhost:3000'
    ];
    
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    
    res.status(500).json({ 
      error: 'Internal server error'
    });
  }
};