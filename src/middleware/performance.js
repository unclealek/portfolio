const compression = require('compression');
const express = require('express');

module.exports = {
  setupPerformance: (app) => {
    // Enable compression
    app.use(compression());

    // Serve static files with caching
    app.use(express.static('public', {
      maxAge: '1d',
      etag: true,
    }));

    // Cache control headers
    app.use((req, res, next) => {
      // Cache static assets for 1 day
      if (req.url.match(/\.(css|js|jpg|png|gif|ico)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
      }
      next();
    });
  }
}; 