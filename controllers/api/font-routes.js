const router = require('express').Router();
const { Font } = require('../../models');

// get all fonts
router.get('/', (req, res) => {
    Font.findAll({
        
    })
})
module.exports = router;