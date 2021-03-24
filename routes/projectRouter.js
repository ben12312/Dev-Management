const Controller = require('../controller/projectController');
const projectRouter = require('express').Router();

projectRouter.get('/login', Controller.loginGet)
projectRouter.post('/login', Controller.loginPost)

projectRouter.get('/', Controller.showAll)
projectRouter.get('/add', Controller.addGet)
projectRouter.post('/add', Controller.addPost)
projectRouter.get('/:id/edit', Controller.editGet)
projectRouter.post('/:id/edit', Controller.editPost)
projectRouter.get('/delete', Controller.delete)

module.exports = projectRouter