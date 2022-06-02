const router = require('express').Router();
const {Draft, Font, User} = require('../models');

router.get('/', (req, res) => {
    Draft.findAll({
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
        res.render('drafts', drafts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;