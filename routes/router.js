const router = require('express').Router();
const devRouter = require('./developerRouter');
const projectRouter = require('./projectRouter');
const Controller = require('../controller/controller');
const myLogger = require('../helpers/checkLogin');

router.get('/home', Controller.home);
router.get('/login', Controller.loginGet);
router.post('/login', Controller.loginPost);
router.get('/add', Controller.addGet);
router.post('/add', Controller.addPost);

myLogger

router.use(myLogger)

router.use('/developers', devRouter);
router.use('/projects', projectRouter);

router.get('/logout', Controller.logout);

module.exports = router