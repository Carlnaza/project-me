const { model, Schema } = require('mongoose')

const ProjectSchema = new Schema({
    isPrivate: Boolean,
    title: String,
    description: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    projectOwner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    assignedTo: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    viewers: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('project', ProjectSchema)