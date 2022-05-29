const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Font } = require('../../models');

// get all fonts
router.get('/', (req, res) => {
    Font.findAll()
    .then(dbFontData => res.json(dbFontData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;