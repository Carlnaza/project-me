const router = require('expres').Router()
const passport = require('passport')

// Models
const { Project, User, Team } = require('../models')

// Create Project
router.post('/project', passport.authenticate('jwt'), async (req, res) => {

    let details
    try {

        details = await Project.create({
            isPrivate: req.body.isPrivate,
            title: req.body.title,
            description: req.body.description,
            cratedBy: req.user._id
        })
        await Team.findByIdAndUpdate(req.body.teamId, {
            $push: {
                projects: details._id
            }
        })
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                projects: details._id
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Project created successfully.",
        data: details
    })

})

module.exports = router