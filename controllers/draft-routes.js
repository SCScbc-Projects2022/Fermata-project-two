const router = require('express').Router();
const {Draft, Font, User} = require('../models');

// this is going to render partials to make a list for the dashboard
router.get('/', (req, res) => {
    Draft.findAll({
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
    .then(dbDraftData => {
        const drafts = dbDraftData.map(post => post.get({plain: true}));
        res.render('drafts', {
            drafts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a route to get one draft and render a draft page
router.get('/:id', (req, res) => {
    Draft.findOne({
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
    .then(dbDraftData => {
        const draft = dbDraftData.map(post => post.get({plain: true}));
        res.render('draft', {
            draft,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;