const router = require('express').Router()
const passport = require('passport')

// Models
const { Project, User, Team, Comment } = require('../models')

// Create Project
router.post('/project', passport.authenticate('jwt'), async (req, res) => {

    let details
    try {

        details = await Project.create({
            isPrivate: req.body.isPrivate,
            title: req.body.title,
            description: req.body.description,
            assignedToTeam: req.body.teamId,
            createdBy: req.user._id
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

// Edit Project (:id is projectID)
router.put('/project/:id', passport.authenticate('jwt'), async (req, res) => {

    try {

        await Project.findByIdAndUpdate(req.params.id, {
            isPrivate: req.body.isPrivate,
            title: req.body.title,
            description: req.body.description
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Project updated successfully."
    })

})

//  <-- Tasks -->
// Assign User to Project (:id is projectID)
router.put('/project/assign_user/:id', passport.authenticate('jwt'), async (req, res) => {
    try {

        await Project.findByIdAndUpdate(req.params.id, {
            $push: {
                assignedToUser: req.body.assignedToUserId
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Project updated successfully."
    })
})

// Assign Team to Project (:id is projectID)
router.put('/project/assign_team/:id', passport.authenticate('jwt'), async (req, res) => {
    try {

        await Project.findByIdAndUpdate(req.params.id, {
            $push: {
                assignedToTeam: req.body.assignedToTeamId
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Project updated successfully."
    })
})

// Add Comments to Project (:id is projectID)
router.put('/project/comment/:id', passport.authenticate('jwt'), async (req, res) => {
    let comment
    try {

        comment = await Comment.create({
            title: req.body.title,
            comment: req.body.comment,
            createdBy: req.user._id
        })
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                comments: comment._id
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Comment added to project successfully."
    })
})

// Add USER as VIEWER to Project (:id is projectID)
router.put('/project/viewer/:id', passport.authenticate('jwt'), async (req, res) => {
    let project
    try {

        project = await Project.findByIdAndUpdate(req.params.id, {
            $push: {
                viewers: req.user._id
            }
        })
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                viewingProjects: project._id
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "User is now viewing project successfully."
    })
})

module.exports = router