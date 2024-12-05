const { setupSecurity } = require('./middleware/security');
const logger = require('./utils/logger');

setupSecurity(app);
logger.info('Server started'); 