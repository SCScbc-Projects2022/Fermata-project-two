const {Letter} = require('../models');

const letterData = [
    {
        id: 'a1b2c3',
        sign_off: 'user1',
        user_id: 1,
        recipient_email: 'recipient1@email.com',
        letter_body: 'This is a letter from user1', 
        spotify_id: 'xsmUh0s',
        font_id: 2,
        read_only: false
    },
    {
        id: '3c2b1a',
        sign_off: 'user2',
        user_id: 2,
        recipient_email: 'recipient2@email.com',
        letter_body: 'This is a letter from user2', 
        spotify_id: 'Kdawp3iL',
        font_id: 1,
        read_only: true
    },
    {
        id: 'd4e5f6',
        sign_off: 'user1',
        user_id: 1,
        recipient_email: 'recipient3@email.com',
        letter_body: 'This is a letter from user1', 
        spotify_id: '16BvOm77',
        font_id: 3,
        read_only: true
    },
    {
        id: '6f5e4d',
        sign_off: 'user3',
        user_id: 3,
        recipient_email: 'recipient4@email.com',
        letter_body: 'This is a letter from user3', 
        spotify_id: '7ERXlz6E',
        font_id: 2,
        read_only: false
    }
]

const seedLetter = () => Letter.bulkCreate(letterData);

module.exports = seedLetter;