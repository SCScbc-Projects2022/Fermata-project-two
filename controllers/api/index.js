const router = require('express').Router();

const userRoutes = require('./user-routes');
const draftRoutes = require('./draft-routes');
const sentRoutes = require('./sent-routes');
const fontRotues = require('./font-routes');

router.use('/users', userRoutes);
router.use('/drafts', draftRoutes);
router.use('/sent', sentRoutes);
router.use('/fonts', fontRotues);

module.exports = router;