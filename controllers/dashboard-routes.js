const router = require('express').Router();
const {Letter, Font, User} = require('../models');
const {authenticate} = require('../utils/auth');

// this function queries the database twice
router.get('/', authenticate, async (req, res) => {
    // find all drafts (where letter property readonly is false) and assign to draftData
    try {
        let draftData = await Letter.findAll({
            where: {
                user_id: req.session.user_id,
                readonly: false
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'song_id', 'font_id', 'updatedAt'],
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
        // find all sent letters (where letter property readonly is true) and assign to sentData
        let sentData = await Letter.findAll({
            where: {
                user_id: req.session.user_id,
                readonly: true
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'song_id', 'font_id', 'updatedAt'],
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
        // render the dashboard template with two arrays of letters, one draft, one sent history
        res.render('dashboard', {draftLetter, sentLetter, loggedIn: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports = router;