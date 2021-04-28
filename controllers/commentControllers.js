const router = require('express').Router()
const passport = require('passport')

// Models
const { Comment } = require('../models')

// Like Comments (:id ID of Comment)
router.put('/comments/like/:id', passport.authenticate('jwt'), async (req, res) => {

    try {

        await Comment.findByIdAndUpdate(req.params.id, {
            $push: {
                likes: req.user._id
            }
        })


    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Comment successfully liked by User."
    })

})


module.exports = router