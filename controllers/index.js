const router = require('express').Router()

router.use('/api', require('./userControllers.js'))
router.use('/api', require('./projectControllers.js'))
router.use('/api', require('./teamControllers.js'))
router.use('/api', require('./categoryControllers.js'))

module.exports = router