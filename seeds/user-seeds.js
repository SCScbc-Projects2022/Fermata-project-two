const {User} = require('../models');

const userData = [
    {
        username: 'username1',
        email: 'username1@email.com',
        password: '123456'
    },
    {
        username: 'username2',
        email: 'username2@email.com',
        password: 'abcdef'
    },
    {
        username: 'username3',
        email: 'username3@email.com',
        password: '654321'
    },
    {
        username: 'username4',
        email: 'username4@email.com',
        password: 'ABCDEF'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;