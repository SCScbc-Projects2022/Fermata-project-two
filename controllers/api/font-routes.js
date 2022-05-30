const router = require('express').Router();
const { Font } = require('../../models');

// get all fonts
router.get('/', (req, res) => {
    Font.findAll()
    .then(dbFontData => res.json(dbFontData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get single font based on id
router.get('/:id', (req, res) => {
    Font.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbFontData => {
        if(!dbFontData) {
            res.status(404).json({message: 'No font found with that ID'});
            return;
        }
        res.json(dbFontData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create font
router.post('/', (req, res) => {
    Font.create({
        style_tag: req.body.style_tag
    })
    .then(dbFontData => res.json(dbFontData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

// update font
router.put('/:id', (req, res) => {
    Font.update(
        {
            style_tag: req.body.style_tag
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbFontData => {
        if(!dbFontData) {
            res.status(404).json({message: 'No font found with that ID'});
            return;
        }
        res.json(dbFontData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete font
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Font.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbFontData => {
        if(!dbFontData) {
            res.status(404).json({message: 'No font found with that ID'});
            return;
        }
        res.json(dbFontData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;