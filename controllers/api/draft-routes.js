const router = require('express').Router();
const { Draft, Font, User } = require('../../models');
const uniqid = require('uniqid');
// will also need withAuth once login is added?

// get all drafts
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
    .then(dbDraftData => res.json(dbDraftData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single draft based on id
router.get('/:id', (req, res) => {
    Draft.findOne({
        where: {
            id: req.params.id
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
        if(!dbDraftData) {
            res.status(404).json({message: 'No draft found with that ID'});
            return;
        }
        res.json(dbDraftData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create draft - missing auth
router.post('/', /* withAuth? */ (req, res) => {
    req.body.id = uniqid();
    Draft.create({
        id: req.body.id,
        sign_off: req.body.sign_off,
        user_id: req.body.user_id, //change to req.session.user_id
        recipient_name: req.body.recipient_name,
        recipient_email: req.body.recipient_email,
        letter_body: req.body.letter_body,
        spotify_id: req.body.spotify_id,
        font_id: req.body.font_id,
    })
    .then(dbDraftData => {
        // res.append('previewURL', dbDraftData.dataValues.id).json();
        // I'm gonna give up on this even though I got it to set headers. :( - V
        res.json(dbDraftData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update draft - WILL PROBABLY NEED AUTH AS WELL
router.put('/:id', /* withAuth? */ (req, res) => {
    Draft.update(
        {
            sign_off: req.body.sign_off,
            recipient_email: req.body.recipient_email,
            letter_body: req.body.letter_body,
            font_id: req.body.font_id
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbDraftData => {
        if(!dbDraftData) {
            res.status(404).json({message: 'No draft found with that ID'});
            return;
        }
        res.json(dbDraftData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete draft - withAuth as well
router.delete('/:id', /* withAuth? */ (req, res) => {
    console.log('id', req.params.id);
    Draft.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDraftData => {
        if(!dbDraftData) {
            res.status(404).json({message: 'No draft found with that ID'});
            return;
        }
        res.json(dbDraftData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;