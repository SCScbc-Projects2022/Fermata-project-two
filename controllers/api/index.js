const router = require('express').Router();

const userRoutes = require('./user-routes');
const letterRoutes = require('./letter-routes');
const fontRoutes = require('./font-routes');

router.use('/users', userRoutes);
router.use('/letter', letterRoutes);
router.use('/fonts', fontRoutes);

module.exports = router;