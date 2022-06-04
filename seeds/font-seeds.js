const {Font} = require('../models');

const fontData = [
    {
        style_tag: "'Caveat', cursive"
    },
    {
        style_tag: "'Lato', sans-serif"
    },
    {
        style_tag: "'Merriweather', serif"
    }
]

const seedFont = () => Font.bulkCreate(fontData);

module.exports = seedFont;