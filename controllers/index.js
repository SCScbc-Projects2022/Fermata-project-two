const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const draftRoutes = require('./draft-routes');
const sentRoutes = require('./sent-routes');
const composeRoutes = require('./compose-routes');
const homepageRoutes = require('./homepage-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/drafts', draftRoutes);
router.use('/sent', sentRoutes);
router.use('/compose', composeRoutes);
router.use('/home', homepageRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});



module.exports = router;