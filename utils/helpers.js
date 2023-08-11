// checks if user is already logged in
const loggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect('/login');
    }
    else {
        next();
    }
}

module.exports = loggedIn;