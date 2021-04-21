const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    isAdmin: Boolean,
    name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        trim: true
    },
    gender: String,
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        unique: true,
        trim: true
    },
    address: {
        line1: String,
        line2: String,
        city: String,
        zip_code: Number,
        country: String
    },
    profile_photo: String,
    languages: String,
    createdAt: { type: Date, default: Date.now }
})

UserSchema.plugin(require('passport-local-mongoose'), { usernameField: 'email' })

module.exports = model('user', UserSchema)