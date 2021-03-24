const router = require('express').Router();
const devRouter = require('./developerRouter');
const projectRouter = require('./projectRouter');

router.use('/developers', devRouter);
router.use('/projects', projectRouter);

module.exports = router