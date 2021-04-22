const { model, Schema } = require('mongoose')

const TeamSchema = new Schema({
    isPrivate: Boolean,
    title: String,
    profileImg: String,
    previousImages: [String],
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'projects'
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('team', TeamSchema)