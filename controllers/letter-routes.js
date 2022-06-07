const router = require('express').Router();
const {Letter, Font} = require('../models');
const {readDrafts}= require('../utils/auth');

// add a route to get one draft and render a draft page
router.get('/:id', async (req, res) => {
    try {
        let letterData = await Letter.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'readonly', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: Font,
                    attributes: ['id', 'style_tag']
                }
            ]
        })
        const letter = letterData.get({plain: true});
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