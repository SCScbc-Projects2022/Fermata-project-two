const cTable = require('console.table');
const {User, Font, Letter} = require('./models');

async function print() {
    let x = await User.findAll();
    let y = await Font.findAll();
    let z = await Letter.findAll();
    console.log(x, y, z);
}

async function joinUserLetter() {
    let x = await User.findAll({
        attributes: ['id', 'username', 'password'],
        include: [
            {
                model: Letter,
                attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'read_only']
            }
        ]
    });
    console.log(x);
    x.map(item => console.log(item.dataValues.letters));
}

async function joinLetterFont() {
    let x = await Letter.findAll({
        attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'read_only'],
        include: [
            {
                model: Font,
                attributes: ['id', 'style_tag']
            }
        ]
    });
    console.log(x);
    x.map(item => console.log(item.dataValues.font));
}


print();
joinUserLetter();
joinLetterFont();
