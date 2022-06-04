const router = require('express').Router();
const {Sent, Font, User} = require('../models');

// this will render partials for the dashboard
router.get('/', (req, res) => {
    Sent.findAll({
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
        res.render('sent', sent);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// write a route to render one sent letter page

module.exports = router;