const router = require('express').Router();
const {Draft, Sent, Font, User} = require('../models');
const authenticate = require('../utils/auth');

router.get('/', authenticate, async (req, res) => {
// this is going to render partials to make a list for the dashboard
    try {
        let draftData = await Draft.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'updatedAt'],
            order: [
                ['updatedAt', 'DESC']
            ],
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                },
                {
                    model: User,
                    attributes: ['id', 'username', 'email']
                }
            ]
        });
        let sentData = await Sent.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'createdAt'],
            order: [
                ['updatedAt', 'DESC']
            ],
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                },
                {
                    model: User,
                    attributes: ['id', 'username', 'email']
                }
            ]
        });
        const draftLetter = draftData.map(draft => draft.get({plain: true}));
        const sentLetter = sentData.map(sent => sent.get({plain: true}));
        res.render('dashboard', {draftLetter, sentLetter, loggedIn: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;