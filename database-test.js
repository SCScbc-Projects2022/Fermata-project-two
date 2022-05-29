const {User, Font, Draft, Sent} = require('./models');

async function printAll() {
    let x = await User.findAll();
    let y = await Font.findAll();
    let z = await Draft.findAll();
    let n = await Sent.findAll();
    console.log('\n--- ALL USERS ---\n');
    console.log(x);
    console.log('\n--- ALL FONTS ---\n');
    console.log(y);
    console.log('\n--- ALL DRAFTS ---\n');
    console.log(z);
    console.log('\n--- ALL SENT ---\n');
    console.log(n);
}

async function joinUserDraft() {
    let x = await User.findAll({
        attributes: ['id', 'username', 'password'],
        include: [
            {
                model: Draft,
                attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id']
            }
        ]
    });
    console.log('\n--- USER + DRAFT ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- USER DRAFT LIST ---\n');
    x.map(item => console.log(item.dataValues.drafts));
}

async function joinUserSent() {
    let x = await User.findAll({
        attributes: ['id', 'username', 'password'],
        include: [
            {
                model: Sent,
                attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id']
            }
        ]
    });
    console.log('\n--- USER + SENT ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- USER SENT LIST ---\n');
    x.map(item => console.log(item.dataValues.sents));
}

async function joinDraftFont() {
    let x = await Draft.findAll({
        attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id'],
        include: [
            {
                model: Font,
                attributes: ['id', 'style_tag']
            }
        ]
    });
    console.log('\n--- DRAFT + FONT ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- DRAFT FONT LIST ---\n');
    x.map(item => console.log(item.dataValues.font));
}

async function joinSentFont() {
    let x = await Sent.findAll({
        attributes: ['id', 'sign_off', 'user_id', 'recipient_email', 'letter_body', 'spotify_id', 'font_id'],
        include: [
            {
                model: Font,
                attributes: ['id', 'style_tag']
            }
        ]
    });
    console.log('\n--- SENT + FONT ---\n');
    x.map(item => console.log(item.dataValues));
    console.log('\n--- SENT FONT LIST ---\n');
    x.map(item => console.log(item.dataValues.font));
}



// printAll();

// joinUserDraft();
// joinUserSent();
// joinDraftFont();
// joinSentFont();
