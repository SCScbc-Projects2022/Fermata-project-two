const router = require('express').Router();
const {Draft, Font} = require('../models');
const authenticate = require('../utils/auth');

// add a route to get one draft and render a draft page
router.get('/:id', authenticate, async (req, res) => {
    try {
        let draftLetter = await Draft.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'updatedAt'],
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                }
            ]
        })
        const drafts = draftLetter.get({plain: true});
        res.render('draft', {drafts, loggedIn: req.session.loggedIn});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;