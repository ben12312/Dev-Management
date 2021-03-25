const Controller = require('../controller/developerController');
const devRouter = require('express').Router();

devRouter.get('/', Controller.showAll);
devRouter.get('/:id/edit', Controller.editGet);
devRouter.post('/:id/edit', Controller.editPost);
devRouter.get('/:id/delete', Controller.delete);
devRouter.get('/:id/projects', Controller.showProjects);
devRouter.get('/:id/remove', Controller.removeProject);

module.exports = devRouter