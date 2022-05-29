const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Draft } = require('../../models');

// get all drafts
router.get('/', (req, res) => {
    Draft.findAll()
    .then(dbDraftData => res.json(dbDraftData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;