const { Developer, Project, DevProject } = require('../models');
const sendEmail = require('../helpers/nodemailer');

class Controller {
    static home(req, res) {
        res.render('home')
    }

    static addGet(req, res) {
        res.render('addDev')
    }

    static addPost(req, res) {
        let input = req.body

        Developer.create(input)
            .then(() => {
                sendEmail(input.email, "IO-dev Greetings", `Wellcome to IO-dev.\nYou have been registrated in IO-Dev as a ${input.role}`)
                res.redirect('/login')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static loginGet(req, res) {
        res.render('login')
    }

    static loginPost(req, res) {
        let input = req.body

        Developer.findOne({
            where: {
                email: input.email,
                password: input.password
            }
        })
            .then(dev => {
                if (dev === null) {
                    res.redirect('/home')
                } else {
                    req.session.isLogin = true
                    // req.session.dev.role   LIAT YANG LOGIN ROLE NYA
                    req.session.dev = dev
                    res.redirect('/developers')
                }
            })
            .catch(err => {
                console.log("eror bro");
                res.send(err)
            })
    }
    static logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/home')
        })

    }
}

module.exports = Controller