require('dotenv').config();
const { setupSecurity } = require('./middleware/security');
const { setupPerformance } = require('./middleware/performance');

// ... your existing app initialization

setupSecurity(app);
setupPerformance(app); 