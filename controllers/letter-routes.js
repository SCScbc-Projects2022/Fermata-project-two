const router = require('express').Router();
const {Letter, Font} = require('../models');
const authenticate = require('../utils/auth');

// add a route to get one draft and render a draft page
router.get('/:id', authenticate, async (req, res) => {
    try {
        let letterData = await Letter.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                }
            ]
        })
        const letter = letterData.get({plain: true});
        if (!letter.readonly) {
            res.render('draft', {letter, loggedIn: req.session.loggedIn});
            return;
        }
        res.render('sent', {letter, loggedIn: req.session.loggedIn});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;