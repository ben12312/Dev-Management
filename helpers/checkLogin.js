const myLogger = function (req, res, next) {
    if (req.session) {
        if (req.session.isLogin === true) {
            next()
        } else {
            res.redirect('/home')
        }
    } else {
        res.redirect('/home')
    }
}

module.exports = myLogger