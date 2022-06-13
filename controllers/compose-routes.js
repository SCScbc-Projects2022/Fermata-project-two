const router = require('express').Router();
const {authenticate} = require('../utils/auth');

// routes for letter composition - no database queries/api calls during drafting, only session storage
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

router.get('/confirm', authenticate, (req, res) => {
    res.render('confirm');
});

module.exports = router;