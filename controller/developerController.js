const { Developer, Project } = require('../models');

class Controller {
    static showAll(req, res) {
        Developer.findAll({
            order: [['name', 'ASC']]
        })
            .then(devs => {
                res.render('showDev', { devs })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static addGet(req, res) {
        res.render('addDev')
    }
    static addPost(req, res) {
        let input = req.body
        Developer.create(input)
            .then(() => {
                res.redirect('/developers')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static editGet(req, res) {
        Developer.findOne({
            where: { id: req.params.id }
        })
            .then(dev => {
                res.render('editDev', { dev })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static editPost(req, res) {
        let input = req.body
        Developer.update(input, {
            where: { id: req.params.id }
        })
            .then(() => {
                res.redirect('/developers')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static delete(req, res) {
        Developer.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                res.redirect('/developers')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static showProjects(req, res) {
        Developer.findOne({
            where: { id: req.params.id },
            include: [Project]
        })
            .then((dev) => {
                res.render('devShowProject', { dev })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller