// Require the necessary dependencies and routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Mount the API routes
router.use('/api', apiRoutes);

// Mount the dashboard routes
router.use('/dashboard', dashboardRoutes);

// Mount the home routes
router.use('/', homeRoutes);

// Handle any unmatched routes with a 404 error
router.use((req, res) => {
    res.status(404).end();
});

// Export the router
module.exports = router;