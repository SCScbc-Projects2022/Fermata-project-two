const {Letter} = require('../models');

const letterData = [
    {
        id: '1tsl810l3wa2sf9',
        sign_off: 'user1',
        user_id: 1,
        recipient_name: 'recipient1',
        recipient_email: 'recipient1@email.com',
        letter_body: 'This is a letter from user1 and plays PUP - Scorpion Hill', 
        song_id: '8L0XuwPzmgU',
        font_id: 2,
        readonly: true
    },
    {
        id: '1tslfrsl3wa3y5x',
        sign_off: 'user2',
        user_id: 2,
        recipient_name: 'recipient2',
        recipient_email: 'recipient2@email.com',
        letter_body: 'This is a letter from user2 and plays Aries - One Punch', 
        song_id: 'jUh0l8iPPxI',
        font_id: 1,
        readonly: false
    },
    {
        id: '31tslfn8l3wa1ltr',
        sign_off: 'user1',
        user_id: 1,
        recipient_name: 'recipient3',
        recipient_email: 'recipient3@email.com',
        letter_body: 'This is a letter from user1 and plays Destroy Boys - Honey Im Home', 
        song_id: '8AwjyOFiEQ0', 
        font_id: 3,
        readonly: true
    },
    {
        id: '1tsl30sl3wa0un8',
        sign_off: 'user3',
        user_id: 3,
        recipient_name: 'recipient4',
        recipient_email: 'recipient4@email.com',
        letter_body: 'This is a letter from user3 and plays Joji - Yeah Right', 
        song_id: 'tG7wLK4aAOE',
        font_id: 2,
        readonly: false
    },
    {
        id: '1tslah4l4bu29h9',
        sign_off: 'user4',
        user_id: 4,
        recipient_name: 'recipient5',
        recipient_email: 'recipient5@email.com',
        letter_body: 'This is a letter from user4 and plays Niliu - Can You Hear Us', 
        song_id: 'DUPsleQLNU0',
        font_id: 2,
        readonly: false
    }
]

const seedLetter = () => Letter.bulkCreate(letterData);

module.exports = seedLetter;