const {Draft} = require('../models');

const draftData = [
    {
        id: 'a1b2c3',
        sign_off: 'user1',
        user_id: 1,
        recipient_email: 'recipient1@email.com',
        letter_body: null, 
        spotify_id: null,
        font_id: 2
    },
    {
        id: '3c2b1a',
        sign_off: 'user2',
        user_id: 2,
        recipient_email: null,
        letter_body: 'This is a letter from user2', 
        spotify_id: 'Kdawp3iL',
        font_id: 2
    },
    {
        id: 'd4e5f6',
        sign_off: 'user1',
        user_id: 1,
        recipient_email: 'recipient3@email.com',
        letter_body: 'This is a letter from user1', 
        spotify_id: '16BvOm77',
        font_id: 3
    },
    {
        id: '6f5e4d',
        sign_off: 'user3',
        user_id: 3,
        recipient_email: 'recipient4@email.com',
        letter_body: 'This is a letter from user3', 
        spotify_id: '7ERXlz6E',
        font_id: 2
    }
]

const seedDrafts = () => Draft.bulkCreate(draftData);

module.exports = seedDrafts;