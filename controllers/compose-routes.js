const router = require('express').Router();
const authenticate = require('../utils/auth');

// routes for letter composition
router.get('/you', authenticate, (req, res) => {
    res.render('you');
});

router.get('/them', authenticate, (req, res) => {
    res.render('them');
});

router.get('/song', authenticate, (req, res) => {
    res.render('song');
});

router.get('/style', authenticate, (req, res) => {
    res.render('style');
});

router.get('/send', authenticate, (req, res) => {
    res.render('send');
});

router.get('/preview', authenticate, (req, res) => {
    res.render('preview');
});

router.get('/confirm', (req, res) => {
    res.render('confirm');
});

module.exports = router;