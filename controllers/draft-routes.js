const router = require('express').Router();
const {Draft} = require('../models');

router.get('/', (req, res) => {
    Draft.findAll()
    .then(dbDraftData => {
        const drafts = dbDraftData.map(post => post.get({plain: true}));
        res.render('drafts', drafts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;