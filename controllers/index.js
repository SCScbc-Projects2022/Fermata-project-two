const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const draftRoutes = require('./draft-routes');
const sentRoutes = require('./sent-routes');

router.use('/dashboard', dashboardRoutes);
router.use('/drafts', draftRoutes);
router.use('/sent', sentRoutes);
router.use('/api', apiRoutes);


module.exports = router;