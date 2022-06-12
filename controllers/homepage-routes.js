const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

router.get('/sign-in', (req, res) => {
    res.render('sign-in');
});

module.exports = router;