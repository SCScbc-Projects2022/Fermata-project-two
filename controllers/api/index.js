const router = require('express').Router();

const userRoutes = require('./user-routes');
const draftRoutes = require('./draft-routes');
const historyRoutes = require('./history-routes');
const fontRotues = require('./font-routes');

router.use('/users', userRoutes);
router.use('/drafts', draftRoutes);
router.use('/history', historyRoutes);
router.use('/fonts', fontRotues);

router.get('/', (req, res) => {
    res.render('homepage');
  });
  

module.exports = router;