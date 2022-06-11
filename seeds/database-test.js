const {User, Font, Letter} = require('../models');

async function printAll() {
    let x = await User.findAll();
    let y = await Font.findAll();
    let z = await Letter.findAll();
    console.log('\n--- ALL USERS ---\n');
    console.log(x.map(item => console.log(item.dataValues)));
    console.log('\n--- ALL FONTS ---\n');
    console.log(y.map(item => console.log(item.dataValues)));
    console.log('\n--- ALL LETTERS ---\n');
    console.log(z.map(item => console.log(item.dataValues)));
}

async function joinUserLetter() {
    let x = await User.findAll({
        attributes: ['id', 'username', 'password'],
        include: [
            {
                model: Letter,
                attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id', 'readonly']
            }
        ]
    });
    console.log('\n--- USER + LETTER ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- USER LETTER LIST ---\n');
    x.map(item => console.log(item.dataValues.letters));
}

async function joinLetterUserFont() {
    let x = await Letter.findAll({
        attributes: ['id', 'sign_off', 'user_id', 'recipient_name', 'recipient_email', 'letter_body', 'spotify_id', 'font_id'],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
            {
                model: Font,
                attributes: ['id', 'style_tag']
            }
        ]
    });
    console.log('\n--- LETTER + USER + FONT ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- LETTER USER LIST ---\n');
    x.map(item => console.log(item.dataValues.user.dataValues));
    console.log('\n--- LETTER FONT LIST ---\n');
    x.map(item => console.log(item.dataValues.font.dataValues));
}

// printAll();
// joinUserLetter();
// joinLetterUserFont();