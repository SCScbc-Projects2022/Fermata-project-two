const router = require('express').Router();

// routes for letter composition
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