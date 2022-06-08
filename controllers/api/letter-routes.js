const router = require('express').Router();
const { Letter, Font, User } = require('../../models');
const uniqid = require('uniqid');
const {authenticate} = require('../../utils/auth');

// get all Letters
router.get('/', (req, res) => {
    Letter.findAll({
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
    .then(dbLetterData => res.json(dbLetterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single Letter based on id
router.get('/:id', (req, res) => {
    Letter.findOne({
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
    .then(dbLetterData => {
        if (!dbLetterData) {
            res.status(404).json({message: 'No letter found with that ID'});
            return;
        }
        res.json(dbLetterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create Letter - missing auth
router.post('/', authenticate, (req, res) => {
    // generate a new string using uniqid and set the id property to req.body before creating a new letter
    req.body.id = uniqid();
    Letter.create({
        id: req.body.id,
        sign_off: req.body.sign_off,
        user_id: req.session.user_id,
        recipient_name: req.body.recipient_name,
        recipient_email: req.body.recipient_email,
        letter_body: req.body.letter_body,
        spotify_id: req.body.spotify_id,
        font_id: req.body.font_id,
        readonly: req.body.readonly
    })
    .then(dbLetterData => {
        res.json({'response': dbLetterData.dataValues.id});
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update Letter
router.put('/:id', authenticate, (req, res) => {
    Letter.update(
        {
            sign_off: req.body.sign_off,
            recipient_name: req.body.recipient_name,
            recipient_email: req.body.recipient_email,
            letter_body: req.body.letter_body,
            font_id: req.body.font_id,
            readonly: req.body.readonly
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbLetterData => {
        if(!dbLetterData) {
            res.status(404).json({message: 'No letter found with that ID'});
            return;
        }
        res.json(dbLetterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete Letter
router.delete('/:id', authenticate, (req, res) => {
    console.log('id', req.params.id);
    Letter.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbLetterData => {
        if(!dbLetterData) {
            res.status(404).json({message: 'No letter found with that ID'});
            return;
        }
        res.json(dbLetterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;