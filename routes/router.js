const router = require('express').Router();
const devRouter = require('./developerRouter');
const projectRouter = require('./projectRouter');
const Controller = require('../controller/controller');

router.get('/home', Controller.home);
router.get('/login', Controller.loginGet);
router.post('/login', Controller.loginPost);

router.use('/developers', devRouter);
router.use('/projects', projectRouter);

router.get('/logout', Controller.logout);

module.exports = router