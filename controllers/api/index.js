const router = require('express').Router();

const accessRoutes = require('controllers\api\Access-routes.js');
const postRoutes = require('controllers\api\post-routes.js');
const commentRoutes = require('controllers\api\comment-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;