const router = require('express').Router();
const {Draft, Sent, Font, User} = require('../models');

router.get('/', async (req, res) => {
// this is going to render partials to make a list for the dashboard
    try {
        let draftData = await Draft.findAll({
            // where: {
            //     user_id: req.session.user_id
            // },
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
            // where: {
            //     user_id: req.session.user_id
            // },
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
        let draftLetter = draftData.map(draft => draft.get({plain: true}));
        let sentLetter = sentData.map(sent => sent.get({plain: true}));
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