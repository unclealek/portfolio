const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const { corsOrigin } = require('../config/env');

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// CORS configuration
const corsOptions = {
  origin: corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Error handler
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Don't expose internal errors to clients
  const response = {
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal Server Error' 
      : err.message
  };
  
  res.status(err.status || 500).json(response);
};

module.exports = {
  setupSecurity: (app) => {
    app.use(helmet()); // Adds various HTTP headers for security
    app.use(cors(corsOptions));
    app.use(limiter);
    app.use(errorHandler);
  }
}; 