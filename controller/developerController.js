const { Developer, Project, DevProject } = require('../models');

class Controller {
    static showAll(req, res) {
        let loginRole = req.session.dev.role

        Developer.findAll({
            order: [['name', 'ASC']]
        })
            .then(devs => {
                res.render('showDev', { devs, loginRole })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editGet(req, res) {
        let loginRole = req.session.dev.role

        Developer.findOne({
            where: { id: req.params.id }
        })
            .then(dev => {
                res.render('editDev', { dev, loginRole })
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
        let dev
        let loginRole = req.session.dev.role
        
        Developer.findOne({
            where: { id: req.params.id }
        })
            .then((data) => {
                dev = data
                return DevProject.findAll({
                    where: { devId: req.params.id },
                    include: [Project]
                })
            })
            .then(devProjects => {
                res.render('devShowProject', { dev, devProjects, loginRole })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static removeProject(req, res) {
        DevProject.destroy({
            where: { id: req.params.id }
        })
            .then(() => {
                res.redirect(`/developers`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller