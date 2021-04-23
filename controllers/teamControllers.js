const router = require('express').Router()
const passport = require('passport')

// Create a TEAM
router.post('/team', passport.authenticate('jwt'), (req, res) => {

})


module.exports = router