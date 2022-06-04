const {Draft} = require('../models');

const draftData = [
    {
        id: '1tsl810l3wa2sf9',
        sign_off: 'user1',
        user_id: 1,
        recipient_name: 'recipient1',
        recipient_email: 'recipient1@email.com',
        letter_body: null, 
        spotify_id: null,
        font_id: 2
    },
    {
        id: '1tslfrsl3wa3y5x',
        sign_off: 'user2',
        user_id: 2,
        recipient_name: null,
        recipient_email: null,
        letter_body: 'This is a draft from user2', 
        spotify_id: '4lCv7b86sLynZbXhfScfm2', // Firework, Katy Perry
        font_id: 2
    },
    {
        id: '31tslfn8l3wa1ltr',
        sign_off: null,
        user_id: 1,
        recipient_name: 'recipient3',
        recipient_email: 'recipient3@email.com',
        letter_body: 'This is a draft from user1', 
        spotify_id: '5TbzAWWc5eJaANpA9kfGCd', // Love Me Again, John Newman
        font_id: 3
    },
    {
        id: '1tsl30sl3wa0un8',
        sign_off: 'user3',
        user_id: 3,
        recipient_name: 'recipient4',
        recipient_email: 'recipient4@email.com',
        letter_body: 'This is a draft from user3', 
        spotify_id: '0KWcRXcnGoB0gWSu4mshF8', // Electric Blue, Arcade Fire
        font_id: 2
    }
]

const seedDrafts = () => Draft.bulkCreate(draftData);

module.exports = seedDrafts;

// Firework, Katy Perry - 4lCv7b86sLynZbXhfScfm2
// Love Me Again, John Newman - 5TbzAWWc5eJaANpA9kfGCd
// Electric Blue, Arcade Fire - 0KWcRXcnGoB0gWSu4mshF8