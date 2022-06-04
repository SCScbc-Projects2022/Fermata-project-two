const router = require('express').Router();

const apiRoutes = require('./api/');
const dashboardRoutes = require('./dashboard-routes');
const draftRoutes = require('./draft-routes');
const sentRoutes = require('./sent-routes');
// const composeRoutes = require('./compose-routes')

router.use('/dashboard', dashboardRoutes);
router.use('/drafts', draftRoutes);
router.use('/sent', sentRoutes);
// router.use('/compose', composeRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('homepage');
});

// routes for letter composition - route it to new file?
router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

router.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

router.get('/you', (req, res) => {
    res.render('you');
});

router.get('/them', (req, res) => {
    res.render('them');
});

router.get('/song', (req, res) => {
    res.render('song');
});

router.get('/style', (req, res) => {
    res.render('style');
});

router.get('/send', (req, res) => {
    res.render('send');
});

module.exports = router;