const { Developer, Project, DevProject } = require('../models');

class Controller {
    static home(req, res) {
        res.render('home')
    }

    static loginGet(req, res) {
        res.render('login')
    }
    static loginPost(req, res) {
        let input = req.body
        // JIKA LEAD DAPET AKSES, SELAINNYA HANYA LIHAT LIST PROJECT
        Developer.findOne({
            where: {
                email: input.email,
                password: input.password
            }
        })
            .then(data => {
                if (data === null) {
                    res.redirect('/home')
                } else {

                    // data.status = 
                    // console.log(data);

                    res.redirect('/developers')
                }
            })
            .catch(err => {
                console.log("eror bro");
                res.send(err)
            })
    }
    static logout(req, res) {
        
        // isLogin = false
        // .then(() => {
        //     res.redirect('/home')
        // })
        // .catch(err => {
        //     res.send(err)
        // })
    }
}

module.exports = Controller