// Import the Express Router module
const router = require('express').Router();

// Import the API route modules for access, posts, and comments
const accessRoutes = require('./access-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

// Use the imported API route modules for the corresponding routes
router.use('/accessRoutes', accessRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// Export the router object to make it available for use in other parts of the application
module.exports = router;