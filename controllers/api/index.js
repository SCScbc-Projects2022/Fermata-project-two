const router = require('express').Router();

const userRoutes = require('./user-routes');
const draftRoutes = require('./draft-routes');
const historyRoutes = require('./history-routes');

router.use('/users', userRoutes);
router.use('/drafts', draftRoutes);
router.use('/history', historyRoutes);

module.exports = router;