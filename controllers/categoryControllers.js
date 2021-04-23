const router = require('express').Router()
const passport = require('passport')

// Models
const { Category, Project } = require('../models')

// Create a Category
router.post('/category', passport.authenticate('jwt'), async (req, res) => {

    let category
    try {

        category = await Category.create({
            title: req.body.title,
            project: req.body.projectId,
            createdBy: req.user._id
        })
        await Project.findByIdAndUpdate(req.body.projectId, {
            $push: {
                categories: category._id
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Category successfully created."
    })

})

module.exports = router