const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Font } = require('../../models');

// get all fonts
router.get('/', (req, res) => {
    Font.findAll({
        
    })
})
module.exports = router;