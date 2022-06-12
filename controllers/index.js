const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const letterRoutes = require('./letter-routes');
const composeRoutes = require('./compose-routes');
const homepageRoutes = require('./homepage-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/letter', letterRoutes);
router.use('/compose', composeRoutes);
router.use('/home', homepageRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/*', (req, res) => {
    res.render('dashboard');
});

module.exports = router;