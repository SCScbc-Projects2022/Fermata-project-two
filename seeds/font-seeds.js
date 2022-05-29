const {Font} = require('../models');

const fontData = [
    {
        style_tag: 'style=font1'
    },
    {
        style_tag: 'style=font2'
    },
    {
        style_tag: 'style=font3'
    }
]

const seedFont = () => Font.bulkCreate(fontData);

module.exports = seedFont;