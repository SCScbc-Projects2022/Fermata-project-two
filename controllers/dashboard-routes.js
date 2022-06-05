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
        console.log(draftLetter)
        res.render('dashboard', {draftLetter, sentLetter, loggedIn: true});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});
    

//     .then(dbDraftData => {
//         const drafts = dbDraftData.map(post => post.get({plain: true}));
//         res.render('drafts', {
//             drafts,
//             loggedIn: req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// // this will render partials for the dashboard
   
//     .then(dbSentData => {
//         const sent = dbSentData.map(post => post.get({plain: true}));
//         res.render('sent', { // handlebars name is sent for both, might need to change one
//             sent,
//             loggedIn: req.session.loggedIn
//         });
//     })

module.exports = router;