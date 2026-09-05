// Simple authentication middleware
module.exports = (req, res, next) => {
  // For now, we'll handle auth in server.js
  next();
};