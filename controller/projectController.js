const { Developer, Project } = require('../models');

class Controller {
    static showAll(req, res) {
        Project.findAll({
            inculde: [ Developer ]
        })
            .then(projects => {
                res.render('showProject', { projects })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static loginGet(req, res) {
        res.send('LOGIN')
    }
    static loginPost(req, res) {
        res.send('LOGIN POST')
    }
    static addGet(req, res) {
        res.render('addProject')
    }
    static addPost(req, res) {

    }
    static editGet(req, res) {

    }
    static editPost(req, res) {

    }
    static delete(req, res) {
        
    }
}

module.exports = Controller