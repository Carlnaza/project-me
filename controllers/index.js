const router = require('express').Router()

router.use('/api', require('./userControllers.js'))
router.use('/api', require('./projectControllers.js'))
router.use('/api', require('./teamControllers.js'))

module.exports = router