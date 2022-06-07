const authenticate = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/home');
    } else {
        next();
    }
};

const noDrafts = (req, res, next) => {
    if (!req.session.user_id) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    authenticate,
    noDrafts
}