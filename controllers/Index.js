const router = require('express').Router();
const apiRoutes = require('controllers\api');
const homeRoutes = require('./Home-routes.js');
const dashboardRoutes = require('./Dashboard-routes.js');


router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;