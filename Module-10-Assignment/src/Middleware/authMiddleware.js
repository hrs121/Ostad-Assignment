// authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = 'y$XN9!TbK^v3@J&*e#Vp';

// Generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Verify and decode JWT token
function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateToken, verifyToken };
