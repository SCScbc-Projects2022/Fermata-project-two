const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with that ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create user
router.post('/', async (req, res) => {
    try {
        let existingUser = await User.findOne({
            attributes: {exclude: ['password']},
            where: {
                email: req.body.email
            }
        })
        if (!existingUser) {
            let newUser = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            req.session.save(() => {
                req.session.user_id = newUser.id;
                req.session.username = newUser.username;
                req.session.loggedIn = true;

                res.json(newUser);
                return;
            })
        } else {
            res.status(400).json({message: 'A user with this email already exists!'});
            return;
        }
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// verify login
router.post('/login', async (req, res) => {
    try {
        let findUser = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!findUser) {
            res.status(400).json({message: 'No user with that email address!'});
            return;
        }
        // verify user
        const validCredentials = findUser.checkPassword(req.body.password);
        if (!validCredentials) {
            res.status(400).json({message: 'Incorrect password!'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = findUser.id;
            req.session.loggedIn = true;
            res.json({user: findUser, message: 'You are now logged in!'});
        })
    }
    catch (err) {
        console.log(err);
    }
});

// logout
router.post('/logout', (req,res) =>{
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// update user info
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with that ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({message: 'No user found with that ID'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;