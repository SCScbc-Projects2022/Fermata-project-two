const router = require('express').Router();
const { Sent, Font, User } = require('../../models');
const uniqid = require('uniqid');
const authenticate = require('../../utils/auth');

// get all Sent emails
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
    .then(dbSentData => res.json(dbSentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single Sent email based on id
router.get('/:id', (req, res) => {
    Sent.findOne({
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
    .then(dbSentData => {
        if(!dbSentData) {
            res.status(404).json({message: 'No Sent found with that ID'});
            return;
        }
        res.json(dbSentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create Sent
router.post('/', authenticate, (req, res) => {
    req.body.id = uniqid();
    Sent.create({
        id: req.body.id,
        user_id: req.session.user_id, // change to req.session.user_id
        sign_off: req.body.sign_off,
        recipient_name: req.body.recipient_name,
        recipient_email: req.body.recipient_email,
        letter_body: req.body.letter_body,
        spotify_id: req.body.spotify_id,
        font_id: req.body.font_id
    })
    .then(dbSentData => res.json(dbSentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update Sent
router.put('/:id', authenticate, (req, res) => {
    Sent.update(
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
    .then(dbSentData => {
        if(!dbSentData) {
            res.status(404).json({message: 'No sent email found with that ID'});
            return;
        }
        res.json(dbSentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete Sent
router.delete('/:id', authenticate, (req, res) => {
    console.log('id', req.params.id);
    Sent.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSentData => {
        if(!dbSentData) {
            res.status(404).json({message: 'No sent email found with that ID'});
            return;
        }
        res.json(dbSentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;