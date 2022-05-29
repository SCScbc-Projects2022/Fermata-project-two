const router = require('express').Router();
const { Sent } = require('../../models');

// get all Sent emails
router.get('/', (req, res) => {
    Sent.findAll()
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
        }
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

// create Sent - missing auth
router.post('/', /* withAuth? */ (req, res) => {
    Sent.create({
        sign_off: req.body.sign_off,
        recipient_email: req.body.recipient_email,
        letter_body: req.body.letter_body,
        spotify_id: req.body.spotify_id,
        font_id: req.body.font_id
        // user_id: req.session.user_id
    })
    .then(dbSentData => res.json(dbSentData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update Sent - WILL PROBABLY NEED AUTH AS WELL
router.put('/:id', /* withAuth? */ (req, res) => {
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

// delete Sent - withAuth as well
router.delete('/:id', /* withAuth? */ (req, res) => {
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