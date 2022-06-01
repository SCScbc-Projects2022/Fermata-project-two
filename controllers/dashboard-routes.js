const router = require('express').Router();
const { append } = require('express/lib/response');
const {Draft, Sent} = require('../models');

// this doesn't work
router.get('/', (req, res, next) => {
    Draft.findAll({
    })
    .then(dbDraftData => {
        const drafts = dbDraftData.map(drafts => drafts.get({plain: true}));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    next()
    Sent.findAll({
    })
    .then(dbSentData => {
        const sent = dbSentData.map(sent => sent.get({plain: true}));
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;