const router = require('express').Router()
const passport = require('passport')

// Models
const { Post, Category } = require('../models')

// Create Posts
router.post('/post', passport.authenticate('jwt'), async (req, res) => {

    let post
    try {

        post = await Post.create({
            isArchived: false,
            title: req.body.title,
            description: req.body.description,
            activity: {
                user: req.user._id,
                details: `Post created by ${req.user.email}`,
                time: Date.now()
            },
            belongsToCategory: req.body.categoryId,
            belongsToProject: req.body.projectId,
            belongsToTeam: req.body.teamId,
            createdBy: req.user._id
        })
        await Category.findByIdAndUpdate(req.body.categoryId, {
            $push: { posts: post._id }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Post successfully created."
    })

})

module.exports = router