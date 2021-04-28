const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

// Models
const { User } = require('../models')

// Registration Route
router.post('/users/register', async (req, res) => {

    let errors = {}
    let nonViaChars = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/)

    // Check if any of the inputs are empty
    if (!req.body.name) {
        errors.name = "Please enter a valid name"
    }
    if (!req.body.phone || req.body.phone.length < 10) {
        errors.phone = "Please enter a valid 10 digit phone number"
    }
    if (!req.body.email) {
        errors.email = "An Email is required to register."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(req.body.email)) {
        errors.email = "Please enter a valid email address."
    }
    if (!req.body.password) {
        errors.password = "Password is required"
    } else if (req.body.password.length < 6) {
        errors.password = "Password must be 6 characters or more."
    }
    if (!req.body.password2) {
        errors.password2 = "Please repeat password."
    } else if (req.body.password2 !== req.body.password) {
        errors.password2 = "Password does not match."
    }

    // Stop route here if there are any empty inputs
    if (Object.keys(errors).length !== 0) {

        res.json({ status: 400, data: errors })

        return
    }

    // If no errors, run Register request

    await User.register(new User({
        isAdmin: false,
        name: req.body.name,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        phone: req.body.phone,
        languages: "EN",
    }), req.body.password, (err, data) => {

        // If any errors, return errors
        if (err && err !== null) {
            if (err.message.includes("username")) {
                errors.username = err.message
            }
            if (err.message.includes("email")) {
                errors.email = "A user with the given email is already registered."
            }
            if (err.message.includes("phone")) {
                errors.phone = "This phone number is already attached to a registered account."
            }

            if (Object.keys(errors).length !== 0) {
                res.json({ status: 400, data: errors })

                return

            }
            res.json({ status: 400, message: "Unknown error", error: err })

            return
        }

        // If Registration is successful, send status code
        res.json({
            status: 200,
            message: "Registration successful."
        })
    })
})

// Login Route - Creates a session
router.post('/users/login', async (req, res) => {

    let errors = {}
    // let lowCaseUName = req.body.username.toLowerCase()
    let lowCaseEmail = req.body.email.toLowerCase()
    let data = await User.authenticate()(lowCaseEmail, req.body.password)

    if (!req.body.password && !req.body.username) {
        errors.input = "Username and password is required."
        res.json({ status: 400, data: errors })

        return
    }

    if (!data.user) {
        if (data.error.name.includes("Email")) {
            errors.loginEmail = "Incorrect Email."
        } else {
            errors.loginPassword = "Incorrect password."
        }
    }

    if (Object.keys(errors).length !== 0) {

        res.json({ status: 400, data: errors })

        return
    }

    res.json({
        status: 200,
        message: `Successfully logged in ${data.user.email}`,
        token: jwt.sign({ id: data.user._id }, process.env.SECRET)
    })
})

// Edit Profile Route
router.put('/user/profile', passport.authenticate('jwt'), async (req, res) => {

    try {

        await User.findByIdAndUpdate(req.user._id, {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            username: req.body.username,
            phone: req.body.phone,
            address: {
                line1: req.body.address.line1,
                line2: req.body.address.line2,
                city: req.body.address.city,
                zipCode: req.body.address.zipCode,
                country: req.body.address.country
            },
            lastUpdated: Date.now()
        })

    } catch (err) {
        res.json(err)

        return
    }

    res.json({
        status: 200,
        message: "Profile information has been updated."
    })

})

// Get all user Data
router.get('/user', passport.authenticate('jwt'), async (req, res) => {

    let user
    try {

        user = await User.findById(req.user._id)
            .populate({
                path: 'projects',
                model: 'project',
                populate: {
                    path: 'categories',
                    model: 'category'
                }
            })
            .populate({ path: 'teams', model: 'team' })

    } catch (err) {
        res.json(err)

        return
    }

    res.json(user)
})

// Follow a User (:id ID of USER being followed)
router.put('/user/follow/:id', passport.authenticate('jwt'), async (req, res) => {

    let followingUser
    let userReply
    try {

        followingUser = await User.findByIdAndUpdate(req.params.id, {
            $push: {
                followers: req.user._id
            }
        })
        await User.findByIdAndUpdate(req.user._id, {
            $push: {
                following: followingUser._id
            }
        })

    } catch (err) {
        res.json(err)

        return
    }

    if (followingUser.name) {
        userReply = followingUser.name
    } else if (followingUser.username) {
        userReply = followingUser.username
    } else if (followingUser.email) {
        userReply = followingUser.email
    }

    res.json({
        status: 200,
        message: `You are now following ${userReply}`
    })

})

module.exports = router