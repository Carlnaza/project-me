const router = require('express').Router()

router.use('/api', require('./userControllers.js'))
router.use('/api', require('./projectControllers.js'))

module.exports = router