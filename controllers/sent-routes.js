const router = require('express').Router();
const {Sent, Font, User} = require('../models');

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
        res.render('Sents', sent);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;