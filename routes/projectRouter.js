const Controller = require('../controller/projectController');
const projectRouter = require('express').Router();

projectRouter.get('/', Controller.showAll)
projectRouter.get('/login', Controller.loginGet)
projectRouter.post('/login', Controller.loginPost)
// projectRouter.get('', Controller.showAll)
// projectRouter.get('', Controller.showAll)
// projectRouter.get('', Controller.showAll)
// projectRouter.get('', Controller.showAll)
// projectRouter.get('', Controller.showAll)

module.exports = projectRouter