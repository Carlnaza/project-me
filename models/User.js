const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    isAdmin: Boolean,
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        trim: true
    },
    gender: String,
    username: {
        type: String,
        index: {
            unique: true,
            sparse: true
        }
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
        zipCode: Number,
        country: String
    },
    profilePhoto: String,
    languages: String,
    assignedItems: [{
        type: Schema.Types.ObjectId
    }],
    activityHistory: [{
        details: String,
        project: {
            type: Schema.Types.ObjectId,
            ref: 'project'
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        },
        createdAt: { type: Date, default: Date.now }
    }],
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'team'
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'project'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'project'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    lastUpdated: Date,
    createdAt: { type: Date, default: Date.now }
})

UserSchema.plugin(require('passport-local-mongoose'), { usernameField: 'email' })

module.exports = model('user', UserSchema)