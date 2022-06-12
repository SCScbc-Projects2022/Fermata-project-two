const router = require('express').Router();
const {Letter, Font} = require('../models');

// YouTube only allows autoplay if the page has been interacted with, so interact with this first - also sets the song id value in local storage
router.get('/access', (req, res) => {
    res.render('access');
});

// retrieve one letter and render the draft or the sent handlebars layout depending on the letter's readonly property
router.get('/:id', async (req, res) => {
    try {
        let letterData = await Letter.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'song_id', 'font_id', 'readonly', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                }
            ]
        })
        const letter = letterData.get({plain: true});
        // if the user is requesting a draft, they must be logged in to view it
        if (!letter.readonly && req.session.loggedIn) {
            res.render('draft', {letter, loggedIn: req.session.loggedIn});
            return;
        } else if (letter.readonly) {
            res.render('sent', {letter, loggedIn: req.session.loggedIn});
            return;
        }
        res.status(401).json({message: 'You are not authorized to view this resource'});
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;