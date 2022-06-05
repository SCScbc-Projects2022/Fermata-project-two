const router = require('express').Router();
const { Draft, Font, User } = require('../../models');
const uniqid = require('uniqid');
const authenticate = require('../../utils/auth');

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
        if (!dbDraftData) {
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
router.post('/', authenticate, (req, res) => {
    req.body.id = uniqid();
    Draft.create({
        id: req.body.id,
        sign_off: req.body.sign_off,
        user_id: req.session.user_id, //change to req.session.user_id
        recipient_name: req.body.recipient_name,
        recipient_email: req.body.recipient_email,
        letter_body: req.body.letter_body,
        spotify_id: req.body.spotify_id,
        font_id: req.body.font_id,
    })
    .then(dbDraftData => {
        // res.append('previewURL', dbDraftData.dataValues.id).json();
        // I'm gonna give up on this even though I got it to set headers. :( - V
        // I GOT IT TO WORK USING JSON HELL YEAH - but I have no time to refactor :(
        // res.json({'response': dbDraftData.dataValues.id});
        res.json(dbDraftData);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update draft
router.put('/:id', authenticate, (req, res) => {
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

// delete draft
router.delete('/:id', authenticate, (req, res) => {
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