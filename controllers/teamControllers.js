const router = require('express').Router()
const passport = require('passport')

// Models
const { Team } = require('../models')

// Create a TEAM
router.post('/team', passport.authenticate('jwt'), async (req, res) => {

    try {

        await Team.create({
            isPrivate: req.body.isPrivate,
            title: req.body.title,
            members: req.user._id
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Team successfully created."
    })

})


module.exports = router