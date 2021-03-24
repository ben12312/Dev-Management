const Controller = require('../controller/developerController');
const devRouter = require('express').Router();

devRouter.get('/', Controller.showAll);
devRouter.get('/add', Controller.addGet);
devRouter.post('/add', Controller.addPost);
devRouter.get('/:id/edit', Controller.editGet);
devRouter.post('/:id/edit', Controller.editPost);
devRouter.get('/delete', Controller.delete);
devRouter.get('/:id/projects', Controller.showProjects);
devRouter.get('/:id/shut-down', Controller.shutDown);

module.exports = devRouter