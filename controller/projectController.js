const { Developer, Project, DevProject } = require('../models');
const makeId = require('../helpers/makeId');

class Controller {
    static showAll(req, res) {
        Project.findAll({
            inculde: [Developer]
        })
            .then(projects => {
                res.render('showProject', { projects })
            })
            .catch(err => {
                res.send(err)
            })
    }
    
    static addGet(req, res) {
        Developer.findAll()
            .then(devs => {
                res.render('addProject', { devs })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addPost(req, res) {
        let input = req.body
        Project.create(input)
            .then(projects => {
                res.redirect('/projects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editGet(req, res) {
        Project.findOne({
            where: { id: req.params.id }
        })
            .then(project => {
                res.render('editProject', { project })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editPost(req, res) {
        let input = req.body
        Project.update(input, {
            where: { id: req.params.id }
        })
            .then(projects => {
                res.redirect('/projects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Project.destroy({
            where: { id: req.params.id }
        })
            .then(projects => {
                res.redirect('/projects')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addDevsGet(req, res) {
        let project
        Project.findByPk(req.params.id)
            .then(data => {
                project = data
                return Developer.findAll()
            })
            .then(devs => {
                res.render('addDevsToProject', { project, devs })
            })
            .catch(err => {
                res.send(err)
            })
    }
    static addDevsPost(req, res) {
        let input = req
        let result = makeId(input)

        DevProject.bulkCreate(result)
            .then(() => {
                res.redirect('/projects')
            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = Controller