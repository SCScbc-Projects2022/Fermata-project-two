const router = require('express').Router();
const {Sent, Font, User} = require('../models');

// this will render partials for the dashboard
router.get('/', (req, res) => {
    Sent.findAll({
        where: {
            user_id: req.session.user_id
        },
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
    })
    .then(dbSentData => {
        const sent = dbSentData.map(post => post.get({plain: true}));
        res.render('sent', { // handlebars name is sent for both, might need to change one
            sent,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// write a route to render one sent letter page
router.get('/:id', (req, res) => {
    Sent.findOne({
        where: {
            id: req.session.id
        },
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
    })
    .then(dbSentData => {
        const sent = dbSentData.map(post => post.get({plain: true}));
        res.render('sent', {
            sent,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;