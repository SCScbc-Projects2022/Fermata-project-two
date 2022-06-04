const router = require('express').Router();

// routes for letter composition
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

router.get('/confirm', (req, res) => {
    res.render('confirm');
});

module.exports = router;