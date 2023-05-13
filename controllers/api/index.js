// Import the Express Router module
const router = require('express').Router();

// Import the API route modules for access, posts, and comments
const accessRoutes = require('controllers\api\Access-routes.js');
const postRoutes = require('controllers\api\post-routes.js');
const commentRoutes = require('controllers\api\comment-routes.js');

// Use the imported API route modules for the corresponding routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Export the router object to make it available for use in other parts of the application
module.exports = router;

