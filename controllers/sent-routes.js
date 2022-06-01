const router = require('express').Router();
const {Sent} = require('../models');

router.get('/', (req, res) => {
    Sent.findAll()
    .then(dbSentData => {
        const sent = dbSentData.map(post => post.get({plain: true}));
        res.render('Sents', sent);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;